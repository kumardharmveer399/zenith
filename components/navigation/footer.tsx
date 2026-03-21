import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <Image
                src="/logo_white.png"
                alt="Zenith Institute"
                width={140}
                height={140}
                className="object-contain"
              />

              <span className="font-bold text-lg tracking-wide">
                Zenith Institute
              </span>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Empowering students with expert mentorship, strategic study plans, 
              and personalized coaching for academic and career success.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-primary transition"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-primary transition"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-primary transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-primary transition"
              >
                <Instagram className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link href="/" className="text-white/80 hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/courses" className="text-white/80 hover:text-white transition">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/mentors" className="text-white/80 hover:text-white transition">
                  Mentors
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Programs</h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="/courses#neet" className="text-white/80 hover:text-white transition">
                  NEET Mentorship
                </a>
              </li>

              <li>
                <a href="/courses#jee" className="text-white/80 hover:text-white transition">
                  JEE Preparation
                </a>
              </li>

              <li>
                <a href="/courses#career" className="text-white/80 hover:text-white transition">
                  Career Guidance
                </a>
              </li>

              <li>
                <a href="/courses#study" className="text-white/80 hover:text-white transition">
                  Study Plans
                </a>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact Us</h3>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-white/70" />
                <a
                  href="tel:+919876543210"
                  className="text-white/80 hover:text-white transition"
                >
                  +91 9905990681
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-white/70" />
                <a
                  href="mailto:info@zenith.edu"
                  className="text-white/80 hover:text-white transition"
                >
                  kumardharmveer399@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-white/70" />
                <span className="text-white/80">
                  Deoghar, India
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">

            <p>
              © {new Date().getFullYear()} Zenith Institute. All rights reserved.
            </p>

            <div className="flex gap-4">

              <Link
                href="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-white transition"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}