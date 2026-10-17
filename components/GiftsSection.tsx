"use client"

import { useReveal } from "./useReveal"

export default function GiftsSection() {
  const ref = useReveal()

  return (
    <section id="gifts" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-cream">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <p className="reveal font-script text-gold text-3xl mb-3">Gifts</p>
        <h2 className="reveal section-title text-sage-dark">Registry</h2>
        <div className="reveal divider-ornament">
          <span className="font-script text-gold text-xl">✦</span>
        </div>

        {/* Icon */}
        <div className="reveal flex justify-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/gift-icon-BssCdzah.png"
            alt="Gifts"
            className="w-20 h-20 object-contain opacity-70"
          />
        </div>

        {/* Copy */}
        <div className="reveal space-y-4 text-sage-dark/70 font-body text-sm leading-relaxed">
          <p>
            Your presence at our wedding is the greatest gift of all. However, if you
            wish to celebrate with us in another way, we have created a small registry.
          </p>
          <p>
            We are also saving towards our honeymoon in Japan — any contribution to our
            adventure fund would mean the world to us.
          </p>
        </div>

        {/* Registry buttons */}
        <div className="reveal mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="font-body text-sm tracking-widest uppercase px-8 py-3 border border-sage-dark text-sage-dark hover:bg-sage-dark hover:text-ivory transition-all duration-300"
          >
            View Registry
          </a>
          <a
            href="#"
            className="font-body text-sm tracking-widest uppercase px-8 py-3 border border-sage-dark text-sage-dark hover:bg-sage-dark hover:text-ivory transition-all duration-300"
          >
            Honeymoon Fund
          </a>
        </div>
      </div>
    </section>
  )
}
