'use client'
import type { FC } from 'react'
import { useState } from 'react'

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
      className="relative flex w-full border-4 border-solid border-black"
      onClick={handleFlip}
    >
      <div className={`w-full transition-transform ${isFlipped ? 'hidden' : ''}`}>
        <div className="bg-blue-500 p-4 text-center text-white shadow-lg">{front}</div>
      </div>
      <div className={`w-full transition-transform ${!isFlipped ? 'hidden' : ''}`}>
        <div className="bg-green-500 p-4 text-center text-white shadow-lg">{back}</div>
      </div>
    </button>
  )
}

export default Card
