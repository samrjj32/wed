import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:       "hsl(var(--ivory) / <alpha-value>)",
        cream:       "hsl(var(--cream) / <alpha-value>)",
        paper:       "hsl(var(--paper) / <alpha-value>)",
        sage:        "hsl(var(--sage) / <alpha-value>)",
        "sage-dark": "hsl(var(--sage-dark) / <alpha-value>)",
        "sage-light":"hsl(var(--sage-light) / <alpha-value>)",
        gold:        "hsl(var(--gold) / <alpha-value>)",
        "gold-soft": "hsl(var(--gold-soft) / <alpha-value>)",
        terracotta:  "hsl(var(--terracotta) / <alpha-value>)",
        olive:       "hsl(var(--olive) / <alpha-value>)",
        carbon:      "hsl(var(--carbon) / <alpha-value>)",
        countdown:   "hsl(var(--countdown) / <alpha-value>)",
        border:      "hsl(var(--border) / <alpha-value>)",
        input:       "hsl(var(--input) / <alpha-value>)",
        ring:        "hsl(var(--ring) / <alpha-value>)",
        background:  "hsl(var(--background) / <alpha-value>)",
        foreground:  "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT:   "hsl(var(--primary) / <alpha-value>)",
          foreground:"hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT:   "hsl(var(--secondary) / <alpha-value>)",
          foreground:"hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT:   "hsl(var(--muted) / <alpha-value>)",
          foreground:"hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT:   "hsl(var(--accent) / <alpha-value>)",
          foreground:"hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT:   "hsl(var(--destructive) / <alpha-value>)",
          foreground:"hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT:   "hsl(var(--card) / <alpha-value>)",
          foreground:"hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT:   "hsl(var(--popover) / <alpha-value>)",
          foreground:"hsl(var(--popover-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        script:  ["var(--font-great-vibes)", "cursive"],
        body:    ["var(--font-lora)", "serif"],
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        curtainLeft: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        curtainRight: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up":       "fadeUp 0.8s cubic-bezier(.4,0,.2,1) forwards",
        "fade-in":       "fadeIn 0.6s ease forwards",
        "scale-in":      "scaleIn 0.5s ease forwards",
        "curtain-left":  "curtainLeft 1.2s cubic-bezier(.4,0,.2,1) forwards",
        "curtain-right": "curtainRight 1.2s cubic-bezier(.4,0,.2,1) forwards",
      },
      boxShadow: {
        soft:    "0 2px 15px -3px rgba(58,69,52,.08), 0 4px 6px -2px rgba(58,69,52,.04)",
        elegant: "0 10px 40px -10px rgba(58,69,52,.15), 0 4px 15px -3px rgba(58,69,52,.08)",
        lifted:  "0 20px 50px -15px rgba(58,69,52,.2), 0 8px 20px -5px rgba(58,69,52,.1)",
      },
    },
  },
  plugins: [],
}

export default config
