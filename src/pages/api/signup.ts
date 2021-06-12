/* eslint-disable camelcase */
import { Handler, withIronSession } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "./_iron-session/helpers"
import { BackendDTO } from "@src/utils/types/protocols"
import { NextApiRequest, NextApiResponse } from "next"

const handler: Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password } = await req.body

  const params: BackendDTO.UserSignUp.Params = {
    name,
    email,
    password,
  }
  try {
    const {
      data: { name },
      status,
    } = await ServerSideApi.post<BackendDTO.UserSignUp.Response>(
      "/users",
      params
    )

    res.status(status).json({
      message: `Bem vindo ${name}, usuário criado com sucesso`,
      type: "success",
    })
  } catch ({ response }) {
    const {
      data: { error: message },
      status,
    } = response

    res.status(status).json({ message, type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
