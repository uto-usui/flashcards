import type { FC } from 'react'
import React from 'react'

interface PageTitleProps {
  category: string
  subCategory?: string
}

const PageTitle: FC<PageTitleProps> = (props: PageTitleProps) => {
  const { subCategory, category } = props

  return (
    <h1 className="text-3xl font-bold uppercase sm:text-5xl">
      {category} {subCategory !== undefined && `/ ${subCategory}`}
    </h1>
  )
}

export default PageTitle
