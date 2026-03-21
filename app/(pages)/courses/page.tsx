'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { CourseCard } from '@/components/shared/course-card';
import { courses, liveClasses } from '@/lib/dummy-data';
import { Calendar, Play, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    'Dropper - NEET'
  ];

  const filteredCourses = selectedGrade === 'All'
    ? courses
    : courses.filter(c => c.grade === selectedGrade);

  const filteredClasses = liveClasses.filter(c => c.classType === classType);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our comprehensive courses for Classes 1-12 and competitive exam preparation with expert mentors.
            </p>
          </div>
        </div>
      </section>

      {/* Live & Recorded Classes Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Live & Recorded Classes</h2>
            <p className="text-muted-foreground">Join live interactive sessions or learn at your own pace with recorded classes</p>
          </div>

          {/* Class Type Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setClassType('live')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                classType === 'live'
                  ? 'bg-red-600 text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Live Classes
            </button>
            <button
              onClick={() => setClassType('recorded')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                classType === 'recorded'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              <Play className="w-4 h-4" />
              Recorded Classes
            </button>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredClasses.slice(0, 3).map(classItem => (
              <div key={classItem.id} className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
                {/* Header */}
                <div className={`h-20 flex items-center justify-center ${classItem.classType === 'live' ? 'bg-red-100' : 'bg-blue-100'}`}>
                  {classItem.classType === 'live' ? (
                    <div className="text-center">
                      <div className="w-8 h-8 bg-red-600 rounded-full animate-pulse mx-auto mb-1"></div>
                      <p className="text-red-700 font-semibold text-xs">LIVE NOW</p>
                    </div>
                  ) : (
                    <Play className="w-10 h-10 text-blue-600 opacity-70" />
                  )}
                </div>

                {/* Body */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{classItem.title}</h3>
                  <div className="space-y-2 text-sm mb-3">
                    <p className="text-muted-foreground"><Users className="w-3 h-3 inline mr-2" />{classItem.mentor}</p>
                    <p className="text-muted-foreground"><Clock className="w-3 h-3 inline mr-2" />
                      {classItem.classType === 'live' ? `${classItem.startTime} - ${classItem.endTime}` : `${classItem.duration} min`}
                    </p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white text-sm h-9">
                    {classItem.classType === 'live' ? 'Join Now' : 'Watch Now'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8">
              View All Classes
            </Button>
          </div>
        </div>
      </section>

      {/* Grade Filter Section */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-foreground mb-4">Filter by Grade</h3>
          <div className="flex flex-wrap gap-3">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedGrade === grade
                    ? 'bg-primary text-white'
                    : 'border-2 border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {selectedGrade === 'All' ? 'All Courses' : `${selectedGrade} Courses`}
            </h2>
            <p className="text-muted-foreground">Choose from our comprehensive range of courses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                {/* Course Header */}
                <div className={`h-24 flex items-center justify-center text-white font-semibold text-center p-4 ${
                  course.type === 'dropper'
                    ? 'bg-gradient-to-br from-orange-500 to-red-600'
                    : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                }`}>
                  <div>
                    <p className="text-xs font-semibold opacity-90 mb-1">
                      {course.type === 'dropper' && course.subType ? `${course.subType} Dropper` : 'Regular'}
                    </p>
                    <p className="font-bold">{course.grade}</p>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{course.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 font-semibold mr-2">★ {course.rating}</span>
                    <span className="text-sm text-muted-foreground">({course.students} students)</span>
                  </div>

                  {/* Details */}
                  <div className="bg-muted p-3 rounded-lg mb-4 text-sm">
                    <p className="text-muted-foreground mb-2"><strong>Mentor:</strong> {course.mentor}</p>
                    <p className="text-muted-foreground"><strong>Duration:</strong> {course.duration}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">₹{course.price}</span>
                    {course.discountPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">₹{course.discountPrice}</span>
                    )}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No courses available for this grade</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Can't decide which course is right for you?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a free consultation with our counselors to get personalized course recommendations based on your goals.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg">
            Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
