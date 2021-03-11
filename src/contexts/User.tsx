import { UserProps } from "@utils/types"
import React, { createContext, Dispatch, useEffect, useReducer } from "react"
import { UserReducer, UserState, UserAction } from "./reducer/User"

export type UserContextType = {
  state: UserState
  dispatch: Dispatch<UserAction>
  store: UserProps
}

const initialState: UserState = {
  isLoading: false,
  user: null,
  error: null,
}

export const UserContext = createContext<UserContextType>({
  dispatch: () => null,
  state: initialState,
  store: null,
})

export const UserContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)
  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (localStorage.getItem("@PLTuser")) dispatch({ type: "success" })
  }, [])

  return (
    <UserContext.Provider value={{ state, dispatch, store: null }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserConsumer = UserContext.Consumer
