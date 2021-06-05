/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../_iron-session/helpers"
import { BackendDTO } from "@src/utils/types/protocols"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic, GetTopics } from "@src/services/Topics"
import FileServer from "fs"

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const { query } = req
  if (req.method === "GET") {
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
  }

  if (req.method === "POST") {
    const jwt = req.session.get("jwt")
    const { headers } = req
    console.log(req.body)
    try {
      const { data, status } = await ServerSideApi.post(
        "/forum/topics",
        req.body,
        { headers: { ...headers, Authorization: `Bearer ${jwt}` } }
      )
      return res.status(status).json(data)
    } catch ({ response }) {
      return res.status(response.status).json(response)
    }
  }
  return res.status(400)
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
}

export default withIronSession(handler, sessionOptions)
