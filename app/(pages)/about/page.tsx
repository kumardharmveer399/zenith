import type { Metadata } from 'next'
import { CheckCircle, Users, Target, Award } from 'lucide-react'
import Stats from './stats'
import AboutCTA from './AboutCTA'

export const metadata: Metadata = {
  title: 'About Zenith Institute - Our Mission & Values',
  description: 'Learn about Zenith Institute, our mission to provide expert mentorship, and our commitment to student success.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              About Zenith Institute
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe in empowering students with expert guidance and mentorship to achieve their academic and career goals. At Zenith Institute, we combine years of expertise with modern teaching methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive, personalized mentorship and coaching that empowers students to achieve their academic goals in competitive exams like NEET and JEE, while guiding them towards fulfilling career paths that match their aspirations and strengths.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted mentorship platform in India, recognized for transforming student lives through expert guidance, innovative learning methods, and unwavering commitment to educational excellence and student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-12 text-center">
            Why Choose Zenith Institute?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Mentors',
                description: 'Learn from experienced professionals with years of expertise in their respective fields'
              },
              {
                icon: Target,
                title: 'Personalized Approach',
                description: 'Customized learning plans tailored to your unique strengths and learning style'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: '500+ students mentored with 100% success rate in competitive examinations'
              },
              {
                icon: CheckCircle,
                title: 'Comprehensive Support',
                description: 'End-to-end guidance from exam preparation to career placement'
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Stats />

      {/* Our Approach */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-12 text-center">
            Our Teaching Approach
          </h2>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Assessment',
                description: 'We start by understanding your current level, strengths, and areas for improvement through comprehensive assessments.'
              },
              {
                number: '2',
                title: 'Personalization',
                description: 'Based on the assessment, we create a customized learning plan that aligns with your goals and pace of learning.'
              },
              {
                number: '3',
                title: 'Expert Mentoring',
                description: 'Our experienced mentors provide one-on-one guidance, regular feedback, and continuous support throughout your journey.'
              },
              {
                number: '4',
                title: 'Regular Evaluation',
                description: 'We conduct regular assessments and mock tests to track your progress and make necessary adjustments to your learning plan.'
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-white font-bold text-lg">
                    {item.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AboutCTA />
    </div>
  )
}
