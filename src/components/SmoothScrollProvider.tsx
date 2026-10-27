"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const lenis = new Lenis({ autoRaf: true, smoothWheel: true, anchors: true })
    return () => lenis.destroy()
  }, [])

  return children
}
