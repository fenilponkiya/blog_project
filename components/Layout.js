import Link from 'next/link'
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/"><a className="font-bold">My Blog</a></Link>
          <nav>
            <Link href="/articles"><a className="text-sm ml-4">Articles</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-50 border-t mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
