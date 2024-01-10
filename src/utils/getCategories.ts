import type { Card } from '@/components/Card'

const getCategories = (cards: Card[]): string[] => {
  const categories = new Set<string>()
  cards.forEach((card) => {
    categories.add(card.category)
  })
  return Array.from(categories)
}

export default getCategories
