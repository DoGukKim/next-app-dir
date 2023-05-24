import Link from 'next/link'
import GlobalMenu from './menu'

export default function GlobalNav() {
  return (
    <nav className="flex justify-between">
      <div className="flex">
        <Link href="/">✍🏻</Link>
        <GlobalMenu />
      </div>

      <Link href="https://github.com/DoGukKim" target="_blank">
        to Github
      </Link>
    </nav>
  )
}
