import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import InboxView from './components/InboxView';
import OrdersView from './components/OrdersView';
import KnowledgeBaseView from './components/KnowledgeBaseView';
import SettingsView from './components/SettingsView';
import LandingPage from './components/LandingPage';
import type { FAQ, Order, Conversation } from './types';
import { initialFAQs, initialOrders, initialConversations } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LandingPage onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-background text-textPrimary font-sans">
        <Sidebar onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardView orders={orders} conversations={conversations} />} />
            <Route path="/inbox" element={<InboxView conversations={conversations} setConversations={setConversations} faqs={faqs} />} />
            <Route path="/orders" element={<OrdersView orders={orders} />} />
            <Route path="/knowledge" element={<KnowledgeBaseView faqs={faqs} setFaqs={setFaqs} />} />
            <Route path="/settings" element={<SettingsView />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
