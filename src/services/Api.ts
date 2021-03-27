import axios from "axios"

const ClientSideApi = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3333",
  },
})

const ServerSideApi = axios.create({
  baseURL: "http://backend:3333",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://backend:3333",
  },
})

const SelfApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
})

export { ClientSideApi, ServerSideApi, SelfApi }
