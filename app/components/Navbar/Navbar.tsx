'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FaBug } from 'react-icons/fa'
import classnames from 'classnames'

const Navbar = () => {
  const currentPath = usePathname()

  const links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Issues', href: '/issues' },
  ]
  return (
    <nav className='flex space-x-6 border-b px-5 h-14 items-center mb-5'>
      <Link href='/'>
        <FaBug />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-700 transition-colors': true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar