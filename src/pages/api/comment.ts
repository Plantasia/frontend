/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "./_iron-session/helpers"
import { NextApiRequest, NextApiResponse } from "next"

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const { body } = req
  const { textBody, topic_id } = body
  try {
    const { status } = await ServerSideApi.post(
      "/forum/comments",
      {
        textBody,
        topic_id,
      },
      {
        headers: { Authorization: `Bearer ${req.session.get("jwt")}` },
      }
    )
    res.status(status).json({ message: "comentário criado", type: "success" })
  } catch ({ response }) {
    const {
      data: { message },
    } = response

    res.json({ message, type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
