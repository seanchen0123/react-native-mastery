import { useState, useRef } from "react"

export function useTimer(maxTime: number) {
  const [time, setTime] = useState(maxTime)
  const interval = useRef<NodeJS.Timeout>()

  const startTimer = () => {
    setTime(maxTime)
    interval.current = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)
  }

  const clearTimer = () => {
    clearInterval(interval.current)
  }

  return {
    time,
    startTimer,
    clearTimer
  }
}