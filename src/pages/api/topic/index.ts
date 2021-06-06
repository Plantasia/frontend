/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../_iron-session/helpers"
import { BackendDTO } from "@src/utils/types/protocols"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic, GetTopics } from "@src/services/Topics"
import Formidable from "formidable"
import ExpressFormidable from "express-formidable"
import NextConnect from "next-connect"
import multer, { Field } from "multer"
import FormData from "form-data"
import BodyParser from "body-parser"

const upload = multer({
  storage: multer.memoryStorage(),
  preservePath: false,
  dest: "/tmp",
})
const urlencoderParser = BodyParser.urlencoded({ extended: false })
const nc = NextConnect<
  NextApiRequest & {
    session: Session
    file: File
  },
  NextApiResponse
>()
  .use(upload.single("file"))
  // .use(ExpressFormidable())
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
  .post(async (req, res) => {
    const jwt = req.session.get("jwt")
    const { headers, body, file } = req
    try {
      const formData = new FormData()

      formData.append("name", body.name)
      formData.append("textBody", body.textBody)
      formData.append("category_id", body.category_id)
      formData.append("file", file, file.originalname)
      console.log(formData)
      const { data, status } = await ServerSideApi.post(
        "/forum/topics",
        formData,
        {
          headers: {
            "Content-Type": headers["content-type"],
            accept: headers.accept,
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      return res.json(data)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: error })
    }
  })

export const config = {
  api: {
    bodyParser: false,
    // bodyParser: {
    //   sizeLimit: "5mb",
    // },
  },
}

export default withIronSession(nc, sessionOptions)
