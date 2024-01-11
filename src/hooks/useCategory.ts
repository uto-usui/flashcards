import filterCards from '@/utils/filterCards'
import cards from '@/cards.json'

type useCategoryProps = {
  category: string | string[]
  subCategory?: string | string[]
}

/**
 * A function that filters cards based on category and subcategory.
 * @param {object} useCategoryProps - The category and subcategory to filter the cards by.
 * @param {string} useCategoryProps.category - The category to filter the cards by. Optional.
 * @param {string} useCategoryProps.subCategory - The subcategory to filter the cards by. Optional.
 * @returns {object} An object containing the filtered cards.
 */
const useCategory = ({ category, subCategory }: useCategoryProps) => {
  const filteredCards = filterCards(cards, category ?? '', subCategory)

  return {
    filteredCards
  }
}

export default useCategory
