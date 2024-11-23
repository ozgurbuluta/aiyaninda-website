'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader } from 'lucide-react';
import { analytics } from '@/utils/firebase';
import { logEvent } from 'firebase/analytics';

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Merhaba! Size nasıl yardımcı olabilirim?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && analytics) {
      logEvent(analytics, 'chat_opened');
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    setIsLoading(true);
    setError(null);

    // Log chat message attempt
    if (analytics) {
      logEvent(analytics, 'chat_message_sent', {
        message_length: inputMessage.length
      });
    }

    const userMessage = {
      role: 'user',
      content: inputMessage.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage)
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      // Log successful response
      if (analytics) {
        logEvent(analytics, 'chat_response_received', {
          success: true
        });
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.content
      }]);
    } catch (error) {
      // Log error
      if (analytics) {
        logEvent(analytics, 'chat_error', {
          error_message: error.message
        });
      }
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button - Made larger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 p-5 bg-primary rounded-full shadow-lg 
                     hover:bg-primary/90 transition-all duration-300 z-50
                     hover:scale-105 active:scale-95"
        >
          <MessageSquare className="w-8 h-8 text-white" /> {/* Increased icon size */}
        </button>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-96 bg-dark border border-white/10 
                    rounded-2xl shadow-2xl z-50 transition-all duration-300
                    ${isOpen 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              {/* Increased logo size */}
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-white text-lg">AI Asistan</h3>
              <p className="text-sm text-secondary">Her zaman yardıma hazır</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-secondary hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" /> {/* Slightly larger close button */}
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 
                             ${message.role === 'user' 
                               ? 'bg-primary text-white' 
                               : 'bg-white/10 text-white'}`}>
                {message.content}
              </div>
            </div>
          ))}
          {error && (
            <div className="flex justify-center">
              <div className="bg-red-500/10 text-red-500 rounded-2xl px-4 py-2 text-sm">
                {error}
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl px-4 py-2">
                <Loader className="w-5 h-5 animate-spin text-white" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Mesajınızı yazın..."
              disabled={isLoading}
              className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-primary/50 disabled:opacity-50"
            />
            <button
              type="submit"
              className="bg-primary p-2 rounded-lg hover:bg-primary/90 
                       transition-colors disabled:opacity-50"
              disabled={!inputMessage.trim() || isLoading}
            >
              {isLoading ? (
                <Loader className="w-5 h-5 text-white animate-spin" />
              ) : (
                <Send className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}