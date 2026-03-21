'use client'

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {

  const stats = [
    { end: 10000, label: "Students Mentored", suffix: "+" },
    { end: 50, label: "Expert Mentors", suffix: "+" },
    { end: 15, label: "Courses Offered", suffix: "+" },
    { end: 100, label: "Success Rate", suffix: "%" }
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -6 }}
              className="p-6 rounded-xl border shadow-sm hover:shadow-lg"
            >

              <span className="text-3xl font-bold text-primary block">

                <CountUp
                  end={item.end}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />

                {item.suffix}

              </span>

              <p className="text-sm text-muted-foreground mt-2">
                {item.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}