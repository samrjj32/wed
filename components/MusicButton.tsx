"use client"

import { useEffect, useRef, useState } from "react"
import { WEDDING } from "@/lib/wedding"
import { OPEN_EVENT } from "./CurtainIntro"

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  // Browsers only allow audio after a user gesture, so start on "open invitation"
  useEffect(() => {
    const start = () => {
      audioRef.current?.play().then(() => setPlaying(true)).catch(() => {})
    }
    window.addEventListener(OPEN_EVENT, start)
    return () => window.removeEventListener(OPEN_EVENT, start)
  }, [])

  if (!WEDDING.music) return null

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={WEDDING.music} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        aria-pressed={playing}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-ivory/90 border border-sage-dark/30 text-sage-dark shadow-elegant backdrop-blur-sm flex items-center justify-center"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4V5z" />
          {playing ? (
            <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
          ) : (
            <path d="m16 9 5 6m0-6-5 6" />
          )}
        </svg>
      </button>
    </>
  )
}
