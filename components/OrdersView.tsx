import React from 'react';
import type { Order } from '../types';

// Fix: Define the OrdersViewProps interface.
interface OrdersViewProps {
  orders: Order[];
}

const OrdersView: React.FC<OrdersViewProps> = ({ orders }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-textPrimary">Orders</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 hover:scale-105">
          Export CSV
        </button>
      </div>
      <div className="bg-surface rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr className="border-b border-border">
                <th className="py-3 px-6 font-semibold text-textSecondary text-sm">Order ID</th>
                <th className="py-3 px-6 font-semibold text-textSecondary text-sm">Customer</th>
                <th className="py-3 px-6 font-semibold text-textSecondary text-sm">Product</th>
                <th className="py-3 px-6 font-semibold text-textSecondary text-sm">Status</th>
                <th className="py-3 px-6 font-semibold text-textSecondary text-sm">Date</th>
                <th className="py-3 px-6 font-semibold text-textSecondary text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map(order => (
                <tr key={order.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-primary font-medium">{order.id}</td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-textPrimary">{order.customerName}</div>
                    <div className="text-sm text-textSecondary">{order.phone}</div>
                  </td>
                  <td className="py-4 px-6 text-textPrimary">{order.product}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-500/10 text-green-400' :
                        order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-400' :
                        order.status === 'Confirmed' ? 'bg-yellow-500/10 text-yellow-400' :
                        'bg-gray-500/10 text-gray-400'
                    }`}>{order.status}</span>
                  </td>
                  <td className="py-4 px-6 text-textSecondary">{order.date}</td>
                  <td className="py-4 px-6">
                    <button className="text-primary hover:underline font-semibold">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersView;