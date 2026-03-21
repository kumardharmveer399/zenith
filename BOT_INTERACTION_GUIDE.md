# Bot Widget - User Interaction Guide

## Visual Layout

### Home Page - Idle State
```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER (Navigation)                                             │
└─────────────────────────────────────────────────────────────────┘

HERO SECTION
┌───────────────────────────────┬─────────────────────────────────┐
│  LEFT SIDE                    │  RIGHT SIDE                     │
│                               │                                 │
│  Plan Your Future             │     ┌─────────────────────┐    │
│  With Expert Mentors          │     │   SVG Illustration  │    │
│                               │     │   (Education Scene) │    │
│  [Explore Now]                │     │                     │    │
│                               │     └─────────────────────┘    │
│                               │     ┌──────────────┐            │
│                               │     │ Join Now! ⭕ │            │
│                               │     │ Limited Seats│            │
│                               │     └──────────────┘            │
└───────────────────────────────┴─────────────────────────────────┘

                        ┌─────────────────┐
                        │ 💬 Zenith Bot   │  ← Floating Button
                        │  [Pulsing]      │     (Bottom Right)
                        └─────────────────┘
```

### Bot Avatar Button States

#### Idle (Closed)
```
┌─────────────────────────────────────┐
│ I notice you're curious about       │  ← Hover Thought
│ our programs!                       │     (Appears on hover)
│                                    │
└────────┐────────────────────────────┘
         │
    ┌────▼─────┐
    │ 💬 Bot   │  ← Pulsing Avatar
    │ [Pulse]  │     (14rem size)
    └──────────┘
```

#### Active (Open)
```
┌────────────────────────────┐
│ ⊕ Zenith Bot              │◄─ Close Button
│ Your Learning Assistant    │
├────────────────────────────┤
│                            │
│  Hi there! 👋 I'm Zenith   │ ◄─ Bot Message
│  Bot, your personal         │
│  learning assistant...      │
│                            │
│ [Tell me more 📚]          │
│ [Just browsing 👀]         │
│                            │
├────────────────────────────┤
│ 💭 Every student has       │ ◄─ Footer Thought
│ unique learning goals...    │
└────────────────────────────┘
```

---

## Complete Interaction Flow

### Scenario 1: Engaged User (Full Form)

```
STEP 1: Initial Interaction
┌──────────────────────────────────┐
│ Bot: Hi there! 👋                │
│ I'm Zenith Bot, your personal    │
│ learning assistant. I'd love to  │
│ help you find the perfect        │
│ program for your goals.          │
│                                  │
│ [Tell me more 📚]  [Browsing 👀] │
└──────────────────────────────────┘
     User clicks: "Tell me more 📚"
              ↓

STEP 2: Name Collection
┌──────────────────────────────────┐
│ Bot: Great! To help you better,  │
│ could you share your name?       │
│                                  │
│ [Share details ✍️]  [Skip ⏭️]    │
└──────────────────────────────────┘
     User clicks: "Share details ✍️"
              ↓

STEP 2.5: Text Input
┌──────────────────────────────────┐
│ Bot: What's your name?           │
│                                  │
│ ┌────────────────────────────┐   │
│ │ Type your response...   [→] │   │ ← Input Field
│ └────────────────────────────┘   │
└──────────────────────────────────┘
     User types: "Raj Kumar"
              ↓

STEP 3: Email Collection
┌──────────────────────────────────┐
│ Bot: Nice to meet you, Raj       │
│ Kumar! 🎉 What's your email so   │
│ we can keep you updated?         │
│                                  │
│ [Share email ✉️]  [Skip ⏭️]      │
└──────────────────────────────────┘
     User clicks: "Share email ✉️"
              ↓

STEP 3.5: Email Input
┌──────────────────────────────────┐
│ Bot: What is your email address? │
│                                  │
│ ┌────────────────────────────┐   │
│ │ Type your response...   [→] │   │
│ └────────────────────────────┘   │
└──────────────────────────────────┘
     User types: "raj@example.com"
              ↓

STEP 4: Grade Selection
┌──────────────────────────────────┐
│ Bot: Perfect! Which class are    │
│ you currently in or targeting?   │
│                                  │
│ [Class 1-5]    [Class 6-8]       │
│ [Class 9-10]   [Class 11-12]     │
│ [JEE/NEET Dropper]               │
└──────────────────────────────────┘
     User clicks: "Class 11-12"
              ↓

STEP 5: Goal Selection
┌──────────────────────────────────┐
│ Bot: Excellent! Class 11-12      │
│ students have great              │
│ opportunities with us. What's    │
│ your main goal?                  │
│                                  │
│ [Board Success 📚]               │
│ [JEE/NEET Prep 🚀]               │
│ [Overall Development 🌟]         │
└──────────────────────────────────┘
     User clicks: "JEE/NEET Prep 🚀"
              ↓

STEP 6: Final Action
┌──────────────────────────────────┐
│ Bot: Perfect! Based on your      │
│ needs, I'd recommend our         │
│ personalized coaching programs.  │
│ Want to speak with our team for  │
│ more details?                    │
│                                  │
│ [Contact Me 📞]  [Explore 🔍]    │
└──────────────────────────────────┘
     User clicks: "Contact Me 📞"
              ↓

FINAL: Success Message
┌──────────────────────────────────┐
│ User: Yes, Contact Me 📞         │
│                                  │
│ Bot: Great! Our team will reach  │
│ out within 24 hours. You're on   │
│ your way to success! 🎉          │
│                                  │
│ 💭 Your success is my priority!  │
└──────────────────────────────────┘
```

---

### Scenario 2: Casual Browser (Minimal Info)

```
STEP 1: Greeting
┌──────────────────────────────────┐
│ Bot: Hi there! 👋                │
│ ...                              │
│                                  │
│ [Tell me more]  [Just browsing]  │
└──────────────────────────────────┘
     User clicks: "Just browsing"
              ↓

STEP 2: Course Suggestions
┌──────────────────────────────────┐
│ Bot: No problem! Feel free to    │
│ explore our courses. I'm here if │
│ you need any help. Check out     │
│ these popular programs:          │
│                                  │
│ 📚 NEET Preparation              │
│ 🧪 Chemistry Masters             │
│ 🔢 Advanced Math Program          │
│ 💻 Programming Basics             │
│                                  │
│ Visit our Courses page to        │
│ explore more!                    │
└──────────────────────────────────┘
              ↓
         User can:
     - Close chat and browse
     - Explore courses page
     - Return to bot anytime
```

---

## Interactive Elements

### Option Buttons (All Steps)
```
┌─────────────────────────────────────┐
│ [Option Text with Emoji]            │  ← Clickable
│ (white bg, blue border)             │
│ Hover: Light blue background        │
│ Press: Darker blue                  │
└─────────────────────────────────────┘
```

### Text Input Field (Conditional)
```
┌────────────────────────────────────────┐
│ ┌──────────────────────────────┐  [→] │
│ │ Type your response...        │      │
│ └──────────────────────────────┘      │
│                                       │
│ Appears when user clicks: "Share" or "Input" │
│ Disappears after send                 │
└────────────────────────────────────────┘
```

### Message Display
```
Bot Message (Left Aligned):
┌────────────────────────────┐
│ Bot message text here      │  ← Gray background
│ (light gray/200)           │
└────────────────────────────┘

User Message (Right Aligned):
                  ┌─────────────────────┐
                  │ User response text  │  ← Blue background
                  │ (primary color)     │
                  └─────────────────────┘
```

---

## State Transitions

### Desktop View
```
Page Load
   ↓
Avatar Button Appears (Bottom Right)
   ├─ Idle: Pulsing, shows thought on hover
   ├─ Click: Opens chat window (fade-in + slide-up)
   ├─ Chat Open: Full conversation interface
   └─ Close: Returns to avatar button

Responsive: Width adjusts to 384px (fixed) or less on mobile
```

### Mobile View
```
Page Load
   ↓
Avatar Button Appears (Bottom Right, Adjusted Size)
   ├─ Smaller screen: Button might be 56px instead of 56px
   ├─ Tap: Opens chat window (fullscreen or near-fullscreen)
   ├─ Chat Open: Responsive layout (100vw - 2rem width)
   └─ Close: Returns to avatar button

Orientation Change: Layout adjusts smoothly
```

---

## Message Scroll Behavior

```
Early Conversation (Few Messages):
┌─────────────────────────────────┐
│ Bot: Hi there! 👋...            │
│                                 │
│ [Option 1]  [Option 2]          │
│                                 │
│ [Bottom of chat - space]        │
│                                 │
│ 💭 Footer thought...            │
└─────────────────────────────────┘

Long Conversation (Many Messages):
┌─────────────────────────────────┐
│ [scrolled up - early messages]  │ ↑
│                                 │ │
│ Bot: ...previous messages...    │ │ Scrollable area
│                                 │ │
│ User: Latest response           │ ↓
│ Bot: Latest bot message         │
│ [Options if applicable]         │
│                                 │
│ 💭 Footer thought...            │
└─────────────────────────────────┘
Auto-scroll to bottom when new message arrives
```

---

## Animations Timeline

### Open Animation (300ms)
```
0ms:     Closed state (Button visible only)
         ┌────────┐
         │ Avatar │
         └────────┘

150ms:   Fade-in + Transform beginning
         ┌────────────────────────┐ ← Opacity: 0 → 0.5
         │ Chat Window (partial)  │ ← Transform: translate-y
         ├────────────────────────┤
         │                        │
         └────────────────────────┘

300ms:   Fully visible
         ┌────────────────────────┐ ← Opacity: 1
         │ Chat Window (full)      │ ← Transform: complete
         ├────────────────────────┤
         │ Welcome message        │
         │ Options                │
         ├────────────────────────┤
         │ Footer                 │
         └────────────────────────┘
```

### Close Animation (100ms)
```
Window closes smoothly
Transitions back to just the floating avatar button
No jarring transitions
```

### Pulsing Button Animation (Continuous)
```
0%:    Pulse circle opacity: 50%
50%:   Pulse circle opacity: 20%
100%:  Pulse circle opacity: 50%

(Repeats continuously while closed)
```

---

## Responsive Breakpoints

### Large Desktop (1024px+)
- Avatar button: 56px × 56px
- Chat window: 384px wide
- Positioned: bottom-32 right-32
- Full landscape view

### Tablet (768px - 1024px)
- Avatar button: 56px × 56px
- Chat window: 352px wide (smaller)
- Positioned: bottom-8 right-8
- Landscape-optimized

### Mobile (< 768px)
- Avatar button: 56px × 56px
- Chat window: calc(100vw - 2rem)
- Takes up most of screen
- Portrait-optimized
- Touch-friendly buttons

---

## Keyboard Navigation

### Tab Order
```
1. Avatar Button (when closed)
2. Close Button (when open)
3. Option Buttons (in conversation)
4. Text Input (if visible)
5. Send Button (if input visible)
```

### Keyboard Shortcuts
```
Tab:        Move to next element
Shift+Tab:  Move to previous element
Enter:      Activate button or send message
Escape:     Close chat window
```

---

## Summary

The Bot Widget provides a seamless, friendly experience with:
- **Non-intrusive**: Only appears as floating button
- **Engaging**: Conversational flow with personality
- **Flexible**: Users can skip any information
- **Responsive**: Works perfectly on all devices
- **Accessible**: Keyboard navigation and screen reader support
- **Animated**: Smooth, professional transitions
- **Data-collecting**: Gathers insights while building rapport

It transforms the enquiry process from transactional form-filling to relationship-building conversation.
