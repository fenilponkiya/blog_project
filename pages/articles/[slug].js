import { useEffect, useState } from 'react'
import Link from 'next/link'
import articlesData from '../../data/articles.json'
import Layout from '../../components/Layout'
import CommentList from '../../components/CommentList'
import CommentForm from '../../components/CommentForm'
import { useRouter } from 'next/router'

export default function ArticlePage({ article, allArticles, currentIndex }) {
  const router = useRouter()
  const [comments, setComments] = useState([])
  const [loadingComments, setLoadingComments] = useState(true)
  const [commentsError, setCommentsError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoadingComments(true)
    setCommentsError(null)
    fetch(`/api/comments?slug=${article.slug}`)
      .then(r => {
        if (!r.ok) throw new Error('Failed to load comments')
        return r.json()
      })
      .then(data => {
        if (!mounted) return
        const initial = data.comments.slice(0, 2)
        setComments(initial)
        setLoadingComments(false)
      })
      .catch(err => {
        if (!mounted) return
        setCommentsError(err.message)
        setLoadingComments(false)
      })
    return () => { mounted = false }
  }, [article.slug])

  const handleAddComment = (newComment) => {
    setComments(prev => [...prev, newComment])
  }

  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length]
  const prevArticle = allArticles[(currentIndex - 1 + allArticles.length) % allArticles.length]

  const related = allArticles.filter(a => a.slug !== article.slug).slice(0, 4)

  if (!article) {
    return <Layout><div className="max-w-4xl mx-auto p-8">Article not found</div></Layout>
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <article className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded" />
            <h1 className="text-3xl font-semibold mt-5">{article.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{new Date(article.date).toLocaleDateString()}</p>

            <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{ __html: article.body }} />

            <div className="flex items-center justify-between mt-8">
              <div>
                <button onClick={() => router.push(`/articles/${prevArticle.slug}`)} className="mr-2 px-3 py-2 border rounded">← Previous</button>
                <button onClick={() => router.push(`/articles/${nextArticle.slug}`)} className="px-3 py-2 border rounded">Next →</button>
              </div>
              <div>
                <Link href={`/articles`}><a className="text-sm text-blue-600">Back to list</a></Link>
              </div>
            </div>

            <section className="mt-10">
              <h2 className="text-xl font-medium mb-4">Comments</h2>

              {loadingComments ? (
                <div className="space-y-2">
                  <div className="h-12 bg-gray-100 animate-pulse rounded" />
                  <div className="h-12 bg-gray-100 animate-pulse rounded" />
                </div>
              ) : commentsError ? (
                <p className="text-red-500">{commentsError}</p>
              ) : (
                <CommentList comments={comments} />
              )}

              <CommentForm onAdd={handleAddComment} />
            </section>
          </div>

          <aside className="space-y-6">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-3">Explore More</h3>
              <div className="space-y-3">
                {article.exploreMore && article.exploreMore.length > 0 ? article.exploreMore.map((e) => (
                  <Link key={e.slug} href={`/articles/${e.slug}`}>
                    <a className="flex items-center gap-3">
                      <img src={e.image} className="w-16 h-12 object-cover rounded" alt={e.title} />
                      <div className="text-sm">{e.title}</div>
                    </a>
                  </Link>
                )) : <p className="text-sm text-gray-500">No items</p>}
              </div>
            </div>

            <div className="border rounded p-4">
              <h3 className="font-medium mb-3">Tour Guides</h3>
              <div className="space-y-3">
                {article.tourGuides && article.tourGuides.length > 0 ? article.tourGuides.map((g, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img src={g.avatar} className="w-10 h-10 rounded-full object-cover" alt={g.name} />
                    <div>
                      <div className="text-sm font-medium">{g.name}</div>
                      <div className="text-xs text-gray-500">{g.role}</div>
                    </div>
                  </div>
                )) : <p className="text-sm text-gray-500">No guides listed</p>}
              </div>
            </div>
          </aside>
        </article>

        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4">Related articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(r => (
              <Link key={r.slug} href={`/articles/${r.slug}`}>
                <a className="block border rounded overflow-hidden hover:shadow">
                  <img src={r.image} alt={r.title} className="w-full h-36 object-cover" />
                  <div className="p-3">
                    <div className="text-sm font-medium">{r.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{new Date(r.date).toLocaleDateString()}</div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = articlesData.map(a => ({ params: { slug: a.slug } }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const allArticles = articlesData
  const article = allArticles.find(a => a.slug === slug) || null
  const currentIndex = allArticles.findIndex(a => a.slug === slug)

  return {
    props: {
      article,
      allArticles,
      currentIndex
    }
  }
}
