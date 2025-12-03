import Link from 'next/link'
import articlesData from '../../data/articles.json'
import Layout from '../../components/Layout'
import ArticleCard from '../../components/ArticleCard'

export default function ArticlesPage({ articles }) {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">All Articles</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: articlesData
    }
  }
}
