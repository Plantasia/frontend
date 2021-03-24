import { Handler, withIronSession } from "next-iron-session"
import { sessionOptions } from "./_iron-session/helpers"

const handler: Handler = (req, res) => {
  const user = req.session.get("user")

  if (user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
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
