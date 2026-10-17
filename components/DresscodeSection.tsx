"use client"

import { useReveal } from "./useReveal"

const PALETTE = [
  { name: "Ivory",      hex: "#EFE8D8" },
  { name: "Sage",       hex: "#7A8C6E" },
  { name: "Dusty Rose", hex: "#C4A09A" },
  { name: "Champagne",  hex: "#D4B896" },
  { name: "Forest",     hex: "#3A4534" },
]

export default function DresscodeSection() {
  const ref = useReveal()

  return (
    <section id="dresscode" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="reveal font-script text-gold text-3xl mb-3">Attire</p>
          <h2 className="reveal section-title text-sage-dark">Dress Code</h2>
          <div className="reveal divider-ornament">
            <span className="font-script text-gold text-xl">✦</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Illustration */}
          <div className="reveal w-full md:w-[42%] flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/dresscode-illustration-B5z5OYvq.png"
              alt="Dresscode illustration"
              className="w-full object-contain drop-shadow-md"
            />
          </div>

          {/* Info */}
          <div className="reveal flex-1 space-y-6 text-center md:text-left">
            <div>
              <p className="font-display text-2xl text-sage-dark font-light tracking-wide">
                Black Tie Optional
              </p>
              <p className="font-body text-sage-dark/60 text-sm leading-relaxed mt-2">
                We invite you to dress to impress. Floor-length gowns and tuxedos are
                welcome, as are cocktail attire and dressy separates. Our palette is
                soft and earthy — please avoid pure white.
              </p>
            </div>

            {/* Color palette */}
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-sage-dark/50 mb-3">
                Suggested palette
              </p>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {PALETTE.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-1">
                    <div
                      className="w-8 h-8 rounded-full border border-sage-dark/10 shadow-sm"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-body text-[9px] text-sage-dark/50">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
