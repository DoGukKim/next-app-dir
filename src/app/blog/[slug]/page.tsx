import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

import { getPost, getPosts } from '@/lib/get-posts'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Post({
  params,
}: {
  params: { slug: Post['slug'] }
}) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  // @ts-expect-error RSC
  return <MDXRemote source={post.content} />
}
