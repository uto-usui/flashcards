import type { Card } from '@/components/Card'

/**
 * Filters an array of cards based on the category and sub-category.
 *
 * @param {Card[]} cards - The array of cards to filter.
 * @param {string | string[]} category - The category or categories to filter by.
 * @param {string | string[]} [subCategory] - The sub-category or sub-categories to filter by (optional).
 *
 * @returns {Card[]} - The filtered array of cards.
 */
const filterCards = (
  cards: Card[],
  category: string | string[],
  subCategory?: string | string[]
): Card[] => {
  return cards.filter((card) => {
    return (
      card.category === category &&
      (typeof subCategory === 'undefined' || card.subCategory === subCategory)
    )
  })
}

export default filterCards
