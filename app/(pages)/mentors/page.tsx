import type { Metadata } from "next";
import { MentorCard } from "@/components/shared/mentor-card";
import { mentors } from "@/lib/dummy-data";

export const metadata: Metadata = {
  title: "Our Mentors - Zenith Institute",
  description:
    "Meet our experienced mentors who guide students in NEET, JEE, research and career planning.",
};

const allMentors = mentors.map((mentor) => ({
  id: mentor.id,
  name: mentor.name,
  title: mentor.title,
  image: mentor.image,
  description: mentor.bio,
  rating: mentor.rating,
  reviews: mentor.reviews,
}));

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
            Meet Our Mentors
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mentors include researchers, IIT students, and medical
            professionals dedicated to helping you succeed.
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allMentors.map((mentor) => (
              <MentorCard key={mentor.id} {...mentor} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}