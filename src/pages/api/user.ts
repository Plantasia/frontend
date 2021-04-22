import { ServerSideApi } from "@src/services/Api"
import { Handler, withIronSession } from "next-iron-session"
import { sessionOptions } from "./_iron-session/helpers"

const handler: Handler = async (req, res) => {
  const jwt = await req.session.get("jwt")

  if (jwt) {
    const { data: user } = await ServerSideApi.get(`/users/findme?token=${jwt}`)
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      isLoggedIn: true,
      user,
    })
  } else {
    res.json({
      isLoggedIn: false,
    })
  }
}

export default withIronSession(handler, sessionOptions)
