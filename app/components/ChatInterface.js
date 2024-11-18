'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Merhaba! Size nasıl yardımcı olabilirim?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      content: inputMessage
    }]);
    
    // Clear input
    setInputMessage('');

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Bu bir örnek yanıttır. Gerçek API entegrasyonunda bu kısım Claude API yanıtı ile değiştirilecektir.'
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-primary rounded-full shadow-lg 
                   hover:bg-primary/90 transition-all duration-300 z-50
                   ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>

      {/* Chat Interface */}
      <div className={`fixed bottom-6 right-6 w-96 bg-dark border border-white/10 
                      rounded-2xl shadow-2xl z-50 transition-all duration-300
                      ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">AI Asistan</h3>
              <p className="text-sm text-secondary">Her zaman yardıma hazır</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-secondary hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 
                             ${message.type === 'user' 
                               ? 'bg-primary text-white' 
                               : 'bg-white/10 text-white'}`}>
                {message.content}
              </div>
            </div>
          ))}
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
              className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-primary/50"
            />
            <button
              type="submit"
              className="bg-primary p-2 rounded-lg hover:bg-primary/90 
                       transition-colors disabled:opacity-50"
              disabled={!inputMessage.trim()}
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}