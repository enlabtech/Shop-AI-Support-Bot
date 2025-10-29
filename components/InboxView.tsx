import React, { useState, useRef, useEffect } from 'react';
import type { Conversation, Message, FAQ } from '../types';
import { generateBotResponse } from '../services/geminiService';
import BotIcon from './icons/BotIcon';
import UserIcon from './icons/UserIcon';

interface InboxViewProps {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  faqs: FAQ[];
}

const InboxView: React.FC<InboxViewProps> = ({ conversations, setConversations, faqs }) => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0] || null);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [selectedConversation?.messages]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const userMessage: Message = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedConversations = conversations.map(c => 
      c.id === selectedConversation.id 
        ? { ...c, messages: [...c.messages, userMessage], lastMessage: newMessage, timestamp: userMessage.timestamp } 
        : c
    );
    setConversations(updatedConversations);
    setSelectedConversation(updatedConversations.find(c => c.id === selectedConversation.id) || null);
    setNewMessage('');
    setIsTyping(true);
    
    try {
        const botText = await generateBotResponse(newMessage, faqs);
        const botMessage: Message = {
            id: Date.now() + 1,
            text: botText,
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        const finalConversations = conversations.map(c => 
            c.id === selectedConversation.id 
              ? { ...c, messages: [...c.messages, userMessage, botMessage], lastMessage: botText, timestamp: botMessage.timestamp } 
              : c
        );
        setConversations(finalConversations);
        setSelectedConversation(finalConversations.find(c => c.id === selectedConversation.id) || null);

    } catch(error) {
        console.error("Failed to get bot response:", error);
    } finally {
        setIsTyping(false);
    }
  };


  return (
    <div className="h-full flex flex-col animate-fade-in-up">
      <h1 className="text-3xl font-bold text-textPrimary mb-6">Inbox</h1>
      <div className="flex-1 bg-surface rounded-lg border border-border flex overflow-hidden">
        {/* Conversation List */}
        <div className="w-1/3 border-r border-border flex flex-col">
           <div className="p-4 border-b border-border">
               <input type="text" placeholder="Search conversations..." className="w-full p-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary" />
           </div>
           <ul className="overflow-y-auto">
            {conversations.map(conv => (
              <li key={conv.id}>
                <button
                  onClick={() => setSelectedConversation(conv)}
                  className={`w-full text-left p-4 hover:bg-white/5 transition-colors duration-200 border-l-4 ${selectedConversation?.id === conv.id ? 'bg-primary/10 border-primary' : 'border-transparent'}`}
                >
                  <div className="flex items-center">
                    <img src={conv.avatarUrl} alt={conv.customerName} className="w-12 h-12 rounded-full mr-4 border-2 border-border" />
                    <div className="flex-1 truncate">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-textPrimary">{conv.customerName}</h3>
                        <span className="text-xs text-textSecondary">{conv.timestamp}</span>
                      </div>
                      <p className="text-sm text-textSecondary truncate">{conv.lastMessage}</p>
                    </div>
                     {conv.unreadCount > 0 && <span className="ml-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{conv.unreadCount}</span>}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Chat Panel */}
        <div className="w-2/3 flex flex-col">
          {selectedConversation ? (
            <>
              <div className="p-4 border-b border-border flex items-center">
                <img src={selectedConversation.avatarUrl} alt={selectedConversation.customerName} className="w-10 h-10 rounded-full mr-3" />
                <h2 className="font-semibold text-lg text-textPrimary">{selectedConversation.customerName}</h2>
              </div>
              <div className="flex-1 p-6 overflow-y-auto bg-background/50">
                {selectedConversation.messages.map(msg => (
                  <div key={msg.id} className={`flex items-end mb-4 animate-fade-in-up ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                     {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0"><BotIcon/></div>}
                    <div className={`px-4 py-3 rounded-xl max-w-md ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-surface text-textPrimary rounded-bl-none'}`}>
                      <p className="text-sm">{msg.text}</p>
                      <span className={`text-xs mt-1 block text-right ${msg.sender === 'user' ? 'text-blue-200' : 'text-textSecondary'}`}>{msg.timestamp}</span>
                    </div>
                     {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center ml-3 flex-shrink-0"><UserIcon/></div>}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-end mb-4 animate-fade-in-up">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0"><BotIcon/></div>
                    <div className="px-4 py-3 rounded-xl bg-surface text-textPrimary rounded-bl-none">
                      <div className="flex items-center space-x-1">
                          <span className="h-2 w-2 bg-textSecondary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 bg-textSecondary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="h-2 w-2 bg-textSecondary rounded-full animate-bounce"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 border-t border-border bg-surface">
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-3 border border-border rounded-full bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <button type="submit" className="ml-3 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:scale-100" disabled={!newMessage.trim() || isTyping}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-textSecondary">
              <p>Select a conversation to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InboxView;