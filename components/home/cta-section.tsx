'use client'

import { Calendar } from 'lucide-react';
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showScheduler, setShowScheduler] = useState(false);

  // Google Calendar scheduling link - replace with your actual Calendly/Google Calendar link
  const schedulingLink = "https://calendly.com/kumardharmveer399/30min";

  const handleScheduleClick = () => {
    // Option 1: Open in new tab
    window.open(schedulingLink, '_blank');

    // Option 2: Show embedded scheduler (if you want to keep users on your site)
    // setShowScheduler(true);
  };

  const stats = [
    { end: 500, label: "Students Mentored", suffix: "+" },
    { end: 4.7, label: "Avg Rating", suffix: "", decimals: 1 },
    { end: 100, label: "Success Rate", suffix: "%" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Decorative elements with animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"
      />

      {/* Animated particles */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-20 w-32 h-32 bg-purple-300/10 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, delay: 3 }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-300/10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/90 mb-8"
          >
            Book a free counseling session with our experts today. Get personalized guidance tailored to your goals and aspirations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleClick}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all text-lg w-full sm:w-auto shadow-lg hover:shadow-xl group"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Calendar className="w-5 h-5" />
              </motion.div>
              Book a Free Counseling Session
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Trust indicators with counting animation */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 + (index * 0.1)
                  }}
                  className="text-3xl font-bold text-white"
                >
                  {inView ? (
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      separator=","
                      decimals={stat.decimals || 0}
                    />
                  ) : '0'}
                  {stat.suffix}
                </motion.div>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Embedded Scheduler Modal (Optional) */}
      {showScheduler && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowScheduler(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">Schedule Your Free Session</h3>
              <button
                onClick={() => setShowScheduler(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Embed Calendly or Google Calendar iframe */}
            <iframe
              src="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_EMBED_LINK_HERE"
              className="w-full h-[600px] rounded-lg"
              frameBorder="0"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}