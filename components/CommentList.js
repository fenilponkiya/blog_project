export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p className="text-gray-500">No comments yet. Be the first!</p>
  }
  return (
    <ul className="space-y-4">
      {comments.map(c => (
        <li key={c.id} className="border p-3 rounded">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{c.author}</div>
            <div className="text-xs text-gray-500">{new Date(c.date).toLocaleDateString()}</div>
          </div>
          <p className="mt-2 text-sm">{c.text}</p>
        </li>
      ))}
    </ul>
  )
}
