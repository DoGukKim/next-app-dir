import 'server-only'

import { promises as fs } from 'fs'
import matter from 'gray-matter'

export type Post = {
  title: string
  slug: string
  date: string
  tags: string[]
  description: string
  body: string
  lastModified?: number
  views?: number
}

export async function getPosts() {
  const postsDirectory = await fs.readdir('src/posts/')

  const posts = await Promise.all(
    postsDirectory.map(async (file) => {
      const postContent = await fs.readFile(`src/posts/${file}`, 'utf8')

      const { data, content } = matter(postContent)
      return { ...data, body: content } as Post
    })
  )

  return posts.sort((a, b) =>
    a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
  ) as Post[]
}
