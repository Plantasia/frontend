/* eslint-disable camelcase */
import { withIronSession, Session } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../../lib/iron-session/helpers"
import { NextApiRequest, NextApiResponse } from "next"
import NextConnect from "next-connect"
import { ApiHandler } from "@src/lib/helpers"

const nc = ApiHandler.post(async (req, res) => {
  const { textBody, topic_id } = req.body
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
  .patch(async (req, res) => {
    const { textBody, id } = req.body
    try {
      const { status } = await ServerSideApi.patch(
        `/forum/comments/${id}`,
        {
          textBody,
        },
        {
          headers: { Authorization: `Bearer ${req.session.get("jwt")}` },
        }
      )
      res
        .status(status)
        .json({ message: "Comentário editado", type: "success" })
    } catch ({ response }) {
      const {
        data: { message },
      } = response
      res.json({ message, type: "danger" })
    }
  })
  .delete(async (req, res) => {
    const { id } = req.query

    try {
      const { status } = await ServerSideApi.delete(`/forum/comments/${id}`, {
        headers: { Authorization: `Bearer ${req.session.get("jwt")}` },
      })
      res
        .status(status)
        .json({ message: "Comentário excluído", type: "success" })
    } catch ({ response }) {
      const {
        data: { message },
      } = response
      res.json({ message, type: "danger" })
    }
  })

export default withIronSession(nc, sessionOptions)
