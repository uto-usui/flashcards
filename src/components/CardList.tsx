// components/CardList.tsx
import Card from './Card'
import type { FC } from 'react'

type CardData = {
  id: number
  front: string
  back: string
}

type CardListProps = {
  cards: CardData[]
}

const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-8">
      {cards.map((card) => (
        <Card key={card.id} front={card.front} back={card.back} />
      ))}
    </div>
  )
}

export default CardList
