/* eslint-disable camelcase */
import { BackendDTO } from "../utils/types/protocols"
import { ServerSideApi } from "./Api"
import { ListTopicsProps } from "@src/pages/topics"
import { ComponentProps } from "@src/utils/types"
import TimeAgo from "javascript-time-ago"
import { TopicProps } from "@src/pages/topics/[id]"
import pt from "javascript-time-ago/locale/pt"

export const GetTopics = async (
  page: number | string,
  category: string | null
): Promise<ListTopicsProps> => {
  TimeAgo.addLocale(pt)
  const timeAgo = new TimeAgo("pt")

  const { data } = await ServerSideApi.get<BackendDTO.TopicsDTO>(
    "/forum/topics",
    { params: { page, category } }
  )

  const topics: ComponentProps.TopicItemProps[] = data.topics.map(
    ({
      id,
      created_at,
      imageStorage,
      name,
      textBody,
      updated_at,
      comments,
      user,
    }) => {
      const hasComments = comments.length > 0
      const lastComment: ComponentProps.CommentsProps = hasComments
        ? {
            id: comments[0].id,
            user: {
              id: comments[0].user.id,
              avatar: comments[0].user.avatarUrl,
              name: comments[0].user.name,
            },
            updated_at: timeAgo.format(new Date(comments[0].created_at)),
          }
        : null

      console.log(lastComment)
      var textBodyRegex = /(<([^>]+)>)|(&nbsp;)/gi

      return {
        id,
        imageStorage,
        name,
        textBody: textBody.replace(textBodyRegex, ""),
        topicOwner: {
          id: user.id,
          avatar: user.avatarUrl,
          name: user.name,
        },
        updated_at,
        lastComment,
        ranking: "calculando",
        countComments: comments.length,
        created_at: new Date(created_at).toLocaleDateString("pt-br"),
      }
    }
  )

  const { totalRegisters, perPage, nextPage, prevPage } = data

  const pages =
    totalRegisters / perPage < 1 ? 1 : Math.ceil(totalRegisters / perPage)
  return { topics, pages, prevPage, nextPage }
}

export const GetTopic = async (id: string): Promise<TopicProps> => {
  TimeAgo.addLocale(pt)
  const timeAgo = new TimeAgo("pt")

  const { data } = await ServerSideApi.get<BackendDTO.TopicDTO>(
    `/forum/topics/${id}`
  )

  const {
    comments: commentsData,
    name,
    textBody,
    user,
    category,
    imageStorage,
    imageStorageUrl,
  } = data

  const hasComments = commentsData.length > 0
  const comments = hasComments
    ? commentsData.map(({ textBody, user, id, created_at }) => ({
        id,
        content: textBody,
        ownerUser: {
          id: user?.id,
          avatarUrl: user?.avatarUrl,
          name: user?.name,
          bio: user?.bio,
          createdAt: timeAgo.format(new Date(user.created_at)),
        },
        createdAt: new Date(created_at).toLocaleString("pt"),
        owner: { id: user.id },
      }))
    : null

  return {
    id,
    title: name,
    author: {
      id: user.id,
      avatar: user.avatarUrl,
      name: user.name,
      bio: user.bio,
    },
    categories: [
      category
        ? { name: category.name, color: "secondary", id: category.id }
        : { name: "outros", color: "secondary", id: "" },
    ],
    description: textBody,
    comments,
    image: imageStorageUrl,
  }
}
