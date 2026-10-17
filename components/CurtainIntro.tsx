"use client"

import { useState, useRef } from "react"

export default function CurtainIntro() {
  const [phase, setPhase] = useState<"closed" | "opening" | "fading">("closed")
  const [hidden, setHidden] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onTransitionEnd={() => {
        if (phase === "fading") setHidden(true)
      }}
    >
      {phase === "closed" ? (
        <button
          onClick={() => setPhase("opening")}
          className="block w-full h-full relative cursor-pointer group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/curtain-closed-Bpkadld4.jpg"
            alt="Wedding invitation curtain"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Center prompt */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <p className="font-script text-white text-5xl md:text-6xl drop-shadow-lg">
              Open Invitation
            </p>
            <div className="w-px h-8 bg-white/50" />
            <p className="font-body text-white/70 text-xs tracking-[0.4em] uppercase">
              tap to enter
            </p>
            {/* pulsing ring */}
            <div className="mt-4 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 rounded-full border border-white/70 animate-pulse" />
            </div>
          </div>
        </button>
      ) : (
        <video
          ref={videoRef}
          src="/assets/curtain-video-BAKLj3Y5.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={() => setPhase("fading")}
        />
      )}
    </div>
  )
}
