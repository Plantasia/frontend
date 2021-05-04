/* eslint-disable camelcase */

export namespace ComponentProps {
  export interface CategoryProps {
    id: string
    name: string
    description: string
    topicsCount: string
    repliesCount: string
    lastActivity: string
    lastTopic: {
      author?: ComponentProps.UserProps
      id: string
      title: string
    }
    image: {
      src: string
    }
  }

  export interface UserProps {
    id: string
    name?: string
    avatar?: string
    email?: string
    createdAt?: string
    bio?: string
  }

  export type CommentsProps = {
    id: string
    updated_at: string
    user: UserProps
  }

  export type TopicItemProps = {
    id: string
    name: string | ""
    textBody: string
    imageStorage: string
    ranking?: number | string
    replies?: number
    created_at: string
    updated_at: string
    countComments: number
    lastComment?: {
      user: UserProps
      when?: string
    }
    topicOwner: UserProps
  }

  export type ListTopicProps = {
    data: TopicItemProps[]
    handleNewTopic(): void
  }
}
