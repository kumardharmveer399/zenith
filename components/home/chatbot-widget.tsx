'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'courses' | 'mentors' | 'pricing' | 'general';
}

const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What courses do you offer?',
    answer: 'We offer comprehensive courses for Classes 1-12, competitive exams (JEE, NEET), and dropper programs. Each course includes live classes, recorded sessions, and 1-on-1 mentor guidance.',
    category: 'courses',
  },
  {
    id: 'faq-2',
    question: 'How do live classes work?',
    answer: 'Live classes are interactive sessions conducted at scheduled times. You can ask questions in real-time, participate in discussions, and get instant feedback from our expert instructors.',
    category: 'courses',
  },
  {
    id: 'faq-3',
    question: 'Can I access recorded classes?',
    answer: 'Yes! All our classes are recorded. You can watch them anytime, anywhere. This is perfect for flexible learning and revision.',
    category: 'courses',
  },
  {
    id: 'faq-4',
    question: 'Who are the mentors?',
    answer: 'Our mentors are highly experienced professionals with 5+ years in their respective fields. They hold qualifications like MBBS, BTech, and specialized certifications. Each mentor specializes in specific subjects and exam preparations.',
    category: 'mentors',
  },
  {
    id: 'faq-5',
    question: 'How does the mentorship program work?',
    answer: 'Every student is assigned a dedicated mentor based on their grade and goals. Mentors provide personalized guidance, doubt clarification, and regular progress tracking through scheduled sessions.',
    category: 'mentors',
  },
  {
    id: 'faq-6',
    question: 'What are the pricing plans?',
    answer: 'We offer 3 pricing tiers:\n• Basic: ₹9,999/month - 1 course + recorded classes\n• Premium: ₹19,999/month - 3 courses + live + recorded classes\n• Elite: ₹34,999/month - Unlimited courses + 1-on-1 sessions + priority support',
    category: 'pricing',
  },
  {
    id: 'faq-7',
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 7-day free trial for all new students. You can explore all courses and attend 2 live classes during the trial period. No credit card required!',
    category: 'pricing',
  },
  {
    id: 'faq-8',
    question: 'How do I get started?',
    answer: 'Simply click the "Sign Up" button at the top, create your account, and select your grade/course. You can then choose a pricing plan and access all materials immediately.',
    category: 'general',
  },
  {
    id: 'faq-9',
    question: 'Do you offer certificate programs?',
    answer: 'Yes, we provide completion certificates for all courses. These certificates are recognized and can be added to your resume or used for scholarship applications.',
    category: 'general',
  },
  {
    id: 'faq-10',
    question: 'What support do you provide?',
    answer: 'We offer 24/7 email support, dedicated mentor sessions, doubt clarification channels, and community forums. Our support team responds within 2 hours on average.',
    category: 'general',
  },
];

const BOT_THOUGHTS = [
  'How can I help you today? 🤔',
  'Curious about our programs? 📚',
  'Let me help you find the perfect course! 🚀',
  'Got any questions? I\'m here to help! 💬',
  'Your success is my mission! 🎯',
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showFAQs, setShowFAQs] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'courses' | 'mentors' | 'pricing' | 'general'>('all');
  const [displayedThought, setDisplayedThought] = useState(BOT_THOUGHTS[0]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Change displayed thought periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedThought(BOT_THOUGHTS[Math.floor(Math.random() * BOT_THOUGHTS.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome-msg',
        type: 'bot',
        text: "Hi! 👋 I'm Zenith Bot. I can answer your questions about our courses, mentors, pricing, and more. You can either:\n\n1. Browse our FAQs below\n2. Ask me anything custom\n\nWhat would you like to know?",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleFAQClick = (faq: FAQ) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      text: faq.question,
      timestamp: new Date(),
    };

    // Add bot response
    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      type: 'bot',
      text: faq.answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setShowFAQs(false);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "That's a great question! 🤔 Let me connect you with our team for more detailed information. You can also explore our pricing page or contact us directly.",
        "I appreciate your interest! 💡 For personalized guidance, I recommend signing up for a free trial or booking a consultation with one of our mentors.",
        "Excellent question! 👍 You can find more detailed information on our courses page or reach out to our support team. They'll be happy to help you choose the perfect program.",
        "I love your enthusiasm! 🚀 Feel free to explore our mentor profiles or check out the live classes schedule. You can also fill in the 'Tell us about you' form below!",
        "Thanks for asking! 📚 Our team is ready to help you find the perfect learning path. Would you like me to connect you with a mentor?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        text: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const filteredFAQs =
    selectedCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((faq) => faq.category === selectedCategory);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-20px)] bg-white rounded-2xl shadow-2xl flex flex-col max-h-[600px] md:max-h-[500px] z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Zenith Bot</h3>
              <p className="text-sm opacity-90">Your Learning Assistant</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setShowFAQs(true);
              }}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-xl ${
                    msg.type === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white text-foreground border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* FAQs Section */}
            {showFAQs && (
              <div className="mt-4 space-y-3">
                <div className="flex gap-2 flex-wrap">
                  {(['all', 'courses', 'mentors', 'pricing', 'general'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs px-3 py-1 rounded-full transition-colors capitalize ${
                        selectedCategory === cat
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  {filteredFAQs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleFAQClick(faq)}
                      className="w-full text-left p-2 bg-white border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm"
                    >
                      <div className="flex gap-2">
                        <HelpCircle size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{faq.question}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 space-y-3">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 text-sm"
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                className="bg-secondary hover:bg-secondary/90"
              >
                <Send size={16} />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              💡 Tip: Click FAQs above or type your custom question
            </p>
          </div>
        </div>
      )}

      {/* Floating Bot Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 z-40 group"
        >
          {/* Thought Bubble */}
          <div className="absolute bottom-24 right-0 bg-white border-2 border-primary rounded-2xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            <p className="text-sm font-medium text-primary">{displayedThought}</p>
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-2 border-primary border-t-transparent border-l-transparent rotate-45"></div>
          </div>

          {/* Bot Avatar Button */}
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer animate-pulse">
            <MessageCircle size={28} className="text-white" />
          </div>

          {/* Pulsing Ring */}
          <div className="absolute inset-0 w-16 h-16 border-2 border-primary rounded-full animate-ping opacity-75"></div>
        </button>
      )}
    </>
  );
}
