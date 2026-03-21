# Zenith Institute - Quick Start Guide

## Getting Started

### 1. Installation
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

The application will be available at `http://localhost:3000`

---

## 2. Key Pages & Routes

### Public Pages
| Route | Purpose |
|-------|---------|
| `/` | Home page with hero, features, and mentors |
| `/about` | About Zenith Institute |
| `/courses` | Course catalog with grade filters and live/recorded classes |
| `/mentors` | Full mentor directory |
| `/pricing` | Pricing plans with comparison |
| `/contact` | Contact form |

### Authentication Pages
| Route | Purpose |
|-------|---------|
| `/signup` | User registration with grade selection |
| `/login` | User login with demo credentials available |

### Dashboard Pages (Protected)
| Route | Purpose |
|-------|---------|
| `/dashboard/mentors` | View assigned mentors |
| `/dashboard/live-classes` | Toggle between live and recorded classes |
| `/dashboard/courses` | View enrolled courses |

---

## 3. Demo Login Credentials

```
Email: student@example.com
Password: password123
```

**What you can do:**
- Login and view your assigned mentors
- See live and recorded classes
- View available courses
- Switch between dashboard sections

---

## 4. Key Features

### Authentication
✅ Signup with grade selection (Classes 1-12, Dropper JEE/NEET)
✅ Login with email and password
✅ Automatic mentor assignment based on grade
✅ Logout functionality with localStorage cleanup

### Live & Recorded Classes
✅ Live classes with real-time status indicator
✅ Recorded classes for on-demand learning
✅ Class filtering by grade level
✅ Capacity tracking for live classes
✅ Duration and schedule information

### Courses
✅ 10+ courses across different grades
✅ Grade-level filtering (Classes 1-12, Droppers)
✅ Course cards with ratings, pricing, and features
✅ Discount pricing available
✅ Mentor assignment for each course

### Pricing
✅ 3-tier pricing plans (Basic, Premium, Elite)
✅ Monthly/Annual billing toggle
✅ Feature comparison table
✅ Grade recommendations per plan
✅ FAQ section

### Mentors
✅ 5 sample mentors with profiles
✅ Automatic assignment based on grade
✅ Rating and experience information
✅ Specialty and availability details
✅ Quick profile view

---

## 5. File Structure Overview

```
app/
├── (auth)/              # Authentication routes
│   ├── login/
│   └── signup/
├── (dashboard)/         # Protected dashboard routes
│   └── dashboard/
│       ├── mentors/
│       ├── live-classes/
│       └── courses/
├── (pages)/             # Main pages
│   ├── courses/
│   ├── pricing/
│   ├── about/
│   ├── contact/
│   └── mentors/
├── layout.tsx           # Root layout
├── page.tsx             # Home page
└── globals.css          # Global styles

components/
├── navigation/
│   ├── header.tsx       # Main navigation (updated with auth)
│   └── footer.tsx
├── shared/
│   ├── mentor-card.tsx
│   └── course-card.tsx
└── home/                # Home page sections
    ├── hero-section.tsx
    ├── features-section.tsx
    ├── courses-preview.tsx
    ├── mentors-section.tsx
    └── cta-section.tsx

lib/
└── dummy-data.ts        # All sample data (mentors, courses, classes)
```

---

## 6. Customizing Dummy Data

All sample data is in `/lib/dummy-data.ts`. To modify:

### Add a New Mentor
```typescript
export const mentors: Mentor[] = [
  // ... existing mentors
  {
    id: 'mentor-6',
    name: 'Your Mentor Name',
    title: 'Your Specialty',
    specialty: 'Your Specialty Details',
    experience: 5,
    rating: 4.7,
    reviews: 150,
    image: 'image-url',
    bio: 'Your bio',
    availability: ['Monday', 'Wednesday'],
    classes: ['Class 11', 'Class 12'],
  },
];
```

### Add a New Course
```typescript
export const courses: Course[] = [
  // ... existing courses
  {
    id: 'course-11',
    name: 'Your Course Name',
    grade: 'Class 11',
    type: 'class',
    price: 15999,
    discountPrice: 14999,
    duration: '12 Months',
    students: 234,
    rating: 4.8,
    description: 'Your course description',
    mentor: 'Mentor Name',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
];
```

---

## 7. Color System

The app uses a professional color scheme:
- **Primary:** Deep Blue (#0066CC)
- **Secondary:** Orange (#FF9500)
- **Accents:** Red for live classes, various shades
- **Neutrals:** White, grays for text and backgrounds

All colors are defined as CSS variables in `globals.css`

---

## 8. Responsive Design

The site is fully responsive:
- **Mobile:** Single column layouts
- **Tablet:** 2-column grids
- **Desktop:** 3-4 column grids

All components use Tailwind CSS with responsive prefixes (sm:, md:, lg:)

---

## 9. Form Validation

### Signup Form
- Name: Required, non-empty
- Email: Required, valid format
- Grade: Required, must be selected
- Password: Required, minimum 6 characters
- Confirm Password: Must match password

### Login Form
- Email: Required, valid format
- Password: Required
- Demo credentials: student@example.com / password123

### Contact Form
- Name: Required
- Email: Required, valid format
- Message: Required

---

## 10. Component Usage

### Using MentorCard
```tsx
import { MentorCard } from '@/components/shared/mentor-card';
import { mentors } from '@/lib/dummy-data';

<MentorCard mentor={mentors[0]} />
```

### Using CourseCard
```tsx
import { CourseCard } from '@/components/shared/course-card';

<CourseCard
  title={course.name}
  image={imageUrl}
  price={course.price}
  mentorName={course.mentor}
  rating={course.rating}
  reviews={course.students}
/>
```

---

## 11. Adding New Pages

To create a new page:

1. Create folder: `app/(pages)/your-page/`
2. Create file: `page.tsx`
3. Add to header navigation in `components/navigation/header.tsx`

Example:
```tsx
// app/(pages)/your-page/page.tsx
export default function YourPage() {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-primary">Your Page</h1>
    </div>
  );
}
```

---

## 12. Backend Integration Checklist

When integrating with backend:
- [ ] Replace localStorage with API calls
- [ ] Implement JWT token management
- [ ] Add API interceptors for authentication
- [ ] Update mentor assignment logic to fetch from API
- [ ] Connect course enrollment to backend
- [ ] Implement live class joining mechanism
- [ ] Add payment processing
- [ ] Setup database models
- [ ] Add input validation on server
- [ ] Implement rate limiting

---

## 13. Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build for production
pnpm build

# Start server
pnpm start
```

---

## 14. Troubleshooting

**Page not loading?**
- Check that all imports are correct
- Verify file paths are absolute (`/vercel/share/v0-project/...`)
- Run `pnpm install` to ensure dependencies are installed

**Styles not applied?**
- Clear browser cache (Cmd/Ctrl + Shift + Delete)
- Verify Tailwind CSS is compiled
- Check that globals.css is imported in layout.tsx

**Dashboard returning to login?**
- Make sure currentUser is stored in localStorage
- Check browser's localStorage in DevTools (F12)
- Try login again with demo credentials

**Mentor not assigned?**
- Verify grade is correctly selected during signup
- Check `/lib/dummy-data.ts` for mentor-grade mapping
- Ensure gradeToMentors object includes your selected grade

---

## 15. Support & Documentation

For more detailed information:
- **Feature Details:** `FEATURE_UPDATES.md`
- **Project Structure:** `PROJECT_STRUCTURE.md`
- **API Integration:** `API_INTEGRATION_GUIDE.md`
- **Implementation Checklist:** `IMPLEMENTATION_CHECKLIST.md`

---

## 16. Next Steps

1. ✅ Review the demo features
2. ✅ Test signup and login
3. ✅ Explore the dashboard
4. ✅ Check pricing and courses pages
5. 📋 Plan backend implementation
6. 🔗 Integrate with your backend API
7. 💳 Add payment processing
8. 🚀 Deploy to production

---

**Version:** 1.0.0  
**Last Updated:** March 2026  
**Status:** Production Ready (Frontend Only)
