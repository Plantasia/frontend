/* eslint-disable camelcase */
import { withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../../../lib/iron-session/helpers"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopics } from "@src/services/Topics"
import NextConnect from "next-connect"
import multer from "multer"
import FormData from "form-data"
import { ApiHandler } from "@src/lib/helpers"

const upload = multer({
  storage: multer.memoryStorage(),
  preservePath: false,
  dest: "/tmp",
})

const nc = ApiHandler()
  .get(async (req, res) => {
    const { query } = req
    const { page, category } = query

    try {
      res.json(await GetTopics(page as string, category as string))
    } catch ({ response }) {
      const {
        data: { error: message },
        status,
      } = response

      res.status(status).json({ message, type: "danger" })
    }
  })
  .post(upload.single("file"), async (req, res) => {
    const jwt = req.session.get("jwt")
    const { file, body } = req
    try {
      const formData = new FormData()

      formData.append("name", body.name)
      formData.append("textBody", body.textBody)
      formData.append("category_id", body.category_id)
      file &&
        formData.append("file", file.buffer, {
          filename: file.originalname,
          contentType: file.mimetype,
          knownLength: file.size,
        })

      const { data, status } = await ServerSideApi.post(
        "/forum/topics",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            ...formData.getHeaders(),
          },
        }
      )

      return res.status(status).json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: error })
    }
  })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default withIronSession(nc, sessionOptions)
