import Card from './Card'
import type { FC } from 'react'

interface CardData {
  id: string
  front: string
  back: string
  description?: string
}

interface CardListProps {
  cards: CardData[]
}

const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-8">
      {cards.map((card) => (
        <Card key={card.id} front={card.front} back={card.back} description={card.description} />
      ))}
    </div>
  )
}

export default CardList
