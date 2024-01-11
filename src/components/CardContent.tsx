import type { FC } from 'react'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'
export interface CardContentParams {
  isShow: boolean
  text: string
  description?: string
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
  const { isShow, text, description } = props

  return (
    <div className={`relative z-10 w-full ${isShow ? 'hidden' : ''}`}>
      {renderMath(text)}

      {description !== undefined && (
        <details className={'relative z-20'}>
          <summary
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            くわしく
          </summary>
          {renderMath(description)}
        </details>
      )}
    </div>
  )
}
