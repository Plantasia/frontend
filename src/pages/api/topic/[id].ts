/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { sessionOptions } from "../../../lib/iron-session/helpers"
import { NextApiRequest, NextApiResponse } from "next"
import { GetTopic } from "@src/services/Topics"
import { ServerSideApi } from "@src/services/Api"
import { ApiHandler } from "@src/lib/helpers"

const handler: Handler = ApiHandler()
  .get(async (req, res) => {
    const {
      query: { id },
    } = req

    try {
      return res.json(await GetTopic(id as string))
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "deu ruim", type: "danger" })
    }
  })
  .delete(async (req, res) => {
    const { id } = req.query

    try {
      const { data, status } = await ServerSideApi.delete(
        `/forum/topics/${id}`,
        {
          headers: { Authorization: `Bearer ${req.session.get("jwt")}` },
        }
      )
      console.log(data)
      return res
        .status(status)
        .json({ message: "Tópico excluído excluído", type: "success" })
    } catch ({ response }) {
      const {
        data: { message },
      } = response
      return res.json({ message, type: "danger" })
    }
  })

export default withIronSession(handler, sessionOptions)
