# Images and Assets Guide - Zenith Institute

## Current Image Usage

This document outlines all images currently used in the Zenith Institute website and guidance for replacing them with your own assets.

---

## 🖼️ Images Currently in Use

### Home Page - Hero Section
**Location**: `/components/home/hero-section.tsx`
**Current URL**: `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-05%20at%209.26.25%20PM-spIiqUEn3jZzBSqW8SiKXP5ZEQ3YZu.jpeg`
**Alt Text**: "Expert Mentors"
**Purpose**: Hero banner right side image
**Recommended Size**: 600x800px
**Recommended Format**: JPG/WebP
**Recommended Style**: Illustration of mentors and students with educational elements

### Courses Preview - Course Cards
**Location**: `/components/home/courses-preview.tsx`
**Current URL**: `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-05%20at%209.26.30%20PM-0gpq8nokNHVWiOmvfuBNznyeTqc3fB.jpeg`
**Alt Text**: Course title
**Purpose**: Course card images (4 instances)
**Recommended Size**: 400x300px each
**Recommended Format**: JPG/WebP
**Recommended Style**: Subject-specific illustrations (NEET, JEE, Career, etc.)

### Mentors Section - Mentor Photos
**Location**: `/components/home/mentors-section.tsx`
**Current URL**: `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-05%20at%209.26.30%20PM%20%281%29-Fdu1nl71Z5LQAx3QLWIXNWmTcId6Ly.jpeg`
**Alt Text**: Mentor name
**Purpose**: Mentor profile photos (4 instances)
**Recommended Size**: 300x300px each
**Recommended Format**: JPG/WebP
**Recommended Style**: Professional headshots or illustrated mentor portraits

### Courses Page - All Course Cards
**Location**: `/app/(pages)/courses/page.tsx`
**Current URL**: Same as above (8 instances)
**Purpose**: Full course catalog display
**Recommended Size**: 400x300px
**Recommended Format**: JPG/WebP

### Mentors Page - All Mentor Photos
**Location**: `/app/(pages)/mentors/page.tsx`
**Current URL**: Same as above (8 instances)
**Purpose**: Full mentor directory display
**Recommended Size**: 300x300px
**Recommended Format**: JPG/WebP

---

## 📋 Image Inventory

| Page | Component | Image Type | Current | Quantity | Size | Notes |
|------|-----------|-----------|---------|----------|------|-------|
| Home | Hero | Illustration | URL | 1 | 600x800 | Mentors with students |
| Home | Courses | Cards | URL | 4 | 400x300 | Subject illustrations |
| Home | Mentors | Photos | URL | 4 | 300x300 | Mentor headshots |
| Courses | Page | Cards | URL | 8 | 400x300 | Course illustrations |
| Mentors | Page | Photos | URL | 8 | 300x300 | Mentor headshots |

**Total Images**: 25 image instances (using 3 unique URLs)

---

## 🔄 How to Replace Images

### Option 1: Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image'

<Image
  src="/images/course-neet.jpg"
  alt="NEET Mentorship"
  width={400}
  height={300}
  priority={false}
/>
```

### Option 2: Update in Components

1. **CourseCard** (`/components/shared/course-card.tsx`)
```tsx
// Current
<img src={image} alt={title} className="w-full h-full object-cover" />

// To change all courses, update the image URL in:
// - /components/home/courses-preview.tsx (line with image property)
// - /app/(pages)/courses/page.tsx (line with image property)
```

2. **MentorCard** (`/components/shared/mentor-card.tsx`)
```tsx
// Current
<img src={image} alt={name} className="w-full h-full object-cover" />

// To change all mentors, update the image URL in:
// - /components/home/mentors-section.tsx (line with image property)
// - /app/(pages)/mentors/page.tsx (line with image property)
```

3. **HeroSection** (`/components/home/hero-section.tsx`)
```tsx
// Current
<img src="https://..." alt="Expert Mentors" className="..." />

// Replace with your hero image URL
```

---

## 🎨 Recommended Image Sources

### Professional Options
1. **Unsplash** (Free): unsplash.com
   - High-quality professional images
   - Free commercial use
   - Category: Education, mentoring, students

2. **Pexels** (Free): pexels.com
   - Diverse imagery
   - No attribution required
   - Category: Business, education

3. **Pixabay** (Free): pixabay.com
   - Millions of free images
   - Quality guarantee
   - Category: Education, people

### Illustration Options
1. **Illustration Kit** (Free): illustrationkit.com
   - Unique illustrations
   - Customizable colors
   - Education-focused

2. **Undraw** (Free): undraw.co
   - Beautiful SVG illustrations
   - Color customizable
   - Open source

3. **DrawKit** (Free): drawkit.io
   - Hand-drawn illustrations
   - Professional quality
   - Various categories

4. **Humaaans** (Free): humaaans.com
   - Character illustrations
   - Perfect for mentor profiles
   - Highly customizable

### Paid Options
1. **Shutterstock**: shutterstock.com
2. **Getty Images**: gettyimages.com
3. **Adobe Stock**: stock.adobe.com

---

## 📊 Image Specifications

### Hero Image
- **Dimensions**: 600x800px (4:5 ratio)
- **File Format**: JPEG, WebP (preferred)
- **File Size**: < 200KB
- **Quality**: High resolution, professional
- **Content**: Mentors with students, educational elements, engaging

### Course Card Images
- **Dimensions**: 400x300px (4:3 ratio)
- **File Format**: JPEG, WebP
- **File Size**: < 100KB each
- **Quality**: Medium-high resolution
- **Content**: Subject-specific (stethoscope for NEET, formulas for JEE, etc.)

### Mentor Photos
- **Dimensions**: 300x300px (1:1 ratio)
- **File Format**: JPEG, WebP
- **File Size**: < 80KB each
- **Quality**: High resolution professional headshots
- **Content**: Professional, smiling, well-lit face photos

---

## 📁 Recommended Folder Structure

```
/public/
├── images/
│   ├── hero/
│   │   └── mentors-hero.jpg
│   ├── courses/
│   │   ├── neet-course.jpg
│   │   ├── jee-course.jpg
│   │   ├── career-course.jpg
│   │   └── study-plan-course.jpg
│   └── mentors/
│       ├── sneha-kumar.jpg
│       ├── rahul-singh.jpg
│       ├── ravi-verma.jpg
│       ├── priya-mehta.jpg
│       ├── vikram-singh.jpg
│       ├── anjali-sharma.jpg
│       ├── neha-patel.jpg
│       └── arun-kumar.jpg
```

---

## 🔗 How to Host Images

### Option 1: Vercel Blob (Recommended for Vercel deployment)
```tsx
// Upload to Vercel Blob
// Then use the provided URL in your components
<img src="https://vercel-blob-url..." alt="..." />
```

### Option 2: Cloudinary
```tsx
// Free image hosting with optimization
<img src="https://res.cloudinary.com/..." alt="..." />
```

### Option 3: AWS S3
```tsx
// Enterprise solution with CDN
<img src="https://s3.amazonaws.com/..." alt="..." />
```

### Option 4: Local Public Folder
```tsx
// Simple local storage
<img src="/images/course.jpg" alt="..." />
```

---

## 🎯 Quick Replacement Steps

### Step 1: Prepare Your Images
- Resize to specified dimensions
- Optimize for web (compress without quality loss)
- Name them clearly (e.g., `neet-course.jpg`)

### Step 2: Upload Images
- Place in `/public/images/` folder
- Or upload to external hosting (Cloudinary, AWS, Vercel Blob)
- Note the URLs

### Step 3: Update Component URLs
- Find all image URLs in the components listed above
- Replace with new URLs
- Test on all pages

### Step 4: Verify
- Check all pages on mobile and desktop
- Verify images load correctly
- Test on different browsers

---

## 🖼️ Current Image Data Objects

### Courses Array Example
```tsx
const courses = [
  {
    id: 'neet-1',
    title: 'NEET Mentorship',
    image: 'https://...course-image.jpg',  // Replace here
    price: 2499,
    mentorName: 'Dr. Sneha Kumar',
    rating: 4.8,
    reviews: 156,
  },
  // ... more courses
]
```

### Mentors Array Example
```tsx
const mentors = [
  {
    id: 'dr-sneha',
    name: 'Dr. Sneha Kumar',
    image: 'https://...mentor-photo.jpg',  // Replace here
    title: 'MBBS, Medical Mentor',
    // ... more properties
  },
  // ... more mentors
]
```

---

## 🎨 Image Optimization Tips

### Before Uploading
1. **Resize**: Use exact dimensions listed above
2. **Compress**: Use tools like TinyPNG, ImageOptim
3. **Format**: Use JPEG for photos, WebP when possible
4. **Quality**: Keep at 80-85% quality for balanced file size

### After Uploading
1. **Lazy Load**: Images load only when needed
2. **Responsive**: Use `object-cover` class (already in components)
3. **Fallbacks**: Always include descriptive alt text
4. **CDN**: Use content delivery network for faster loading

---

## ⚠️ Image Licensing

### Always Ensure
- ✅ You have the right to use the image
- ✅ Proper attribution if required
- ✅ Commercial use is allowed
- ✅ No personal data without consent
- ✅ No harmful or offensive content

### Free Image Sources Recommended
- Unsplash ✅ (Free, commercial use OK, no attribution needed)
- Pexels ✅ (Free, commercial use OK)
- Pixabay ✅ (Free, commercial use OK)

---

## 📱 Image Performance

### Current Implementation
- Images use `object-cover` for proper scaling
- Responsive sizing with CSS
- Mobile-optimized layout

### Future Improvements
- Switch to Next.js `Image` component for automatic optimization
- Implement lazy loading for below-the-fold images
- Add WebP format for newer browsers
- Consider using image CDN for faster delivery

---

## 🔧 Testing Image Changes

```bash
# 1. Replace image URLs in components
# 2. Run development server
pnpm dev

# 3. Test on mobile
# 4. Test on tablet  
# 5. Test on desktop
# 6. Check load times in DevTools
# 7. Verify on different browsers
```

---

## 📝 Checklist for Image Replacement

- [ ] Prepared all images in correct dimensions
- [ ] Compressed images to < 200KB (hero), < 100KB (cards), < 80KB (mentors)
- [ ] Uploaded images to hosting service
- [ ] Updated all image URLs in components
- [ ] Added descriptive alt text for accessibility
- [ ] Tested on mobile devices
- [ ] Tested on tablets
- [ ] Tested on desktop
- [ ] Verified images load quickly
- [ ] Checked image licensing/usage rights
- [ ] Committed changes to git

---

## 💡 Pro Tips

1. **Use descriptive filenames**: `neet-course-hero.jpg` instead of `image1.jpg`
2. **Keep consistent aspect ratios**: All course images should be 4:3, all mentor photos 1:1
3. **Maintain consistent style**: Use similar photography style for cohesion
4. **Test on slow networks**: Check loading on 3G/4G speeds
5. **Use alt text**: Every image needs descriptive alt text for accessibility
6. **Consider dark mode**: Ensure images work in both light and dark themes (future)

---

## 📞 Support

For image-related issues:
1. Check image dimensions match specifications
2. Verify file size < recommended limits
3. Test in different browsers
4. Check browser console for loading errors
5. Try clearing cache and reloading

---

## Summary

The site currently uses placeholder images from URLs. Replace these with your own branded images by:
1. Preparing images in specified dimensions
2. Uploading to your preferred hosting service
3. Updating URLs in components
4. Testing thoroughly on all devices

The component structure makes it easy to swap images globally - just change the URL in the data arrays and all instances update automatically!
