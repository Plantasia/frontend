import axios from "axios"
import { IArticle } from "./interfaces/index"

export default class StrapiAPI {
  public api = axios.create({
    baseURL: "http://backend:1337",
  })

  async getToken() {
    const response = await this.api.post("/auth/local", {
      identifier: "frontend@frontend.com.br",
      password: "frontend123",
    })

    console.log(response.data.jwt)
  }

  async getArticles(): Promise<IArticle[]> {
    const response = await this.api.get("articles")

    return response.data
  }

  async getArticleBySlug(slug: String): Promise<IArticle> {
    const response = await this.api.get("articles", {
      params: {
        slug,
      },
    })

    return response.data
  }
}
