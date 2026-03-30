'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const res = await fetch("https://formspree.io/f/xvzvawbg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })

    if (res.ok) {
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* 🌈 SOFT BACKGROUND BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-200/40 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-200/40 blur-[120px]" />

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          className="w-28 mx-auto mb-6 drop-shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s build something great
        </motion.h1>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
          Have a question or idea? We’d love to hear from you.
        </p>
      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* 👤 TEAM CARDS */}
            {[
              {
                role: "Director",
                name: "Dr. Chunchun",
                email: "owner@zenithinstitute.com",
                color: "from-purple-400 to-indigo-400",
                img: "/mentors/chunchun.jpeg"
              },
              {
                role: "Technical Head",
                name: "Dharmveer Mahtha",
                email: "kumardharmveer399@gmail.com",
                color: "from-blue-400 to-indigo-400",
                img: "/mentors/dharmveer.jpeg"
              }
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/60 to-white/20 shadow-lg"
              >
                <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-6 relative overflow-hidden">

                  {/* Glow */}
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${person.color} blur-2xl`} />

                  <div className="relative z-10 flex items-center gap-4">
                    <motion.img
                      src={person.img}
                      className="w-14 h-14 rounded-full shadow-md"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    />

                    <div>
                      <h3 className="text-sm text-gray-500">{person.role}</h3>
                      <p className="text-lg font-semibold text-gray-800">
                        {person.name}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-gray-600 relative z-10">
                    <div className="flex items-center gap-2 hover:translate-x-1 transition">
                      <Phone size={16} /> +91 9905990681
                    </div>

                    <div className="flex items-center gap-2 hover:translate-x-1 transition">
                      <Mail size={16} /> {person.email}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}

            {/* 📍 LOCATION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl p-[1px] bg-gradient-to-br from-indigo-200 to-purple-200"
            >
              <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-6 space-y-3 text-gray-600">
                <div className="flex items-center gap-2 hover:translate-x-1 transition">
                  <MapPin size={16} /> Deoghar, Jharkhand, India
                </div>

                <div className="flex items-center gap-2 hover:translate-x-1 transition">
                  <Clock size={16} /> Mon - Sat: 9AM - 6PM
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            className="lg:col-span-2 rounded-3xl p-10 bg-white/70 backdrop-blur-2xl shadow-xl border border-white/50"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {submitted ? (
                <div className="text-center py-16">
                  <h3 className="text-3xl font-bold text-green-500">
                    Message Sent 🎉
                  </h3>
                  <p className="text-gray-500 mt-2">
                    We’ll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FloatingInput name="fullName" label="Full Name" />
                    <FloatingInput name="email" label="Email" type="email" />
                  </div>

                  <FloatingInput name="phone" label="Phone" />

                  <FloatingSelect name="subject" label="Subject" />

                  <FloatingTextarea name="message" label="Message" />

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-full py-3 rounded-xl font-semibold text-white 
                    bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                  >
                    Send Message 🚀
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>

        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Deoghar,Jharkhand,India&output=embed"
            className="w-full h-[400px]"
          />
        </div>
      </section>

    </div>
  )
}

/* INPUT */
function FloatingInput({ name, label, type = "text" }: any) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required
        placeholder=" "
        className="floating-input peer"
      />
      <label className="floating-label">{label}</label>
    </div>
  )
}

/* SELECT */
function FloatingSelect({ name, label }: any) {
  return (
    <div className="relative">
      <select name={name} required className="floating-input peer">
        <option value=""></option>
        <option value="course">Course Inquiry</option>
        <option value="mentorship">Mentorship</option>
        <option value="general">General</option>
      </select>
      <label className="floating-label">{label}</label>
    </div>
  )
}

/* TEXTAREA */
function FloatingTextarea({ name, label }: any) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={5}
        required
        placeholder=" "
        className="floating-input peer resize-none"
      />
      <label className="floating-label">{label}</label>
    </div>
  )
}