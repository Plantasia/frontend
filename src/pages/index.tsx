import React, { useContext, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { DesktopGrid } from "@/components/Grid"
import { gridAreasHome, GridTypes } from "@/components/types/GridTypes"
import HomeSVG from "@/assets/svg/Home"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grommet,
  Heading,
  Image,
  Paragraph,
  Text,
  ResponsiveContext,
} from "grommet"
import { GetServerSideProps } from "next"
import Axios from "axios"
import { useRouter } from "next/router"

interface Category {
  image: string
  description: string
  title: string
}
interface IHomePage {
  categories: Category[]
}
function MainCategories(props: Category) {
  const size = useContext(ResponsiveContext)
  console.log(props)
  return (
    <Card
      style={{
        maxWidth: size === "medium" ? "300px" : "400px",
        minWidth: size === "medium" ? "250px" : "384px",
      }}
      align="center"
      justify="center"
      gap="medium"
      pad="small"
      wrap
      onClick={() => {
        alert(`redirect to category/${props.title}`)
      }}
      hoverIndicator
    >
      <CardHeader margin={{ top: "medium" }}>
        <Image
          src={props.image}
          style={{ borderRadius: "100px", width: "150px", height: "150px" }}
        />
      </CardHeader>
      <CardBody>
        <Heading size="small" textAlign="center">
          {props.title}
        </Heading>
        <Text textAlign="center">{props.description}</Text>
      </CardBody>
    </Card>
  )
}

export default function HomePage({ categories }: IHomePage) {
  const [inputSearch, setInputSearch] = useState("")
  const route = useRouter()
  return (
    <DesktopGrid gridType={GridTypes.HomeArea}>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Box
        gridArea={gridAreasHome.Main}
        gap="medium"
        margin={{ top: "medium" }}
      >
        <Heading size="medium">
          Plantasia, o fórum para compartilhar e aprender mais sobre as suas
          plantinhas.
        </Heading>
        <Text size="xlarge">
          Aqui você poderá tirar dúvidas, pesquisar sobre diversos temas e tudo
          isso de forma gratuíta.
        </Text>
        <Box align="start">
          <Box align="center">
            <Button
              label="Acesse nosso fórum"
              size="large"
              onClick={() => {
                route.push("/forum")
              }}
            ></Button>
          </Box>
        </Box>
      </Box>
      <Box gridArea={gridAreasHome.Banner}>
        <HomeSVG />
      </Box>

      <Box gridArea={gridAreasHome.Categories} justify="center">
        <Heading size="3">Saca só, alguma categorias dos temas</Heading>
        <Box
          direction="row"
          justify="between"
          margin={{ horizontal: "medium", vertical: "medium" }}
          wrap
        >
          {categories.map(({ description, image, title }) => {
            return (
              <MainCategories
                description={description}
                image={image}
                title={title}
              />
            )
          })}
        </Box>
      </Box>
      <Footer />
    </DesktopGrid>
  )
}
export const getServerSideProps: GetServerSideProps = async context => {
  const categories = await (
    await Axios.get("http://localhost:3030/categories?_limit=3")
  ).data

  return {
    props: {
      categories: categories.map(({ description, image_src, title }) => ({
        description,
        image: image_src,
        title,
      })),
    },
  }
}
