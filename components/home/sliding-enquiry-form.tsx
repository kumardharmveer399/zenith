'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Mail, Phone, User, BookOpen, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FormStep {
  title: string;
  description: string;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select';
    placeholder: string;
    icon: any;
    options?: { value: string; label: string }[];
  }[];
}

export function SlidingEnquiryForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    courseInterest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const steps: FormStep[] = [
    {
      title: 'Tell us about you',
      description: 'Help us understand your needs',
      fields: [
        {
          name: 'name',
          label: 'Full Name',
          type: 'text',
          placeholder: 'Your full name',
          icon: User,
        },
      ],
    },
    {
      title: 'Contact Details',
      description: 'How should we reach you?',
      fields: [
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'your@email.com',
          icon: Mail,
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          placeholder: '+91 XXXXX XXXXX',
          icon: Phone,
        },
      ],
    },
    {
      title: 'Your Learning Path',
      description: 'What interests you?',
      fields: [
        {
          name: 'grade',
          label: 'Grade/Level',
          type: 'select',
          placeholder: 'Select your grade',
          icon: BookOpen,
          options: [
            { value: 'class-1-5', label: 'Class 1-5' },
            { value: 'class-6-8', label: 'Class 6-8' },
            { value: 'class-9-10', label: 'Class 9-10' },
            { value: 'class-11', label: 'Class 11' },
            { value: 'class-12', label: 'Class 12' },
            { value: 'jee-dropper', label: 'Dropper - JEE' },
            { value: 'neet-dropper', label: 'Dropper - NEET' },
          ],
        },
        {
          name: 'courseInterest',
          label: 'Course Interest',
          type: 'select',
          placeholder: 'Select your interest',
          icon: BookOpen,
          options: [
            { value: 'science', label: 'Science' },
            { value: 'commerce', label: 'Commerce' },
            { value: 'humanities', label: 'Humanities' },
            { value: 'competitive', label: 'Competitive Exams' },
          ],
        },
      ],
    },
  ];

  const currentStepData = steps[currentStep];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
      setTimeout(() => {
        setCurrentStep(0);
        setFormData({ name: '', email: '', phone: '', grade: '', courseInterest: '' });
        setSubmitted(false);
      }, 2000);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-green-200 animate-in fade-in zoom-in duration-300">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-foreground text-center">
            Thank You!
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            We'll contact you soon with personalized course recommendations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Progress indicator */}
      <div className="flex gap-2 mb-8">
        {steps.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              idx === currentStep
                ? 'bg-secondary w-2'
                : idx < currentStep
                ? 'bg-primary'
                : 'bg-muted'
            }`}
          />
        ))}
      </div>

      {/* Step title and description */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {currentStepData.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {currentStepData.description}
        </p>
      </div>

      {/* Form fields with animation */}
      <div className="space-y-5 mb-8 relative h-48">
        {currentStepData.fields.map((field) => {
          const Icon = field.icon;
          return (
            <div
              key={field.name}
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <label className="block text-sm font-medium text-foreground mb-2">
                {field.label}
              </label>
              <div className="relative">
                <Icon className="absolute left-3 top-3 w-5 h-5 text-primary pointer-events-none" />
                {field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground text-sm"
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options?.map(opt => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="pl-10 text-sm h-11"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-3">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="flex-1 px-4 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 px-4 py-2.5 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 font-medium"
        >
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
        </button>
      </div>

      {/* Step counter */}
      <p className="text-xs text-muted-foreground text-center mt-4">
        Step {currentStep + 1} of {steps.length}
      </p>
    </div>
  );
}
