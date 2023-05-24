import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPosts } from '@/lib/get-posts'

export default async function Blog() {
  const posts = await getPosts()

  if (!posts) return notFound()

  return (
    <main>
      <h1>All posts</h1>

      {posts.map((post) => (
        <Link key={post.title} href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </main>
  )
}
