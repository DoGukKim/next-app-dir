import { getPosts } from '@/lib/get-posts'
import { notFound } from 'next/navigation'

export default async function Blog() {
  const posts = await getPosts()

  if (!posts) return notFound()

  return (
    <main>
      <h1>blog page</h1>
      {posts.map((i) => (
        <p key={i.title}>{i.description}</p>
      ))}
    </main>
  )
}
