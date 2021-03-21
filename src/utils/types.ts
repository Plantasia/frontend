/* eslint-disable camelcase */
export interface UserProps {
  id?: string
  name?: string
  avatar?: string
  bio?: string
  createdAt?: string
}

export type TopicItemProps = {
  id: string
  name: string | ""
  textBody: string
  ranking?: number
  replies?: number
  lastReply?: {
    user: UserProps
    when: string
  }
  created_at: string
  updated_at: string
  author?: UserProps
}

export type ListTopicProps = {
  data: TopicItemProps[]
  handleNewTopic(): void
}
