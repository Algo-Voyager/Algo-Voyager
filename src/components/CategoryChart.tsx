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
  Cell,
} from 'recharts';
import { AlgorithmStats } from '../types';

interface CategoryChartProps {
  data: AlgorithmStats[];
}

const COLORS = [
  '#0ea5e9',
  '#8b5cf6',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#6366f1',
  '#14b8a6',
  '#f97316',
  '#06b6d4',
  '#a855f7',
];

export const CategoryChart: React.FC<CategoryChartProps> = ({ data }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">
            {item.category}
          </p>
          <p className="text-sm text-primary-600">
            Solved: <span className="font-bold">{item.solved}/{item.total}</span>
          </p>
          <p className="text-sm text-green-600">
            Accuracy: <span className="font-bold">{item.accuracy}%</span>
          </p>
          <p className="text-sm text-slate-600">
            Progress: <span className="font-bold">
              {Math.round((item.solved / item.total) * 100)}%
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Algorithm Categories Progress
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            type="number"
            stroke="#64748b"
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis
            type="category"
            dataKey="category"
            stroke="#64748b"
            tick={{ fontSize: 11 }}
            tickLine={{ stroke: '#cbd5e1' }}
            width={150}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="solved"
            fill="#0ea5e9"
            radius={[0, 8, 8, 0]}
            name="Solved"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
          <Bar
            dataKey="total"
            fill="#e2e8f0"
            radius={[0, 8, 8, 0]}
            name="Total"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
