'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav className='caps'>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            <b>Home</b>
          </Link>
          {" | "}
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            <b>About</b>
          </Link>
          {" | "}
          <Link
            className={`link ${pathname === '/advertise' ? 'active' : ''}`}
            href="/advertise"
          >
            <b>Advertise</b>
          </Link>
    </nav>
  )
}