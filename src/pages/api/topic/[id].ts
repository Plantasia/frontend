/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../_iron-session/helpers"
import { BackendDTO } from "@src/services/protocols"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic } from "@src/services/Topics"

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const { headers, cookies, query } = req
  const { id } = query
  try {
    res.json(await GetTopic(id as string))
  } catch (error) {
    console.log(error)
    // const {
    //   data: { error: message },
    //   status,
    // } = response
    // console.log(response)
    res.status(500).json({ message: "deu ruim", type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
