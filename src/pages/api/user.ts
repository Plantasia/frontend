import { withIronSession } from "next-iron-session"
import { env } from "process"
export default withIronSession(
  async (req, res) => {
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
  },
  { cookieName: "@PLT", password: env.SECRET_COOKIE_PASSWORD }
)
