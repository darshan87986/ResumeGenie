"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, MousePointer2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Zero to <span className="text-primary">Interview Hero</span> in 3 Magical Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let ResumeGenie transform your career story into a job-winning masterpiece
          </p>
        </motion.div>

        <div className="relative">
          {/* Dotted connecting lines - hidden on mobile */}
          <div
            className="hidden lg:block absolute top-32 left-[20%] w-[25%] border-t-2 border-dashed border-muted-foreground/30"
            style={{ transform: "rotate(10deg)" }}
          />
          <div
            className="hidden lg:block absolute top-32 right-[20%] w-[25%] border-t-2 border-dashed border-muted-foreground/30"
            style={{ transform: "rotate(-10deg)" }}
          />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Step 1 - Choose Template */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="flex flex-col items-center text-center"
            >
              {/* Visual Card */}
              <div className="relative mb-8 h-64 w-full max-w-[280px]">
                {/* Sparkle icon */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -left-2 z-10"
                >
                  <Sparkles className="h-8 w-8 text-amber-400" />
                </motion.div>

                {/* Pink Resume Template - Back */}
                <motion.div
                  className="absolute left-0 top-8 h-52 w-40 rounded-lg bg-gradient-to-br from-rose-50 to-rose-100 shadow-lg border border-rose-200 p-3 overflow-hidden"
                  animate={{ rotate: [-5, -3, -5] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="border-l-2 border-rose-400 pl-2 mb-2">
                    <div className="text-[8px] font-bold text-rose-700">IRENE DAVIS</div>
                    <div className="text-[6px] text-rose-500">Marketing Manager</div>
                  </div>
                  <div className="text-[5px] text-slate-600 mb-2">
                    <div className="font-semibold text-[6px] text-rose-600 mb-0.5">CONTACT</div>
                    <div>irene@email.com</div>
                    <div>+91 98765 43210</div>
                  </div>
                  <div className="text-[5px] text-slate-600 mb-2">
                    <div className="font-semibold text-[6px] text-rose-600 mb-0.5">EXPERIENCE</div>
                    <div className="font-medium">Senior Marketing Lead</div>
                    <div className="text-slate-400">TCS • 2020-Present</div>
                  </div>
                  <div className="text-[5px] text-slate-600">
                    <div className="font-semibold text-[6px] text-rose-600 mb-0.5">SKILLS</div>
                    <div className="flex flex-wrap gap-0.5">
                      <span className="px-1 py-0.5 bg-rose-200 rounded text-[4px]">SEO</span>
                      <span className="px-1 py-0.5 bg-rose-200 rounded text-[4px]">Analytics</span>
                      <span className="px-1 py-0.5 bg-rose-200 rounded text-[4px]">Strategy</span>
                    </div>
                  </div>
                </motion.div>

                {/* Blue Resume Template - Front */}
                <motion.div
                  className="absolute left-8 top-4 h-52 w-40 rounded-lg bg-gradient-to-br from-sky-50 to-sky-100 shadow-lg border border-sky-200 p-3 overflow-hidden"
                  animate={{ rotate: [3, 5, 3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  <div className="flex gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-sky-300 flex items-center justify-center text-[8px] font-bold text-sky-700">
                      JD
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-sky-800">JUSTIN DAVIS</div>
                      <div className="text-[6px] text-sky-600">Software Engineer</div>
                    </div>
                  </div>
                  <div className="text-[5px] text-slate-600 mb-2">
                    <div className="font-semibold text-[6px] text-sky-700 mb-0.5">PROFESSIONAL SUMMARY</div>
                    <div className="leading-tight">
                      Full-stack developer with 5+ years building scalable applications.
                    </div>
                  </div>
                  <div className="text-[5px] text-slate-600 mb-2">
                    <div className="font-semibold text-[6px] text-sky-700 mb-0.5">WORK HISTORY</div>
                    <div className="font-medium">Lead Developer</div>
                    <div className="text-slate-400">Infosys • 2019-Present</div>
                  </div>
                  <div className="text-[5px] text-slate-600">
                    <div className="font-semibold text-[6px] text-sky-700 mb-0.5">EDUCATION</div>
                    <div>B.Tech Computer Science</div>
                    <div className="text-slate-400">IIT Delhi • 2018</div>
                  </div>
                </motion.div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-xs">
                Choose a customizable template built to impress employers and pass ATS scans.
              </p>
            </motion.div>

            {/* Step 2 - AI Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Visual Card - Job Search Interface */}
              <div className="relative mb-8 h-64 w-full max-w-[320px]">
                <div className="absolute inset-0 rounded-xl bg-white shadow-xl border border-slate-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-slate-50 border-b border-slate-200 p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      <div className="ml-4 h-5 flex-1 rounded bg-slate-200 flex items-center px-2">
                        <span className="text-[8px] text-slate-400">Search job title...</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded bg-primary/5 border border-primary/20">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-xs text-slate-600">Content Writer</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                      <div className="h-4 w-4 rounded border border-slate-300" />
                      <span className="text-xs text-slate-500">Marketing Specialist</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-50">
                      <div className="h-4 w-4 rounded border border-slate-300" />
                      <span className="text-xs text-slate-500">Product Manager</span>
                    </div>

                    {/* Expert Recommended Badge */}
                    <motion.div
                      className="mt-3 flex items-center gap-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs font-medium text-emerald-700">ResumeGenie AI Recommended</span>
                    </motion.div>
                  </div>
                </div>

                {/* Floating cursor with click effect */}
                <motion.div
                  className="absolute bottom-12 left-1/2"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <MousePointer2 className="h-6 w-6 text-slate-600 fill-white" />
                </motion.div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-xs">
                Click or tap to add job-specific content written by AI and professional resume analysts.
              </p>
            </motion.div>

            {/* Step 3 - Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              {/* Visual Card - Download Options */}
              <div className="relative mb-8 h-64 w-full max-w-[300px]">
                {/* Main resume with gold accent */}
                <motion.div
                  className="absolute left-4 top-4 h-48 w-36 rounded-lg bg-white shadow-lg border-l-4 border-amber-400 p-3 overflow-hidden"
                  animate={{ rotate: [-3, 0, -3] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-[9px] font-bold text-slate-800 italic mb-1">Philip Goodwin</div>
                  <div className="text-[6px] text-amber-600 mb-2">Product Designer</div>
                  <div className="text-[5px] text-slate-600 mb-2">
                    <div className="font-semibold text-[6px] text-slate-700 mb-0.5">SUMMARY</div>
                    <div className="leading-tight">Creative designer with 7+ years crafting user experiences.</div>
                  </div>
                  <div className="text-[5px] text-slate-600 mb-2">
                    <div className="font-semibold text-[6px] text-slate-700 mb-0.5">EXPERIENCE</div>
                    <div className="font-medium">Senior Designer</div>
                    <div className="text-slate-400">Wipro • 2018-Present</div>
                  </div>
                  <div className="text-[5px] text-slate-600">
                    <div className="font-semibold text-[6px] text-slate-700 mb-0.5">SKILLS</div>
                    <div className="flex flex-wrap gap-0.5">
                      <span className="px-1 py-0.5 bg-amber-100 rounded text-[4px]">Figma</span>
                      <span className="px-1 py-0.5 bg-amber-100 rounded text-[4px]">UI/UX</span>
                      <span className="px-1 py-0.5 bg-amber-100 rounded text-[4px]">Adobe</span>
                    </div>
                  </div>
                </motion.div>

                {/* Format badges */}
                <div className="absolute top-2 right-8 flex flex-col gap-2">
                  <motion.div
                    className="px-3 py-1.5 rounded bg-red-500 text-white text-xs font-bold shadow-md"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    PDF
                  </motion.div>
                  <motion.div
                    className="px-3 py-1.5 rounded bg-blue-500 text-white text-xs font-bold shadow-md"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                  >
                    WORD
                  </motion.div>
                  <motion.div
                    className="px-3 py-1.5 rounded bg-amber-500 text-white text-xs font-bold shadow-md"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                  >
                    TXT
                  </motion.div>
                </div>

                {/* Download dialog */}
                <motion.div
                  className="absolute bottom-0 right-0 w-44 rounded-lg bg-white shadow-xl border border-slate-200 p-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-slate-600">Download resume as</span>
                    <div className="h-3 w-3 rounded-full bg-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="h-2 w-2 text-white" />
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-primary" />
                      <span className="text-[9px] text-slate-500">Adobe PDF (.pdf)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full border-2 border-slate-300" />
                      <span className="text-[9px] text-slate-500">MS Word (.docx)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full border-2 border-slate-300" />
                      <span className="text-[9px] text-slate-500">Plain Text (.txt)</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 text-[9px] py-1 px-2 rounded border border-slate-200 text-slate-500">
                      Cancel
                    </button>
                    <button className="flex-1 text-[9px] py-1 px-2 rounded bg-primary text-white">Download</button>
                  </div>
                </motion.div>

                {/* Checkmark */}
                <motion.div
                  className="absolute top-0 right-0"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                </motion.div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-xs">
                Download your resume and share it instantly from your desktop or mobile device.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href="/editor">
              Build my resume
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
