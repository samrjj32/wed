import type { Metadata } from "next"
import { Cormorant_Garamond, Great_Vibes, Lora } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Amara & Ethan | June 21, 2025",
  description: "You are cordially invited to celebrate the wedding of Amara and Ethan",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${lora.variable} font-body antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
