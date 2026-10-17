"use client"

import { useState } from "react"
import { useReveal } from "./useReveal"
import { WEDDING } from "@/lib/wedding"

export default function GallerySection() {
  const ref = useReveal()
  const [index, setIndex] = useState(0)
  const photos = WEDDING.photos

  if (photos.length === 0) return null

  const go = (step: number) => setIndex((i) => (i + step + photos.length) % photos.length)

  return (
    <section id="gallery" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-ivory">
      <div className="max-w-xl mx-auto text-center">
        <p className="reveal font-script text-gold text-3xl mb-3">Moments</p>
        <h2 className="reveal section-title text-sage-dark">Our Gallery</h2>
        <div className="reveal divider-ornament">
          <span className="font-script text-gold text-xl">✦</span>
        </div>

        <div className="reveal relative">
          {/* Double-line frame */}
          <div className="p-3 border border-gold/60 shadow-elegant bg-paper">
            <div className="relative aspect-[3/4] overflow-hidden border border-gold/40">
              {photos.map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {photos.length > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/90 border border-sage-dark/20 text-sage-dark shadow-soft hover:bg-ivory"
              >
                ‹
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/90 border border-sage-dark/20 text-sage-dark shadow-soft hover:bg-ivory"
              >
                ›
              </button>
            </>
          )}
        </div>

        {photos.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setIndex(i)}
                aria-label={`Photo ${i + 1}`}
                aria-current={i === index}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-gold" : "bg-sage-dark/20"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
