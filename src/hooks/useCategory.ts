import filterCards from '@/utils/filterCards'
import cards from '@/cards.json'

type useCategoryProps = {
  category: string | string[]
  subCategory?: string | string[]
}

const useCategory = ({ category, subCategory }: useCategoryProps) => {
  const filteredCards = filterCards(cards, category ?? '', subCategory)

  return {
    filteredCards
  }
}

export default useCategory
