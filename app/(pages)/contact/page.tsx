'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [callModal, setCallModal] = useState<any>(null)

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

  const contacts = [
    {
      role: "Director",
      name: "Chunchun",
      phones: ["+918228867070", "+917079680498"],
      email: "owner@zenithinstitute.com",
      img: "/mentors/chunchun.jpeg"
    },
    {
      role: "Technical Head",
      name: "Dharmveer Mahtha",
      phones: ["+919204927674"],
      email: "kumardharmveer399@gmail.com",
      img: "/mentors/dharmveer.jpeg"
    },
    {
      role: "Academic Support",
      name: "Lakhan Lal Mandal",
      phones: ["+917079680498"],
      email: "lakhankstkst@gmail.com",
      img: "/mentors/lakhan.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden">

      {/* 🌈 BACKGROUND BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-200/40 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-200/40 blur-[120px]" />

      {/* 💬 WHATSAPP FLOAT */}
      <a
        href="https://wa.me/918228867070?text=Hi%20I%20want%20to%20know%20about%20courses"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        <MessageCircle size={28} />
      </a>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          className="text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-500 mt-4 text-lg">
          We’re here to help you anytime 🚀
        </p>
      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {contacts.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-3xl p-6"
            >
              <div className="flex items-center gap-4">
                <img src={person.img} className="w-14 h-14 rounded-full shadow-md" />

                <div>
                  <p className="text-xs text-gray-500">{person.role}</p>
                  <h3 className="text-lg font-bold">{person.name}</h3>
                  <span className="text-xs text-green-600 font-medium">
                    ● Available Now
                  </span>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                {person.phones.map((p, idx) => (
                  <div key={idx}>📞 {p}</div>
                ))}
                <div>✉️ {person.email}</div>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setCallModal(person)}
                  className="flex-1 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600"
                >
                  Call
                </button>

                <a
                  href={`mailto:${person.email}`}
                  className="flex-1 py-2 text-center rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                >
                  Email
                </a>
              </div>
            </motion.div>
          ))}

          {/* LOCATION */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Deoghar, Jharkhand
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Clock size={16} /> Mon - Sat: 9AM - 6PM
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <motion.div
          className="lg:col-span-2 bg-white/70 backdrop-blur-2xl border border-white/40 p-10 rounded-3xl shadow-2xl"
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
                  We’ll contact you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <PremiumInput name="fullName" label="Full Name" />
                  <PremiumInput name="email" label="Email" type="email" />
                </div>

                <PremiumInput name="phone" label="Phone Number" />
                <PremiumSelect name="subject" label="Subject" />
                <PremiumTextarea name="message" label="Message" />

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

      {/* 📞 CALL MODAL */}
      <AnimatePresence>
        {callModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-[90%] max-w-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-lg font-bold mb-4">
                Call {callModal.name}
              </h3>

              {callModal.phones.map((p: string, i: number) => (
                <a
                  key={i}
                  href={`tel:${p}`}
                  className="block bg-green-500 text-white text-center py-2 rounded mb-2"
                >
                  {p}
                </a>
              ))}

              <button
                onClick={() => setCallModal(null)}
                className="mt-2 w-full border py-2 rounded"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

/* PREMIUM INPUT */
function PremiumInput({ name, label, type = "text" }: any) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required
        placeholder=" "
        className="peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
      />
      <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
        peer-focus:top-[-8px] peer-focus:text-xs bg-white px-1">
        {label}
      </label>
    </div>
  )
}

/* SELECT */
function PremiumSelect({ name, label }: any) {
  return (
    <div className="relative">
      <select name={name} required className="w-full border rounded-xl px-4 py-3">
        <option value=""></option>
        <option value="course">Course Inquiry</option>
        <option value="mentorship">Mentorship</option>
      </select>
      <label className="absolute left-4 top-[-8px] text-xs bg-white px-1 text-gray-500">
        {label}
      </label>
    </div>
  )
}

/* TEXTAREA */
function PremiumTextarea({ name, label }: any) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={5}
        required
        className="w-full border rounded-xl px-4 py-3"
      />
      <label className="absolute left-4 top-[-8px] text-xs bg-white px-1 text-gray-500">
        {label}
      </label>
    </div>
  )
}