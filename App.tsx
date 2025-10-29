import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import InboxView from './components/InboxView';
import OrdersView from './components/OrdersView';
import KnowledgeBaseView from './components/KnowledgeBaseView';
import SettingsView from './components/SettingsView';
import LandingPage from './components/LandingPage';
import type { View, FAQ, Order, Conversation } from './types';
import { initialFAQs, initialOrders, initialConversations } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView orders={orders} conversations={conversations} />;
      case 'inbox':
        return <InboxView conversations={conversations} setConversations={setConversations} faqs={faqs} />;
      case 'orders':
        return <OrdersView orders={orders} />;
      case 'knowledge':
        return <KnowledgeBaseView faqs={faqs} setFaqs={setFaqs} />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView orders={orders} conversations={conversations} />;
    }
  };

  if (!isAuthenticated) {
    return <LandingPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-background text-textPrimary font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} onLogout={handleLogout} />
      <main key={currentView} className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        {renderView()}
      </main>
    </div>
  );
};

export default App;