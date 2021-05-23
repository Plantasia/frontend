/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "./_iron-session/helpers"
import { BackendDTO } from "@src/services/protocols"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic, GetTopics } from "@src/services/Topics"

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const { query, body } = req
  const { page } = query
  const { textBody, topic_id } = body
  try {
    const { data, status } = await ServerSideApi.post(
      "/forum/comments",
      {
        textBody,
        topic_id,
      },
      {
        headers: { Authorization: `Bearer ${req.session.get("jwt")}` },
      }
    )
    res.json({ message: "comentário criado", type: "success" })
  } catch ({ response }) {
    const {
      data: { message },
      status,
    } = response

    res.json({ message, type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
