'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function LinksBtm() {
  const pathname = usePathname()
 
  return (
    <nav>
          <Link className={`link ${pathname === '/privacy-policy' ? 'active' : ''}`} href="/privacy-policy" target="_blank">
            <b>Privacy Policy</b>
          </Link>
          {" | "}
          <Link
            className={`link ${pathname === '/terms-of-service' ? 'active' : ''}`}
            href="/terms-of-service" target="_blank"
          >
            <b>Terms Of Service</b>
          </Link>
    </nav>
  )
}