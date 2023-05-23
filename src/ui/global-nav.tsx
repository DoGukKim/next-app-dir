import Link from 'next/link'

export default function GlobalNav() {
  return (
    <nav className="flex justify-between">
      <div className="flex">
        <Link href="/">✍🏻</Link>
        <ul className="ml-6">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <Link href="https://github.com/DoGukKim" target="_blank">
        to Github
      </Link>
    </nav>
  )
}
