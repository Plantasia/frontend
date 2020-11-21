import React, { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { DesktopGrid } from "@/components/Grid"
import { GridTypes } from "@/components/types/GridTypes"

export default function HomePage() {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <DesktopGrid gridType={GridTypes.AuthArea}>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />

      <Footer />
    </DesktopGrid>
  )
}
