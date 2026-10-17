"use client"

import { useEffect, useState } from "react"
import { useReveal } from "./useReveal"

const WEDDING_DATE = new Date("2025-06-21T16:00:00")

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function CountdownSection() {
  const ref = useReveal()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units: { label: string; value: number }[] = [
    { label: "Days",    value: timeLeft.days },
    { label: "Hours",   value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <section
      id="countdown"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-sage-dark text-ivory text-center"
    >
      <div className="max-w-3xl mx-auto">
        <p className="reveal font-script text-gold text-3xl mb-3">For The Big Day</p>
        <h2 className="reveal section-title text-ivory mb-10">Counting Down</h2>

        <div className="reveal grid grid-cols-4 gap-4 md:gap-8">
          {units.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-display text-5xl md:text-7xl font-light text-gold tabular-nums leading-none">
                {String(value).padStart(2, "0")}
              </span>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/50 mt-2">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal divider-ornament mt-10">
          <span className="font-script text-gold/60 text-xl">✦</span>
        </div>

        <p className="reveal font-body text-xs tracking-[0.3em] uppercase text-ivory/40">
          June 21st, 2025 · New York City
        </p>
      </div>
    </section>
  )
}
