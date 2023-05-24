'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Names = 'blog'
type Href = `/${Names}`

type Link = {
  name: Names
  href: Href
}

const LINKS: Link[] = [{ name: 'blog', href: '/blog' }]

export default function GlobalMenu() {
  return (
    <ul className="flex">
      {LINKS.map((link) => (
        <GlobalMenuItem key={link.name} link={link} />
      ))}
    </ul>
  )
}

function GlobalMenuItem({ link: { name, href } }: { link: Link }) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)

  return (
    <li>
      <Link className={`${isActive && 'text-cyan-400'}`} href={href}>
        {name}
      </Link>
    </li>
  )
}
