# Zenith Bot Enquiry Widget - Complete Guide

## Overview

The Zenith Bot is an intelligent, conversational enquiry widget that engages visitors on the homepage. Unlike traditional forms, it provides a friendly, conversational experience that guides users through collecting information step-by-step.

## Key Features

### 1. Non-Intrusive Design
- **Floating Avatar Button**: Located at bottom-right corner
- **Idle State**: Displays as a small, attractive button with pulsing animation
- **Visual Indicator**: Shows random "thoughts" on hover
- **No Auto-Pop**: Only opens when user clicks

### 2. Conversational Flow
The bot guides users through 5-6 conversation steps:

1. **Initial Greeting** - Warm welcome with two options:
   - "Tell me more" - Initiates data collection
   - "Just browsing" - Shows course suggestions

2. **Personal Information** - Optionally collects:
   - Full name
   - Email address
   - Phone number (optional)

3. **Academic Level** - Grade selection with 5 options:
   - Class 1-5
   - Class 6-8
   - Class 9-10
   - Class 11-12
   - JEE/NEET Dropper

4. **Learning Goals** - Asks about primary goal:
   - Board Exam Success
   - JEE/NEET Preparation
   - Overall Development

5. **Call to Action** - Final engagement:
   - Request contact (suggests team will reach out)
   - Explore courses page

### 3. Dynamic Elements

**Bot Thoughts**: Randomly displayed tooltips showing bot "thinking":
- "I notice you're curious about our programs!"
- "Every student has unique learning goals..."
- "Personalization is the key to success!"
- "Let me help you find the perfect course."
- "Your success is my priority!"

**Skip Options**: Users can skip information collection at any point without pressure to fill everything.

**Visual Feedback**: 
- Smooth animations when opening/closing
- Pulsing avatar button
- Typing indicator (optional enhancement)
- Gradient header with branding

## Component Structure

### File Location
```
components/home/bot-enquiry-widget.tsx
```

### Main States

```typescript
interface BotEnquiryWidget {
  isOpen: boolean;              // Chat window visibility
  messages: Message[];          // Conversation history
  conversationStep: number;     // Track current step
  collectedData: CollectedData; // User information gathered
  isWaitingForInput: boolean;   // For text input fields
}
```

### Data Collection

The widget collects (all optional):
```typescript
{
  name?: string;        // Full name
  email?: string;       // Email address
  phone?: string;       // Phone number
  grade?: string;       // Academic grade/level
  goal?: string;        // Learning goal
}
```

## User Experience Flow

### Scenario 1: Engaged User
```
1. User sees bot avatar at bottom-right
2. Hovers over avatar, sees helpful "thought"
3. Clicks avatar → Chat opens with welcome message
4. Selects "Tell me more"
5. Provides name → Email → Grade → Goal
6. Requests contact
7. Chat shows confirmation message
```

### Scenario 2: Browsing User
```
1. User sees bot avatar
2. Clicks avatar → Chat opens
3. Selects "Just browsing"
4. Sees course suggestions
5. Can close chat and explore courses
```

### Scenario 3: Privacy-Conscious User
```
1. User interacts with bot
2. Skips personal information at each opportunity
3. Still sees course suggestions
4. No pressure to fill form
5. Can close anytime
```

## Visual Design

### Color Scheme
- **Header**: Gradient from `primary` (Deep Blue) to `secondary` (Orange)
- **Bot Messages**: Light gray background (`bg-gray-200`)
- **User Messages**: Primary blue with white text
- **Options**: White background with blue border
- **Footer Thought**: Light blue background

### Animations
- **Button**: Pulsing opacity on background circle
- **Window**: Fade-in + slide-up animation when opening
- **Transitions**: Smooth 300ms transitions for all interactions

### Responsive Design
- **Desktop**: Fixed 384px width (96 × 4 in Tailwind)
- **Mobile**: Responsive max-width (calc(100vw - 2rem))
- **Overflow**: Scrollable message area with smooth scrolling

## Integration Points

### 1. Home Page Integration
```typescript
// In hero-section.tsx
import { BotEnquiryWidget } from './bot-enquiry-widget';

// Add at bottom of section:
<BotEnquiryWidget />
```

### 2. Data Handling
Currently stores in component state. For production:
- Save collected data to database via API
- Send email notification when user requests contact
- Track engagement metrics

### 3. API Integration Points (Future)
```typescript
// Submit enquiry
POST /api/enquiries {
  name: string;
  email: string;
  phone?: string;
  grade: string;
  goal: string;
}

// Track bot interactions (analytics)
POST /api/analytics/bot-interaction {
  step: number;
  action: string;
  timestamp: Date;
}
```

## Customization

### Adding More Bot Thoughts
Edit the `botThoughts` array in the widget:
```typescript
const botThoughts = [
  'I notice you're curious about our programs!',
  'Every student has unique learning goals...',
  // Add more here
];
```

### Changing Conversation Flow
Modify the `handleUserResponse()` and step conditions:
```typescript
if (conversationStep === 1) {
  // Customize step 1 logic
  if (response.includes('Tell me more')) {
    // Custom response
  }
}
```

### Styling Changes
All Tailwind classes can be modified:
- Button colors: Change `from-secondary to-orange-600`
- Message styling: Modify `bg-gray-200` or `bg-primary`
- Window size: Adjust `w-96` and `h-[600px]`
- Spacing: Edit `p-4`, `gap-3`, etc.

### Adding New Options
Extend the grade selection or goal options:
```typescript
options: [
  {
    label: 'New Option 🎯',
    action: () => handleCustomAction('New Option'),
  },
  // More options...
]
```

## Performance Considerations

1. **Component Size**: ~450 lines - lightweight
2. **State Management**: Local component state (no Redux needed)
3. **Animations**: CSS animations (GPU accelerated)
4. **Message Rendering**: Virtualized scrolling (via ref)

## Accessibility

- Semantic HTML with proper button roles
- `aria-label` for icon-only buttons
- Keyboard-navigable options
- Screen reader friendly messages
- High contrast colors meeting WCAG standards

## Testing Scenarios

1. **Complete Flow**: Provide all information
2. **Skip Flow**: Skip everything
3. **Mixed Flow**: Provide some info, skip others
4. **Browser Back**: Close and reopen chat
5. **Mobile**: Test on small screens
6. **Keyboard**: Tab through options

## Common Customizations

### Show Always-Open Chat
```typescript
const [isOpen, setIsOpen] = useState(true); // Change default
// Remove the "!isOpen &&" conditions in rendering
```

### Add Typing Animation
```typescript
const [isTyping, setIsTyping] = useState(false);
// Show typing indicator in message area
```

### Add User Avatar
```typescript
<div className="w-10 h-10 bg-user-color rounded-full" />
```

### Connect to Real API
```typescript
const handleSubmit = async () => {
  const response = await fetch('/api/enquiries', {
    method: 'POST',
    body: JSON.stringify(collectedData),
  });
};
```

## Troubleshooting

### Widget Not Showing
- Ensure component is imported in hero-section.tsx
- Check z-index conflicts with other elements
- Verify BotEnquiryWidget exports properly

### Chat Not Scrolling
- Check overflow-y-auto class on message container
- Verify messagesEndRef is properly attached

### Messages Not Updating
- Ensure state updates use functional setState
- Check message array is properly spread

### Styling Issues
- Verify Tailwind CSS is properly configured
- Check for color conflicts with design tokens
- Ensure primary/secondary color variables exist

## Future Enhancements

1. **AI Integration**: Connect to OpenAI/other LLM
2. **Analytics Dashboard**: Track engagement metrics
3. **Multi-language**: Support for Hindi, regional languages
4. **Video Integration**: Embed course preview videos
5. **Appointment Booking**: Direct calendar integration
6. **Payment Integration**: Show pricing within chat
7. **User Authentication**: Remember returning users
8. **Mobile App**: Native mobile chat widget

## Summary

The Zenith Bot transforms the enquiry experience from a static form to a friendly conversation. It reduces friction in the conversion funnel while maintaining the ability to collect essential information. Users appreciate the conversational tone and the option to engage at their own pace.
