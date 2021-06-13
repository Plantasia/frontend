/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../../../lib/iron-session/helpers"
import { BackendDTO } from "@src/utils/types/protocols"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic } from "@src/services/Topics"

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const { headers, cookies, query, url } = req
  const id = url.split("/").reverse()[0]

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
