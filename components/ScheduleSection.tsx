"use client"

import { useReveal } from "./useReveal"

const EVENTS = [
  { time: "3:30 PM",  title: "Guest Arrival",          detail: "Doors open. Welcome drinks are served in the foyer." },
  { time: "4:00 PM",  title: "Ceremony",                detail: "The wedding ceremony begins in the main ballroom." },
  { time: "5:00 PM",  title: "Cocktail Hour",           detail: "Champagne, canapés and live acoustic music." },
  { time: "7:00 PM",  title: "Reception Dinner",        detail: "A three-course candlelit dinner with the wedding party." },
  { time: "9:00 PM",  title: "First Dance &amp; Cake",  detail: "Speeches, the first dance, and the cutting of the cake." },
  { time: "9:30 PM",  title: "Dancing",                 detail: "The dance floor opens. Party until midnight!" },
  { time: "12:00 AM", title: "Farewell",                detail: "Safe travels — we can't wait to see you there." },
]

export default function ScheduleSection() {
  const ref = useReveal()

  return (
    <section id="schedule" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-cream">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="reveal font-script text-gold text-3xl mb-3">The Day</p>
          <h2 className="reveal section-title text-sage-dark">Schedule</h2>
          <div className="reveal divider-ornament">
            <span className="font-script text-gold text-xl">✦</span>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative pl-6 border-l border-sage-dark/20">
          {EVENTS.map((ev, i) => (
            <li key={i} className="reveal relative mb-8 last:mb-0 ml-4">
              <div className="absolute w-3 h-3 rounded-full bg-gold border-2 border-cream -left-[47px] top-0.5" />
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                {ev.time}
              </p>
              <p
                className="font-display text-xl text-sage-dark font-light"
                dangerouslySetInnerHTML={{ __html: ev.title }}
              />
              <p className="font-body text-sage-dark/60 text-sm leading-relaxed mt-0.5">
                {ev.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
