import articles from '../../data/articles.json'

export default function handler(req, res) {
  const { slug } = req.query
  if (!slug) {
    return res.status(400).json({ error: 'missing slug' })
  }
  const article = articles.find(a => a.slug === slug)
  if (!article) {
    return res.status(404).json({ error: 'not found' })
  }
  return res.status(200).json({ comments: article.comments || [] })
}
