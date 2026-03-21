'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form validation (basic)
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in all required fields')
      return
    }
    // Here you would normally send the data to an API endpoint
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? We'd love to hear from you. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-10">

              {/* Team Contacts */}
              <div className="space-y-6">

                <h3 className="text-xl font-bold text-primary">
                  Contact Our Team
                </h3>

                {/* Owner */}
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">

                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    O
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Director</p>
                    <p className="text-sm text-muted-foreground">Dr. Chunchun</p>

                    <div className="flex items-center gap-2 text-sm mt-1">
                      <Phone className="w-4 h-4 text-secondary" />
                      <a href="tel:+919905990681" className="hover:text-primary">
                        +91 9905990681
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-secondary" />
                      <a href="mailto:owner@zenithinstitute.com" className="hover:text-primary">
                        owner@zenithinstitute.com
                      </a>
                    </div>

                  </div>
                </div>

                {/* Tech Lead */}
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">

                  <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">
                    T
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">Technical Head</p>
                    <p className="text-sm text-muted-foreground">Dharmveer Mahtha</p>

                    <div className="flex items-center gap-2 text-sm mt-1">
                      <Phone className="w-4 h-4 text-secondary" />
                      <a href="tel:+919905990681" className="hover:text-primary">
                        +91 9905990681
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-secondary" />
                      <a href="mailto:kumardharmveer399@gmail.com" className="hover:text-primary">
                        kumardharmveer399@gmail.com
                      </a>
                    </div>

                  </div>
                </div>

              </div>

              {/* Institute Address */}
              <div className="space-y-6">

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Institute Address</h3>
                    <p className="text-muted-foreground">
                      Deoghar, Jharkhand 814112<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-blue-50 p-8 rounded-xl space-y-6">
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">We've received your message and will get back to you soon.</p>
                  </div>
                ) : (
                  <>
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="course">Course Inquiry</option>
                        <option value="mentorship">Mentorship Program</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                        placeholder="Please share your message or inquiry..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Location */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">
              Find Us on Map
            </h2>
            <p className="text-muted-foreground mt-2">
              Visit Zenith Institute at our campus location.
            </p>
          </div>

          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Deoghar,Jharkhand,India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for tips, updates, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            />
            <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
