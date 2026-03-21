# Zenith Institute - Complete Project Structure

## Directory Organization

```
zenith-institute/
├── app/
│   ├── layout.tsx                    # Root layout with Header and Footer
│   ├── page.tsx                      # Home page (/)
│   ├── globals.css                   # Global styles and design system
│   ├── (pages)/                      # Route group for other pages
│   │   ├── about/
│   │   │   └── page.tsx              # About page (/about)
│   │   ├── courses/
│   │   │   └── page.tsx              # Courses page (/courses)
│   │   ├── mentors/
│   │   │   └── page.tsx              # Mentors page (/mentors)
│   │   └── contact/
│   │       └── page.tsx              # Contact page (/contact)
│   └── api/                          # API routes (for future backend)
│       ├── contact/
│       │   └── route.ts              # Contact form handler
│       ├── courses/
│       │   └── route.ts              # Courses endpoint
│       ├── mentors/
│       │   └── route.ts              # Mentors endpoint
│       ├── bookings/
│       │   └── route.ts              # Booking handler
│       ├── newsletter/
│       │   └── route.ts              # Newsletter signup
│       └── auth/                     # Authentication routes
│           ├── login/
│           │   └── route.ts          # Login endpoint
│           └── signup/
│               └── route.ts          # Sign up endpoint
│
├── components/
│   ├── navigation/
│   │   ├── header.tsx                # Top navigation bar
│   │   │   - Logo and branding
│   │   │   - Desktop menu
│   │   │   - Mobile hamburger menu
│   │   │   - Login/Sign up buttons
│   │   │   - Responsive design
│   │   │
│   │   └── footer.tsx                # Footer section
│   │       - Quick links
│   │       - Course links
│   │       - Contact info
│   │       - Social media
│   │       - Copyright
│   │
│   ├── home/                         # Home page components
│   │   ├── hero-section.tsx          # Hero banner with CTA
│   │   │   - Main headline
│   │   │   - Featured image
│   │   │   - CTA buttons
│   │   │   - Responsive layout
│   │   │
│   │   ├── features-section.tsx      # Feature icons grid
│   │   │   - NEET, JEE, Career, Study, Exam features
│   │   │   - Responsive grid
│   │   │
│   │   ├── courses-preview.tsx       # Featured courses showcase
│   │   │   - Featured 4 courses
│   │   │   - Course cards
│   │   │   - View all link
│   │   │
│   │   ├── mentors-section.tsx       # Featured mentors showcase
│   │   │   - Featured 4 mentors
│   │   │   - Mentor cards
│   │   │   - View all link
│   │   │
│   │   └── cta-section.tsx           # Call-to-action section
│   │       - Main CTA
│   │       - Trust indicators (stats)
│   │       - Booking button
│   │
│   ├── shared/                       # Reusable components
│   │   ├── course-card.tsx           # Course card component
│   │   │   Props:
│   │   │   - title: string
│   │   │   - image: string
│   │   │   - price: number
│   │   │   - mentorName: string
│   │   │   - rating: number
│   │   │   - reviews: number
│   │   │   - description?: string
│   │   │
│   │   └── mentor-card.tsx           # Mentor card component
│   │       Props:
│   │       - name: string
│   │       - title: string
│   │       - image: string
│   │       - description: string
│   │       - rating: number
│   │       - reviews: number
│   │       - onViewProfile?: callback
│   │
│   └── ui/                           # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (other UI components)
│
├── public/
│   ├── icon.svg                      # Site icon
│   ├── icon-light-32x32.png         # Light mode icon
│   ├── icon-dark-32x32.png          # Dark mode icon
│   ├── apple-icon.png               # Apple touch icon
│   └── images/                      # Static images
│       └── (placeholder references)
│
├── styles/
│   └── globals.css                  # Global styles (now in app/)
│
├── lib/
│   └── utils.ts                     # Utility functions (cn, etc.)
│
├── hooks/
│   ├── use-mobile.tsx               # Mobile detection hook
│   └── use-toast.ts                 # Toast notification hook
│
├── Documentation/
│   ├── README.md                    # Main project documentation
│   ├── API_INTEGRATION_GUIDE.md      # Backend integration guide
│   ├── IMPLEMENTATION_CHECKLIST.md   # Feature checklist
│   └── PROJECT_STRUCTURE.md          # This file
│
├── Configuration Files
│   ├── package.json                 # Dependencies and scripts
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tailwind.config.ts           # Tailwind CSS config
│   ├── next.config.mjs              # Next.js configuration
│   └── .eslintrc.json               # ESLint configuration
│
└── Environment Files
    ├── .env.local                   # Local environment variables
    └── .env.example                 # Example environment template
```

## File Details

### Pages

#### Home Page (`/app/page.tsx`)
- Entry point of the application
- Imports and displays all home page sections
- **Sections**:
  - Hero section
  - Features grid
  - Courses preview
  - Mentors section
  - CTA section

#### About Page (`/app/(pages)/about/page.tsx`)
- Company information and mission
- **Sections**:
  - Mission and vision
  - Why choose Zenith
  - Statistics
  - Teaching approach
  - Contact CTA

#### Courses Page (`/app/(pages)/courses/page.tsx`)
- Complete course catalog
- **Features**:
  - Filter buttons (extensible)
  - Course grid display
  - Course details (price, mentor, rating)
  - Free consultation CTA
- **Future Enhancement**: Dynamic courses from API

#### Mentors Page (`/app/(pages)/mentors/page.tsx`)
- Complete mentor directory
- **Features**:
  - Mentor profiles
  - Expertise and experience
  - Student ratings
  - Session booking
- **Future Enhancement**: Dynamic mentors from API

#### Contact Page (`/app/(pages)/contact/page.tsx`)
- Contact form and information
- **Features**:
  - Contact form with validation
  - Contact details
  - Newsletter signup
  - Business hours
  - Success feedback
- **Future Enhancement**: Connect to email service

### Components

#### Navigation Components

**Header** (`/components/navigation/header.tsx`)
- Sticky navigation bar
- Features:
  - Logo with icon
  - Desktop navigation menu
  - Mobile hamburger menu with dropdown
  - Login/Sign Up buttons
  - Courses dropdown menu
  - Active state indicators

**Footer** (`/components/navigation/footer.tsx`)
- Full-width footer
- Features:
  - Company info
  - Quick links
  - Programs links
  - Contact information
  - Social media links
  - Copyright notice

#### Home Page Components

**HeroSection** (`/components/home/hero-section.tsx`)
- Large hero banner with background
- Features:
  - Main headline with color highlight
  - Subheadline
  - Dual CTA buttons
  - Featured image on right
  - Decorative elements
  - Responsive grid layout

**FeaturesSection** (`/components/home/features-section.tsx`)
- Feature icons showcase
- Displays:
  - NEET icon + title
  - JEE icon + title
  - Career Options icon + title
  - Study Tips icon + title
  - Exam Prep icon + title
- Responsive grid (2→3→5 columns)

**CoursesPreview** (`/components/home/courses-preview.tsx`)
- Showcase top 4 courses
- Features:
  - Course cards grid
  - Centered headline
  - "View All Courses" button
  - Course data from static array

**MentorsSection** (`/components/home/mentors-section.tsx`)
- Showcase top 4 mentors
- Features:
  - Mentor cards grid
  - Centered headline
  - "View All Mentors" button
  - Mentor data from static array

**CTASection** (`/components/home/cta-section.tsx`)
- Main call-to-action banner
- Features:
  - Large headline
  - Primary CTA button
  - Trust indicators (3 statistics)
  - Gradient background
  - Centered layout

#### Shared Components

**CourseCard** (`/components/shared/course-card.tsx`)
```tsx
Props:
- title: string
- image: string
- price: number
- mentorName: string
- rating: number
- reviews: number
- description?: string

Features:
- Course image
- Price in rupees
- Mentor information
- Star rating display
- Review count
- Book Now button
- Hover shadow effect
```

**MentorCard** (`/components/shared/mentor-card.tsx`)
```tsx
Props:
- name: string
- title: string
- image: string
- description: string
- rating: number
- reviews: number
- onViewProfile?: () => void

Features:
- Mentor photo
- Name and specialization
- Brief description (clamped to 2 lines)
- Star rating
- Review count
- View Profile button
- Hover effects
```

### Styling System

#### Design Tokens (in globals.css)

**Colors**:
```css
--primary: oklch(0.28 0.15 265);      /* Deep Blue */
--secondary: oklch(0.6 0.28 30);      /* Orange */
--background: oklch(0.98 0.005 220);  /* Light Blue/Off-white */
--foreground: oklch(0.15 0.05 220);   /* Dark Gray */
--border: oklch(0.92 0.01 220);       /* Light Gray */
```

**Typography**:
- Font: Geist (from Next.js/Google Fonts)
- Headings: Bold, variable sizes
- Body: Regular, 16px
- Small: 14px

**Spacing**:
- Uses Tailwind spacing scale
- Gap classes for component spacing
- Padding classes for internal spacing

**Breakpoints** (Tailwind defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Layout Structure

#### Root Layout (`/app/layout.tsx`)
```tsx
<html>
  <body>
    <Header />
    <main>
      {children}  // Page content
    </main>
    <Footer />
  </body>
</html>
```

#### Page Layout Pattern
```tsx
All pages follow this structure:
- Hero section (optional)
- Main content sections
- CTA section
- Responsive containers with max-width
```

#### Component Layout Pattern
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  // Content with responsive padding
</div>
```

## Data Structures

### Course Object
```tsx
{
  id: string
  title: string
  image: string
  price: number
  mentorName: string
  rating: number (0-5)
  reviews: number
  description?: string
}
```

### Mentor Object
```tsx
{
  id: string
  name: string
  title: string
  image: string
  description: string
  rating: number (0-5)
  reviews: number
}
```

### Contact Form Data
```tsx
{
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}
```

## State Management

Currently using React's built-in hooks:
- `useState` for form data
- `useState` for UI state (menu toggle, form submission)

Future considerations:
- Context API for global auth state
- TanStack Query (React Query) for API data
- Zustand/Redux for complex state

## Routing

Using Next.js 13+ App Router:
- Route groups `(pages)` for organization
- Dynamic routes ready for implementation
- API routes for backend integration

## Performance Considerations

### Optimizations Implemented
- Component splitting
- CSS at build time (Tailwind)
- Icon-only approach (Lucide)
- Image optimization ready
- Mobile-first CSS

### Future Optimizations
- Image lazy loading
- Code splitting optimization
- Caching strategies
- API response caching
- Service worker

## Accessibility Features

- Semantic HTML elements
- ARIA labels (form fields)
- Color contrast compliance (WCAG AA)
- Keyboard navigation support
- Mobile touch target sizing
- Alt text ready for images

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Internationalization (i18n) - Future

Structure ready for i18n implementation:
- Text content centralized in arrays
- No hardcoded strings in components
- Ready for translation tool integration

## Testing Structure - Future

```
tests/
├── unit/
│   ├── components/
│   └── utils/
├── integration/
│   ├── pages/
│   └── forms/
└── e2e/
    └── user-flows/
```

## Build & Deployment

### Build Process
```bash
next build
# Generates optimized production bundle
```

### Deployment Targets
- Vercel (recommended - zero config)
- Netlify
- AWS
- Self-hosted

### Environment Variables
```
NEXT_PUBLIC_API_URL=           # API base URL
DATABASE_URL=                  # Database connection
JWT_SECRET=                    # Authentication secret
SMTP_HOST=                     # Email service
SMTP_USER=                     # Email username
SMTP_PASSWORD=                 # Email password
```

---

## Quick Navigation Guide

### To Find...

**Navigation**: `/components/navigation/`
**Home sections**: `/components/home/`
**Reusable cards**: `/components/shared/`
**All pages**: `/app/(pages)/`
**Colors/styles**: `/app/globals.css`
**Layouts**: `/app/layout.tsx`
**API ready**: `/app/api/` (empty, ready for implementation)

---

## Development Workflow

1. **Add new page**: Create folder in `/app/(pages)/`
2. **Add new component**: Create in `/components/` with appropriate subfolder
3. **Add new card type**: Create in `/components/shared/`
4. **Add new section**: Create in appropriate component folder
5. **Update styles**: Modify classes in files or `/app/globals.css`
6. **Update colors**: Change CSS variables in `/app/globals.css`

---

## Maintenance Guidelines

- Keep components small and focused
- Reuse cards and shared components
- Update design system in one place (globals.css)
- Document component props with comments
- Use TypeScript for type safety
- Follow existing naming conventions

---

This comprehensive structure ensures:
✅ Easy navigation and file finding
✅ Scalable component organization  
✅ Consistent design system
✅ Clear separation of concerns
✅ Readiness for backend integration
✅ Performance and accessibility
✅ Future enhancements and maintenance
