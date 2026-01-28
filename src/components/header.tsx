"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Type, List, Trash2, Settings, Plus, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function TwinklingStar({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.1, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill="white"
          className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
        />
      </svg>
    </motion.div>
  )
}

function GenieLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="24" cy="42" rx="12" ry="3" fill="currentColor" opacity="0.3" />
      <path d="M18 38C18 38 16 42 24 42C32 42 30 38 30 38L28 32H20L18 38Z" fill="url(#lamp-gradient)" />
      <path
        d="M20 32C20 32 14 30 14 24C14 18 18 16 20 16L28 16C30 16 34 18 34 24C34 30 28 32 28 32H20Z"
        fill="url(#lamp-gradient)"
      />
      <path
        d="M34 24C34 24 38 23 40 20C42 17 40 14 40 14"
        stroke="url(#lamp-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 16C24 16 22 12 24 8C26 4 30 4 30 8C30 12 26 14 28 10C30 6 34 8 32 12C30 16 24 16 24 16Z"
        fill="url(#magic-gradient)"
        opacity="0.9"
      />
      <circle cx="20" cy="6" r="1.5" fill="#FFD700" />
      <circle cx="34" cy="10" r="1" fill="#FFD700" />
      <circle cx="28" cy="4" r="1.2" fill="#FFD700" />
      <defs>
        <linearGradient id="lamp-gradient" x1="14" y1="16" x2="34" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818cf8" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="magic-gradient" x1="24" y1="16" x2="30" y2="4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a5b4fc" />
          <stop offset="0.5" stopColor="#c4b5fd" />
      <stop offset="1" stopColor="#e879f9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-white to-emerald-50/60" />

      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-200/40 to-rose-100/30 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-100/50 to-emerald-100/40 blur-3xl"
        animate={{
          scale: [1.05, 1, 1.05],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-violet-100/30 to-indigo-100/20 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.div
              className="inline-block bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              AI-POWERED RESUME BUILDER
            </motion.div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mt-6">
              Land more interviews <br />
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-emerald-500">
                ResumeGenie's
              </span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                AI Resume Builder
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
              ATS Check, AI Writer, and One-Click Job Tailoring make your resume stand out to recruiters. Create your
              perfect resume in minutes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow duration-300"
              >
                <Link href="/editor">
                  Build Your Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background bg-transparent transition-colors duration-300"
              >
                <Link href="/job-recommendations">
                  Get Your Resume Score
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold text-lg">↑ 30%</span>
                <span className="text-sm text-muted-foreground">higher chance of getting a job</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold text-lg">↑ 42%</span>
                <span className="text-sm text-muted-foreground">higher response rate</span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-emerald-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">28,452 users</span>
              <span className="text-sm text-muted-foreground">landed interviews last month</span>
            </div>
          </motion.div>

          {/* Right side - Resume showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block h-[700px]"
          >
            <TwinklingStar className="top-32 right-8" size={14} />
            <TwinklingStar className="bottom-56 left-4" size={12} />

            {/* Stacked resume cards behind */}
            <motion.div
              className="absolute top-28 -left-4 w-72 h-[440px] bg-white rounded-xl shadow-lg border border-gray-100 rotate-[-6deg] z-0"
              animate={{ rotate: [-6, -4, -6] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-24 left-6 w-72 h-[440px] bg-white rounded-xl shadow-lg border border-gray-100 rotate-[-3deg] z-[1]"
              animate={{ rotate: [-3, -1, -3] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            />

            <motion.div
              className="absolute top-20 left-12 w-[420px] z-10 -skew-x-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute -top-2 -left-6 bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full text-sm font-bold shadow-lg z-20"
                animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                HIRED
              </motion.div>

              <motion.div
                className="absolute -top-14 left-[40%] -translate-x-1/2 z-30"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="/professional-man-with-beard-smiling-headshot.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mt-14">
                {/* Resume header - name centered under photo */}
                <div className="pt-12 pb-4 px-6 text-center border-b border-gray-50">
                  <h3 className="text-xl font-bold text-gray-900">Jamie Smith</h3>
                  <p className="text-cyan-600 font-medium text-sm">Senior Product Manager</p>
                  <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-500">
                    <span>📞 +1-500-000-0000</span>
                    <span>✉️ jamie@email.com</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">🔗 linkedin.com/in/jamie-smith</div>
                </div>

                {/* Resume body - two columns */}
                <div className="p-5 grid grid-cols-2 gap-5">
                  {/* Left column */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 border-b-2 border-cyan-500 pb-1 mb-2 inline-block uppercase tracking-wide">
                        Experience
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-[11px] font-semibold text-gray-800">Senior Product Manager</p>
                          <p className="text-[10px] text-cyan-600 font-medium">S-Health • San Francisco</p>
                          <p className="text-[9px] text-gray-400">2019 - Present</p>
                          <p className="text-[9px] text-gray-500 mt-1 leading-relaxed">
                            Developed go-to-market strategy and product roadmap for healthcare app...
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-gray-800">Product Manager</p>
                          <p className="text-[10px] text-cyan-600 font-medium">McDonald's Corporation</p>
                          <p className="text-[9px] text-gray-400">2014 - 2019</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 border-b-2 border-cyan-500 pb-1 mb-2 inline-block uppercase tracking-wide">
                        Education
                      </h4>
                      <p className="text-[11px] font-semibold text-gray-800">B.S. Business & Entrepreneurship</p>
                      <p className="text-[10px] text-cyan-600 font-medium">UC Berkeley</p>
                      <p className="text-[9px] text-gray-400">2010 - 2014</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 border-b-2 border-cyan-500 pb-1 mb-2 inline-block uppercase tracking-wide">
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {["User Research", "Product Specs", "SCRUM", "JIRA", "SQL", "Hotjar"].map((skill) => (
                          <span
                            key={skill}
                            className="text-[8px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 border-b-2 border-emerald-500 pb-1 mb-2 inline-block uppercase tracking-wide">
                        Achievements
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-500 text-xs">🏆</span>
                          <div>
                            <p className="text-[10px] font-semibold text-emerald-600">Helped Sony sell 100M PS4s</p>
                            <p className="text-[9px] text-gray-500">Sony reached their goal of selling 100M...</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-500 text-xs">💰</span>
                          <div>
                            <p className="text-[10px] font-semibold text-emerald-600">Developed and sold a startup</p>
                            <p className="text-[9px] text-gray-500">Developed a venture-backed startup...</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-500 text-xs">📱</span>
                          <div>
                            <p className="text-[10px] font-semibold text-emerald-600">App with 20M+ downloads</p>
                            <p className="text-[9px] text-gray-500">Led the development of the NA...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pie chart */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 border-b-2 border-violet-500 pb-1 mb-2 inline-block uppercase tracking-wide">
                        My Time
                      </h4>
                      <div className="flex items-center gap-3">
                        <motion.svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <circle cx="30" cy="30" r="24" fill="none" stroke="#f3f4f6" strokeWidth="7" />
                          <circle
                            cx="30"
                            cy="30"
                            r="24"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="7"
                            strokeDasharray="50 151"
                            strokeDashoffset="0"
                          />
                          <circle
                            cx="30"
                            cy="30"
                            r="24"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="7"
                            strokeDasharray="40 151"
                            strokeDashoffset="-50"
                          />
                          <circle
                            cx="30"
                            cy="30"
                            r="24"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="7"
                            strokeDasharray="30 151"
                            strokeDashoffset="-90"
                          />
                        </motion.svg>
                        <div className="text-[8px] space-y-1">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-violet-500" />
                            <span className="text-gray-600">Product roadmap</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-cyan-500" />
                            <span className="text-gray-600">Mentoring team</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-gray-600">User research</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Training/Courses */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 border-b-2 border-orange-400 pb-1 mb-2 inline-block uppercase tracking-wide">
                        Training / Courses
                      </h4>
                      <p className="text-[9px] text-orange-600 font-medium">
                        Introduction to Computer Science and Programming with Python (MIT, 2019)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-5 py-2 flex items-center justify-between border-t border-gray-100">
                  <span className="text-[9px] text-gray-400">www.resumegenie.com</span>
                  <div className="flex items-center gap-1 text-[9px] text-gray-400">
                    <span>Powered by</span>
                    <span className="font-semibold text-indigo-600">ResumeGenie</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute top-12 -right-4 bg-white rounded-lg shadow-xl px-2 py-1.5 flex items-center gap-1.5"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button className="text-[9px] text-gray-600 bg-gray-100 px-2 py-1 rounded flex items-center gap-1 hover:bg-gray-200 transition-colors">
                  📥 Download
                </button>
                <button className="text-[9px] text-gray-600 bg-gray-100 px-2 py-1 rounded flex items-center gap-1 hover:bg-gray-200 transition-colors">
                  🖨️ Print
                </button>
                <button className="text-[9px] text-gray-600 bg-gray-100 px-2 py-1 rounded flex items-center gap-1 hover:bg-gray-200 transition-colors">
                  ✉️ Email
                </button>
              </motion.div>

              <motion.div
                className="absolute -right-8 top-40 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-2xl font-bold text-emerald-500">98</span>
                    <span className="text-xs text-emerald-500">%</span>
                  </div>
                  <p className="text-[9px] font-medium text-gray-600">ATS Score</p>
                  <p className="text-[8px] text-emerald-500">Highly Optimized</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-32 bg-white rounded-xl px-3 py-2 shadow-xl border border-gray-100"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-700">Skills Match</p>
                    <p className="text-[8px] text-gray-500">12 key skills highlighted</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom toolbar */}
              <motion.div
                className="absolute -bottom-14 left-2 right-2 bg-white rounded-xl shadow-xl px-4 py-2.5 flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {/* Template dots */}
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === 0 ? "bg-cyan-500" : "bg-gray-300"}`}
                      whileHover={{ scale: 1.3 }}
                    />
                  ))}
                </div>

                {/* New entry button */}
                <motion.button
                  className="bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="h-3.5 w-3.5" />
                  New entry
                </motion.button>

                {/* Tools */}
                <div className="flex items-center gap-3">
                  <Type className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                  <List className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                  <Trash2 className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                  <Settings className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Create Resume", href: "/editor" },
    { name: "Templates", href: "/templates" },
    { name: "Cover Letter", href: "/cover-letter" },
    { name: "Find Jobs", href: "/job-recommendations" },
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 flex items-center justify-center text-primary">
                <GenieLogo className="h-10 w-10" />
              </div>
              <span className="hidden sm:block text-xl font-bold text-foreground">ResumeGenie</span>
            </Link>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
              Get Started
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border bg-background md:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">Get Started</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
