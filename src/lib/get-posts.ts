import { cache } from 'react'

import { promises as fs } from 'fs'
import matter from 'gray-matter'

const POST_DIR = 'src/posts/'

export const getPosts = cache(async () => {
  const postsDirectory = await fs.readdir(POST_DIR)

  const posts = await Promise.all(
    postsDirectory.map(async (file) => {
      const postContent = await fs.readFile(`${POST_DIR}${file}`, 'utf8')

      const { data, content } = matter(postContent)
      return { ...data, content } as Post
    })
  )

  return posts.sort((a, b) =>
    a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
  )
})

export const getPost = async (slug: Post['slug']) => {
  const posts = await getPosts()

  return posts.find((post) => post.slug === slug)
}
