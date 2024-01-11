'use client'
import type { FC } from 'react'
import { useState } from 'react'
import { CardContent } from '@/components/CardContent'

export type CardProps = {
  front: string
  back: string
  description?: string
  onFlip?: () => void
}

export interface Card {
  id: string
  front: string
  back: string
  category: string
  subCategory?: string
  description?: string
}

const Card: FC<CardProps> = ({ front, back, description, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    onFlip?.()
  }

  return (
    <button
      className="relative flex w-full border-4 border-solid border-black p-4 shadow-lg"
      onClick={handleFlip}
    >
      <CardContent isShow={isFlipped} text={front} />
      <CardContent isShow={!isFlipped} text={back} description={description} />
    </button>
  )
}

export default Card
