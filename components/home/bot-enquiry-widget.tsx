'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, ChevronDown, BookOpen, Users, Target } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Message {
  type: 'bot' | 'user';
  text: string;
  showOptions?: boolean;
  options?: { label: string; action: () => void }[];
}

interface CollectedData {
  name?: string;
  email?: string;
  phone?: string;
  grade?: string;
  goal?: string;
}

export function BotEnquiryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [conversationStep, setConversationStep] = useState(0);
  const [collectedData, setCollectedData] = useState<CollectedData>({});
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botThoughts = [
    'I notice you're curious about our programs!',
    'Every student has unique learning goals...',
    'Personalization is the key to success!',
    'Let me help you find the perfect course.',
    'Your success is my priority!',
  ];

  const startConversation = () => {
    setIsOpen(true);
    const initialMessage: Message = {
      type: 'bot',
      text: "Hi there! 👋 I'm Zenith Bot, your personal learning assistant. I'd love to help you find the perfect program for your goals.",
      showOptions: true,
      options: [
        {
          label: 'Tell me more 📚',
          action: () => handleUserResponse('Tell me more'),
        },
        {
          label: 'Just browsing 👀',
          action: () => handleUserResponse('Just browsing'),
        },
      ],
    };
    setMessages([initialMessage]);
    setConversationStep(1);
  };

  const handleUserResponse = (response: string) => {
    // Add user message
    const userMsg: Message = {
      type: 'user',
      text: response,
    };
    setMessages(prev => [...prev, userMsg]);

    // Simulate bot thinking and respond
    setTimeout(() => {
      if (conversationStep === 1) {
        if (response.includes('Tell me more')) {
          const botMsg: Message = {
            type: 'bot',
            text: "Great! To help you better, could you share your name? This helps me personalize your experience.",
            showOptions: true,
            options: [
              {
                label: 'Share my details ✍️',
                action: () => {
                  setIsWaitingForInput(true);
                  setMessages(prev => [
                    ...prev,
                    {
                      type: 'bot',
                      text: "What's your name?",
                      showOptions: false,
                    },
                  ]);
                  setConversationStep(2);
                },
              },
              {
                label: 'Skip for now ⏭️',
                action: () => showCourseSuggestions(),
              },
            ],
          };
          setMessages(prev => [...prev, botMsg]);
          setConversationStep(2);
        } else {
          const botMsg: Message = {
            type: 'bot',
            text: 'No problem! Feel free to explore our courses. I'm here if you need any help. Check out some popular programs:',
            showOptions: false,
          };
          setMessages(prev => [...prev, botMsg]);
          setTimeout(() => showCourseSuggestions(), 500);
        }
      } else if (conversationStep === 2 && isWaitingForInput) {
        setCollectedData(prev => ({ ...prev, name: response }));
        const botMsg: Message = {
          type: 'bot',
          text: `Nice to meet you, ${response}! 🎉 What's your email so we can keep you updated?`,
          showOptions: true,
          options: [
            {
              label: 'Share email ✉️',
              action: () => {
                setIsWaitingForInput(true);
                setMessages(prev => [
                  ...prev,
                  {
                    type: 'bot',
                    text: 'What is your email address?',
                    showOptions: false,
                  },
                ]);
                setConversationStep(3);
              },
            },
            {
              label: 'Skip ⏭️',
              action: () => askAboutGrade(),
            },
          ],
        };
        setMessages(prev => [...prev, botMsg]);
        setIsWaitingForInput(false);
        setConversationStep(3);
      } else if (conversationStep === 3 && isWaitingForInput) {
        setCollectedData(prev => ({ ...prev, email: response }));
        const botMsg: Message = {
          type: 'bot',
          text: "Perfect! Which class are you currently in or targeting?",
          showOptions: true,
          options: [
            {
              label: 'Class 1-5',
              action: () => handleGradeSelection('Class 1-5'),
            },
            {
              label: 'Class 6-8',
              action: () => handleGradeSelection('Class 6-8'),
            },
            {
              label: 'Class 9-10',
              action: () => handleGradeSelection('Class 9-10'),
            },
            {
              label: 'Class 11-12',
              action: () => handleGradeSelection('Class 11-12'),
            },
            {
              label: 'JEE/NEET Dropper',
              action: () => handleGradeSelection('JEE/NEET Dropper'),
            },
          ],
        };
        setMessages(prev => [...prev, botMsg]);
        setIsWaitingForInput(false);
        setConversationStep(4);
      }
    }, 500);
  };

  const askAboutGrade = () => {
    const botMsg: Message = {
      type: 'bot',
      text: "Which class are you currently in or targeting?",
      showOptions: true,
      options: [
        {
          label: 'Class 1-5',
          action: () => handleGradeSelection('Class 1-5'),
        },
        {
          label: 'Class 6-8',
          action: () => handleGradeSelection('Class 6-8'),
        },
        {
          label: 'Class 9-10',
          action: () => handleGradeSelection('Class 9-10'),
        },
        {
          label: 'Class 11-12',
          action: () => handleGradeSelection('Class 11-12'),
        },
        {
          label: 'JEE/NEET Dropper',
          action: () => handleGradeSelection('JEE/NEET Dropper'),
        },
      ],
    };
    setMessages(prev => [...prev, botMsg]);
    setConversationStep(4);
  };

  const handleGradeSelection = (grade: string) => {
    const userMsg: Message = {
      type: 'user',
      text: grade,
    };
    setMessages(prev => [...prev, userMsg]);
    setCollectedData(prev => ({ ...prev, grade }));

    setTimeout(() => {
      const botMsg: Message = {
        type: 'bot',
        text: `Excellent! ${grade} students have great opportunities with us. What's your main goal?`,
        showOptions: true,
        options: [
          {
            label: 'Board Exam Success 📚',
            action: () => handleGoalSelection('Board Exam Success'),
          },
          {
            label: 'JEE/NEET Preparation 🚀',
            action: () => handleGoalSelection('JEE/NEET Preparation'),
          },
          {
            label: 'Overall Development 🌟',
            action: () => handleGoalSelection('Overall Development'),
          },
        ],
      };
      setMessages(prev => [...prev, botMsg]);
      setConversationStep(5);
    }, 500);
  };

  const handleGoalSelection = (goal: string) => {
    const userMsg: Message = {
      type: 'user',
      text: goal,
    };
    setMessages(prev => [...prev, userMsg]);
    setCollectedData(prev => ({ ...prev, goal }));

    setTimeout(() => {
      const botMsg: Message = {
        type: 'bot',
        text: "Perfect! Based on your needs, I'd recommend our personalized coaching programs. Want to speak with our team for more details?",
        showOptions: true,
        options: [
          {
            label: 'Yes, Contact Me 📞',
            action: () => {
              setMessages(prev => [
                ...prev,
                {
                  type: 'user',
                  text: 'Yes, Contact Me 📞',
                },
                {
                  type: 'bot',
                  text: 'Great! Our team will reach out within 24 hours. You're on your way to success! 🎉',
                },
              ]);
              setConversationStep(6);
            },
          },
          {
            label: 'Explore Courses 🔍',
            action: () => showCourseSuggestions(),
          },
        ],
      };
      setMessages(prev => [...prev, botMsg]);
      setConversationStep(6);
    }, 500);
  };

  const showCourseSuggestions = () => {
    const botMsg: Message = {
      type: 'bot',
      text: 'Check out these popular programs:\n\n📚 NEET Preparation\n🧪 Chemistry Masters\n🔢 Advanced Math Program\n💻 Programming Basics\n\nVisit our Courses page to explore more!',
      showOptions: false,
    };
    setMessages(prev => [...prev, botMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const userMsg: Message = {
      type: 'user',
      text: currentInput,
    };
    setMessages(prev => [...prev, userMsg]);
    handleUserResponse(currentInput);
    setCurrentInput('');
    setIsWaitingForInput(false);
  };

  const randomThought = botThoughts[Math.floor(Math.random() * botThoughts.length)];

  return (
    <>
      {/* Bot Avatar Button - Bottom Right */}
      {!isOpen && (
        <button
          onClick={startConversation}
          className="fixed bottom-8 right-8 z-40 group"
          aria-label="Open chat"
        >
          <div className="relative">
            {/* Pulsing circle background */}
            <div className="absolute inset-0 bg-secondary rounded-full animate-pulse opacity-50"></div>
            
            {/* Main button */}
            <div className="relative w-14 h-14 bg-gradient-to-br from-secondary to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>

            {/* Tooltip thought */}
            <div className="absolute bottom-16 right-0 bg-white text-foreground text-xs rounded-lg px-3 py-2 shadow-lg max-w-xs whitespace-normal opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <p className="font-medium">{randomThought}</p>
              <div className="absolute bottom-0 right-4 transform translate-y-full w-2 h-2 bg-white rotate-45"></div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl flex flex-col h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Zenith Bot</h3>
                <p className="text-xs opacity-90">Your Learning Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Start a conversation to find your perfect program!</p>
              </div>
            ) : (
              <>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.type === 'bot'
                          ? 'bg-gray-200 text-foreground'
                          : 'bg-primary text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}

                {/* Options */}
                {messages[messages.length - 1]?.showOptions && (
                  <div className="space-y-2 mt-4">
                    {messages[messages.length - 1].options?.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={option.action}
                        className="w-full text-left px-3 py-2 bg-white border-2 border-primary text-primary text-sm rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          {isWaitingForInput && (
            <form
              onSubmit={handleSendMessage}
              className="border-t border-gray-200 p-4 flex gap-2"
            >
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Type your response..."
                className="flex-1 text-sm"
                autoFocus
              />
              <Button
                type="submit"
                size="sm"
                className="px-3 bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          )}

          {/* Footer Thought */}
          {!isWaitingForInput && messages.length > 0 && (
            <div className="border-t border-gray-200 p-3 bg-blue-50">
              <p className="text-xs text-muted-foreground italic">
                💭 {botThoughts[(botThoughts.length - 1) % botThoughts.length]}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
