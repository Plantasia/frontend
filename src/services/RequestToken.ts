/* eslint-disable camelcase */
import { CategoryProps } from "@src/pages/category/_categoryItem"
import { RequestTokenDTO } from "./protocols"
import { Api } from "./Api"

export const GetCategories = async (): Promise<RequestTokenDTO[]> => {
  const { data } = await Api.get<{
    data: RequestTokenDTO[]
    
  }>("/send-recover-email")
  // @TO-DO tratar exceções
  console.log(data)
  return data.data.map(
    // API keys
    ({
      email
    }) =>
      // Component props
      ({
        email
      })
  )
}
