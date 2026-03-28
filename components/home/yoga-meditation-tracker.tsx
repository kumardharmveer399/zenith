'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { yogaMeditationProgram } from '@/lib/dummy-data';
import {
  Brain,
  Play,
  Pause,
  RotateCcw,
  Volume2,
} from 'lucide-react';

export function YogaMeditationTrackerInsane() {
  const program = yogaMeditationProgram;

  const [selectedDay, setSelectedDay] = useState(program.currentDay);

  // 🔥 TIMER MODES
  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // 🔊 SOUND
//   const playSound = () => {
//     const audio = new Audio('/bell.mp3'); // put in public folder
//     audio.play();
//   };

  // ⏱ TIMER ENGINE
  useEffect(() => {
    let interval: any;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 1) {
            // playSound();

            if (mode === 'focus') {
              setMode('break');
              return 5 * 60;
            } else {
              setMode('focus');
              return 25 * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const formatTime = () => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const selectedDayData = program.days.find(
    (d) => d.day === selectedDay
  );

  const progress =
    (program.completedDays / program.totalDays) * 100;

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset =
    circumference - (seconds / (mode === 'focus' ? 1500 : 300)) * circumference;

  const getCategoryColor = (cat: string) => {
    const map: any = {
      morning: 'bg-yellow-500/10 text-yellow-400',
      meditation: 'bg-purple-500/10 text-purple-400',
      exercise: 'bg-red-500/10 text-red-400',
      nutrition: 'bg-green-500/10 text-green-400',
    };
    return map[cat] || 'bg-gray-500/10';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/10">

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">
            {program.name}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {program.description}
          </p>
        </motion.div>

        {/* 🔥 TIMER + PROGRESS */}
        <div className="flex flex-col items-center mb-14">

          <div className="relative w-56 h-56">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-primary/20" />

            {/* SVG Ring */}
            <svg className="w-full h-full rotate-[-90deg]">
              <circle
                cx="112"
                cy="112"
                r="90"
                strokeWidth="12"
                className="text-muted"
                stroke="currentColor"
                fill="transparent"
              />
              <motion.circle
                cx="112"
                cy="112"
                r="90"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="text-primary"
                strokeLinecap="round"
              />
            </svg>

            {/* CENTER */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className="text-sm uppercase text-muted-foreground">
                {mode}
              </span>

              <span className="text-4xl font-bold">
                {formatTime()}
              </span>

              <span className="text-xs text-muted-foreground mt-1">
                {Math.round(progress)}% Program Done
              </span>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-4 rounded-full bg-primary text-white shadow-lg"
            >
              {isRunning ? <Pause /> : <Play />}
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setMode('focus');
                setSeconds(25 * 60);
              }}
              className="p-4 rounded-full border"
            >
              <RotateCcw />
            </button>

            {/* <button
              onClick={playSound}
              className="p-4 rounded-full border"
            >
              <Volume2 />
            </button> */}
          </div>
        </div>

        {/* DAY SELECTOR */}
        <div className="flex gap-3 overflow-x-auto mb-10 pb-2">
          {program.days.map((day) => (
            <motion.button
              key={day.day}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedDay(day.day)}
              className={`px-4 py-2 rounded-full border ${
                selectedDay === day.day
                  ? 'bg-primary text-white'
                  : 'border-border'
              }`}
            >
              Day {day.day}
            </motion.button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ACTIVITIES */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {selectedDayData?.focus}
            </h3>

            {selectedDayData?.activities.map((a) => (
              <motion.div
                key={a.id}
                whileHover={{ scale: 1.02 }}
                className="p-5 mb-4 rounded-xl border bg-white/5 backdrop-blur hover:shadow-xl"
              >
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">{a.name}</h4>
                  <span
                    className={`text-xs px-2 py-1 rounded ${getCategoryColor(
                      a.category
                    )}`}
                  >
                    {a.category}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-2">
                  {a.description}
                </p>

                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>⏱ {a.duration}m</span>
                  <span>🕐 {a.time}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {a.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary/10 px-2 py-1 rounded"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* INSIGHT PANEL */}
          <div className="space-y-6">

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border backdrop-blur">
              <Brain className="w-6 h-6 mb-2 text-primary" />

              <h4 className="font-semibold mb-2">
                Why This System Works
              </h4>

              <ul className="text-sm text-muted-foreground space-y-1">
                {program.benefits.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border text-center">
              <h4 className="font-semibold mb-2">
                Transformation Timeline
              </h4>

              <div className="text-primary font-bold">
                {program.overallBenefit.label}
              </div>

              <p className="text-sm text-muted-foreground mt-2">
                {program.overallBenefit.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}