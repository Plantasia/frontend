/* eslint-disable camelcase */
import { withIronSession } from "next-iron-session"
import { env } from "process"
import { ServerSideApi } from "@src/services/Api"

export default withIronSession(
  async (req, res) => {
    await ServerSideApi.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Baerer ${req.session.get("user").access_token}`,
        },
      }
    )
    req.session.destroy()

    res.json({ isLoggedIn: false })
  },
  { cookieName: "@PLT", password: env.SECRET_COOKIE_PASSWORD }
)
