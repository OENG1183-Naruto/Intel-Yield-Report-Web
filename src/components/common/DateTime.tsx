'use client'

import { useState, useEffect } from 'react'

export function DateTime() {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-sm">
      {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
    </div>
  )
} 