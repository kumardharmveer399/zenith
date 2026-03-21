import { HeroSection } from '@/components/home/hero-section'
import { FeaturesSection } from '@/components/home/features-section'
import { CoursesPreview } from '@/components/home/courses-preview'
import { MentorsSection } from '@/components/home/mentors-section'
import { CTASection } from '@/components/home/cta-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'

import { MentorTestimonialsSection } from '@/components/home/mentor-testimonials-section'


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CoursesPreview />
      <MentorsSection />
      <MentorTestimonialsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
