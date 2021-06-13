import { ServerSideApi } from "@src/services/Api"
import { withIronSession, Session } from "next-iron-session"
import { NextApiRequest, NextApiResponse } from "next"
import { sessionOptions } from "../../lib/iron-session/helpers"
import NextConnect from "next-connect"
import multer from "multer"
import FormData from "form-data"
import bodyParser from "body-parser"

const upload = multer({
  storage: multer.memoryStorage(),
  preservePath: false,
  dest: "/tmp",
})

const nc = NextConnect<
  NextApiRequest & {
    session: Session
    file: any
  },
  NextApiResponse
>()
  .get(async (req, res) => {
    const jwt = await req.session.get("jwt")
    const headers = jwt && { Authorization: `Bearer ${jwt}` }

    if (!headers) return res.json({ isLoggedIn: false })
    try {
      const { data: user } = await ServerSideApi.get(`/users/findme`, {
        headers,
      })
      res.json({
        isLoggedIn: true,
        ...user,
      })
    } catch (error) {
      req.session.destroy()
      req.session.save()
      res.json({ error: "Sua sessão caiu, por favor logue novamente" })
    }
  })
  .post(upload.single("file"), async (req, res) => {
    const jwt = await req.session.get("jwt")

    const { body, file } = req

    if (!jwt)
      return res.status(401).json({ message: "Não autorizado", type: "danger" })
    const formData = new FormData()

    formData.append("name", body.name)
    formData.append("bio", body.bio)
    if (file) {
      formData.append("file", file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
        knownLength: file.size,
      })
    }

    try {
      const { data, status } = await ServerSideApi.post(
        "/users/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            ...formData.getHeaders(),
          },
        }
      )
      res.status(status).json(data)
    } catch ({ response }) {
      res.json({ message: response.data.message.join(", "), type: "danger" })
    }
  })
  .patch(bodyParser.json(), async (req, res) => {
    const jwt = req.session.get("jwt")
    const headers = jwt && { Authorization: `Bearer ${jwt}` }
    const { newPassword, oldPassword } = req.body
    try {
      const {
        data: { message },
        status,
      } = await ServerSideApi.patch(
        "/users/changePassword",
        {
          newPassword,
          oldPassword,
        },
        { headers }
      )
      res.status(status).json({ message, type: "success" })
    } catch ({ response }) {
      res
        .status(response.data.statusCode)
        .json({ message: response.data.message })
    }
  })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default withIronSession(nc, sessionOptions)
