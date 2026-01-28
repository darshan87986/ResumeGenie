"use client";

import { motion } from "framer-motion";

function ResumePreview({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`h-[360px] w-[260px] rounded-xl shadow-2xl p-5 text-sm leading-snug ${
        dark
          ? "bg-slate-900 text-slate-200"
          : "bg-white text-slate-900"
      }`}
    >
      {/* Header */}
      <div className="mb-3">
        <h4 className="text-base font-semibold">
          Alex Johnson
        </h4>
        <p className="text-xs text-slate-400">
          Frontend Developer
        </p>
      </div>

      {/* Summary */}
      <p className="mb-3 text-xs">
        Creative frontend developer with 3+ years of experience building
        responsive, user-focused web applications.
      </p>

      {/* Experience */}
      <div className="mb-3">
        <h5 className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-500">
          Experience
        </h5>
        <ul className="space-y-1 text-xs list-disc list-inside">
          <li>Built modern UI using React & Tailwind</li>
          <li>Improved page speed by 35%</li>
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h5 className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-500">
          Skills
        </h5>
        <div className="flex flex-wrap gap-1 text-[10px]">
          <span className="rounded bg-indigo-500/10 px-2 py-0.5">
            React
          </span>
          <span className="rounded bg-indigo-500/10 px-2 py-0.5">
            Tailwind
          </span>
          <span className="rounded bg-indigo-500/10 px-2 py-0.5">
            JavaScript
          </span>
        </div>
      </div>
    </div>
  );
}

export function SupportSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative flex items-center justify-center min-h-[560px]">

          {/* LEFT STACK */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="absolute left-0 top-28 hidden lg:block"
          >
            <ResumePreview />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="absolute left-28 top-40 hidden lg:block"
          >
            <ResumePreview dark />
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-md rounded-2xl bg-slate-900/90 backdrop-blur p-10 text-white shadow-2xl border border-white/10"
          >
            <h3 className="mb-4 text-3xl font-semibold">
              Human support. Always.
            </h3>

            <p className="mb-4 text-slate-300">
              Need help with your resume, templates, or exports?
              Our support team responds fast and understands the product.
            </p>

            <p className="mb-6 text-slate-300">
              No bots. No scripts. Just real answers from real people.
            </p>

            {/* Reviews placeholder */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
              ⭐⭐⭐⭐⭐
              <span>Trusted by professionals worldwide</span>
            </div>

            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium hover:bg-indigo-500 transition">
              Contact Us
            </button>
          </motion.div>

          {/* RIGHT STACK */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="absolute right-0 top-32 hidden lg:block"
          >
            <ResumePreview />
          </motion.div>

          {/* COFFEE – FILLS CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 90 }}
            viewport={{ once: true }}
            className="absolute right-36 top-10 hidden lg:flex"
          >
            <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center text-5xl">
              ☕
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
