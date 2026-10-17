"use client"

import { useState } from "react"
import { useReveal } from "./useReveal"

type FormData = {
  name: string
  email: string
  attending: "yes" | "no" | ""
  guests: string
  dietary: string
  message: string
}

export default function RSVPSection() {
  const ref = useReveal()
  const [form, setForm] = useState<FormData>({
    name: "", email: "", attending: "", guests: "1", dietary: "", message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: connect to backend / Supabase
    setSubmitted(true)
  }

  return (
    <section id="rsvp" ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-ivory">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="reveal font-script text-gold text-3xl mb-3">Kindly Reply</p>
          <h2 className="reveal section-title text-sage-dark">RSVP</h2>
          <div className="reveal divider-ornament">
            <span className="font-script text-gold text-xl">✦</span>
          </div>
          <p className="reveal font-body text-sage-dark/60 text-sm">
            Please respond by <strong className="text-sage-dark/80">May 21st, 2025</strong>
          </p>
        </div>

        {/* Icon */}
        <div className="reveal flex justify-center mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/rsvp-icon-DZDwmR6q.png"
            alt="RSVP"
            className="w-16 h-16 object-contain opacity-60"
          />
        </div>

        {submitted ? (
          <div className="reveal text-center card-elegant space-y-3">
            <p className="font-script text-gold text-4xl">Thank you!</p>
            <p className="font-body text-sage-dark/70 text-sm">
              We have received your reply and can&apos;t wait to celebrate with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal space-y-5">
            {/* Name */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-sage-dark/60 block mb-1.5">
                Full name
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Amara & Ethan"
                className="w-full bg-transparent border-b border-sage-dark/30 focus:border-sage-dark/70 outline-none py-2 font-body text-sm text-sage-dark placeholder:text-sage-dark/30 transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-sage-dark/60 block mb-1.5">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-sage-dark/30 focus:border-sage-dark/70 outline-none py-2 font-body text-sm text-sage-dark placeholder:text-sage-dark/30 transition-colors duration-200"
              />
            </div>

            {/* Attending */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-sage-dark/60 block mb-3">
                Will you attend?
              </label>
              <div className="flex gap-4">
                {(["yes", "no"] as const).map((v) => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value={v}
                      checked={form.attending === v}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border flex-shrink-0 transition-colors duration-200 ${
                        form.attending === v
                          ? "border-sage-dark bg-sage-dark"
                          : "border-sage-dark/40"
                      }`}
                    />
                    <span className="font-body text-sm text-sage-dark/70 capitalize">{v === "yes" ? "Joyfully accepts" : "Regretfully declines"}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Guests (only if attending) */}
            {form.attending === "yes" && (
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-sage-dark/60 block mb-1.5">
                  Number of guests
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-sage-dark/30 focus:border-sage-dark/70 outline-none py-2 font-body text-sm text-sage-dark transition-colors duration-200"
                >
                  {["1", "2", "3", "4"].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Dietary */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-sage-dark/60 block mb-1.5">
                Dietary requirements
              </label>
              <input
                name="dietary"
                type="text"
                value={form.dietary}
                onChange={handleChange}
                placeholder="Vegetarian, gluten-free, allergies…"
                className="w-full bg-transparent border-b border-sage-dark/30 focus:border-sage-dark/70 outline-none py-2 font-body text-sm text-sage-dark placeholder:text-sage-dark/30 transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-sage-dark/60 block mb-1.5">
                A note for us (optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="We'd love to hear from you…"
                className="w-full bg-transparent border-b border-sage-dark/30 focus:border-sage-dark/70 outline-none py-2 font-body text-sm text-sage-dark placeholder:text-sage-dark/30 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 font-body text-sm tracking-[0.25em] uppercase py-3.5 border border-sage-dark text-sage-dark hover:bg-sage-dark hover:text-ivory transition-all duration-300"
            >
              Send Reply
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
