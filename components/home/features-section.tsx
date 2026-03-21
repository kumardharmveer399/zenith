'use client';

import {
  Stethoscope,
  Zap,
  Briefcase,
  Lightbulb,
  BookOpen,
  Brain,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { id: "brain", icon: Brain, title: "21 DaysBrain Boost" },
  { id: "neet", icon: Stethoscope, title: "NEET" },
  { id: "jee", icon: Zap, title: "JEE" },
  { id: "career", icon: Briefcase, title: "Career Options" },
  { id: "tips", icon: Lightbulb, title: "Study Tips" },
  { id: "exam", icon: BookOpen, title: "Exam Prep" },
  { id: "dev", icon: Code, title: "Tech Mentorship" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">

      {/* BIG background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to succeed — from exam prep to career growth
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {features.map(({ id, icon: Icon, title }) => (
            <motion.div
              key={id}
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative"
            >

              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-blue-400 to-secondary opacity-0 group-hover:opacity-100 blur-sm transition"></div>

              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-2xl transition-all duration-300">

                {/* Icon Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition"></div>

                {/* Content */}
                <div className="relative flex flex-col items-center text-center">

                  {/* Icon */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 shadow-sm"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {title}
                  </h3>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}