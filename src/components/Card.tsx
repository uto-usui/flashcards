'use client'
import { useState } from 'react'

type CardProps = {
  front: string
  back: string
  onFlip?: () => void
}

// components/Card.tsx
const Card: React.FC<CardProps> = ({ front, back, onFlip }) => {
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
