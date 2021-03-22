/* eslint-disable camelcase */
export interface UserProps {
  id: string
  name?: string
  avatar?: string
  email?: string
  created_at?: string
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
  ranking?: number
  replies?: number
  created_at: string
  updated_at: string
  comments: any
  lastReply?: {
    user: UserProps
    when: string
  }
  user: UserProps
}

export type ListTopicProps = {
  data: TopicItemProps[]
  handleNewTopic(): void
}
