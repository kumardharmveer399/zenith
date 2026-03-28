export interface Mentor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
  availability: string[];
  classes: string[];
}

export interface LiveClass {
  id: string;
  title: string;
  mentor: string;
  grade: string;
  subject: string;
  startTime: string;
  endTime: string;
  duration: number;
  classType: 'live' | 'recorded';
  enrolledStudents: number;
  maxCapacity: number;
  description: string;
}

export interface Course {
  id: string;
  name: string;
  grade: string;
  type: 'class' | 'dropper';
  subType?: 'JEE' | 'NEET';
  price: number;
  discountPrice?: number;
  duration: string;
  students: number;
  rating: number;
  description: string;
  mentor: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  annualPrice?: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  classes: string[];
}


export interface MentorTestimonial {
  id: string;
  mentorName: string;
  mentorTitle: string;
  yearsExperience: number;
  quote: string;
  thought: string;
  image: string;
  rating: number;
  impact: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  achievement: string;
  quote: string;
  thought: string;
  image: string;
  rating: number;
  category: 'NEET' | 'JEE' | 'Dropper';
}


export interface DailyActivity {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  time: string;
  category: 'morning' | 'exercise' | 'meditation' | 'nutrition' | 'evening';
  benefits: string[];
}

export interface YogaMeditationDay {
  day: number;
  activities: DailyActivity[];
  focus: string;
  completed: boolean;
}

export interface YogaMeditationProgram {
  id: string;
  name: string;
  description: string;
  duration: number; // days
  totalDays: number;
  startDate: string;
  currentDay: number;
  completedDays: number;
  benefits: string[];
  days: YogaMeditationDay[];
  overallBenefit: {
    label: string;
    timeline: number; // days
    description: string;
  };
}


// Mentors Data
export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "Chunchun Mahtha",
    title: "Director and Lead Mentor",
    specialty: "Medical & Concept Clarity",
    experience: 3,
    rating: 4.9,
    reviews: 120,
    image: "/mentors/chunchun.jpeg",
    bio: "Director and mentor focused on building strong concepts in medical science and guiding students toward NEET success.",
    availability: ["Monday", "Wednesday", "Friday"],
    classes: ["Class 10", "Class 11", "Class 12"],
  },
  {
    id: "mentor-2",
    name: "Abhishek Kumar",
    title: "Research Scholar",
    specialty: "Research & Concept Clarity",
    experience: 3,
    rating: 4.9,
    reviews: 120,
    image: "/mentors/abhishek.png",
    bio: "Research scholar guiding students in concept clarity, scientific thinking, and advanced problem-solving approaches.",
    availability: ["Monday", "Wednesday", "Friday"],
    classes: ["Class 10", "Class 11", "Class 12"],
  },
  {
    id: "mentor-3",
    name: "Dharmveer Mahtha",
    title: "Software Engineer",
    specialty: "Software Development & Problem Solving",
    experience: 3,
    rating: 4.9,
    reviews: 120,
    image: "/mentors/dharmveer.jpeg",
    bio: "Software engineer mentoring students in logical thinking, coding mindset, and structured problem-solving.",
    availability: ["Monday", "Wednesday", "Friday"],
    classes: ["Class 10", "Class 11", "Class 12"],
  },
  {
    id: "mentor-4",
    name: "Jhilli Meher",
    title: "Career Guidance Mentor",
    specialty: "Career Guidance After 10th & 12th",
    experience: 4,
    rating: 4.8,
    reviews: 95,
    image: "/mentors/jhilli.jpeg",
    bio: "Helps students explore career options after 10th and 12th with practical guidance and real-world insights.",
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    classes: ["Class 10", "Class 11", "Class 12"],
  },
  {
    id: "mentor-5",
    name: "Premjeet Murmu",
    title: "Career Guidance Mentor",
    specialty: "Career Guidance After 10th & 12th",
    experience: 4,
    rating: 4.8,
    reviews: 95,
    image: "/mentors/premjeet.png",
    bio: "Helps students explore career options after 10th and 12th with practical guidance and real-world insights.",
    availability: ["Tuesday", "Thursday", "Saturday"],
    classes: ["Class 10", "Class 11", "Class 12"],
  },
  {
    id: "mentor-6",
    name: "Ahmad Sadan Akbar",
    title: "Academic Strategy Mentor",
    specialty: "NEET Guidance",
    experience: 2,
    rating: 4.8,
    reviews: 60,
    image: "/mentors/ahmad.png",
    bio: "NEET-qualified mentor helping students with exam strategy, preparation roadmap, and medical career guidance.",
    availability: ["Monday", "Tuesday", "Wednesday"],
    classes: ["Class 11", "Class 12", "Dropper - NEET"],
  },
  {
    id: "mentor-7",
    name: "Lakhan Lal Mandal",
    title: "Academic Strategy Mentor",
    specialty: "Biology & Memory Science",
    experience: 4,
    rating: 4.8,
    reviews: 110,
    image: "/mentors/lakhan.png",
    bio: "Expert in biology and memory techniques, helping students learn faster and retain concepts effectively.",
    availability: ["Daily"],
    classes: ["Class 11", "Class 12", "Dropper - NEET"],
  },
  {
    id: "mentor-8",
    name: "Ramesh Kumar Das",
    title: "JEE Foundation Mentor",
    specialty: "JEE Foundation & Advanced Strategy",
    experience: 4,
    rating: 4.9,
    reviews: 150,
    image: "/mentors/ramesh.png",
    bio: "IIT mentor helping JEE aspirants build strong fundamentals and crack advanced-level problems.",
    availability: ["Tuesday", "Thursday", "Saturday"],
    classes: ["Class 6-12"],
  },
  {
    id: "mentor-9",
    name: "Rahul Kumar Mahtha",
    title: "Mentor",
    specialty: "Career Guidance & Exam Strategy",
    experience: 3,
    rating: 4.7,
    reviews: 90,
    image: "/mentors/rahul.png",
    bio: "Mentor focused on exam strategies, motivation, and guiding students through competitive preparation challenges.",
    availability: ["Monday", "Wednesday", "Friday"],
    classes: ["Class 11", "Class 12", "Dropper"],
  },
  {
    id: "mentor-10",
    name: "Pritam Meher",
    title: "Career Guidance Mentor",
    specialty: "NEET Mentorship & Academic Strategy",
    experience: 4,
    rating: 4.8,
    reviews: 100,
    image: "/mentors/pritam.png",
    bio: "NEET mentor guiding students with smart strategies, concept clarity, and effective preparation techniques.",
    availability: ["Monday", "Tuesday", "Thursday"],
    classes: ["Class 11", "Class 12", "Dropper - NEET"],
  },

  {
    id: "mentor-11",
    name: "Abhinab Kumar Barik",
    title: "Mentor (NEET)",
    specialty: "Strategic Mentoring for NEET Aspirants",
    experience: 1,
    rating: 4.9,
    reviews: 50,
    image: "/mentors/abhinav.jpeg",
    bio: "Final year MBBS student at AIIMS Kalyani. Scored 655/720 (AIR 3703) in NEET 2022. Guides students with practical strategies and smart preparation.",
    availability: ["Monday", "Wednesday", "Friday"],
    classes: ["Class 11", "Class 12", "Dropper - NEET"],
  },
  {
    id: "mentor-12",
    name: "Jagarnath Mandal",
    title: "Mentor",
    specialty: "Career Guidance & NEET/JEE Strategy",
    experience: 1,
    rating: 4.8,
    reviews: 40,
    image: "/mentors/jagarnath.png",
    bio: "MBBS 1st year student at MGM Medical College. Navodayan & ENF Scholar helping students with strategy and motivation.",
    availability: ["Monday", "Wednesday", "Friday"],
    classes: ["Class 10", "Class 11", "Class 12", "Dropper"],
  },
  {
    id: "mentor-13",
    name: "Er. Ankit Kumar",
    title: "Mentor (JEE Strategy)",
    specialty: "JEE Strategy & Problem Solving",
    experience: 2,
    rating: 4.8,
    reviews: 60,
    image: "/mentors/ankit.jpeg",
    bio: "B.Tech from NIT Patna, L&T placed. Passionate about mentoring students in problem-solving and concept clarity.",
    availability: ["Tuesday", "Thursday", "Saturday"],
    classes: ["Class 10", "Class 11", "Class 12"],
  },
  {
    id: "mentor-14",
    name: "Akanksha Priya",
    title: "Mentor",
    specialty: "Medical Guidance",
    experience: 1,
    rating: 4.7,
    reviews: 30,
    image: "/mentors/akanksha.png",
    bio: "MBBS student at LBKMCH Bihar, guiding students in medical preparation and career path.",
    availability: ["Monday", "Wednesday"],
    classes: ["Class 11", "Class 12", "Dropper - NEET"],
  },
  {
    id: "mentor-15",
    name: "Niraj Kumar",
    title: "Career Guidance Mentor",
    specialty: "Academic Planning & Career Guidance",
    experience: 3,
    rating: 4.7,
    reviews: 80,
    image: "/mentors/niraj.png",
    bio: "Guides students in planning their academic journey and choosing the right career path effectively.",
    availability: ["Monday", "Wednesday", "Friday"],
    classes: ["Class 10", "Class 11", "Class 12"],
  }
];

// Live & Recorded Classes Data
export const liveClasses: LiveClass[] = [
  {
    id: 'live-1',
    title: 'Photosynthesis Detailed Explanation',
    mentor: 'Dr. Sneha Kumar',
    grade: 'Class 11',
    subject: 'Biology',
    startTime: '2:00 PM',
    endTime: '3:30 PM',
    duration: 90,
    classType: 'live',
    enrolledStudents: 45,
    maxCapacity: 100,
    description: 'Complete explanation of photosynthesis with diagrams and interactive Q&A session.',
  },
  {
    id: 'live-2',
    title: 'Calculus - Integration Techniques',
    mentor: 'Rahul Singh',
    grade: 'Class 12',
    subject: 'Mathematics',
    startTime: '4:00 PM',
    endTime: '5:30 PM',
    duration: 90,
    classType: 'live',
    enrolledStudents: 67,
    maxCapacity: 100,
    description: 'Advanced integration techniques with JEE-level problems and solutions.',
  },
  {
    id: 'live-3',
    title: 'Organic Chemistry - Benzene Reactions',
    mentor: 'Prof. Aditya Sharma',
    grade: 'Class 12',
    subject: 'Chemistry',
    startTime: '6:00 PM',
    endTime: '7:30 PM',
    duration: 90,
    classType: 'live',
    enrolledStudents: 52,
    maxCapacity: 100,
    description: 'Master benzene reactions and aromatic compounds with mechanism clarity.',
  },
  {
    id: 'recorded-1',
    title: 'Human Anatomy - Skeletal System',
    mentor: 'Dr. Sneha Kumar',
    grade: 'Class 11',
    subject: 'Biology',
    startTime: 'Anytime',
    endTime: 'Anytime',
    duration: 45,
    classType: 'recorded',
    enrolledStudents: 234,
    maxCapacity: -1,
    description: 'Comprehensive overview of the human skeletal system with 3D diagrams.',
  },
  {
    id: 'recorded-2',
    title: 'Physics - Laws of Motion',
    mentor: 'Rahul Singh',
    grade: 'Class 10',
    subject: 'Physics',
    startTime: 'Anytime',
    endTime: 'Anytime',
    duration: 60,
    classType: 'recorded',
    enrolledStudents: 567,
    maxCapacity: -1,
    description: 'Newton\'s laws of motion explained with real-world examples.',
  },
];

// Courses Data (Classes 1-12 + Droppers)
export const courses: Course[] = [
  // Classes 1-5
  {
    id: 'course-1',
    name: 'Foundation Mathematics',
    grade: 'Class 1-5',
    type: 'class',
    price: 4999,
    duration: '6 Months',
    students: 156,
    rating: 4.6,
    description: 'Build strong mathematical foundations with fun and interactive methods.',
    mentor: 'Priya Mehta',
    features: ['Live Classes', 'Study Material', 'Weekly Tests', 'Doubt Sessions'],
  },
  {
    id: 'course-2',
    name: 'Science Basics',
    grade: 'Class 1-5',
    type: 'class',
    price: 4999,
    duration: '6 Months',
    students: 134,
    rating: 4.7,
    description: 'Introduction to science with hands-on learning approach.',
    mentor: 'Priya Mehta',
    features: ['Live Classes', 'Experiments', 'Visual Content', 'Project-Based Learning'],
  },

  // Classes 6-8
  {
    id: 'course-3',
    name: 'Science & Mathematics (6-8)',
    grade: 'Class 6-8',
    type: 'class',
    price: 7999,
    duration: '12 Months',
    students: 245,
    rating: 4.8,
    description: 'Comprehensive coverage of science and maths for middle school students.',
    mentor: 'Priya Mehta',
    features: ['Live Classes', 'Board Exam Prep', 'Mock Tests', 'Personalized Doubt Support'],
  },

  // Classes 9-10
  {
    id: 'course-4',
    name: 'Board Exam Preparation (9-10)',
    grade: 'Class 9-10',
    type: 'class',
    price: 9999,
    discountPrice: 8499,
    duration: '12 Months',
    students: 456,
    rating: 4.8,
    description: 'Complete preparation for board exams with expert guidance.',
    mentor: 'Prof. Aditya Sharma',
    features: ['Live Classes', 'Previous Year Papers', 'Board-Focused Content', 'Expert Review'],
  },

  // Classes 11-12
  {
    id: 'course-5',
    name: 'Class 11 Complete Course',
    grade: 'Class 11',
    type: 'class',
    price: 14999,
    duration: '12 Months',
    students: 678,
    rating: 4.7,
    description: 'Full year course covering all Class 11 subjects with JEE/NEET foundation.',
    mentor: 'Rahul Singh',
    features: ['Live Classes', 'JEE/NEET Foundation', 'Weekly Tests', 'Revision Classes'],
  },
  {
    id: 'course-6',
    name: 'Class 12 Complete Course',
    grade: 'Class 12',
    type: 'class',
    price: 19999,
    discountPrice: 17999,
    duration: '12 Months',
    students: 789,
    rating: 4.8,
    description: 'Advanced Class 12 course preparing for board exams and competitive exams.',
    mentor: 'Prof. Aditya Sharma',
    features: ['Live Classes', 'Advanced Topics', 'Mock Exams', 'Personalized Guidance'],
  },

  // Dropper Programs - JEE
  {
    id: 'course-7',
    name: 'JEE Main & Advanced Crash Course',
    grade: 'Dropper',
    type: 'dropper',
    subType: 'JEE',
    price: 29999,
    duration: '6 Months',
    students: 234,
    rating: 4.9,
    description: 'Intensive 6-month crash course for JEE Main and Advanced.',
    mentor: 'Rahul Singh',
    features: ['Daily Live Classes', 'Test Series', 'Doubt Sessions', 'Revision Strategy'],
  },
  {
    id: 'course-8',
    name: 'JEE One Year Program',
    grade: 'Dropper',
    type: 'dropper',
    subType: 'JEE',
    price: 49999,
    discountPrice: 44999,
    duration: '12 Months',
    students: 456,
    rating: 4.8,
    description: 'Complete one-year program focusing on all three subjects for JEE.',
    mentor: 'Rahul Singh',
    features: ['Daily Classes', 'Comprehensive Material', 'Full Test Series', 'Mentorship'],
  },

  // Dropper Programs - NEET
  {
    id: 'course-9',
    name: 'NEET Crash Course',
    grade: 'Dropper',
    type: 'dropper',
    subType: 'NEET',
    price: 24999,
    duration: '4 Months',
    students: 345,
    rating: 4.9,
    description: 'Fast-track 4-month NEET preparation with biology focus.',
    mentor: 'Dr. Sneha Kumar',
    features: ['Daily Classes', 'Biology Priority', 'Mock Tests', 'Revision Classes'],
  },
  {
    id: 'course-10',
    name: 'NEET Full Year Program',
    grade: 'Dropper',
    type: 'dropper',
    subType: 'NEET',
    price: 39999,
    discountPrice: 35999,
    duration: '12 Months',
    students: 567,
    rating: 4.9,
    description: 'Complete NEET preparation with balanced approach to all three subjects.',
    mentor: 'Dr. Ravi Verma',
    features: ['Daily Classes', 'Balanced Curriculum', 'Expert Doubt Support', 'Career Guidance'],
  },
];

// Pricing Plans
export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-1',
    name: 'Basic',
    price: 9999,
    annualPrice: 99999,
    description: 'Perfect for students starting their preparation journey',
    features: [
      'Access to 1 course',
      'Recorded classes only',
      'Weekly doubt sessions',
      'Basic study material',
      'Email support',
      'Community access',
    ],
    classes: ['Class 6-8', 'Class 9-10'],
  },
  {
    id: 'plan-2',
    name: 'Premium',
    price: 19999,
    annualPrice: 199999,
    description: 'Best for serious exam preparation',
    highlighted: true,
    features: [
      'Access to 3 courses',
      'Live + Recorded classes',
      'Daily doubt sessions',
      'Complete study material',
      'Priority email support',
      'Mentor guidance',
      'Practice tests',
      'Progress tracking',
    ],
    classes: ['Class 11', 'Class 12'],
  },
  {
    id: 'plan-3',
    name: 'Elite',
    price: 34999,
    annualPrice: 349999,
    description: 'Complete preparation with personalized mentorship',
    features: [
      'All courses unlimited',
      'Live + Recorded + 1-on-1',
      'Round-the-clock support',
      'Premium study material',
      'Personal mentor',
      '24/7 phone support',
      'Full test series',
      'Interview preparation',
      'Career counseling',
      'Lifetime access',
    ],
    classes: ['Class 11', 'Class 12', 'Dropper - JEE', 'Dropper - NEET'],
  },
];


// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Ananya Verma',
    course: 'NEET Preparation',
    achievement: 'AIR 127 | NEET Score: 715/720',
    quote: 'Zenith Institute transformed my preparation journey. The personalized mentorship and comprehensive study material helped me score higher than my expectations. Dr. Sneha Kumar\'s guidance was invaluable in cracking NEET.',
    thought: 'Success is not just about hard work, it\'s about smart work guided by experienced mentors.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rating: 5,
    category: 'NEET',
  },
  {
    id: 'testimonial-2',
    name: 'Rohan Deshmukh',
    course: 'JEE Advanced Dropper',
    achievement: 'JEE Advanced Rank: 342 | IIT Delhi CSE',
    quote: 'As a dropper, I needed focused guidance and the right environment. Zenith provided both. The live classes with problem-solving sessions, combined with one-on-one mentoring, made all the difference. Rahul Sir\'s teaching methodology is outstanding.',
    thought: 'Every failure is just a stepping stone to success. Stay consistent, stay focused.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rating: 5,
    category: 'JEE',
  },
  {
    id: 'testimonial-3',
    name: 'Priya Sharma',
    course: 'Class 12 Board Preparation',
    achievement: '95% in Science | Secured Admission in DU',
    quote: 'Zenith\'s structured approach to board exam preparation gave me the confidence I needed. The regular mock tests, doubt-clearing sessions, and mentor support helped me score exceptionally well. Priya Mehta\'s mentorship was like having a personal guide.',
    thought: 'Believe in yourself and your preparation. Success follows naturally when you\'re consistent.',
    image: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=400&h=400&fit=crop',
    rating: 5,
    category: 'NEET',
  },
];

// Dummy User Data
export const dummyUsers = [
  {
    id: 'user-1',
    email: 'student@example.com',
    password: 'password123',
    name: 'Arjun Singh',
    grade: 'Class 12',
    enrolledCourses: ['course-6', 'course-5'],
  },
];


// Mentor Testimonials Data
export const mentorTestimonials: MentorTestimonial[] = [
  {
    id: 'mentor-testimonial-1',
    mentorName: 'Dr. Chunchun',
    mentorTitle: 'Founder & Lead Mentor',
    yearsExperience: 6,
    quote: 'Teaching at Zenith Institute has been incredibly rewarding. I\'ve witnessed hundreds of students transform their lives through dedicated preparation. What makes Zenith special is the holistic approach - we don\'t just teach concepts, we build confidence and foster a mindset of excellence.',
    thought: 'The greatest satisfaction comes from seeing a student\'s eyes light up when they finally understand a difficult concept and score beyond their expectations.',
    image: "/mentors/chunchun.jpeg",
    rating: 4.9,
    impact: 'Mentored 500+ students | 95% NEET selection rate',
  },
  {
    id: 'mentor-testimonial-2',
    mentorName: 'Dharmveer Mahtha',
    mentorTitle: 'Tech Mentor (Web Development & Software Engineering)',
    yearsExperience: 4,
    quote: "Working with Zenith's student community has strengthened my approach to teaching technology. I focus on building real-world problem-solving skills, guiding students from basic concepts to practical development, and helping them think like engineers.",
    thought: "Technology is not just about coding — it's about solving real problems, building impactful products, and thinking logically in every situation.",
    image: "/mentors/dharmveer.jpeg",
    rating: 4.9,
    impact: "Mentored 300+ students in coding & development | Helped 150+ students build real-world projects",
  },
  {
    id: 'mentor-testimonial-3',
    mentorName: 'Jhilli Meher',
    mentorTitle: 'Foundation & Head Coach',
    yearsExperience: 6,
    quote: 'The personalized mentoring approach at Zenith allows me to understand each student\'s unique learning style and challenges. Seeing students progress from struggling with basics to confidently solving complex problems is what keeps me passionate about education.',
    thought: 'Every student has unlimited potential; they just need the right guidance, resources, and encouragement to unlock it.',
    image: '/mentors/jhilli.jpeg',
    rating: 4.7,
    impact: 'Mentored 300+ students | 98% board exam pass rate',
  },
];

// 21-Day Yoga & Meditation Program
export const yogaMeditationProgram: YogaMeditationProgram = {
  id: 'program-yoga-21',
  name: '21-Day Brain Focus & Discipline Mastery',
  description: 'Transform your study habits with our scientifically-designed 21-day yoga, meditation, and discipline program. Build unbreakable focus and mental clarity.',
  duration: 21,
  totalDays: 21,
  startDate: '2026-03-15',
  currentDay: 8,
  completedDays: 7,
  benefits: [
    'Improved Focus & Concentration',
    'Better Memory Retention',
    'Reduced Stress & Anxiety',
    'Enhanced Brain Performance',
    'Built Discipline & Consistency',
    'Better Sleep Quality'
  ],
  overallBenefit: {
    label: '21 Days: Improved Focus',
    timeline: 21,
    description: 'Significant improvement in focus, concentration, and discipline'
  },
  days: [
    {
      day: 1,
      focus: 'Foundation: Starting Your Journey',
      completed: true,
      activities: [
        { id: 'a1', name: 'Morning Sunlight Exposure', description: 'Get 10-15 minutes of direct sunlight exposure for BDNF boost', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Boosts BDNF', 'Regulates circadian rhythm', 'Improves mood'] },
        { id: 'a2', name: 'Kapalbhati Pranayama', description: 'Breath purification technique for mental clarity', duration: 10, time: '6:50 AM', category: 'meditation', benefits: ['Clears mental fog', 'Increases oxygen', 'Boosts alertness'] },
        { id: 'a3', name: 'Push-ups / Running', description: 'Light cardio exercise to energize body and mind', duration: 15, time: '7:10 AM', category: 'exercise', benefits: ['Increases blood flow', 'Boosts energy', 'Improves circulation'] },
        { id: 'a4', name: 'Soaked Almonds & Egg', description: 'Brain-boosting nutrition for morning fuel', duration: 10, time: '7:30 AM', category: 'nutrition', benefits: ['Protein & omega-3s', 'Brain fuel', 'Sustained energy'] },
      ]
    },
    {
      day: 2,
      focus: 'Building Consistency',
      completed: true,
      activities: [
        { id: 'a1', name: 'Morning Sunlight Exposure', description: 'Get 10-15 minutes of direct sunlight exposure', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Boosts BDNF', 'Regulates circadian rhythm'] },
        { id: 'a2', name: 'Anulom Vilom', description: 'Alternate nostril breathing for balance', duration: 10, time: '6:50 AM', category: 'meditation', benefits: ['Balances mind', 'Calms nerves'] },
        { id: 'a3', name: 'Skipping Rope', description: 'Coordination and cardio exercise', duration: 15, time: '7:10 AM', category: 'exercise', benefits: ['Improves coordination', 'Boosts energy'] },
        { id: 'a4', name: 'Banana with Walnuts', description: 'Potassium and omega-3 rich breakfast', duration: 10, time: '7:30 AM', category: 'nutrition', benefits: ['Energy & focus'] },
      ]
    },
    {
      day: 3,
      focus: 'Enhancing Awareness',
      completed: true,
      activities: [
        { id: 'a1', name: 'Morning Sunlight Exposure', description: 'Boost your BDNF levels', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Brain derived growth'] },
        { id: 'a2', name: 'Trataka Yoga', description: 'Candle gazing for focus and third eye opening', duration: 5, time: '6:50 AM', category: 'meditation', benefits: ['Laser focus', 'Eye strength'] },
        { id: 'a3', name: 'Push-ups & Running', description: 'Build strength and endurance', duration: 15, time: '7:10 AM', category: 'exercise', benefits: ['Strength building'] },
        { id: 'a4', name: 'Haldi Banana Smoothie', description: 'Turmeric and potassium boost', duration: 10, time: '7:30 AM', category: 'nutrition', benefits: ['Anti-inflammatory'] },
      ]
    },
    {
      day: 4,
      focus: 'Deepening Practice',
      completed: true,
      activities: [
        { id: 'a1', name: 'Morning Meditation', description: 'Guided meditation session', duration: 15, time: '6:30 AM', category: 'meditation', benefits: ['Mental clarity'] },
        { id: 'a2', name: 'Opposite Hand Writing', description: 'Brain cross-training activity', duration: 5, time: '6:50 AM', category: 'morning', benefits: ['Brain plasticity'] },
        { id: 'a3', name: 'Yoga Asanas', description: 'Basic yoga poses for flexibility', duration: 20, time: '7:15 AM', category: 'exercise', benefits: ['Flexibility', 'Strength'] },
        { id: 'a4', name: 'Almonds & Dates', description: 'Energy-packed snack', duration: 10, time: '7:45 AM', category: 'nutrition', benefits: ['Sustained energy'] },
      ]
    },
    {
      day: 5,
      focus: 'Active Recall Practice',
      completed: true,
      activities: [
        { id: 'a1', name: 'Kapalbhati', description: 'Energizing breath work', duration: 10, time: '6:30 AM', category: 'meditation', benefits: ['Mental energy'] },
        { id: 'a2', name: 'Trataka', description: 'Concentration building', duration: 5, time: '6:45 AM', category: 'meditation', benefits: ['Deep focus'] },
        { id: 'a3', name: 'Cardio Exercise', description: 'Running or cycling', duration: 20, time: '7:10 AM', category: 'exercise', benefits: ['Cardiovascular health'] },
        { id: 'a4', name: 'Protein-Rich Breakfast', description: 'Eggs with toast and vegetables', duration: 15, time: '7:40 AM', category: 'nutrition', benefits: ['Muscle & brain fuel'] },
      ]
    },
    {
      day: 6,
      focus: 'Spaced Repetition Foundation',
      completed: true,
      activities: [
        { id: 'a1', name: 'Meditation', description: 'Calm mind meditation', duration: 10, time: '6:30 AM', category: 'meditation', benefits: ['Peace'] },
        { id: 'a2', name: 'Anulom Vilom', description: 'Breathing balance', duration: 10, time: '6:45 AM', category: 'meditation', benefits: ['Equilibrium'] },
        { id: 'a3', name: 'Strength Training', description: 'Push-ups and bodyweight exercises', duration: 20, time: '7:10 AM', category: 'exercise', benefits: ['Core strength'] },
        { id: 'a4', name: 'Fresh Fruits & Nuts', description: 'Seasonal fruits and roasted chana', duration: 10, time: '7:40 AM', category: 'nutrition', benefits: ['Vitamins & minerals'] },
      ]
    },
    {
      day: 7,
      focus: 'Weekly Deep Study Preparation',
      completed: true,
      activities: [
        { id: 'a1', name: 'Extended Meditation', description: 'Deeper meditation practice', duration: 15, time: '6:30 AM', category: 'meditation', benefits: ['Mental strength'] },
        { id: 'a2', name: 'Trataka & Language Practice', description: 'Combined focus and language session', duration: 10, time: '6:50 AM', category: 'morning', benefits: ['Dual benefit'] },
        { id: 'a3', name: 'Full Body Yoga', description: 'Complete yoga sequence', duration: 30, time: '7:10 AM', category: 'exercise', benefits: ['Holistic fitness'] },
        { id: 'a4', name: 'Nutritious Brunch', description: 'Power-packed breakfast for deep study day', duration: 15, time: '7:50 AM', category: 'nutrition', benefits: ['Day fuel'] },
      ]
    },
    {
      day: 8,
      focus: 'Day 8: Strengthening Habits',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Routine', description: 'Complete morning ritual', duration: 45, time: '6:30 AM', category: 'morning', benefits: ['Habit building'] },
        { id: 'a2', name: 'Advanced Pranayama', description: 'Breath work for mental clarity', duration: 10, time: '6:50 AM', category: 'meditation', benefits: ['Deep focus'] },
        { id: 'a3', name: 'Exercise Routine', description: 'Mixed cardio and strength', duration: 20, time: '7:15 AM', category: 'exercise', benefits: ['Total fitness'] },
        { id: 'a4', name: 'Brain Foods', description: 'Omega-3 and protein-rich meal', duration: 15, time: '7:45 AM', category: 'nutrition', benefits: ['Brain power'] },
      ]
    },
    {
      day: 9,
      focus: 'Deep Focus Activation',
      completed: false,
      activities: [
        { id: 'a1', name: 'Sunlight + Hydration', description: 'Morning activation routine', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Wakefulness'] },
        { id: 'a2', name: 'Box Breathing', description: '4-4-4-4 breathing for calm focus', duration: 10, time: '6:50 AM', category: 'meditation', benefits: ['Focus control'] },
        { id: 'a3', name: 'HIIT Workout', description: 'Short intense workout', duration: 20, time: '7:10 AM', category: 'exercise', benefits: ['Energy spike'] },
        { id: 'a4', name: 'Protein Breakfast', description: 'Eggs + nuts', duration: 15, time: '7:40 AM', category: 'nutrition', benefits: ['Brain fuel'] },
      ]
    },
    {
      day: 10,
      focus: 'Attention Control Training',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Routine', description: 'Sunlight + stretch', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Routine lock'] },
        { id: 'a2', name: 'Trataka Advanced', description: 'Candle focus training', duration: 10, time: '6:50 AM', category: 'meditation', benefits: ['Laser focus'] },
        { id: 'a3', name: 'Core Workout', description: 'Abs + posture training', duration: 20, time: '7:10 AM', category: 'exercise', benefits: ['Posture'] },
        { id: 'a4', name: 'Fruit + Nuts Bowl', description: 'Light brain nutrition', duration: 10, time: '7:40 AM', category: 'nutrition', benefits: ['Light energy'] },
      ]
    },
    {
      day: 11,
      focus: 'Cognitive Strength Building',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Walk', description: 'Outdoor movement', duration: 20, time: '6:30 AM', category: 'morning', benefits: ['Mental clarity'] },
        { id: 'a2', name: 'Meditation', description: 'Silent awareness', duration: 10, time: '6:55 AM', category: 'meditation', benefits: ['Awareness'] },
        { id: 'a3', name: 'Strength Training', description: 'Push + pull routine', duration: 25, time: '7:15 AM', category: 'exercise', benefits: ['Strength'] },
        { id: 'a4', name: 'Protein Meal', description: 'Balanced breakfast', duration: 15, time: '7:50 AM', category: 'nutrition', benefits: ['Sustain energy'] },
      ]
    },
    {
      day: 12,
      focus: 'Mental Endurance Phase',
      completed: false,
      activities: [
        { id: 'a1', name: 'Sunlight Routine', description: 'Circadian sync', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Sleep cycle'] },
        { id: 'a2', name: 'Breath Hold Practice', description: 'CO2 tolerance training', duration: 10, time: '6:50 AM', category: 'meditation', benefits: ['Focus endurance'] },
        { id: 'a3', name: 'Jogging', description: 'Steady cardio', duration: 25, time: '7:10 AM', category: 'exercise', benefits: ['Endurance'] },
        { id: 'a4', name: 'Oats + Nuts', description: 'Slow-release carbs', duration: 15, time: '7:45 AM', category: 'nutrition', benefits: ['Sustained energy'] },
      ]
    },
    {
      day: 13,
      focus: 'Distraction Resistance Training',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Silence', description: 'No phone first 30 min', duration: 30, time: '6:30 AM', category: 'morning', benefits: ['Dopamine reset'] },
        { id: 'a2', name: 'Mindfulness Meditation', description: 'Observe thoughts', duration: 10, time: '7:00 AM', category: 'meditation', benefits: ['Control mind'] },
        { id: 'a3', name: 'Bodyweight Training', description: 'Push-ups + squats', duration: 20, time: '7:15 AM', category: 'exercise', benefits: ['Discipline'] },
        { id: 'a4', name: 'Simple Breakfast', description: 'Light and clean', duration: 10, time: '7:40 AM', category: 'nutrition', benefits: ['Clarity'] },
      ]
    },
    {
      day: 14,
      focus: 'Weekly Mastery Integration',
      completed: false,
      activities: [
        { id: 'a1', name: 'Extended Meditation', description: 'Deep calm session', duration: 20, time: '6:30 AM', category: 'meditation', benefits: ['Inner stability'] },
        { id: 'a2', name: 'Visualization Practice', description: 'Goal visualization', duration: 10, time: '7:00 AM', category: 'meditation', benefits: ['Motivation'] },
        { id: 'a3', name: 'Full Body Workout', description: 'Complete routine', duration: 30, time: '7:15 AM', category: 'exercise', benefits: ['Full fitness'] },
        { id: 'a4', name: 'Balanced Meal', description: 'Complete nutrition', duration: 15, time: '7:50 AM', category: 'nutrition', benefits: ['Recovery'] },
      ]
    },
    {
      day: 15,
      focus: 'Peak Focus Phase Begins',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Activation', description: 'Routine start', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Alertness'] },
        { id: 'a2', name: 'Advanced Meditation', description: 'Deep stillness', duration: 15, time: '6:50 AM', category: 'meditation', benefits: ['Sharp mind'] },
        { id: 'a3', name: 'Strength + Cardio', description: 'Hybrid workout', duration: 25, time: '7:15 AM', category: 'exercise', benefits: ['Peak energy'] },
        { id: 'a4', name: 'Protein Meal', description: 'High protein breakfast', duration: 15, time: '7:45 AM', category: 'nutrition', benefits: ['Muscle + brain'] },
      ]
    },
    {
      day: 16,
      focus: 'Cognitive Peak Training',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Walk', description: 'Outdoor clarity', duration: 20, time: '6:30 AM', category: 'morning', benefits: ['Fresh mind'] },
        { id: 'a2', name: 'Breath Control', description: 'Advanced pranayama', duration: 10, time: '6:55 AM', category: 'meditation', benefits: ['Control'] },
        { id: 'a3', name: 'Workout', description: 'Full routine', duration: 25, time: '7:15 AM', category: 'exercise', benefits: ['Strength'] },
        { id: 'a4', name: 'Healthy Meal', description: 'Balanced nutrition', duration: 15, time: '7:45 AM', category: 'nutrition', benefits: ['Recovery'] },
      ]
    },
    {
      day: 17,
      focus: 'Memory Optimization Phase',
      completed: false,
      activities: [
        { id: 'a1', name: 'Sunlight Routine', description: 'Morning sync', duration: 15, time: '6:30 AM', category: 'morning', benefits: ['Circadian'] },
        { id: 'a2', name: 'Visualization', description: 'Memory training', duration: 10, time: '6:50 AM', category: 'meditation', benefits: ['Recall'] },
        { id: 'a3', name: 'Exercise', description: 'Cardio + strength', duration: 25, time: '7:15 AM', category: 'exercise', benefits: ['Blood flow'] },
        { id: 'a4', name: 'Brain Food', description: 'Omega rich meal', duration: 15, time: '7:45 AM', category: 'nutrition', benefits: ['Memory boost'] },
      ]
    },
    {
      day: 18,
      focus: 'Discipline Lock Phase',
      completed: false,
      activities: [
        { id: 'a1', name: 'No Phone Morning', description: 'Zero distraction start', duration: 30, time: '6:30 AM', category: 'morning', benefits: ['Focus'] },
        { id: 'a2', name: 'Meditation', description: 'Stillness training', duration: 15, time: '7:00 AM', category: 'meditation', benefits: ['Control'] },
        { id: 'a3', name: 'Workout', description: 'Strength routine', duration: 25, time: '7:20 AM', category: 'exercise', benefits: ['Discipline'] },
        { id: 'a4', name: 'Simple Meal', description: 'Clean eating', duration: 10, time: '7:50 AM', category: 'nutrition', benefits: ['Clarity'] },
      ]
    },
    {
      day: 19,
      focus: 'High Performance Mode',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Routine', description: 'Full activation', duration: 20, time: '6:30 AM', category: 'morning', benefits: ['Energy'] },
        { id: 'a2', name: 'Meditation', description: 'Deep awareness', duration: 15, time: '6:55 AM', category: 'meditation', benefits: ['Sharp focus'] },
        { id: 'a3', name: 'Workout', description: 'High intensity', duration: 30, time: '7:15 AM', category: 'exercise', benefits: ['Peak state'] },
        { id: 'a4', name: 'Balanced Diet', description: 'Full nutrition', duration: 15, time: '7:50 AM', category: 'nutrition', benefits: ['Recovery'] },
      ]
    },
    {
      day: 20,
      focus: 'Mastery Consolidation',
      completed: false,
      activities: [
        { id: 'a1', name: 'Morning Silence', description: 'Mind reset', duration: 20, time: '6:30 AM', category: 'morning', benefits: ['Clarity'] },
        { id: 'a2', name: 'Meditation', description: 'Stillness mastery', duration: 15, time: '6:55 AM', category: 'meditation', benefits: ['Mastery'] },
        { id: 'a3', name: 'Workout', description: 'Balanced training', duration: 25, time: '7:15 AM', category: 'exercise', benefits: ['Consistency'] },
        { id: 'a4', name: 'Clean Meal', description: 'Healthy nutrition', duration: 15, time: '7:45 AM', category: 'nutrition', benefits: ['Sustainability'] },
      ]
    },
    {
      day: 21,
      focus: 'Topper Mindset Achieved',
      completed: false,
      activities: [
        { id: 'a1', name: 'Reflection + Gratitude', description: 'Review journey', duration: 20, time: '6:30 AM', category: 'morning', benefits: ['Awareness'] },
        { id: 'a2', name: 'Meditation', description: 'Final deep session', duration: 20, time: '7:00 AM', category: 'meditation', benefits: ['Calm power'] },
        { id: 'a3', name: 'Light Workout', description: 'Recovery movement', duration: 20, time: '7:25 AM', category: 'exercise', benefits: ['Balance'] },
        { id: 'a4', name: 'Celebration Meal', description: 'Reward yourself', duration: 20, time: '7:50 AM', category: 'nutrition', benefits: ['Motivation'] },
      ]
    }
  ]
};