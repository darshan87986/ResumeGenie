"use client"

import React from "react"
import { motion } from "framer-motion"

export function TrustSection() {
  const companies = ["Wipro", "Infosys", "TCS", "Reliance", "HCL", "Tech Mahindra"]
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 text-center">
        <h3 className="text-sm font-semibold text-muted-foreground">Trusted by teams at</h3>
      </div>
      <motion.div className="flex items-center justify-center gap-8 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        {companies.map((c) => (
          <div key={c} className="px-4 py-2 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="text-sm font-medium">{c}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
