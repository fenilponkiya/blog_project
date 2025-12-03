import Link from 'next/link'
export default function ArticleCard({ article }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <a className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-40 md:h-48 w-full relative">
          <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">{article.title}</h3>
          <p className="text-sm text-gray-500 mt-2">{new Date(article.date).toLocaleDateString()}</p>
        </div>
      </a>
    </Link>
  )
}
