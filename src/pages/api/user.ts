import { ServerSideApi } from "@src/services/Api"
import { Handler, withIronSession, Session } from "next-iron-session"
import { NextApiRequest, NextApiResponse } from "next"
import { sessionOptions } from "./_iron-session/helpers"

const handler: Handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const jwt = await req.session.get("jwt")

  if (jwt) {
    const headers = {
      Authorization: `Bearer ${jwt}`,
    }
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
  } else {
    res.json({
      isLoggedIn: false,
    })
  }
}

export default withIronSession(handler, sessionOptions)
