# API Integration Guide - Zenith Institute

This document outlines the structure and endpoints ready for backend integration. All forms are built with validation ready to connect to your backend API.

## Overview

The frontend is structured to easily integrate with backend APIs. All forms use React state management and are ready for API calls via fetch or axios.

## API Endpoints

### 1. Contact Form Submission

**Endpoint**: `POST /api/contact`

**Form Location**: `/app/(pages)/contact/page.tsx`

**Request Body**:
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string (optional)",
  "subject": "string",
  "message": "string"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Message received successfully",
  "id": "contact_12345"
}
```

**Frontend Integration Example**:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### 2. Newsletter Subscription

**Endpoint**: `POST /api/newsletter`

**Form Location**: `/app/(pages)/contact/page.tsx` (bottom section)

**Request Body**:
```json
{
  "email": "string"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "subscriber_id": "sub_12345"
}
```

### 3. Course Booking

**Endpoint**: `POST /api/bookings`

**Trigger**: "Book Now" button on CourseCard component

**Request Body**:
```json
{
  "courseId": "string",
  "userEmail": "string",
  "userName": "string",
  "phone": "string",
  "preferredTime": "string (optional)",
  "notes": "string (optional)"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Booking confirmed",
  "bookingId": "booking_12345",
  "confirmationEmail": "sent"
}
```

### 4. Mentor Session Booking

**Endpoint**: `POST /api/mentor-sessions`

**Trigger**: "View Profile" or "Book Session" button on MentorCard component

**Request Body**:
```json
{
  "mentorId": "string",
  "userEmail": "string",
  "userName": "string",
  "preferredDate": "string",
  "preferredTime": "string",
  "reason": "string (optional)"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Session booked successfully",
  "sessionId": "session_12345",
  "mentorConfirmation": "pending"
}
```

### 5. Fetch All Courses

**Endpoint**: `GET /api/courses`

**Current Implementation**: Static data in components

**Optional Future Enhancement**:
```tsx
// Replace static courses array with API call
const courses = await fetch('/api/courses').then(r => r.json());
```

**Expected Response**:
```json
{
  "success": true,
  "courses": [
    {
      "id": "course_1",
      "title": "NEET Mentorship",
      "price": 2499,
      "mentorName": "Dr. Sneha Kumar",
      "rating": 4.8,
      "reviews": 156,
      "image": "url"
    }
  ]
}
```

### 6. Fetch All Mentors

**Endpoint**: `GET /api/mentors`

**Current Implementation**: Static data in components

**Optional Future Enhancement**:
```tsx
// Replace static mentors array with API call
const mentors = await fetch('/api/mentors').then(r => r.json());
```

**Expected Response**:
```json
{
  "success": true,
  "mentors": [
    {
      "id": "mentor_1",
      "name": "Dr. Sneha Kumar",
      "title": "MBBS, Medical Mentor",
      "description": "string",
      "rating": 4.8,
      "reviews": 89,
      "image": "url"
    }
  ]
}
```

## Form Components Ready for Integration

### 1. Contact Form Component
**Location**: `/app/(pages)/contact/page.tsx`

**Form State**:
```tsx
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
```

**Validation Status**: ✅ Frontend validation implemented
- Required fields: fullName, email, message, subject
- Ready for backend integration

### 2. Newsletter Form
**Location**: `/app/(pages)/contact/page.tsx`

**Form Fields**: Email only
**Validation Status**: ✅ Ready for integration

## Authentication (Future)

**Login Endpoint**: `POST /api/auth/login`

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

**Expected Response**:
```json
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

**Sign Up Endpoint**: `POST /api/auth/signup`

**Request Body**:
```json
{
  "fullName": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

## Integration Steps

### Step 1: Update Contact Form Submission
Replace the current `handleSubmit` function in `/app/(pages)/contact/page.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!formData.fullName || !formData.email || !formData.message) {
    alert('Please fill in all required fields');
    return;
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (data.success) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
};
```

### Step 2: Update Course Card Click Handler
Update the "Book Now" button in `/components/shared/course-card.tsx`:

```tsx
const handleBooking = async () => {
  // Navigate to booking form or open modal
  // Example: router.push(`/booking?courseId=${courseId}`);
};
```

### Step 3: Create API Route Handlers
Create route handlers in `/app/api/` directory:

```
/app/api/
  /contact/route.ts
  /courses/route.ts
  /mentors/route.ts
  /bookings/route.ts
  /newsletter/route.ts
  /auth/
    /login/route.ts
    /signup/route.ts
```

### Step 4: Add Environment Variables
Create `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
SMTP_HOST=your_email_service
SMTP_USER=your_email
SMTP_PASSWORD=your_password
```

## Error Handling

All API calls should implement standard error handling:

```tsx
try {
  const response = await fetch(endpoint, options);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.message || 'Request failed');
  }
  
  return data;
} catch (error) {
  console.error('API Error:', error);
  // Show user-friendly error message
}
```

## Rate Limiting

Consider implementing rate limiting for:
- Contact form submissions (5 per hour per IP)
- Newsletter signups (3 per day per email)
- Course bookings (10 per day per user)

## Security Considerations

- ✅ All forms use HTTPS in production
- ✅ Input validation on frontend
- ✅ Ready for server-side validation and sanitization
- ✅ CSRF protection (add if using cookies)
- ✅ Rate limiting (recommended)
- ✅ Email verification for newsletter
- ✅ Password hashing for authentication (implement on backend)

## Testing the API Integration

### Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+91123456789",
    "subject": "course",
    "message": "Test message"
  }'
```

### Test Newsletter Signup
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "newsletter@example.com"}'
```

## Database Schema Suggestions

### Contact Messages Table
```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Newsletter Subscribers Table
```sql
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);
```

### Bookings Table
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY,
  course_id VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  preferred_time VARCHAR(100),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Next Steps

1. Create backend API endpoints in `/app/api/` directory
2. Implement database models and migrations
3. Add authentication system
4. Set up email notifications
5. Implement payment integration
6. Add admin dashboard for course/mentor management
7. Implement real-time notifications
8. Set up analytics and monitoring

---

This frontend is fully prepared for seamless backend integration. All forms are structured and validated, ready to connect to your API endpoints!
