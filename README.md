# Zenith Institute - Coaching Platform

A comprehensive front-end website for Zenith Institute, a coaching and mentorship platform offering expert guidance for competitive exams (NEET, JEE) and career planning.

## Project Overview

This is a fully responsive, modern web application built with Next.js 16, TypeScript, and Tailwind CSS. The site features a clean, professional aesthetic with easy navigation and mobile responsiveness.

## Features

- **Multiple Pages**: Home, About, Courses, Contact, and Mentors pages
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Component-Based Architecture**: Reusable, modular components for easy maintenance
- **Contact Form**: Fully functional frontend form with validation ready for backend integration
- **Professional Design**: Deep blue and orange color scheme with educational illustrations
- **Performance Optimized**: Fast loading, smooth animations, and optimized images

## Project Structure

```
/app
  /layout.tsx                    # Root layout with Header and Footer
  /globals.css                   # Design system and global styles
  /page.tsx                      # Home page
  /(pages)/
    /about/page.tsx             # About page
    /courses/page.tsx           # Courses listing page
    /mentors/page.tsx           # Mentors listing page
    /contact/page.tsx           # Contact form page

/components
  /navigation/
    /header.tsx                 # Navigation header with mobile menu
    /footer.tsx                 # Footer with links and contact info
  /home/
    /hero-section.tsx           # Home page hero banner
    /features-section.tsx       # Feature icons section
    /courses-preview.tsx        # Featured courses section
    /mentors-section.tsx        # Featured mentors section
    /cta-section.tsx            # Call-to-action section
  /shared/
    /course-card.tsx            # Reusable course card component
    /mentor-card.tsx            # Reusable mentor card component

/public
  # Static assets and images

/styles
  # Global styles and theme configuration
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Geist (from Next.js)

## Design System

### Color Palette
- **Primary**: Deep Blue (#0F3A7D) - Used for headings, navigation, primary CTAs
- **Secondary**: Orange (#FF8C00) - Used for accent buttons and highlights
- **Background**: Light Blue/Off-White (#F8FAFC) - Clean, modern background
- **Text**: Dark Gray (#1F2937) - High contrast for readability
- **Borders**: Light Gray (#E5E7EB) - Subtle separators

### Typography
- **Headings**: Bold, 24-48px sizes
- **Body**: Regular weight, 16px
- **Small Text**: 14px for secondary information

### Spacing
- Uses Tailwind's default spacing scale
- Consistent padding: 1rem, 1.5rem, 2rem
- Consistent margins between sections

## Key Pages

### Home Page
- Hero section with call-to-action buttons
- Feature icons grid showcasing specialties
- Featured courses preview
- Featured mentors section
- Call-to-action section

### About Page
- Company mission and vision
- Why choose Zenith Institute
- Key statistics
- Teaching approach explanation
- Contact CTA

### Courses Page
- Full catalog of mentorship programs
- Filter/category buttons
- Course cards with pricing and mentor info
- Free consultation CTA

### Mentors Page
- Complete mentor profiles
- Experience and specialization details
- Student ratings and reviews
- Session booking CTA

### Contact Page
- Contact form with validation
- Contact information (phone, email, address)
- Business hours
- Newsletter subscription

## Form Structure (Ready for Backend Integration)

### Contact Form
```
Fields:
- Full Name (required, text)
- Email Address (required, email)
- Phone Number (optional, tel)
- Subject (required, select dropdown)
- Message (required, textarea)

Endpoint: POST /api/contact
Response: { success: boolean, message: string }
```

### Newsletter Form
```
Fields:
- Email (required, email)

Endpoint: POST /api/newsletter
Response: { success: boolean, message: string }
```

### Course Booking (Expandable)
```
Fields:
- User details
- Course selection
- Preferred timing
- Additional preferences

Endpoint: POST /api/bookings
Response: { success: boolean, bookingId: string }
```

## Future Backend Integration Points

1. **Authentication**: `/api/auth/login`, `/api/auth/signup`
2. **Contact Form**: `POST /api/contact` - Submit contact inquiries
3. **Course Booking**: `POST /api/bookings` - Book mentorship sessions
4. **Mentor Profiles**: `GET /api/mentors` - Fetch mentor data
5. **Courses List**: `GET /api/courses` - Fetch course information
6. **Newsletter**: `POST /api/newsletter` - Subscribe to newsletter

## Responsive Breakpoints

- **Mobile**: < 640px (1 column layouts)
- **Tablet**: 640px - 1024px (2-3 column layouts)
- **Desktop**: > 1024px (4 column layouts)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser at http://localhost:3000
```

### Build for Production

```bash
pnpm build
pnpm start
```

## Component Usage Examples

### Using CourseCard
```tsx
<CourseCard
  title="NEET Mentorship"
  image="/course-image.jpg"
  price={2499}
  mentorName="Dr. Sneha Kumar"
  rating={4.8}
  reviews={156}
/>
```

### Using MentorCard
```tsx
<MentorCard
  name="Dr. Sneha Kumar"
  title="MBBS, Medical Mentor"
  image="/mentor-image.jpg"
  description="Guiding students for NEET success"
  rating={4.8}
  reviews={89}
  onViewProfile={() => console.log('View profile')}
/>
```

## Customization

### Updating Colors
Edit `/app/globals.css` CSS variables in `:root` selector to change the color scheme throughout the site.

### Adding New Courses
Update the `courses` array in `/app/(pages)/courses/page.tsx` and `/components/home/courses-preview.tsx`.

### Adding New Mentors
Update the `mentors` array in `/app/(pages)/mentors/page.tsx` and `/components/home/mentors-section.tsx`.

## Performance Tips

- Images are optimized and use Next.js Image component when possible
- CSS is utility-first with Tailwind, keeping bundle size minimal
- Components are code-split for faster page loads
- Static pages are pre-rendered for better performance

## Deployment

This project can be deployed to Vercel with a single click:

```bash
pnpm run build
# Deploy to Vercel
```

Or deploy to any Next.js-compatible hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication system
- [ ] Course booking and payment integration
- [ ] Student dashboard
- [ ] Blog/News section
- [ ] Live chat support
- [ ] Analytics tracking
- [ ] Email notifications
- [ ] Mobile app version
- [ ] AI-powered course recommendations

## License

This project is proprietary to Zenith Institute.

## Support

For support or inquiries, contact:
- Email: info@zenith.edu
- Phone: +91 9876543210
- Address: 123 Education Lane, City, India
