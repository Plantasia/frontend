import React from "react"
import Head from "next/head"

interface SEOProps {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
}

export function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}: SEOProps) {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? "| plantasia" : ""}`
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : null

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={pageImage} />}

      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  )
}
