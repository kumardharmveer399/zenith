import Link from "next/link";
import { MentorCard } from "@/components/shared/mentor-card";
import { mentors } from "@/lib/dummy-data";

export function MentorsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Meet Our Mentors
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from IITians, doctors, and experts guiding your success journey
          </p>
        </div>

        {/* Show only top 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mentors.slice(0, 4).map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              title={mentor.title}
              image={mentor.image}
              description={mentor.bio}
              rating={mentor.rating}
              reviews={mentor.reviews}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/mentors"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition"
          >
            View All Mentors
          </Link>
        </div>

      </div>
    </section>
  );
}