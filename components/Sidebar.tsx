import React from 'react';
import type { View } from '../types';
import HomeIcon from './icons/HomeIcon';
import InboxIcon from './icons/InboxIcon';
import OrdersIcon from './icons/OrdersIcon';
import KnowledgeIcon from './icons/KnowledgeIcon';
import SettingsIcon from './icons/SettingsIcon';
import BotIcon from './icons/BotIcon';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon /> },
    { id: 'inbox', label: 'Inbox', icon: <InboxIcon /> },
    { id: 'orders', label: 'Orders', icon: <OrdersIcon /> },
    { id: 'knowledge', label: 'Knowledge Base', icon: <KnowledgeIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  ] as const;

  return (
    <aside className="w-16 md:w-64 bg-surface flex flex-col h-full border-r border-border">
      <div className="flex items-center justify-center md:justify-start md:pl-6 h-20 border-b border-border">
        <div className="p-2 rounded-lg bg-primary/20 text-primary">
            <BotIcon />
        </div>
        <h1 className="hidden md:block ml-3 text-2xl font-bold text-textPrimary">ShopAI</h1>
      </div>
      <nav className="flex-1 px-2 md:px-4 py-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center w-full p-3 my-1 rounded-lg transition-all duration-200 group relative ${
                  currentView === item.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-textSecondary hover:bg-white/5 hover:text-textPrimary'
                }`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 rounded-r-full bg-primary transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${currentView === item.id ? 'scale-y-100' : ''}`}></div>
                {item.icon}
                <span className="hidden md:block ml-4">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-border">
          <div className="flex items-center">
              <img src="https://picsum.photos/seed/admin/40/40" alt="Admin" className="w-10 h-10 rounded-full border-2 border-primary" />
              <div className="hidden md:block ml-3">
                  <p className="font-semibold text-sm text-textPrimary">Page Admin</p>
                  <p className="text-xs text-textSecondary">My Shop BD</p>
              </div>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;