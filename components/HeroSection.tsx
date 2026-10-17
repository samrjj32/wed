"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".reveal").forEach((node, i) => {
            setTimeout(() => node.classList.add("visible"), i * 150)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-svh flex flex-col items-center justify-center section-padding bg-ivory text-center pt-[45vh]"
    >
      {/* Top ornament */}
      <div className="reveal flex items-center gap-3 mb-8">
        <span className="block h-px w-12 bg-gold/60" />
        <span className="font-script text-2xl text-gold">Together at last</span>
        <span className="block h-px w-12 bg-gold/60" />
      </div>

      {/* Names */}
      <h1 className="reveal font-display font-light text-sage-dark leading-[1.05] tracking-[0.08em]">
        <span className="block text-6xl md:text-8xl">Amara</span>
        <span className="block font-script text-4xl md:text-5xl text-gold my-3">&amp;</span>
        <span className="block text-6xl md:text-8xl">Ethan</span>
      </h1>

      {/* Divider */}
      <div className="reveal divider-ornament w-full max-w-xs mx-auto my-8">
        <span className="font-script text-gold text-xl">✦</span>
      </div>

      {/* Date + location */}
      <p className="reveal font-body text-sage-dark/60 tracking-[0.3em] uppercase text-xs md:text-sm">
        June 21st, 2025
      </p>
      <p className="reveal font-body text-sage-dark/50 tracking-[0.2em] text-xs mt-1">
        Teatro Grand Ballroom · New York City
      </p>

      {/* Scroll cue */}
      <div className="reveal mt-16 flex flex-col items-center gap-2 text-sage-dark/40">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-sage-dark/20 overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-sage-dark/50 animate-[fadeIn_1.5s_ease_infinite_alternate]" />
        </div>
      </div>
    </section>
  )
}
