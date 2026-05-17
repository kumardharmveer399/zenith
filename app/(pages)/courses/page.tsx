'use client';

import { useState } from 'react';
import { Calendar, Play, Clock, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';

type LiveClass = {
  id: string;
  title: string;
  mentor: string;
  grade: string;
  subject: string;
  startTime: string;
  endTime: string;
  duration: number;
  classType: 'live' | 'recorded';
  enrolledStudents: number;
  maxCapacity: number;
  description: string;
};

type Course = {
  id: string;
  name: string;
  grade: string;
  type: 'class' | 'dropper';
  subType?: string;
  price: number;
  discountPrice?: number;
  duration: string;
  students: number;
  rating: number;
  description: string;
  mentor: string;
  features: string[];
};

/* -------------------------------------------------------------------------- */
/*                            LIVE / RECORDED DATA                            */
/* -------------------------------------------------------------------------- */

export const liveClasses: LiveClass[] = [
  {
    id: 'live-1',
    title: 'Physics Live Master Class',
    mentor: 'Chunchun Sir (Physics, Kota Faculty, 2+ Years Experience)',
    grade: 'Class 12',
    subject: 'Physics',
    startTime: 'Tentative',
    endTime: '',
    duration: 90,
    classType: 'live',
    enrolledStudents: 120,
    maxCapacity: 300,
    description:
      'Advanced physics preparation for boards, JEE and NEET with Kota-style teaching methods.',
  },
  {
    id: 'live-2',
    title: 'Biology Interactive Session',
    mentor: 'Dr. Amit Kumar Dubey (Radio Oncologist, 8+ Years Experience)',
    grade: 'Class 11',
    subject: 'Biology',
    startTime: 'Tentative',
    endTime: '',
    duration: 90,
    classType: 'live',
    enrolledStudents: 110,
    maxCapacity: 250,
    description:
      'Concept-oriented biology sessions designed for board and NEET aspirants.',
  },
  {
    id: 'live-3',
    title: 'Chemistry Concept Builder',
    mentor: 'Lakhan Lal Mandal',
    grade: 'Class 12',
    subject: 'Chemistry',
    startTime: 'Tentative',
    endTime: '',
    duration: 90,
    classType: 'live',
    enrolledStudents: 95,
    maxCapacity: 250,
    description:
      'Detailed chemistry lectures with conceptual clarity and problem-solving techniques.',
  },
  {
    id: 'live-4',
    title: 'Mathematics Problem Solving',
    mentor: 'Rahul Kumar',
    grade: 'Class 10',
    subject: 'Mathematics',
    startTime: 'Tentative',
    endTime: '',
    duration: 75,
    classType: 'live',
    enrolledStudents: 80,
    maxCapacity: 200,
    description:
      'Interactive mathematics classes with shortcut methods and regular practice.',
  },

  // RECORDED CLASSES
  {
    id: 'recorded-1',
    title: 'Recorded Physics Lectures',
    mentor: 'Chunchun Sir',
    grade: 'Class 12',
    subject: 'Physics',
    startTime: 'Anytime',
    endTime: 'Anytime',
    duration: 60,
    classType: 'recorded',
    enrolledStudents: 450,
    maxCapacity: -1,
    description:
      'Complete recorded physics lectures with notes and revision support.',
  },
  {
    id: 'recorded-2',
    title: 'Recorded Biology Sessions',
    mentor: 'Dr. Amit Kumar Dubey',
    grade: 'Class 11',
    subject: 'Biology',
    startTime: 'Anytime',
    endTime: 'Anytime',
    duration: 55,
    classType: 'recorded',
    enrolledStudents: 380,
    maxCapacity: -1,
    description:
      'Recorded biology sessions with diagrams, notes and NEET-level explanations.',
  },
];

/* -------------------------------------------------------------------------- */
/*                                  COURSES                                   */
/* -------------------------------------------------------------------------- */

export const courses: Course[] = [
  // CLASS 1-5
  {
    id: 'course-1',
    name: 'Science Basics Program',
    grade: 'Class 1-5',
    type: 'class',
    price: 4999,
    duration: '12 Months',
    students: 150,
    rating: 4.7,
    description:
      'Basic science learning program for young students with interactive teaching methods.',
    mentor: 'Jagarnath Mandal',
    features: [
      'Live Classes',
      'Interactive Learning',
      'Weekly Tests',
      'Concept Building',
    ],
  },
  {
    id: 'course-2',
    name: 'Foundation Mathematics',
    grade: 'Class 1-5',
    type: 'class',
    price: 4999,
    duration: '12 Months',
    students: 170,
    rating: 4.8,
    description:
      'Strong mathematical foundation for junior students with regular practice.',
    mentor: 'S M Sir',
    features: [
      'Practice Worksheets',
      'Concept Clarity',
      'Live Sessions',
      'Doubt Support',
    ],
  },

  // CLASS 6-8
  {
    id: 'course-3',
    name: 'Middle School Foundation Program',
    grade: 'Class 6-8',
    type: 'class',
    price: 7999,
    duration: '12 Months',
    students: 240,
    rating: 4.8,
    description:
      'Comprehensive foundation program for science and mathematics.',
    mentor: 'A K Mam',
    features: [
      'Foundation Building',
      'Weekly Practice',
      'Study Material',
      'Live Classes',
    ],
  },

  // CLASS 9-10
  {
    id: 'course-4',
    name: 'Board Preparation Program',
    grade: 'Class 9-10',
    type: 'class',
    price: 9999,
    discountPrice: 8499,
    duration: '12 Months',
    students: 350,
    rating: 4.9,
    description:
      'Complete board exam preparation with expert mentoring and revision support.',
    mentor: 'Dr. Amit Kumar Dubey',
    features: [
      'Board Preparation',
      'Mock Tests',
      'Personal Guidance',
      'Live Classes',
    ],
  },

  // CLASS 11
  {
    id: 'course-5',
    name: 'Class 11 Science Program',
    grade: 'Class 11',
    type: 'class',
    price: 14999,
    duration: '12 Months',
    students: 430,
    rating: 4.8,
    description:
      'Complete Class 11 preparation with JEE and NEET foundation support.',
    mentor: 'Niraj Kumar',
    features: [
      'JEE/NEET Foundation',
      'Weekly Tests',
      'Doubt Sessions',
      'Live Classes',
    ],
  },

  // CLASS 12
  {
    id: 'course-6',
    name: 'Class 12 Science Program',
    grade: 'Class 12',
    type: 'class',
    price: 19999,
    discountPrice: 17999,
    duration: '12 Months',
    students: 520,
    rating: 4.9,
    description:
      'Advanced preparation for board exams and competitive exams.',
    mentor: 'Chunchun Sir',
    features: [
      'Board + Competitive Prep',
      'Revision Classes',
      'Mock Tests',
      'Mentorship',
    ],
  },

  // DROPPER JEE
  {
    id: 'course-7',
    name: 'JEE Dropper Program',
    grade: 'Dropper - JEE',
    type: 'dropper',
    subType: 'JEE',
    price: 34999,
    discountPrice: 29999,
    duration: '12 Months',
    students: 300,
    rating: 4.9,
    description:
      'Complete dropper batch for JEE Main & Advanced preparation.',
    mentor: 'Ramesh Kumar, Er. Ankit Kumar, Er. Dharamveer Kumar',
    features: [
      'Daily Live Classes',
      'Advanced Problem Solving',
      'Full Test Series',
      'Mentorship',
    ],
  },

  // DROPPER NEET
  {
    id: 'course-8',
    name: 'NEET Dropper Program',
    grade: 'Dropper - NEET',
    type: 'dropper',
    subType: 'NEET',
    price: 32999,
    discountPrice: 28999,
    duration: '12 Months',
    students: 320,
    rating: 4.9,
    description:
      'Dedicated NEET dropper batch with complete biology, physics and chemistry preparation.',
    mentor: 'Dr. Abhishek Kumar, Abhinav Kumar, Niraj Kumar',
    features: [
      'Daily Classes',
      'NEET Mock Tests',
      'Biology Mastery',
      'Revision Plan',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function CoursesPage() {
  const [selectedGrade, setSelectedGrade] = useState('All');

  const [classType, setClassType] = useState<'live' | 'recorded'>('live');

  const grades = [
    'All',
    'Class 1-5',
    'Class 6-8',
    'Class 9-10',
    'Class 11',
    'Class 12',
    'Dropper - JEE',
    'Dropper - NEET',
  ];

  const filteredCourses =
    selectedGrade === 'All'
      ? courses
      : courses.filter((c) => c.grade === selectedGrade);

  const filteredClasses = liveClasses.filter(
    (c) => c.classType === classType
  );

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}

      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-5 py-2 text-primary font-semibold text-sm mb-6">
              Premium Learning Platform
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6 leading-tight">
              Live & Recorded Courses
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Premium live and recorded courses for Classes 1-12,
              JEE and NEET aspirants with expert mentors,
              personalized guidance and concept-focused learning.
            </p>
          </div>
        </div>
      </section>

      {/* LIVE / RECORDED SECTION */}

      <section className="py-12 sm:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Live & Recorded Classes
            </h2>

            <p className="text-muted-foreground text-lg">
              Join expert-led live classes or learn anytime with recorded sessions
            </p>
          </div>

          {/* TOGGLE */}

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => setClassType('live')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-sm ${classType === 'live'
                  ? 'bg-red-600 text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
            >
              <Calendar className="w-5 h-5" />
              Live Classes
            </button>

            <button
              onClick={() => setClassType('recorded')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-sm ${classType === 'recorded'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
            >
              <Play className="w-5 h-5" />
              Recorded Classes
            </button>
          </div>

          {/* CLASS GRID */}

          {/* CLASS GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {filteredClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* HEADER */}

                <div
                  className={`h-28 flex items-center justify-center ${classItem.classType === 'live'
                      ? 'bg-gradient-to-br from-red-500 to-red-700'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-700'
                    }`}
                >
                  {classItem.classType === 'live' ? (
                    <div className="text-center text-white">
                      <div className="w-10 h-10 bg-white rounded-full animate-pulse mx-auto mb-2"></div>

                      <p className="font-bold text-sm tracking-wide">
                        LIVE CLASS
                      </p>
                    </div>
                  ) : (
                    <Play className="w-12 h-12 text-white opacity-90" />
                  )}
                </div>

                {/* BODY */}

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-lg text-foreground line-clamp-2">
                      {classItem.title}
                    </h3>

                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ${classItem.classType === 'live'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-blue-100 text-blue-700'
                        }`}
                    >
                      {classItem.classType === 'live'
                        ? 'LIVE'
                        : 'RECORDED'}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm mb-5">
                    <p className="text-muted-foreground flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />

                      <span>{classItem.mentor}</span>
                    </p>

                    <p className="text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0" />

                      {classItem.classType === 'live'
                        ? 'Tentative Live Schedule'
                        : `${classItem.duration} min Recorded Class`}
                    </p>
                  </div>

                  {/* PREMIUM DISABLED BUTTON */}

                  <div className="relative">
                    <Button
                      disabled
                      className="
              w-full
              h-11
              rounded-xl
              bg-gradient-to-r
              from-gray-300
              to-gray-400
              text-gray-700
              cursor-not-allowed
              hover:from-gray-300
              hover:to-gray-400
              font-semibold
              shadow-none
              opacity-100
            "
                    >
                      {classItem.classType === 'live'
                        ? 'Launching Soon'
                        : 'Available Soon'}
                    </Button>

                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow">
                      SOON
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-xl text-base">
              View All Classes
            </Button>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}

      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wide">
            Filter by Grade
          </h3>

          <div className="flex flex-wrap gap-3">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-5 py-3 rounded-full font-semibold transition-all ${selectedGrade === grade
                    ? 'bg-primary text-white shadow-lg'
                    : 'border-2 border-primary text-primary hover:bg-primary/10'
                  }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES GRID */}

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              {selectedGrade === 'All'
                ? 'All Courses'
                : `${selectedGrade} Courses`}
            </h2>

            <p className="text-muted-foreground text-lg">
              Explore our premium academic and competitive exam programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* HEADER */}

                <div
                  className={`h-28 flex items-center justify-center text-white font-semibold text-center p-4 ${course.type === 'dropper'
                      ? 'bg-gradient-to-br from-orange-500 to-red-600'
                      : 'bg-gradient-to-br from-blue-500 to-indigo-700'
                    }`}
                >
                  <div>
                    <p className="text-xs font-semibold opacity-90 mb-1 uppercase tracking-wide">
                      {course.type === 'dropper'
                        ? `${course.subType} Dropper`
                        : 'Regular Course'}
                    </p>

                    <p className="font-bold text-xl">{course.grade}</p>
                  </div>
                </div>

                {/* BODY */}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {course.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {course.description}
                  </p>

                  {/* RATING */}

                  <div className="flex items-center mb-5">
                    <span className="text-yellow-500 font-bold mr-2">
                      ★ {course.rating}
                    </span>

                    <span className="text-sm text-muted-foreground">
                      ({course.students} students)
                    </span>
                  </div>

                  {/* DETAILS */}

                  <div className="bg-muted p-4 rounded-xl mb-5 text-sm">
                    <p className="text-muted-foreground mb-2">
                      <strong>Mentor:</strong> {course.mentor}
                    </p>

                    <p className="text-muted-foreground">
                      <strong>Duration:</strong> {course.duration}
                    </p>
                  </div>

                  {/* FEATURES */}

                  <div className="space-y-2 mb-5">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* PRICE */}

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">
                      ₹{course.discountPrice || course.price}
                    </span>

                    {course.discountPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ₹{course.price}
                      </span>
                    )}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-semibold">
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No courses available for this grade
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Not Sure Which Course Is Best For You?
          </h2>

          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Get free counseling and personalized guidance from our expert mentors
            to choose the perfect course for your academic goals.
          </p>

          <Button className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg font-semibold rounded-2xl shadow-xl">
            Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}