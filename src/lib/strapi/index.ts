import axios from "axios"

export const StrapiAPI = axios.create({
  baseURL: "http://172.23.0.3:1337",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAzMDA2NjY0LCJleHAiOjE2MDU1OTg2NjR9.4gAErL-cHXJaOJo_4mjvEisx2fEU5QLGFnVNlON8j_8 ",
  },
})

// const getToken = () => {
//   return new Promise(resolve => {
//     const response = await StrapiAPI.post("/auth/local", {
//       identifier: "frontend@frontend.com.br",
//       password: "frontend123",
//     })

//     resolve(response.data.jwt)
//   })
// }

export const getArticles = () => {}
