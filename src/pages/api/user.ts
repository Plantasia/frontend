import { ServerSideApi } from "@src/services/Api"
import { Handler, withIronSession, Session } from "next-iron-session"
import { NextApiRequest, NextApiResponse } from "next"
import { sessionOptions } from "./_iron-session/helpers"
import NextConnect from "next-connect"

const nc = NextConnect<
  NextApiRequest & {
    session: Session
    file: any
  },
  NextApiResponse
>()
  .get(async (req, res) => {
    const jwt = await req.session.get("jwt")
    const headers = jwt && { Authorization: `Bearer ${jwt}` }

    if (!headers) return res.json({ isLoggedIn: false })
    try {
      const { data: user } = await ServerSideApi.get(`/users/findme`, {
        headers,
      })
      res.json({
        isLoggedIn: true,
        ...user,
      })
    } catch (error) {
      req.session.destroy()
      req.session.save()
      res.json({ error: "Sua sessão caiu, por favor logue novamente" })
    }
  })
  .post(async (req, res) => {
    const jwt = await req.session.get("jwt")
    const headers = jwt && { Authorization: `Bearer ${jwt}` }

    if (req.method === "PATCH") {
      if (!headers)
        res.status(401).json({ message: "Não autorizado", type: "danger" })

      try {
        const { data } = await ServerSideApi.patch("/user", req.body)
        console.log(data)
      } catch ({ response }) {
        console.log(response)
      }
    }
  })

export default withIronSession(nc, sessionOptions)
