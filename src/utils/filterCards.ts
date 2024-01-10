import type { Card } from '@/components/Card'

const filterCards = (
  cards: Card[],
  category: string | string[],
  subCategory?: string | string[]
): Card[] => {
  return cards.filter((card) => {
    return (
      card.category === category &&
      (!(subCategory === undefined) || card.subCategory === subCategory)
    )
  })
}

export default filterCards
