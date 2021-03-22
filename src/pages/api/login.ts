/* eslint-disable camelcase */
import { withIronSession } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { env } from "process"

export default withIronSession(
  async (req, res) => {
    const { email, password } = await req.body

    // we check that the user exists on GitHub and store some data in session
    const {
      data: { access_token },
    } = await ServerSideApi.post<{ access_token: string }>("/signin", {
      email,
      password,
    })
    console.log(access_token)
    const user = { isLoggedIn: true, access_token }
    req.session.set("user", user)
    await req.session.save()
    res.json(user)
  },
  { cookieName: "@PLT", password: env.SECRET_COOKIE_PASSWORD }
)
