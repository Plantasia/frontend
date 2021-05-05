import { GetServerSideProps } from "next"
import { Header, AppLayout } from "@components"
import { InlineGap } from "@styled/Shared"
import { ListCategoryItem } from "./_categoryItem"
import { ComponentProps } from "@utils/types"
import { Button, Row, Col, Pagination } from "react-bootstrap"
import { GetCategories } from "@src/services/Categories"
import { useRouter } from "next/router"
import { useState } from "react"
export interface ListCategoriesProps {
  categories: ComponentProps.CategoryProps[]
  pages?: number | string
  currentPage?: number | string
  nextPage?: number | null
  prevPage?: number | null
}

export default function ListCategories({
  categories,
  pages,
}: ListCategoriesProps) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(
    parseInt(router.query.page as string) || 1
  )

  const paginationItems = new Array(pages).fill(1).map((x, index) => index + 1)

  return (
    <AppLayout>
      <Row>
        <Col xs="12" className="mb-4">
          <h2>Categorias</h2>
        </Col>
      </Row>
      {categories &&
        categories.map((category, key) => (
          <ListCategoryItem {...category} key={key} />
        ))}
      <Pagination className="d-flex justify-content-center">
        {paginationItems.map(page => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => {
              setCurrentPage(page)
              router.push(`/category?page=${page}`)
            }}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps<ListCategoriesProps> = async context => {
  const {
    query: { page },
  } = context
  return {
    props: await GetCategories(page),
  }
}
