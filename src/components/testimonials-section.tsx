"use client";

import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      {/* Gradient Background */}
      <GradientBackground />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-20 max-w-2xl text-4xl font-bold text-slate-900">
          Trusted by professionals & executives
        </h2>

        {/* Testimonial Canvas */}
        <div className="relative h-[520px]">
          {/* LEFT */}
          <ReviewCard
            className="absolute left-0 top-24"
            rating={5}
            time="4 hours ago"
            content="It's really impressive, keep improving. Good luck!"
            author="Sudharsan"
          />

          {/* CENTER (HIGHLIGHT) */}
          <ReviewCard
            highlight
            className="absolute left-1/2 top-0 -translate-x-1/2 scale-110"
            rating={4.5}
            content="5,045 happy customers shared their experience."
          />

          {/* RIGHT */}
          <ReviewCard
            className="absolute right-0 top-20"
            rating={5}
            time="1 day ago"
            content="The CV editor is very good, easy to use, and has many formatting options."
            author="Anastasija"
          />

          {/* BOTTOM LEFT */}
          <ReviewCard
            className="absolute left-24 bottom-0"
            rating={5}
            time="21 hours ago"
            content="Very smooth experience. Clean UI and helpful suggestions."
            author="Rohit"
          />

          {/* BOTTOM RIGHT */}
          <ReviewCard
            className="absolute right-24 bottom-0"
            rating={4}
            time="4 days ago"
            content="Very good for CV building. Highly recommended."
            author="Arjun"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* BACKGROUND (STRONG & VISIBLE)       */
/* ---------------------------------- */

function GradientBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-500 opacity-50 blur-[80px]" />
      <div className="absolute right-[-200px] top-[-80px] h-[700px] w-[700px] rounded-full bg-blue-600 opacity-40 blur-[100px]" />
      <div className="absolute left-1/3 bottom-[-250px] h-[700px] w-[700px] rounded-full bg-cyan-400 opacity-50 blur-[80px]" />
    </div>
  );
}

/* ---------------------------------- */
/* REVIEW CARD (API-READY)             */
/* ---------------------------------- */

interface ReviewCardProps {
  rating: number;
  content: string;
  author?: string;
  time?: string;
  highlight?: boolean;
  className?: string;
}

function ReviewCard({
  rating,
  content,
  author,
  time,
  highlight,
  className = ""
}: ReviewCardProps) {
  return (
    <div
      className={`w-[300px] rounded-2xl bg-white p-6 shadow-xl transition-all
      ${highlight ? "border border-emerald-400" : ""}
      ${className}`}
    >
      {/* Stars */}
      <div className="mb-3 flex gap-1">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < Math.round(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-slate-300"
              }`}
            />
          ))}
      </div>

      {time && <p className="mb-2 text-sm text-slate-500">{time}</p>}

      <p className="mb-4 text-slate-800">{content}</p>

      {author && (
        <p className="text-sm font-medium text-slate-700">— {author}</p>
      )}
    </div>
  );
}
