/* eslint-disable camelcase */
/* eslint-disable no-undef */

import { UserProps } from "@utils/types"
import React, {
  createContext,
  Dispatch,
  useEffect,
  useReducer,
  useState,
} from "react"
import { ClientSideApi } from "@src/services/Api"

// WITH REDUCER
// export type UserContextTypeWithReducer = {
//   state: UserState
//   dispatch: Dispatch<UserAction>
// }
// const initialState: UserState = {
//   isLoading: false,
//   user: null,
//   error: null,
// }

//

export type UserContextType = {
  userToken: string
  signIn(email: string, password: string): Promise<void>
  signOut(): void
}

export const UserContext = createContext<UserContextType>(null)

export const UserContextProvider: React.FC = ({ children }) => {
  const [userToken, setUserToken] = useState<string>(null)

  useEffect(() => {
    if (localStorage.getItem("@PLTuser")) {
      const token = localStorage.getItem("@PLTuser")
      setUserToken(token)
    }
  }, [])

  const signIn = async (email, password) => {
    const response = await ClientSideApi.post<{ access_token: string }>(
      "/signin",
      { data: { email, password } }
    )
    console.log(response)
    if (response.data) {
      const { access_token } = response.data
      setUserToken(access_token)
      localStorage.setItem("@PLTuser", access_token)
    }
  }
  const signOut = () => {
    setUserToken(null)
  }

  return (
    <UserContext.Provider
      value={{
        userToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const UserConsumer = UserContext.Consumer
