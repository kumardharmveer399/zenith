'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MentorCard } from '@/components/shared/mentor-card';
import { mentors } from '@/lib/dummy-data';
import { LogOut, Home, BookOpen, Users, Calendar } from 'lucide-react';

export default function MentorDashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [assignedMentors, setAssignedMentors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('currentUser');
    if (!user) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(user);
    setCurrentUser(parsedUser);

    // Assign mentors based on user grade
    const assigned = assignMentorsBasedOnGrade(parsedUser.grade);
    setAssignedMentors(assigned);
    setIsLoading(false);
  }, [router]);

  const assignMentorsBasedOnGrade = (grade: string) => {
    const gradeToMentors: Record<string, string[]> = {
      'Class 1': ['Priya Mehta'],
      'Class 2': ['Priya Mehta'],
      'Class 3': ['Priya Mehta'],
      'Class 4': ['Priya Mehta'],
      'Class 5': ['Priya Mehta'],
      'Class 6': ['Priya Mehta'],
      'Class 7': ['Priya Mehta'],
      'Class 8': ['Priya Mehta'],
      'Class 9': ['Prof. Aditya Sharma'],
      'Class 10': ['Prof. Aditya Sharma'],
      'Class 11': ['Rahul Singh', 'Prof. Aditya Sharma'],
      'Class 12': ['Dr. Sneha Kumar', 'Rahul Singh', 'Prof. Aditya Sharma'],
      'Dropper - JEE': ['Rahul Singh', 'Prof. Aditya Sharma'],
      'Dropper - NEET': ['Dr. Sneha Kumar', 'Dr. Ravi Verma'],
    };

    const mentorNames = gradeToMentors[grade] || ['Dr. Sneha Kumar'];
    return mentors.filter(m => mentorNames.includes(m.name));
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-lg text-muted-foreground">Loading your mentors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar/Header */}
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
              className="py-4 px-2 border-b-2 border-primary text-primary font-semibold flex items-center gap-2 whitespace-nowrap"
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
              className="py-4 px-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground flex items-center gap-2 whitespace-nowrap"
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
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-2">Your Assigned Mentors</h2>
          <p className="text-muted-foreground">
            These mentors are assigned based on your grade and learning path. Click on any mentor to view their profile and schedule a session.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {assignedMentors.map(mentor => (
            <div key={mentor.id} className="group">
              <MentorCard
                mentor={mentor}
              />
              <Button
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-white"
              >
                Schedule Session
              </Button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {assignedMentors.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground">No mentors assigned yet</p>
          </div>
        )}

        {/* Quick Links Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/dashboard/live-classes"
            className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Calendar className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Live Classes</h3>
            <p className="text-sm text-muted-foreground">Join live classes with your mentors</p>
          </Link>

          <Link
            href="/dashboard/courses"
            className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">My Courses</h3>
            <p className="text-sm text-muted-foreground">Access your enrolled courses</p>
          </Link>

          <Link
            href="/pricing"
            className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <BookOpen className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Upgrade Plan</h3>
            <p className="text-sm text-muted-foreground">View premium pricing plans</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
