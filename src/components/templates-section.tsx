"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { templateDetails, allTemplates } from "@/lib/mock-data"
import ResumePreview from "@/components/resume-preview"

const templateIds = [
  "one-column",
  "two-column",
  "modern",
  "creative",
  "minimalist",
  "technical",
  "executive",
]

export function TemplatesSection() {
  const templates = useMemo(() => {
    return templateIds.map((id) => {
      const data = allTemplates.find((t) => t.template === id)
      return data ? {
        id,
        name: templateDetails[id as keyof typeof templateDetails]?.name || id,
        data,
      } : null
    }).filter(Boolean) as { id: string; name: string; data: ResumeData }[]
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(
    () => setCurrentIndex((p) => (p + 1) % templates.length),
    [templates.length]
  )

  const prevSlide = useCallback(
    () => setCurrentIndex((p) => (p - 1 + templates.length) % templates.length),
    [templates.length]
  )

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 3500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const visibleIndices = useMemo(
    () =>
      (typeof window !== "undefined" && window.innerWidth < 768
        ? [-1, 0, 1]
        : [-2, -1, 0, 1, 2]
      ).map(
        (i) => (currentIndex + i + templates.length) % templates.length
      ),
    [currentIndex, templates.length]
  )

  return (
    <section id="templates" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Professional Resume Templates
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from professionally designed templates to land your dream job.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Arrows */}
          <button
            aria-label="Previous template"
            onClick={prevSlide}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-600 hover:bg-teal-700
              text-white flex items-center justify-center shadow-lg"
          >
            <ChevronLeft />
          </button>

          <button
            aria-label="Next template"
            onClick={nextSlide}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-600 hover:bg-teal-700
              text-white flex items-center justify-center shadow-lg"
          >
            <ChevronRight />
          </button>

          {/* Carousel */}
          <div className="relative h-[520px] md:h-[640px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((templateIndex, position) => {
                const template = templates[templateIndex]
                const offset = position - 2
                const isCenter = offset === 0

                return (
                  <motion.div
                    key={template.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      x:
                        offset *
                        (typeof window !== "undefined" &&
                        window.innerWidth < 768
                          ? 160
                          : 320),
                      scale: isCenter ? 1 : 0.85,
                      opacity: isCenter ? 1 : 0.5,
                      zIndex: isCenter ? 10 : 1,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    className="absolute cursor-pointer"
                    onClick={() => setCurrentIndex(templateIndex)}
                  >
                    {/* Card */}
                    <div
                      className={`relative w-[280px] md:w-[360px]
                        h-[420px] md:h-[480px]
                        bg-white rounded-xl shadow-2xl
                        border overflow-hidden
                        ${
                          isCenter
                            ? "border-teal-400 shadow-teal-500/30"
                            : "border-slate-200"
                        }`}
                    >
                      {/* Resume Viewport (IMPORTANT FIX) */}
                      <div className="w-full h-full flex items-center justify-center overflow-hidden">
  <div
    className="origin-top-left"
    style={{
      zoom: 0.42,       // 🔥 THIS IS THE KEY
      width: "800px",
    }}
  >
    <ResumePreview
      resumeData={template.data}
      isPreview
    />
  </div>
</div>
                    </div>

                    {/* Name */}
                    {isCenter && (
                      <p className="mt-3 text-sm font-medium text-slate-700 text-center">
                        {template.name}
                      </p>
                    )}

                    {/* CTA */}
                    {isCenter && (
                      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
                        <Button
                          asChild
                          size="sm"
                          className="bg-teal-600 hover:bg-teal-700
                          text-white rounded-full px-6 text-xs shadow-xl"
                        >
                          <Link href="/templates">Browse all templates</Link>
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {templates.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === currentIndex
                    ? "bg-teal-600 scale-125"
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
