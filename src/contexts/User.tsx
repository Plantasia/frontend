import { createContext, useState } from "react"
import { UserProps } from "@utils/types"

export type UserContextType = {
  user: UserProps
  storeUser(user: UserProps): void
  logout(): void
}
export const UserContext = createContext<UserContextType>(null)

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState<UserProps>({})
  const storeUser = (params: UserProps) => {
    setUser(params)
    console.log(user)
  }
  const logout = () => {
    setUser({})
  }

  return (
    <UserContext.Provider value={{ user, storeUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}
