import { NextApiRequest, NextApiResponse } from "next"
import NextConnect from "next-connect"
import { Session } from "next-iron-session"

export const ApiHandler = () =>
  NextConnect<
    NextApiRequest & {
      session: Session
      file: any
    },
    NextApiResponse
  >()
