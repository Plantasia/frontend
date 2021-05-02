/* eslint-disable camelcase */
import { BackendDTO } from "./protocols"
import { ServerSideApi } from "./Api"
import { ListTopicsProps } from "@src/pages/topics"
import { ComponentProps } from "@src/utils/types"
import TimeAgo from "javascript-time-ago"

const timeAgo = new TimeAgo("pt")

export const GetTopics = async (
  page: number | string
): Promise<ListTopicsProps> => {
  const { data } = await ServerSideApi.get<BackendDTO.TopicsDTO>(
    "/forum/topics",
    { params: { page } }
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
    }) => ({
      id,
      imageStorage,
      name,
      textBody,
      topicOwner: {
        id: user.id,
        avatar: user.avatar,
        name: user.name,
      },
      updated_at,
      lastComment: {
        user: {
          id: comments[0].user.id,
          avatar: comments[0].user.avatar,
          name: comments[0].user.name,
        },
        when: timeAgo.format(new Date(created_at)),
      },
      ranking: "calculando",
      countComments: comments.length,
      created_at: new Date(created_at).toLocaleDateString("pt-br"),
    })
  )

  const { totalRegisters, perPage, nextPage, prevPage } = data
  return { topics, pages: totalRegisters / perPage, prevPage, nextPage }
}
