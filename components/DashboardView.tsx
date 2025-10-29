import React from 'react';
import type { Order, Conversation } from '../types';
import MetricCard from './MetricCard';

interface DashboardViewProps {
  orders: Order[];
  conversations: Conversation[];
}

const DashboardView: React.FC<DashboardViewProps> = ({ orders, conversations }) => {
  const totalMessages = conversations.reduce((sum, conv) => sum + conv.messages.length, 0);
  const newOrders = orders.filter(o => o.status === 'Confirmed').length;
  const conversionRate = orders.length > 0 ? ((orders.length / conversations.length) * 100).toFixed(1) : '0.0';

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-textPrimary mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Conversations" value={conversations.length.toString()} change="+12%" />
        <MetricCard title="Total Messages" value={totalMessages.toString()} change="+20%" />
        <MetricCard title="New Orders Today" value={newOrders.toString()} change="+5%" />
        <MetricCard title="Conversion Rate" value={`${conversionRate}%`} change="-1.2%" />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-surface rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold mb-4 text-textPrimary">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-semibold text-textSecondary text-sm">Order ID</th>
                  <th className="py-3 px-4 font-semibold text-textSecondary text-sm">Customer</th>
                  <th className="py-3 px-4 font-semibold text-textSecondary text-sm">Status</th>
                  <th className="py-3 px-4 font-semibold text-textSecondary text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map(order => (
                  <tr key={order.id} className="border-b border-border last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-primary font-medium">{order.id}</td>
                    <td className="py-3 px-4 text-textPrimary">{order.customerName}</td>
                    <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-500/10 text-green-400' :
                            order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-400' :
                            order.status === 'Confirmed' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-gray-500/10 text-gray-400'
                        }`}>{order.status}</span>
                    </td>
                    <td className="py-3 px-4 text-textSecondary">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="bg-surface rounded-lg border border-border p-6">
          <h2 className="text-xl font-semibold mb-4 text-textPrimary">Performance</h2>
          <div className="space-y-6">
              <div>
                  <div className="flex justify-between text-sm font-medium mb-1 text-textSecondary">
                      <span>Avg. Response Time</span>
                      <span className="text-textPrimary font-bold">32s</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
              </div>
               <div>
                  <div className="flex justify-between text-sm font-medium mb-1 text-textSecondary">
                      <span>Resolved Conversations</span>
                      <span className="text-textPrimary font-bold">78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
              </div>
              <div>
                  <div className="flex justify-between text-sm font-medium mb-1 text-textSecondary">
                      <span>Bot Handled Queries</span>
                      <span className="text-textPrimary font-bold">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;