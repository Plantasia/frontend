import { UserProps } from "@utils/types"
import { Reducer } from "react"

export type UserState = {
  user?: UserProps
  isLoading: boolean
  error?: string
}
export type UserAction =
  | {
      type: "request"
      payload: any
    }
  | { type: "success" }
  | { type: "failure"; error: string }
  | { type: "logout" }

export const UserReducer: Reducer<UserState, UserAction> = (state, action) => {
  switch (action.type) {
    case "request":
      return { isLoading: true, ...state }
    case "success":
      // eslint-disable-next-line no-case-declarations
      const user: UserProps = {
        name: "Matheus",
        id: "1029302",
      }
      localStorage.setItem("@PLTuser", `${user.id}${user.name}`)
      return { isLoading: true, user }
    case "failure":
      return { isLoading: true, error: "action failure" }
    case "logout":
      localStorage.removeItem("@PLTuser")
      return { data: null, isLoading: false }
    default:
      throw new Error()
  }
}
