'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/dummy-data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real achievements from students who transformed their dreams into reality with Zenith Institute guidance.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Testimonial Card */}
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-border transition-all duration-300 hover:shadow-xl">
            {/* Quote Icon */}
            <div className="mb-4">
              <Quote className="w-10 h-10 text-secondary opacity-70" />
            </div>

            {/* Main Quote */}
            <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed font-medium">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Thought Section */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 mb-6 border-l-4 border-secondary">
              <p className="text-sm font-semibold text-secondary mb-1">Their Thought:</p>
              <p className="text-foreground italic">"{currentTestimonial.thought}"</p>
            </div>

            {/* Student Info */}
            <div>
              <p className="font-bold text-foreground text-lg">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-foreground mb-2">{currentTestimonial.course}</p>
              
              {/* Achievement */}
              <div className="bg-secondary/10 rounded-lg px-3 py-2 mb-3 inline-block">
                <p className="text-sm font-semibold text-secondary">
                  {currentTestimonial.achievement}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Student Image & Navigation */}
          <div className="flex flex-col items-center">
            {/* Student Image */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30" />
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="relative w-80 h-80 rounded-full object-cover border-4 border-secondary shadow-2xl"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentTestimonial.category}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-secondary w-8'
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Counter */}
            <p className="text-sm text-muted-foreground mt-6">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">5000+</p>
            <p className="text-sm text-muted-foreground">Happy Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">500+</p>
            <p className="text-sm text-muted-foreground">Top Rankers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
