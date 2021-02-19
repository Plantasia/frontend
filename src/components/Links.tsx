export type UserLinkProps = {
  id: string
  name: string
}
export function UserLink({ id, name }: UserLinkProps) {
  return <a href={`/users/${id}`}>{name}</a>
}

export type TopicLinkProps = {
  id: string
  title: string
}

export function TopicLink({ id, title }: TopicLinkProps) {
  return <a href={`/topics/${id}`}>{title}</a>
}
