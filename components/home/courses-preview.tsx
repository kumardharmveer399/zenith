'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CourseCard } from '@/components/shared/course-card';

// ✅ Google Meet Link
const DAILY_MEET_LINK = "https://meet.google.com/abc-defg-hij";

// ✅ Session Config
const liveSession = {
  title: "Daily NEET Doubt Session",
  mentor: "Jhilli Meher",
  time: "19:00", // 6 AM (change to 18:00 for 6 PM)
  duration: 60,
};

export function CoursesPreview() {

  const [status, setStatus] = useState("UPCOMING");
  const [timeLeft, setTimeLeft] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [prevStatus, setPrevStatus] = useState("UPCOMING");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const [hours, minutes] = liveSession.time.split(":").map(Number);

      let start = new Date();
      start.setHours(hours, minutes, 0);

      let end = new Date(start.getTime() + liveSession.duration * 60000);

      // 🔁 Move to tomorrow if session ended
      if (now > end) {
        start.setDate(start.getDate() + 1);
        end = new Date(start.getTime() + liveSession.duration * 60000);
      }

      let newStatus = "UPCOMING";

      if (now >= start && now <= end) {
        newStatus = "LIVE";
      }

      // 🔔 Toast trigger
      if (prevStatus !== "LIVE" && newStatus === "LIVE") {
        setShowToast(true);
      }

      // ⏳ Countdown
      if (newStatus === "UPCOMING") {
        const diff = start.getTime() - now.getTime();

        const hrs = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft(`${hrs}h ${mins}m`);
      } else {
        setTimeLeft("");
      }

      setStatus(newStatus);
      setPrevStatus(newStatus);

    }, 1000);

    return () => clearInterval(interval);
  }, [prevStatus]);

  // ✅ Courses
  const courses = [
    {
      id: "neet-mentorship",
      title: "NEET Strategy Mentorship",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      price: 2499,
      mentorName: "Ahmad Sadan Akbar",
      rating: 4.8,
      reviews: 142,
    },
    {
      id: "memory-science",
      title: "Biology & Memory Science Learning",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      price: 1499,
      mentorName: "Lakhan Lal Mandal",
      rating: 4.6,
      reviews: 118,
    },
    {
      id: "career-guidance",
      title: "Career Guidance After 10th & 12th",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      price: 1999,
      mentorName: "Premjeet Murmu",
      rating: 4.7,
      reviews: 176,
    },
    {
      id: "jee-foundation",
      title: "JEE Foundation & Strategy",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
      price: 2999,
      mentorName: "Ramesh Kumar Das",
      rating: 4.9,
      reviews: 210,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔔 TOAST */}
        {showToast && (
          <div className="fixed top-5 right-5 bg-white shadow-lg border rounded-lg p-4 z-50 animate-slide-in">
            <p className="font-semibold text-red-600 mb-1">
              🔴 Live Class Started
            </p>

            <p className="text-sm text-muted-foreground mb-3">
              {liveSession.title}
            </p>

            <button
              onClick={() => {
                window.open(DAILY_MEET_LINK, "_blank");
                setShowToast(false);
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:scale-105 transition"
            >
              Join Now
            </button>
          </div>
        )}

        {/* 🔴 LIVE CARD */}
        <div
          className={`mb-8 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl p-6 shadow-lg flex items-center justify-between transition-all duration-500 hover:scale-[1.02] ${
            status === "LIVE" ? "animate-pulse-glow" : "animate-float"
          }`}
        >
          <div>
            <p className="text-sm opacity-90 transition-all duration-500">

              {status === "LIVE" && (
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
                  <span className="font-semibold">LIVE NOW</span>
                </span>
              )}

              {status === "UPCOMING" && `⏳ Next class in ${timeLeft}`}
            </p>

            <h3 className="text-xl font-bold">{liveSession.title}</h3>

            <p className="text-sm mt-1">
              Mentor: {liveSession.mentor}
            </p>
          </div>

          <button
            onClick={() => window.open(DAILY_MEET_LINK, "_blank")}
            disabled={status !== "LIVE"}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 active:scale-95 ${
              status === "LIVE"
                ? "bg-white text-red-600 hover:scale-105 hover:shadow-xl"
                : "bg-white/50 text-white cursor-not-allowed"
            }`}
          >
            {status === "LIVE" ? "Join Now" : "Available Soon"}
          </button>
        </div>

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Mentorship Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our expert mentorship programs for your success after 12th
          </p>
        </div>

        {/* COURSES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <Link href="/courses">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
              View All Courses
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}