"use client"

import { useEffect, useState } from "react"
import { INITIALS, WEDDING } from "@/lib/wedding"

const NAV_LINKS = [
  { href: "#story",     label: "Our Story" },
  { href: "#venue",     label: "Venue" },
  { href: "#gallery",   label: "Gallery" },
  { href: "#schedule",  label: "Schedule" },
  { href: "#dresscode", label: "Dress Code" },
  { href: "#transport", label: "Travel" },
  { href: "#menu",      label: "Menu" },
  { href: "#gifts",     label: "Gifts" },
  { href: "#rsvp",      label: "RSVP" },
].filter((l) => l.href !== "#gallery" || WEDDING.photos.length > 0)

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-sm shadow-soft border-b border-sage-dark/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo/names */}
        <a href="#hero" className="font-script text-xl text-sage-dark">
          {INITIALS}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-xs tracking-[0.15em] uppercase text-sage-dark/70 hover:text-sage-dark transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-sage-dark transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-sage-dark transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-sage-dark transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory/95 backdrop-blur-sm border-t border-sage-dark/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm tracking-[0.15em] uppercase text-sage-dark/70 hover:text-sage-dark transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
