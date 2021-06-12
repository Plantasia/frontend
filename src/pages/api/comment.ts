/* eslint-disable camelcase */
import { Handler, withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "./_iron-session/helpers"
import { NextApiRequest, NextApiResponse } from "next"
import NextConnect from "next-connect"

const nc = NextConnect<
  NextApiRequest & {
    session: Session
    file: any
  },
  NextApiResponse
>()
  .post(async (req, res) => {
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
  })
  .patch(async (req, res) => {})

export default withIronSession(nc, sessionOptions)
