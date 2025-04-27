"use client"

import { useEffect, useState } from "react"
import { Scissors } from "lucide-react"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    // Progress bar animation
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 500) // Delay before hiding splash screen
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      <div className="relative mb-8 flex flex-col items-center">
        <Scissors className="h-16 w-16 text-white mb-4" />
        <h1 className="text-4xl font-bold text-white">ELITE CUTS</h1>
      </div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  )
}
