export interface UserProps {
  id: string
  name: string
  memberSince: string
  bio?: string
  avatar: string
}

export interface CommentProps {
  user: UserProps
  content: string
  likes: number
}
export interface CategoryProps {
  id: string
  name: string
  color: "primary" | "secondary" | "danger"
}

export interface TopicProps {
  title: string
  categories: CategoryProps[]
  comments: CommentProps[]
}

export type ListItemProps = {
  id: string
  topicTitle: string | ""
  topicDescription: string
  ranking: number
  replies: number
  lastReply: {
    user: UserProps
    when: string
  }
  createAt: string
  author: UserProps
}
