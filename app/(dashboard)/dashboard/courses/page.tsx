'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/dummy-data';
import { LogOut, Home, BookOpen, Users, Calendar, Star, Users2 } from 'lucide-react';

export default function CoursesDashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      router.push('/login');
      return;
    }
    setCurrentUser(JSON.parse(user));
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-lg text-muted-foreground">Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome, {currentUser?.name}</h1>
              <p className="text-muted-foreground text-sm mt-1">Your Grade: {currentUser?.grade}</p>
            </div>
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            <Link
              href="/dashboard/mentors"
              className="py-4 px-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground flex items-center gap-2 whitespace-nowrap"
            >
              <Users className="w-4 h-4" />
              My Mentors
            </Link>
            <Link
              href="/dashboard/live-classes"
              className="py-4 px-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Live Classes
            </Link>
            <Link
              href="/dashboard/courses"
              className="py-4 px-2 border-b-2 border-primary text-primary font-semibold flex items-center gap-2 whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4" />
              My Courses
            </Link>
            <Link
              href="/"
              className="py-4 px-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground flex items-center gap-2 whitespace-nowrap"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">My Courses</h2>
          <p className="text-muted-foreground">Access your enrolled courses and continue learning</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              {/* Course Header */}
              <div className={`h-24 flex items-center justify-center text-white font-semibold text-center p-4 ${
                course.type === 'dropper'
                  ? 'bg-gradient-to-br from-orange-500 to-red-600'
                  : 'bg-gradient-to-br from-blue-500 to-indigo-600'
              }`}>
                <div>
                  <p className="text-xs font-semibold opacity-90 mb-1">
                    {course.type === 'dropper' && course.subType ? `${course.subType} Dropper` : 'Regular Course'}
                  </p>
                  <p className="font-bold text-sm">{course.grade}</p>
                </div>
              </div>

              {/* Course Body */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{course.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">{course.rating} ({course.students} students)</span>
                </div>

                {/* Course Info */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Mentor: {course.mentor}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-muted rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">Includes:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">₹{course.price}</span>
                    {course.discountPrice && (
                      <span className="text-sm text-muted-foreground line-through">₹{course.discountPrice}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                    Continue Learning
                  </Button>
                  <Button className="flex-1 border border-border text-foreground hover:bg-muted">
                    Course Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {courses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground mb-4">No courses enrolled yet</p>
            <Link href="/courses">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Browse Courses
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
