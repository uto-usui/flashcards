import type { FC } from 'react'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'
export interface CardContentParams {
  isShow: boolean
  text: string
}

const renderMath = (text: string) => {
  const regex = /\$(.*?)\$/g
  const parts = text.split(regex)

  return parts.map((part, index) => {
    if (index % 2 === 0) return part
    return <InlineMath key={index} math={part} />
  })
}

export const CardContent: FC<CardContentParams> = (props) => {
  const { isShow, text } = props

  return <div className={`w-full ${isShow ? 'hidden' : ''}`}>{renderMath(text)}</div>
}
