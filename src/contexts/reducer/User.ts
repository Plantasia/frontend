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
      return { isLoading: true, error: null, user: null }
    case "success":
      return { isLoading: false, user: null }
    case "failure":
      return { isLoading: false, error: "action failure" }
    case "logout":
      return { isLoading: false, user: null }
    default:
      throw new Error()
  }
}
