# Feature Updates - Complete Zenith Institute Website

## Overview
This document outlines all the new features added to the Zenith Institute website, including authentication, live/recorded classes, grade-based courses, and pricing.

---

## 1. Authentication System

### 1.1 Signup Page
**Location:** `/app/(auth)/signup/page.tsx`

Features:
- User registration with full name, email, password, and grade selection
- Grade selection includes:
  - Classes 1-5
  - Classes 6-8
  - Classes 9-10
  - Class 11
  - Class 12
  - Dropper - JEE
  - Dropper - NEET
- Form validation for all fields
- Password matching confirmation
- Automatic redirect to mentor dashboard after signup
- Data stored in localStorage for demo purposes

### 1.2 Login Page
**Location:** `/app/(auth)/login/page.tsx`

Features:
- Email and password-based login
- Demo credentials available (student@example.com / password123)
- Form validation
- Automatic redirect to mentor dashboard after successful login
- Error handling for invalid credentials

---

## 2. Dashboard System

### 2.1 Mentor Dashboard
**Location:** `/app/(dashboard)/dashboard/mentors/page.tsx`

Features:
- Displays assigned mentors based on user's grade
- Mentor cards showing:
  - Profile image
  - Experience level
  - Rating and reviews
  - Specialty and availability
- Quick action buttons to schedule sessions
- Navigation tabs to access other dashboard features
- Logout functionality

### 2.2 Live & Recorded Classes Dashboard
**Location:** `/app/(dashboard)/dashboard/live-classes/page.tsx`

Features:
- Toggle between Live and Recorded classes
- Live class cards showing:
  - Real-time status indicator (animated red pulse)
  - Class duration and time slots
  - Student capacity with progress bar
  - "Join Now" button
- Recorded class cards showing:
  - Play icon
  - Duration in minutes
  - "Watch Now" button
- Classes filtered by user's grade

### 2.3 Courses Dashboard
**Location:** `/app/(dashboard)/dashboard/courses/page.tsx`

Features:
- Display of all available courses
- Course cards with:
  - Course type badge (Regular/JEE/NEET Dropper)
  - Grade level
  - Course name and description
  - Rating and student count
  - Mentor name
  - Duration and features list
  - Pricing with discounts
- "Continue Learning" and "Course Details" buttons
- Responsive grid layout

---

## 3. Live & Recorded Classes

### 3.1 Live Classes
Classes displayed on:
- Home page (preview)
- Courses page (full section)
- Dashboard (filtered by user grade)

Live class features:
- Real-time class availability indicator
- Duration: 60-90 minutes
- Enrolled students vs. capacity tracking
- Subject and grade level specification
- Mentor assignment
- Description of class content

### 3.2 Recorded Classes
Recorded class features:
- Available anytime access
- Categorized by subject and grade
- Pre-recorded educational content
- Downloadable for offline viewing (future feature)

**Sample Data Included:**
- 5 live classes across different subjects
- Biology, Physics, Chemistry, Mathematics
- Classes for grades 10-12 and dropper programs

---

## 4. Grade-Based Courses

### 4.1 Course Categories

**Classes 1-5:**
- Foundation Mathematics (₹4,999)
- Science Basics (₹4,999)

**Classes 6-8:**
- Science & Mathematics (₹7,999)

**Classes 9-10:**
- Board Exam Preparation (₹9,999 → ₹8,499)

**Classes 11-12:**
- Class 11 Complete Course (₹14,999)
- Class 12 Complete Course (₹19,999 → ₹17,999)

**Dropper Programs - JEE:**
- JEE Main & Advanced Crash Course (₹29,999)
- JEE One Year Program (₹49,999 → ₹44,999)

**Dropper Programs - NEET:**
- NEET Crash Course (₹24,999)
- NEET Full Year Program (₹39,999 → ₹35,999)

### 4.2 Courses Page Features
**Location:** `/app/(pages)/courses/page.tsx`

Features:
- Filter courses by grade level
- Display live classes section (top 3)
- Toggle between live and recorded classes
- Comprehensive course catalog
- Each course shows:
  - Course name and description
  - Mentor information
  - Duration
  - Student rating and count
  - Pricing and discounts
  - Key features list

---

## 5. Pricing Page

### 5.1 Pricing Plans
**Location:** `/app/(pages)/pricing/page.tsx`

**Three Tiers:**

1. **Basic Plan**
   - Monthly: ₹9,999
   - Annual: ₹99,999
   - Features:
     - 1 course access
     - Recorded classes only
     - Weekly doubt sessions
     - Basic study material
     - Email support
     - Community access

2. **Premium Plan (Most Popular)**
   - Monthly: ₹19,999
   - Annual: ₹199,999
   - Features:
     - 3 courses access
     - Live + Recorded classes
     - Daily doubt sessions
     - Complete study material
     - Priority email support
     - Mentor guidance
     - Practice tests
     - Progress tracking

3. **Elite Plan**
   - Monthly: ₹34,999
   - Annual: ₹349,999
   - Features:
     - Unlimited course access
     - Live + Recorded + 1-on-1 sessions
     - Round-the-clock support
     - Premium study material
     - Personal mentor
     - 24/7 phone support
     - Full test series
     - Interview preparation
     - Career counseling
     - Lifetime access

### 5.2 Pricing Features
- Monthly/Annual toggle with 17% annual savings
- Feature comparison table
- Highlighted "Most Popular" plan
- FAQ section
- Grade-level recommendation for each plan
- CTA buttons for plan selection

---

## 6. Mentor System

### 6.1 Mentor Database
**Location:** `/lib/dummy-data.ts`

**5 Sample Mentors:**

1. **Dr. Sneha Kumar**
   - NEET Specialist (Biology & Medical Guidance)
   - 8+ years experience
   - Rating: 4.9/5 (342 reviews)
   - Classes: 11, 12, Dropper-NEET

2. **Rahul Singh**
   - JEE Expert (Mathematics & Physics)
   - 7 years experience
   - Rating: 4.8/5 (298 reviews)
   - Classes: 11, 12, Dropper-JEE

3. **Dr. Ravi Verma**
   - Dropper Mentor (NEET Strategy & Revision)
   - 9 years experience
   - Rating: 4.7/5 (267 reviews)
   - Classes: 12, Dropper-NEET

4. **Priya Mehta**
   - Foundation Expert (Classes 6-8)
   - 6 years experience
   - Rating: 4.6/5 (189 reviews)
   - Classes: 6, 7, 8

5. **Prof. Aditya Sharma**
   - Chemistry Master (Organic & Inorganic)
   - 10 years experience
   - Rating: 4.8/5 (421 reviews)
   - Classes: 11, 12, Dropper-JEE, Dropper-NEET

### 6.2 Mentor Assignment Logic
Mentors are automatically assigned based on user's selected grade:
- Classes 1-5 → Priya Mehta
- Classes 6-8 → Priya Mehta
- Classes 9-10 → Prof. Aditya Sharma
- Class 11 → Rahul Singh, Prof. Aditya Sharma
- Class 12 → Dr. Sneha Kumar, Rahul Singh, Prof. Aditya Sharma
- Dropper-JEE → Rahul Singh, Prof. Aditya Sharma
- Dropper-NEET → Dr. Sneha Kumar, Dr. Ravi Verma

---

## 7. Navigation Updates

### 7.1 Header Changes
**Location:** `/components/navigation/header.tsx`

Updates:
- Added "Pricing" link to main navigation
- Added "Mentors" link (previously commented)
- Dynamic login/logout buttons based on authentication state
- Dashboard link appears for logged-in users
- Logout button with red styling for logged-in users
- Full mobile responsiveness for new links

### 7.2 Navigation Routes
- Home: `/`
- About: `/about`
- Courses: `/courses`
- Mentors: `/mentors`
- Pricing: `/pricing`
- Contact: `/contact`
- Login: `/login`
- Signup: `/signup`
- Dashboard: `/dashboard/mentors`, `/dashboard/live-classes`, `/dashboard/courses`

---

## 8. Data Management

### 8.1 Dummy Data File
**Location:** `/lib/dummy-data.ts`

Contains:
- 5 mentor profiles with full details
- 5 live classes
- 5 recorded classes
- 10 courses (regular + dropper programs)
- 3 pricing plans
- 1 demo user account

### 8.2 LocalStorage Usage (For Demo)
- `currentUser`: Stores logged-in user information
- `users`: Stores registered user accounts
- Demo credentials: student@example.com / password123

**Note:** In production, replace localStorage with backend API calls and JWT tokens.

---

## 9. Authentication Flow

```
User Registration/Login
        ↓
Validate Credentials
        ↓
Store in localStorage (demo)
        ↓
Redirect to /dashboard/mentors
        ↓
Fetch assigned mentors based on grade
        ↓
Display dashboard with:
   - Assigned mentors
   - Live/Recorded classes
   - Enrolled courses
```

---

## 10. Integration Points for Backend

### 10.1 API Endpoints Needed

**Authentication:**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

**Mentors:**
- `GET /api/mentors` - Get all mentors
- `GET /api/mentors/:id` - Get mentor details
- `GET /api/mentors/assign/:gradeId` - Get mentors for a grade
- `POST /api/mentors/:id/schedule` - Schedule session

**Classes:**
- `GET /api/classes/live` - Get live classes
- `GET /api/classes/recorded` - Get recorded classes
- `POST /api/classes/:id/join` - Join a class
- `POST /api/classes/:id/watch` - Start watching recorded class

**Courses:**
- `GET /api/courses` - Get all courses
- `GET /api/courses?grade=:grade` - Get courses by grade
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/:id/content` - Get course content

**User Dashboard:**
- `GET /api/user/mentors` - Get assigned mentors
- `GET /api/user/courses` - Get enrolled courses
- `GET /api/user/classes` - Get accessible classes

---

## 11. File Structure

```
app/
├── (auth)/
│   ├── login/page.tsx
│   └── signup/page.tsx
├── (dashboard)/
│   └── dashboard/
│       ├── mentors/page.tsx
│       ├── live-classes/page.tsx
│       └── courses/page.tsx
├── (pages)/
│   ├── courses/page.tsx
│   └── pricing/page.tsx
└── page.tsx (home)

components/
├── navigation/
│   ├── header.tsx (updated)
│   └── footer.tsx
└── shared/
    ├── mentor-card.tsx
    └── course-card.tsx

lib/
└── dummy-data.ts (new)
```

---

## 12. Testing

### 12.1 Demo Account
- **Email:** student@example.com
- **Password:** password123
- **Grade:** Class 12

### 12.2 Test Flows
1. **Signup Flow:**
   - Go to `/signup`
   - Fill in details with any grade
   - Submit → redirects to `/dashboard/mentors`

2. **Login Flow:**
   - Go to `/login`
   - Use demo credentials
   - Submit → redirects to `/dashboard/mentors`

3. **Dashboard Flow:**
   - Logout from dashboard
   - Login again → returns to dashboard
   - Click "My Courses" → view all courses
   - Click "Live Classes" → view live/recorded classes

4. **Pricing Flow:**
   - Visit `/pricing`
   - Toggle monthly/annual
   - View feature comparison

---

## 13. Future Enhancements

1. **Backend Integration:**
   - Replace localStorage with database
   - Implement JWT authentication
   - Add role-based access control

2. **Advanced Features:**
   - Live class video streaming
   - Interactive whiteboard
   - Real-time doubt resolution
   - Progress tracking and analytics
   - Certificate generation
   - Payment integration

3. **Mobile App:**
   - Native iOS/Android apps
   - Push notifications
   - Offline content access

4. **Community:**
   - Discussion forums
   - Peer learning groups
   - Study buddy matching

---

## 14. Troubleshooting

**Issue:** Can't login with demo account
- **Solution:** Make sure localStorage is enabled in your browser

**Issue:** Dashboard shows wrong mentors
- **Solution:** Check that grade is correctly selected during signup

**Issue:** Live classes not showing
- **Solution:** Dummy data needs to be loaded from `/lib/dummy-data.ts`

---

## 15. Support

For questions or issues related to these features, refer to:
- Feature files: Check individual component comments
- API Guide: `/API_INTEGRATION_GUIDE.md`
- Project Structure: `/PROJECT_STRUCTURE.md`
