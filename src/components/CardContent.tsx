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
    <div className={`w-full ${isShow ? 'hidden' : ''}`}>
      <p>{renderMath(text)}</p>

      {description !== undefined && (
        <details className={'inline-block'}>
          <summary
            className={'text-sm'}
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
