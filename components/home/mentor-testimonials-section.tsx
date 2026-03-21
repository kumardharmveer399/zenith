'use client';

import { useState } from 'react';
import { mentorTestimonials } from '@/lib/dummy-data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

export function MentorTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? mentorTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mentorTestimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = mentorTestimonials[currentIndex];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Mentors Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our experienced educators who are passionate about transforming student lives and creating future leaders.
          </p>
        </div>

        {/* Mentors Testimonials Carousel */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Right Side - Testimonial Card */}
          <div className="order-2 md:order-1 bg-background rounded-2xl shadow-lg p-8 border border-border transition-all duration-300 hover:shadow-xl">
            {/* Quote Icon */}
            <div className="mb-4">
              <Quote className="w-10 h-10 text-primary opacity-70" />
            </div>

            {/* Main Quote */}
            <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed font-medium">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Thought Section */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 mb-6 border-l-4 border-primary">
              <p className="text-sm font-semibold text-primary mb-1">Mentor's Insight:</p>
              <p className="text-foreground italic">"{currentTestimonial.thought}"</p>
            </div>

            {/* Mentor Info & Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">{currentTestimonial.mentorName}</h3>
                <p className="text-sm text-muted-foreground mb-2">{currentTestimonial.mentorTitle}</p>
                <p className="text-xs text-secondary font-semibold">{currentTestimonial.impact}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(currentTestimonial.rating) ? 'fill-secondary text-secondary' : 'text-border'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">{currentTestimonial.rating}/5</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2 ml-4">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 text-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 text-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Left Side - Mentor Image Carousel */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 rounded-full border-4 border-secondary/30 transform scale-110 opacity-50" />

              {/* Mentor Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.mentorName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-4 right-4 bg-secondary text-white rounded-full px-4 py-2 shadow-lg">
                <p className="text-sm font-bold">{currentTestimonial.yearsExperience}+ Years</p>
              </div>

              {/* Dot Indicators */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16 flex gap-2">
                {mentorTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-secondary w-8' : 'bg-border hover:bg-muted-foreground'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex gap-4 mt-8">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-muted hover:bg-primary/10 text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-muted hover:bg-primary/10 text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
