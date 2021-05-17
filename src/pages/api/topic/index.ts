/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../_iron-session/helpers"
import { BackendDTO } from "@src/services/protocols"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic, GetTopics } from "@src/services/Topics"

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const { headers, cookies, query } = req
  const { page } = query
  // console.log(id)
  // console.log(headers)
  // console.log(cookies)

  try {
    res.json(await GetTopics(page as string))
  } catch ({ response }) {
    const {
      data: { error: message },
      status,
    } = response

    res.status(status).json({ message, type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
