import React from 'react'
import useCategory from '@/hooks/useCategory'
import CardList from '@/components/CardList'

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params
  const { filteredCards } = useCategory({ category })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{category}</h1>
      <CardList cards={filteredCards} />
    </div>
  )
}
