'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"


const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <nav className="w-full bg-white relative">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600"><Link href='/'>MyPortfolio</Link></div>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className={`hover:underline ${isActive("/") ? "underline text-blue-600 font-semibold" : ""}`}>Home</Link>
          <Link href="/projects" className={`hover:underline ${isActive("/projects") ? "underline text-blue-600 font-semibold" : ""}`}>Projects</Link>
          <Link
            href="/skills"
            className={`hover:underline ${isActive("/skills") ? "underline text-blue-600 font-semibold" : ""}`}
          >
            Skills
          </Link>
          <Link href="/contact" className={`hover:underline ${isActive("/contact") ? "underline text-blue-600 font-semibold" : ""}`}>Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="sm:hidden text-gray-700" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-300 z-50 flex flex-col items-center gap-4 py-4">
          <Link href="/" className={isActive("/") ? "underline text-blue-600 font-semibold" : ""} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/projects" className={isActive("/projects") ? "underline text-blue-600 font-semibold" : ""} onClick={() => setOpen(false)}>Projects</Link>
          <Link
            href="/skills"
            className={isActive("/skills") ? "underline text-blue-600 font-semibold" : ""}
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "underline text-blue-600 font-semibold" : ""} onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
