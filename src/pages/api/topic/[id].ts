/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { sessionOptions } from "../../../lib/iron-session/helpers"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic } from "@src/services/Topics"
import { ApiHandler } from "@src/lib/helpers"

const handler: Handler = ApiHandler.get(
  async (req: NextApiRequest & { session: Session }, res: NextApiResponse) => {
    const {
      query: { id },
    } = req

    try {
      res.json(await GetTopic(id as string))
    } catch (error) {
      res.status(500).json({ message: "deu ruim", type: "danger" })
    }
  }
)

export default withIronSession(handler, sessionOptions)
