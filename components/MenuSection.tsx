"use client"

import { useReveal } from "./useReveal"

const COURSES = [
  {
    course:  "Starter",
    options: [
      "Burrata with heirloom tomatoes, basil oil & fleur de sel",
      "Seared scallops with pea purée & crispy pancetta",
    ],
  },
  {
    course:  "Main",
    options: [
      "Herb-crusted lamb rack with dauphinoise potatoes & jus",
      "Pan-roasted halibut with saffron beurre blanc & asparagus",
      "Wild mushroom risotto with truffle oil & parmesan (V)",
    ],
  },
  {
    course:  "Dessert",
    options: [
      "Wedding cake — vanilla & elderflower",
      "Dark chocolate fondant with salted caramel ice cream",
    ],
  },
]

export default function MenuSection() {
  const ref = useReveal()

  return (
    <section id="menu" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-ivory">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="reveal font-script text-gold text-3xl mb-3">Dining</p>
          <h2 className="reveal section-title text-sage-dark">The Menu</h2>
          <div className="reveal divider-ornament">
            <span className="font-script text-gold text-xl">✦</span>
          </div>
        </div>

        {/* Menu frame illustration + content */}
        <div className="reveal relative mx-auto max-w-xl">
          {/* Frame image as decorative border */}
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/menu-frame-BFE5kCs7.png"
              alt="Menu frame"
              className="absolute inset-[-14%] w-[128%] h-[128%] object-contain pointer-events-none z-10"
            />

            {/* Inner content */}
            <div className="relative z-0 bg-paper rounded-sm px-8 py-10 shadow-soft text-center space-y-8">
              {COURSES.map((c) => (
                <div key={c.course}>
                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold mb-2">
                    {c.course}
                  </p>
                  <ul className="space-y-1">
                    {c.options.map((o) => (
                      <li key={o} className="font-display text-base text-sage-dark/80 font-light">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <p className="font-body text-xs text-sage-dark/40 pt-2 border-t border-sage-dark/10">
                Dietary requirements? Let us know in your RSVP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
