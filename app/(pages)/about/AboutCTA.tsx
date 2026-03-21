"use client"

import { Calendar, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutCTA() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Join Zenith Institute?
          </h2>

          <p className="text-lg text-white/90 mb-10">
            Start your journey to success with our expert mentors. Book a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* Calendly */}
            <motion.a
              href="https://calendly.com/kumardharmveer399/30min"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
            >
              <Calendar className="w-6 h-6" />
              Book Free Consultation
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.a>

          </div>

        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  )
}