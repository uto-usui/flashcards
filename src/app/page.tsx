import Link from 'next/link'
import cards from '@/cards.json'

export default function HomePage() {
  const categoryMap: Map<string, Set<string>> = new Map()

  cards.forEach((card) => {
    if (!categoryMap.has(card.category)) {
      categoryMap.set(card.category, new Set())
    }
    if (card.subCategory) {
      categoryMap.get(card.category)?.add(card.subCategory)
    }
  })

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        {Array.from(categoryMap.keys()).map((category) => (
          <div key={category}>
            <Link href={`/category/${encodeURIComponent(category)}`}>
              <span className="font-bold">{category}</span>
            </Link>
            <div className="ml-4">
              {/* @ts-expect-error todo */}
              {Array.from(categoryMap.get(category)).map((subCategory) => (
                <Link
                  key={subCategory}
                  href={`/category/${encodeURIComponent(category)}/${encodeURIComponent(
                    subCategory
                  )}`}
                >
                  <span className="mr-4">{subCategory}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}
