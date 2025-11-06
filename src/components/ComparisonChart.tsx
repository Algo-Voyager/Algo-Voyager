import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { ComparisonData } from '../types';

interface ComparisonChartProps {
  data: ComparisonData[];
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">
            {payload[0].payload.metric}
          </p>
          <p className="text-sm text-primary-600">
            Your Score: <span className="font-bold">{payload[0].value}</span>
          </p>
          <p className="text-sm text-slate-600">
            Average: <span className="font-bold">{payload[1].value}</span>
          </p>
          <p className="text-sm text-green-600">
            Top 10%: <span className="font-bold">{payload[2].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Performance Comparison
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="metric"
            stroke="#64748b"
            tick={{ fontSize: 11 }}
            tickLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis
            stroke="#64748b"
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: '#cbd5e1' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="user"
            fill="#0ea5e9"
            radius={[8, 8, 0, 0]}
            name="You"
          />
          <Bar
            dataKey="average"
            fill="#94a3b8"
            radius={[8, 8, 0, 0]}
            name="Average"
          />
          <Bar
            dataKey="top10"
            fill="#10b981"
            radius={[8, 8, 0, 0]}
            name="Top 10%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
