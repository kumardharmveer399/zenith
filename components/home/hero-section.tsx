'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ChatbotWidget } from './chatbot-widget'
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20 lg:pt-24">

      {/* Background glow with animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-blue-200/30 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-orange-200/30 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT CONTENT with fade-in animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-xl lg:max-w-2xl order-2 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary leading-tight mb-4 lg:mb-6">
              Plan Your Future
              <br />
              <span className="text-secondary block min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] xl:min-h-[90px]">
                <TypeAnimation
                  sequence={[
                    "With Expert Mentors",
                    2000,
                    "With IIT Mentors",
                    2000,
                    "With Career Experts",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="inline-block"
                />
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-5 lg:mb-8 max-w-lg lg:max-w-xl"
            >
              Get the right guidance after 12th. Our experienced mentors help
              you succeed in NEET, JEE, and career planning with personalized
              mentorship and proven strategies.
            </motion.p>

            {/* CTA Buttons with hover animations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 lg:mb-8"
            >
              <Link href="/courses">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-secondary text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-secondary/90 transition-colors"
                >
                  Explore Courses
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </motion.div>
                </motion.button>
              </Link>

              <Link href="/mentors">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full border-2 border-primary text-primary font-semibold text-sm sm:text-base hover:bg-primary hover:text-white transition-all"
                >
                  Meet Mentors
                </motion.button>
              </Link>
            </motion.div>

            {/* TRUST BADGES with counter animations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-sm text-muted-foreground"
            >
              {[
                { end: 10000, label: "Students Guided", suffix: "+" },
                { end: 50, label: "Expert Mentors", suffix: "+" },
                { end: 95, label: "Success Rate", suffix: "%" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: 0.8 + (index * 0.1)
                    }}
                    className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary block"
                  >
                    <CountUp end={item.end} duration={3} separator="," />
                    {item.suffix}
                  </motion.span>
                  <p className="text-xs sm:text-sm">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE - ENLARGED */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center w-full order-1 lg:order-2 mb-6 lg:mb-0"
          >
            {/* Main image container - significantly larger */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl -mt-4 sm:-mt-6 lg:-mt-12">
              
              {/* Main image with floating animation */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full relative z-10"
              >
                <Image
                  src="/hero-edu.png"
                  alt="Education Illustration"
                  width={1000}
                  height={1000}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Animated floating particles - hidden on mobile, visible on larger screens */}
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.8, 0.4],
                  x: [0, 40, 0],
                  y: [0, -40, 0]
                }}
                transition={{ 
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden lg:block absolute top-10 right-0 lg:right-10 w-32 h-32 lg:w-40 lg:h-40 bg-blue-400/20 rounded-full blur-xl"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                  x: [0, -30, 0],
                  y: [0, 30, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="hidden lg:block absolute bottom-10 left-0 lg:left-10 w-40 h-40 lg:w-48 lg:h-48 bg-orange-400/20 rounded-full blur-xl"
              />

              {/* FLOATING BADGE - Responsive positioning */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -8, 8, -8, 0],
                  transition: { duration: 0.5 }
                }}
                className="absolute -top-3 left-2 sm:-top-4 sm:left-3 md:-top-5 md:left-4 lg:left-10 bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 shadow-xl border border-primary/20 z-20"
              >
                <motion.div 
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"
                  />
                  <span className="font-semibold text-primary text-xs sm:text-sm md:text-base">Join Now!</span>
                </motion.div>
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center">Limited Seats</p>
              </motion.div>

              {/* Additional decorative elements - hidden on mobile */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="hidden lg:block absolute -bottom-16 -right-16 w-48 h-48 lg:w-56 lg:h-56 border-4 border-secondary/20 rounded-full"
              />

              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="hidden lg:block absolute -top-16 -left-16 w-40 h-40 lg:w-48 lg:h-48 border-4 border-primary/20 rounded-full"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <ChatbotWidget />
    </section>
  )
}