import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <div className="bg-surface rounded-lg border border-border p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <h3 className="text-sm font-medium text-textSecondary">{title}</h3>
      <div className="flex items-baseline justify-between mt-2">
        <p className="text-3xl font-bold text-textPrimary">{value}</p>
        <span className={`text-sm font-semibold px-2 py-1 rounded-md ${isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;