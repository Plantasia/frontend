/* eslint-disable camelcase */
import { Handler, withIronSession } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "./_iron-session/helpers"
import { BackendDTO } from "@src/services/protocols"

const handler: Handler = async (req, res) => {
  const { name, email, password } = await req.body

  const params: BackendDTO.UserSignUp.Params = {
    name,
    email,
    password,
  }
  try {
    const { data } = await ServerSideApi.post<BackendDTO.UserSignUp.Response>(
      "/users",
      params
    )

    res.json({ message: "Usuário criado com sucesso", type: "success" })
  } catch ({ response }) {
    const {
      data: { error: message },
    } = response
    res.json({ message, type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
