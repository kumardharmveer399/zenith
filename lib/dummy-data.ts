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


// Mentors Data
export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "Dr. Chunchun Mahtha",
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
    id: "mentor-5",
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
    mentorName: 'Priya Mehta',
    mentorTitle: 'Foundation & Study Coach',
    yearsExperience: 6,
    quote: 'The personalized mentoring approach at Zenith allows me to understand each student\'s unique learning style and challenges. Seeing students progress from struggling with basics to confidently solving complex problems is what keeps me passionate about education.',
    thought: 'Every student has unlimited potential; they just need the right guidance, resources, and encouragement to unlock it.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rating: 4.7,
    impact: 'Mentored 300+ students | 98% board exam pass rate',
  },
];
