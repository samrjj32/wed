"use client"

import { useReveal } from "./useReveal"

const HOTELS = [
  {
    name:    "The Grand Hotel",
    detail:  "0.2 miles from venue · from $180/night",
    code:    "AMARA2025 (10% off)",
    link:    "https://maps.google.com",
  },
  {
    name:    "Midtown Suites",
    detail:  "0.5 miles from venue · from $130/night",
    code:    null,
    link:    "https://maps.google.com",
  },
]

export default function TransportSection() {
  const ref = useReveal()

  return (
    <section id="transport" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-cream overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="reveal font-script text-gold text-3xl mb-3">Getting Here</p>
          <h2 className="reveal section-title text-sage-dark">Travel &amp; Stay</h2>
          <div className="reveal divider-ornament">
            <span className="font-script text-gold text-xl">✦</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          {/* Icon */}
          <div className="reveal w-24 h-24 flex-shrink-0 mx-auto md:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/transport-icon-W5j6hOWf.png"
              alt="Transport"
              className="w-full h-full object-contain opacity-70"
            />
          </div>

          {/* Content */}
          <div className="reveal flex-1 space-y-6">
            {/* Shuttle */}
            <div className="card-elegant">
              <p className="font-display text-xl text-sage-dark font-light mb-1">Complimentary Shuttle</p>
              <p className="font-body text-sage-dark/60 text-sm leading-relaxed">
                A shuttle bus will run between The Grand Hotel and the venue, departing
                at 3:15 PM and 3:45 PM. Return service runs at midnight and 12:30 AM.
              </p>
            </div>

            {/* Hotels */}
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-sage-dark/50 mb-3">
                Recommended hotels
              </p>
              <div className="space-y-4">
                {HOTELS.map((h) => (
                  <div key={h.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-lg text-sage-dark font-light">{h.name}</p>
                      <p className="font-body text-sage-dark/60 text-sm">{h.detail}</p>
                      {h.code && (
                        <p className="font-body text-xs text-gold mt-0.5">
                          Code: {h.code}
                        </p>
                      )}
                    </div>
                    <a
                      href={h.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs text-sage underline underline-offset-4 hover:text-sage-dark transition-colors whitespace-nowrap"
                    >
                      Map →
                    </a>
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
