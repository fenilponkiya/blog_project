import { useState } from 'react'

export default function CommentForm({ onAdd }) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!author.trim() || !text.trim()) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 400))
    const newComment = {
      id: 'local-' + Date.now(),
      author: author.trim(),
      text: text.trim(),
      date: new Date().toISOString()
    }
    onAdd(newComment)
    setAuthor('')
    setText('')
    setSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Your name" className="border rounded p-2" />
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Comment" className="border rounded p-2" />
      </div>
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Post Comment'}
        </button>
      </div>
    </form>
  )
}
