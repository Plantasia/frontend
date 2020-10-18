import axios from "axios"

export const StrapiAPI = axios.create({
  baseURL: "http://172.20.0.3:1337",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAzMDAwMzkzLCJleHAiOjE2MDU1OTIzOTN9.Ap5HcQedArtaUBXJIRMjRFu_94KjJIi-x2FlQtile9g",
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
