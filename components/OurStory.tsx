"use client"

import { useReveal } from "./useReveal"

export default function OurStory() {
  const ref = useReveal()

  return (
    <section id="story" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        <p className="reveal font-script text-gold text-3xl mb-3">Our Story</p>
        <h2 className="reveal section-title text-sage-dark">How we met</h2>
        <div className="reveal divider-ornament">
          <span className="font-script text-gold text-xl">✦</span>
        </div>

        <div className="reveal space-y-5 text-sage-dark/70 leading-relaxed font-body text-sm md:text-base">
          <p>
            We first met on a rainy Tuesday in October, at a small bookshop neither of
            us had planned to visit. Ethan was looking for a gift; Amara was hiding from
            the weather. They both reached for the same book.
          </p>
          <p>
            What started as a shared laugh over coffee turned into hours of conversation,
            then weeks of letters, then years of adventures. Every moment led us here.
          </p>
          <p>
            Three years later, under a canopy of lights in Central Park, Ethan got down
            on one knee — and Amara said yes before he could finish the question.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-1">
          <span className="font-script text-gold text-2xl">Together forever</span>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-sage-dark/40">
            June 21st, 2025
          </span>
        </div>
      </div>
    </section>
  )
}
