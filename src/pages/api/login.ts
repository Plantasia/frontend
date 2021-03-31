/* eslint-disable camelcase */
import { Handler, withIronSession } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "./_iron-session/helpers"

const handler: Handler = async (req, res) => {
  const { email, password } = await req.body

  // we check that the user exists on GitHub and store some data in session
  const {
    data: { access_token },
  } = await ServerSideApi.post<{ access_token: string }>("/signin", {
    email,
    password,
  })

  const user = { isLoggedIn: true, access_token }
  req.session.set("user", user)
  await req.session.save()
  res.json(user)
}

export default withIronSession(handler, sessionOptions)
