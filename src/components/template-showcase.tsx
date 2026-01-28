"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const templates = [
  {
    id: 1,
    name: "BETTY WASHINGTON",
    location: "Massapequa, NY 11758",
    phone: "(555) 555-5555",
    email: "example@example.com",
    color: "bg-teal-600",
    accentColor: "text-teal-600",
    borderColor: "border-teal-600",
    summary:
      "Service-oriented and resourceful Lead Patient Coordinator with in-depth clinical skills and assessment training.",
    experience: [
      {
        title: "LEAD PATIENT COORDINATOR",
        company: "Essentia Health, Solford, NY",
        date: "05/2017 to Current",
        duties: [
          "Monitor, track, and convey important patient information to healthcare staff",
          "Communicate effectively with caregivers, patients, families",
        ],
      },
    ],
    skills: ["Solid computer skills", "Patient services", "Organizational"],
    education: "Bachelor of Science - Health Administration",
  },
  {
    id: 2,
    name: "JUSTIN DAVIS",
    location: "Fairborn, OH 45324",
    phone: "555-555-5555",
    email: "example@example.com",
    color: "bg-slate-700",
    accentColor: "text-slate-700",
    borderColor: "border-slate-700",
    summary: "Energetic Dishwasher with experience using organization and teamwork in a busy kitchen environment.",
    qualifications: ["Ability to understand and follow directions", "Proven experience in standing for entire shifts"],
    skills: ["Customer Service", "Aided with purchases", "Locating items"],
    education: "Associate of Science - Culinary Arts",
  },
  {
    id: 3,
    name: "JONATHAN MURPHY",
    location: "Ronkonkoma, NY 11779",
    phone: "555-555-5555",
    email: "example@example.com",
    color: "bg-slate-800",
    accentColor: "text-slate-800",
    borderColor: "border-slate-800",
    summary:
      "Personable Medical Assistant Extern brings experience in balancing productivity, administrative and clinical duties.",
    qualifications: ["Ability to thrive in a fast-paced environment", "Knowledge of common safety hazards"],
    experience: [
      {
        title: "Medical Assistant Extern",
        company: "Mid Island Medical Center",
        date: "06/2020 - Current",
        duties: [],
      },
    ],
    education: "Associate of Science - Medical Assisting",
  },
  {
    id: 4,
    name: "ALAN PETERSON",
    location: "Ada, OK 74820",
    phone: "(555) 555-5555",
    email: "example@example.com",
    color: "bg-amber-600",
    accentColor: "text-amber-600",
    borderColor: "border-amber-600",
    summary: "Detail-oriented Certified Nursing Assistant with exceptional communication and rapport skills.",
    skills: ["Specimens collection", "Professional bedside manner", "Wound care"],
    experience: [
      {
        title: "Certified Nursing Assistant",
        company: "Kansas, OK",
        date: "04/2019 to Current",
        duties: ["Evaluate patients to identify wounds", "Assist with feeding"],
      },
    ],
    education: "Associate of Science - Health Care Technician",
  },
  {
    id: 5,
    name: "SARAH JOHNSON",
    location: "Austin, TX 78701",
    phone: "(555) 555-5555",
    email: "sarah.j@example.com",
    color: "bg-indigo-600",
    accentColor: "text-indigo-600",
    borderColor: "border-indigo-600",
    summary: "Results-driven Marketing Manager with 8+ years of experience in digital marketing and brand strategy.",
    experience: [
      {
        title: "Senior Marketing Manager",
        company: "TechCorp Inc., Austin, TX",
        date: "03/2019 to Current",
        duties: ["Lead a team of 12 professionals", "Developed multi-channel campaigns"],
      },
    ],
    skills: ["Digital Marketing", "Brand Strategy", "Team Leadership"],
    education: "MBA - Marketing, University of Texas",
  },
  {
    id: 6,
    name: "MICHAEL CHEN",
    location: "San Francisco, CA 94102",
    phone: "(555) 555-5555",
    email: "m.chen@example.com",
    color: "bg-emerald-600",
    accentColor: "text-emerald-600",
    borderColor: "border-emerald-600",
    summary:
      "Full-Stack Software Engineer with 6+ years building scalable web applications. Expert in React and Node.js.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "StartupXYZ, San Francisco",
        date: "01/2020 to Current",
        duties: ["Architected microservices handling 10M+ requests", "Mentored 5 junior developers"],
      },
    ],
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    education: "BS Computer Science - Stanford University",
  },
]

export function TemplatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % templates.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 3500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getVisibleIndices = () => {
    const indices = []
    for (let i = -2; i <= 2; i++) {
      indices.push((currentIndex + i + templates.length) % templates.length)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <section className="py-16 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Professional Resume Templates</h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Choose from our library of customizable{" "}
            <span className="text-teal-400 underline underline-offset-4 cursor-pointer hover:text-teal-300 transition-colors">
              resume templates
            </span>
            —professionally designed to help you land your dream job.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex justify-center items-center h-[420px] md:h-[480px] relative">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((templateIndex, position) => {
                const template = templates[templateIndex]
                const offset = position - 2 // -2, -1, 0, 1, 2
                const isCenter = offset === 0

                return (
                  <motion.div
                    key={`${template.id}-${position}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      x: offset * 220,
                      scale: isCenter ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7,
                      opacity: isCenter ? 1 : Math.abs(offset) === 1 ? 0.7 : 0.4,
                      zIndex: isCenter ? 10 : Math.abs(offset) === 1 ? 5 : 1,
                      rotateY: offset * -5,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="absolute cursor-pointer"
                    onClick={() => setCurrentIndex(templateIndex)}
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      className={`w-[200px] md:w-[240px] bg-white rounded-lg shadow-2xl overflow-hidden transition-shadow duration-300 ${isCenter ? "shadow-teal-500/30" : ""}`}
                    >
                      {/* Header */}
                      <div className={`${template.color} px-3 py-4 text-white`}>
                        <h3 className="text-sm md:text-base font-bold tracking-wide leading-tight">{template.name}</h3>
                        <div className="text-[9px] md:text-[10px] mt-1 opacity-90">
                          <p>{template.location}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3 text-[8px] md:text-[9px] space-y-2 h-[260px] md:h-[300px] overflow-hidden">
                        {/* Professional Summary */}
                        <div>
                          <h4
                            className={`font-bold ${template.accentColor} text-[9px] md:text-[10px] mb-0.5 uppercase tracking-wide`}
                          >
                            Summary
                          </h4>
                          <p className="text-slate-600 leading-relaxed line-clamp-2">{template.summary}</p>
                        </div>

                        {/* Experience */}
                        {template.experience && template.experience.length > 0 && (
                          <div>
                            <h4
                              className={`font-bold ${template.accentColor} text-[9px] md:text-[10px] mb-0.5 uppercase tracking-wide`}
                            >
                              Experience
                            </h4>
                            {template.experience.slice(0, 1).map((exp, i) => (
                              <div key={i}>
                                <p className="font-semibold text-slate-800 text-[8px] md:text-[9px]">{exp.title}</p>
                                <p className="text-slate-500 text-[7px] md:text-[8px]">{exp.company}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Qualifications */}
                        {template.qualifications && template.qualifications.length > 0 && (
                          <div>
                            <h4
                              className={`font-bold ${template.accentColor} text-[9px] md:text-[10px] mb-0.5 uppercase tracking-wide`}
                            >
                              Qualifications
                            </h4>
                            <ul className="space-y-0.5">
                              {template.qualifications.slice(0, 2).map((qual, i) => (
                                <li key={i} className="text-slate-600 flex items-start gap-1">
                                  <span className={`${template.accentColor}`}>•</span>
                                  <span className="line-clamp-1">{qual}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Skills */}
                        {template.skills && template.skills.length > 0 && (
                          <div>
                            <h4
                              className={`font-bold ${template.accentColor} text-[9px] md:text-[10px] mb-0.5 uppercase tracking-wide`}
                            >
                              Skills
                            </h4>
                            <div className="flex flex-wrap gap-0.5">
                              {template.skills.slice(0, 3).map((skill, i) => (
                                <span
                                  key={i}
                                  className="text-[7px] md:text-[8px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Education */}
                        <div>
                          <h4
                            className={`font-bold ${template.accentColor} text-[9px] md:text-[10px] mb-0.5 uppercase tracking-wide`}
                          >
                            Education
                          </h4>
                          <p className="text-slate-600 line-clamp-1">{template.education}</p>
                        </div>
                      </div>
                    </div>

                    {/* Edit Button - Only on center card */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10"
                      >
                        <Button
                          size="sm"
                          className="bg-slate-800 hover:bg-slate-700 text-white rounded-full px-5 text-xs shadow-xl"
                        >
                          Edit this template
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-teal-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
