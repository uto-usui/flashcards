import type { FC } from 'react'
import React from 'react'

interface PageTitleProps {
  category: string
  subCategory?: string
}

const PageTitle: FC<PageTitleProps> = (props: PageTitleProps) => {
  return <h1 className="text-2xl font-bold">{props.category}</h1>
}

export default PageTitle
