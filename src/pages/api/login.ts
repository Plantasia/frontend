/* eslint-disable camelcase */
import { Handler, withIronSession } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../../lib/iron-session/helpers"
import { BackendDTO } from "@src/utils/types/protocols"

const handler: Handler = async (req, res) => {
  const { email, password } = await req.body

  const params: BackendDTO.UserSignIn.Params = {
    email,
    password,
  }
  try {
    const { data } = await ServerSideApi.post<BackendDTO.UserSignIn.Response>(
      "/signin",
      params
    )
    req.session.set("jwt", data.access_token)
    await req.session.save()
    res.json({ message: "Login efetuado com sucesso", type: "success" })
  } catch ({ response }) {
    const {
      data: { error: message },
    } = response
    res.json({ message, type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
