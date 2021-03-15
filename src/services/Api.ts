import axios from "axios"

const Api = axios.create({
  baseURL: "http://backend:3333",
  headers: {
    "Content-Type": "application/json",
  },
})

export { Api }
