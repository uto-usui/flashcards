'use client'
import type { FC } from 'react'
import { useState } from 'react'
import { CardContent } from '@/components/CardContent'

export type CardProps = {
  front: string
  back: string
  onFlip?: () => void
}

export interface Card {
  id: number
  front: string
  back: string
  category: string
  subCategory?: string
}

const Card: FC<CardProps> = ({ front, back, onFlip }) => {
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
      <CardContent isShow={!isFlipped} text={back} />
    </button>
  )
}

export default Card
