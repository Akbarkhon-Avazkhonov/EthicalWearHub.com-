"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieNotice() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted")
    if (!accepted) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-4">
      <div className="glass-morph-strong p-6 rounded-xl shadow-lg shadow-primary/20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-heading font-bold text-lg">Cookie Notice</h3>
          <Button variant="ghost" size="icon" onClick={() => setShow(false)} className="shrink-0">
            <X className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-foreground/80 mb-4">
          This website uses cookies to enhance your experience and analyze site usage. By continuing, you consent to
          cookies.
        </p>
        <div className="flex gap-2">
          <Button onClick={accept} className="flex-1">
            Accept
          </Button>
          <Button variant="outline" className="flex-1 glass-morph bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
