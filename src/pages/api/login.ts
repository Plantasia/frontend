/* eslint-disable camelcase */
import { Handler, withIronSession } from "next-iron-session"
import { ServerSideApi } from "@src/services/Api"
import { sessionOptions } from "../../lib/iron-session/helpers"
import { BackendDTO } from "@src/utils/types/protocols"

const handler: Handler = async (req, res) => {
  const { email, password } = req.body

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
    res
      .status(200)
      .json({ message: "Login efetuado com sucesso", type: "success" })
  } catch ({ response }) {
    const {
      data: { error },
    } = response
    console.log(error)
    res.status(401).json({ message: error, type: "danger" })
  }
}

export default withIronSession(handler, sessionOptions)
