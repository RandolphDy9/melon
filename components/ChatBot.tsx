
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { PACKAGES, INDIVIDUAL_SERVICES } from '../constants';
import { ChatMessage } from '../types';

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm MelonBot, your fun party planner. Tell me about your upcoming event, budget, and what you're looking for, and I'll help you pick the perfect package!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const model = 'gemini-3-flash-preview';

      const prompt = `
        You are MelonBot, a helpful and cheerful party planner for "Melon Fun Events & Services" in Toronto/GTA.
        Your goal is to help potential customers choose the right package or service.
        
        AVAILABLE PACKAGES:
        ${JSON.stringify(PACKAGES, null, 2)}
        
        INDIVIDUAL SERVICES:
        ${JSON.stringify(INDIVIDUAL_SERVICES, null, 2)}

        USER QUESTION: ${input}

        Guidelines:
        - Be enthusiastic and child-friendly.
        - Recommend specific packages based on their needs (e.g., if they want a full show, Package 2 or 4).
        - If they ask for food, mention they should contact Rachelle.
        - Mention serving Toronto and GTA.
        - If budget is tight, recommend individual services like face painting ($100/hr).
        - Keep answers concise but helpful.
      `;

      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Oops, I got a bit confused! Please try again or message us on Facebook!";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a little trouble connecting right now. Feel free to call us directly or check out our packages on the page!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg h-[600px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border-4 border-[#ff9c9c]">
        {/* Header */}
        <div className="bg-[#ff9c9c] p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#ff9c9c] font-bold text-xl shadow-inner">
              M
            </div>
            <div>
              <h3 className="font-bold leading-none">MelonBot</h3>
              <span className="text-xs opacity-80">Party Planner AI</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                m.role === 'user' 
                  ? 'bg-[#96d18c] text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1">
                <div className="w-2 h-2 bg-[#ff9c9c] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#ff9c9c] rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-[#ff9c9c] rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your event..."
            className="flex-grow p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff9c9c] focus:border-transparent outline-none text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-[#ff9c9c] text-white p-3 rounded-xl hover:bg-[#f88181] disabled:opacity-50 transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
