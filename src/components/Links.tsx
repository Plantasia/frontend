import Link from "next/link"
export type UserLinkProps = {
  id: string
  name: string
}
export function UserLink({ id, name }: UserLinkProps) {
  return <Link href={`/users/${id}`}>{name}</Link>
}

export type TopicLinkProps = {
  id: string
  title: string
}

export function TopicLink({ id, title }: TopicLinkProps) {
  return <Link href={`/topics/${id}`}>{title}</Link>
}
