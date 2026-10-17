"use client"

import { useEffect, useState } from "react"
import { COUPLE } from "@/lib/wedding"

export const OPEN_EVENT = "invitation:open"

export default function CurtainIntro() {
  const [phase, setPhase] = useState<"closed" | "opening" | "done">("closed")

  // Lock page scroll until the invitation is opened
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden"
    return () => { document.body.style.overflow = "" }
  }, [phase])

  function open() {
    if (phase !== "closed") return
    setPhase("opening")
    window.dispatchEvent(new Event(OPEN_EVENT))
    setTimeout(() => setPhase("done"), 1800)
  }

  if (phase === "done") return null

  const panel = "absolute top-0 h-full w-1/2 curtain-velvet transition-transform duration-[1600ms] ease-[cubic-bezier(.7,0,.3,1)]"

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-hidden={phase !== "closed"}>
      <div className={`${panel} left-0 origin-left ${phase === "opening" ? "-translate-x-full" : ""}`} />
      <div className={`${panel} right-0 origin-right ${phase === "opening" ? "translate-x-full" : ""}`} />

      <button
        onClick={open}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 text-ivory transition-opacity duration-500 ${
          phase === "opening" ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gold-soft">
          You are invited
        </span>
        <span className="font-script text-5xl md:text-7xl drop-shadow-lg">{COUPLE}</span>
        <span className="w-px h-8 bg-ivory/40" />
        <span className="font-body text-ivory/70 text-xs tracking-[0.4em] uppercase">
          Tap to open
        </span>
        <span className="mt-4 w-12 h-12 rounded-full border border-ivory/40 flex items-center justify-center">
          <span className="w-6 h-6 rounded-full border border-ivory/70 animate-pulse" />
        </span>
      </button>
    </div>
  )
}
