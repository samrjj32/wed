"use client"

import { useReveal } from "./useReveal"
import { WEDDING } from "@/lib/wedding"

export default function VenueSection() {
  const ref = useReveal()

  return (
    <section id="venue" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="reveal font-script text-gold text-3xl mb-3">The Venue</p>
          <h2 className="reveal section-title text-sage-dark">{WEDDING.venue.name}</h2>
          <div className="reveal divider-ornament">
            <span className="font-script text-gold text-xl">✦</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Illustration */}
          <div className="reveal w-full md:w-[46%] flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/venue-illustration-DebdGS8I.png"
              alt="Venue illustration"
              className="w-full object-contain drop-shadow-lg sepia-[0.15]"
            />
          </div>

          {/* Info */}
          <div className="reveal flex-1 space-y-6 text-center md:text-left">
            <div>
              <p className="font-display text-2xl text-sage-dark font-light">Ceremony &amp; Reception</p>
              <p className="font-body text-sage-dark/60 text-sm mt-1 leading-relaxed">
                The ceremony begins at 4:00 PM, followed immediately by cocktail hour
                and a candlelit reception dinner.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-display text-lg text-sage-dark">Address</p>
              <p className="font-body text-sage-dark/60 text-sm leading-relaxed">
                {WEDDING.venue.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </p>
            </div>

            <a
              href={WEDDING.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-sage hover:text-sage-dark transition-colors duration-200 tracking-wide underline underline-offset-4"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
