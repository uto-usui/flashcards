import React from 'react'
import useCategory from '@/hooks/useCategory'
import CardList from '@/components/CardList'
import PageTitle from '@/components/PageTitle'

export default function CategoryPage({
  params
}: {
  params: { category: string; subCategory: string }
}) {
  const { category, subCategory } = params
  const { filteredCards } = useCategory({ category, subCategory })

  return (
    <div className="flex flex-col gap-8">
      <PageTitle category={category} />
      <CardList cards={filteredCards} />
    </div>
  )
}
