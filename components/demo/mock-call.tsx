'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, PhoneOff, User, Bot } from 'lucide-react';

type Message = {
  text: string;
  sender: 'ai' | 'caller';
  typing?: boolean;
};

const mockConversation: Message[] = [
  { text: "Hello, thank you for calling BY1. This is Sarah, how may I assist you today?", sender: 'ai' },
  { text: "Hi, I'm interested in learning more about your AI implementation services.", sender: 'caller' },
  { text: "I'd be happy to help you with that! Our AI implementation services include custom model development, process automation, and system integration. Could you tell me a bit about your business needs?", sender: 'ai' },
  { text: "We're a manufacturing company looking to optimize our quality control process.", sender: 'caller' },
  { text: "That's a great use case for AI! We've helped several manufacturing companies reduce defects by up to 85% using computer vision and machine learning. Would you like me to schedule a consultation with our AI specialists?", sender: 'ai' },
  { text: "Yes, that would be great!", sender: 'caller' },
  { text: "Perfect! I can schedule that for you right now. We have openings tomorrow at 10 AM or 2 PM Eastern time. Which would work better for you?", sender: 'ai' },
];

export default function MockCall() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const startDemo = () => {
    setIsPlaying(true);
    setMessages([]);
    setCurrentMessageIndex(0);
    playNextMessage();
  };

  const playNextMessage = () => {
    if (currentMessageIndex < mockConversation.length) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, mockConversation[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
        if (currentMessageIndex + 1 < mockConversation.length) {
          setTimeout(playNextMessage, 2000);
        }
      }, 1500);
    }
  };

  const stopDemo = () => {
    setIsPlaying(false);
    setMessages([]);
    setCurrentMessageIndex(0);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Virtual Reception Demo</h2>
        <Button
          onClick={isPlaying ? stopDemo : startDemo}
          variant={isPlaying ? "destructive" : "default"}
          className={isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-secondary to-accent"}
        >
          {isPlaying ? (
            <>
              <PhoneOff className="mr-2 h-4 w-4" />
              End Call
            </>
          ) : (
            <>
              <Phone className="mr-2 h-4 w-4" />
              Start Demo Call
            </>
          )}
        </Button>
      </div>

      <div className="h-96 overflow-y-auto space-y-4 mb-6 bg-slate-900/50 rounded-lg p-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex items-start gap-3 ${
                message.sender === 'ai' ? 'justify-start' : 'justify-end'
              }`}
            >
              {message.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-secondary" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'ai'
                    ? 'bg-slate-800 text-slate-200'
                    : 'bg-secondary/20 text-slate-200'
                }`}
              >
                {message.text}
              </div>
              {message.sender === 'caller' && (
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <User className="h-4 w-4 text-secondary" />
                </div>
              )}
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center gap-2 text-slate-400"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <Bot className="h-4 w-4 text-secondary" />
              </div>
              <div className="flex gap-1">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>●</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-sm text-slate-400">
        <p>This is a demonstration of our AI-powered virtual reception service. The virtual receptionist can:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Handle multiple calls simultaneously</li>
          <li>Schedule appointments and consultations</li>
          <li>Answer common questions</li>
          <li>Route calls to appropriate departments</li>
          <li>Available 24/7 with no wait times</li>
        </ul>
      </div>
    </div>
  );
}
