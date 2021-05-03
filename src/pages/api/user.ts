import { ServerSideApi } from "@src/services/Api"
import { Handler, withIronSession } from "next-iron-session"
import { sessionOptions } from "./_iron-session/helpers"

const handler: Handler = async (req, res) => {
  const jwt = await req.session.get("jwt")

  if (jwt) {
    const headers = {
      Authorization: `Bearer ${jwt}`,
    }
    const { data: user } = await ServerSideApi.get(`/users/findme`, { headers })
    res.json({
      isLoggedIn: true,
      ...user,
    })
  } else {
    res.json({
      isLoggedIn: false,
    })
  }
}

export default withIronSession(handler, sessionOptions)
