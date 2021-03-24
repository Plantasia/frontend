// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions

import { AxiosRequestConfig, AxiosResponse } from "axios"
import { withIronSession } from "next-iron-session"
export type Handler = (req: AxiosRequestConfig, res: AxiosResponse) => any

export default function withSession(handler: Handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "next.js/examples/with-iron-session",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  })
}
