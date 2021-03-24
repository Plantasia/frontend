/* eslint-disable camelcase */
import { Handler, withIronSession } from "next-iron-session"
import { sessionOptions } from "./_iron-session/helpers"

const handler: Handler = (req, res) => {
  req.session.destroy()
  res.json({ isLoggedIn: false })
}
export default withIronSession(handler, sessionOptions)
