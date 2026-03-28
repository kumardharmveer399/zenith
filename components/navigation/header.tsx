'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) setCurrentUser(JSON.parse(user));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Zenith Institute"
              width={100}
              height={100}
              className="object-contain"
            />
            <span className="hidden sm:block text-lg font-bold text-primary tracking-wide">
              Zenith Institute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-medium whitespace-nowrap">

            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-primary transition">
              About
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group">

              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition">
                Courses
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                <Link
                  href="/courses"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-xl"
                >
                  All Courses
                </Link>

                <a
                  href="/courses#neet"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  NEET Mentorship
                </a>

                <a
                  href="/courses#jee"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  JEE Preparation
                </a>

                <a
                  href="/courses#career"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-xl"
                >
                  Career Guidance
                </a>

              </div>
            </div>

            <Link href="/mentors" className="text-gray-700 hover:text-primary transition">
              Mentors
            </Link>

            <Link href="/pricing" className="text-gray-700 hover:text-primary transition">
              Pricing
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </Link>

          </nav>

          {/* Desktop Buttons */}
          {/* <div className="hidden lg:flex items-center gap-3">

            {currentUser ? (
              <>
                <button
                  onClick={() => router.push('/dashboard/mentors')}
                  className="px-5 py-2 text-primary hover:bg-primary/10 font-medium rounded-lg transition"
                >
                  Dashboard
                </button>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 text-primary hover:bg-primary/10 font-medium rounded-lg transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-6 py-2 bg-secondary text-white font-medium rounded-full hover:bg-secondary/90 hover:scale-105 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2">

            <Link
              href="/"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Courses */}
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="w-full flex justify-between items-center px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Courses
              <ChevronDown className={`w-4 h-4 transition ${isCoursesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCoursesOpen && (
              <div className="pl-6 space-y-2">

                <Link
                  href="/courses"
                  className="block py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Courses
                </Link>

                <a
                  href="/courses#neet"
                  className="block py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NEET Mentorship
                </a>

                <a
                  href="/courses#jee"
                  className="block py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  JEE Preparation
                </a>

                <a
                  href="/courses#career"
                  className="block py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career Guidance
                </a>

              </div>
            )}

            <Link
              href="/mentors"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentors
            </Link>

            <Link
              href="/pricing"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Buttons */}
            <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">

              {currentUser ? (
                <>
                  <button
                    onClick={() => {
                      router.push('/dashboard/mentors');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-primary hover:bg-primary/10 rounded-lg"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block text-center px-4 py-2 text-primary hover:bg-primary/10 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    className="block text-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}

            </div>

          </div>
        )}

      </div>
    </header>
  );
}