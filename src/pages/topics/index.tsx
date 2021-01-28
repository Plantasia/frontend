import { Button } from "react-bootstrap"
import { Header } from "@components"
import ListTopics from "./_ListTopics"
import { ListItemProps } from "./_ListTopicItem"

const data: ListItemProps[] = [
  {
    topicTitle: "Melhores solos para suculentas",
    topicDescription:
      "Quis ullamco sint sit velit voluptate do nostrud tempor exercitation qui esse. Sint sunt reprehenderit officia commodo anim nulla esse deserunt. Occaecat enim commodo dolor consequat tempor commodo enim culpa consequat laboris commodo sit.",
    ranking: 1,
    lastReply: {
      user: {
        id: "912-319283=00231",
        name: "Fulano da Silva",
      },
      when: "2 dias atrás",
    },
    replies: 30,
    author: {
      id: "912-319283=00231",
      name: "Fulano da Silva",
    },
    createAt: "5 dias atrás",
  },
  {
    topicTitle: "Melhores solos para suculentas",
    topicDescription:
      "Quis ullamco sint sit velit voluptate do nostrud tempor exercitation qui esse. Sint sunt reprehenderit officia commodo anim nulla esse deserunt. Occaecat enim commodo dolor consequat tempor commodo enim culpa consequat laboris commodo sit.",
    ranking: 1,
    lastReply: {
      user: {
        id: "912-319283=00231",
        name: "Fulano da Silva",
      },
      when: "2 dias atrás",
    },
    replies: 30,
    author: {
      id: "912-319283=00231",
      name: "Fulano da Silva",
    },
    createAt: "5 dias atrás",
  },
  {
    topicTitle: "Melhores solos para suculentas",
    topicDescription:
      "Quis ullamco sint sit velit voluptate do nostrud tempor exercitation qui esse. Sint sunt reprehenderit officia commodo anim nulla esse deserunt. Occaecat enim commodo dolor consequat tempor commodo enim culpa consequat laboris commodo sit.",
    ranking: 1,
    lastReply: {
      user: {
        id: "912-319283=00231",
        name: "Fulano da Silva",
      },
      when: "2 dias atrás",
    },
    replies: 30,
    author: {
      id: "912-319283=00231",
      name: "Fulano da Silva",
    },
    createAt: "5 dias atrás",
  },
  {
    topicTitle: "Melhores solos para suculentas",
    topicDescription:
      "Quis ullamco sint sit velit voluptate do nostrud tempor exercitation qui esse. Sint sunt reprehenderit officia commodo anim nulla esse deserunt. Occaecat enim commodo dolor consequat tempor commodo enim culpa consequat laboris commodo sit.",
    ranking: 1,
    lastReply: {
      user: {
        id: "912-319283=00231",
        name: "Fulano da Silva",
      },
      when: "2 dias atrás",
    },
    replies: 30,
    author: {
      id: "912-319283=00231",
      name: "Fulano da Silva",
    },
    createAt: "5 dias atrás",
  },
  {
    topicTitle: "Melhores solos para suculentas",
    topicDescription:
      "Quis ullamco sint sit velit voluptate do nostrud tempor exercitation qui esse. Sint sunt reprehenderit officia commodo anim nulla esse deserunt. Occaecat enim commodo dolor consequat tempor commodo enim culpa consequat laboris commodo sit.",
    ranking: 1,
    lastReply: {
      user: {
        id: "912-319283=00231",
        name: "Fulano da Silva",
      },
      when: "2 dias atrás",
    },
    replies: 30,
    author: {
      id: "912-319283=00231",
      name: "Fulano da Silva",
    },
    createAt: "5 dias atrás",
  },
  {
    topicTitle: "Melhores solos para suculentas",
    topicDescription:
      "Quis ullamco sint sit velit voluptate do nostrud tempor exercitation qui esse. Sint sunt reprehenderit officia commodo anim nulla esse deserunt. Occaecat enim commodo dolor consequat tempor commodo enim culpa consequat laboris commodo sit.",
    ranking: 1,
    lastReply: {
      user: {
        id: "912-319283=00231",
        name: "Fulano da Silva",
      },
      when: "2 dias atrás",
    },
    replies: 30,
    author: {
      id: "912-319283=00231",
      name: "Fulano da Silva",
    },
    createAt: "5 dias atrás",
  },
  {
    topicTitle: "Melhores solos para suculentas",
    topicDescription:
      "Quis ullamco sint sit velit voluptate do nostrud tempor exercitation qui esse. Sint sunt reprehenderit officia commodo anim nulla esse deserunt. Occaecat enim commodo dolor consequat tempor commodo enim culpa consequat laboris commodo sit.",
    ranking: 1,
    lastReply: {
      user: {
        id: "912-319283=00231",
        name: "Fulano da Silva",
      },
      when: "2 dias atrás",
    },
    replies: 30,
    author: {
      id: "912-319283=00231",
      name: "Fulano da Silva",
    },
    createAt: "5 dias atrás",
  },
]

export default function listTopics() {
  function handleNewTopic() {}
  return (
    <>
      <Header>
        {{
          right: <Button variant="outline-primary">Registre-se aqui </Button>,
        }}
      </Header>
      <ListTopics handleNewTopic={handleNewTopic} data={data} />
    </>
  )
}
