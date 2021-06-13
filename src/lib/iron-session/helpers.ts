import { SessionOptions } from "next-iron-session"
import { env } from "process"

export const sessionOptions: SessionOptions = {
  cookieName: "@PLT",
  password: env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    // the next line allows to use the session in non-https environments like
    // Next.js dev mode (http://localhost:3000)
    secure: process.env.NODE_ENV === "production",
  },
}
