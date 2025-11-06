import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ProblemDifficulty } from '../types';

interface DifficultyChartProps {
  data: ProblemDifficulty[];
}

const COLORS = {
  Easy: '#10b981',
  Medium: '#f59e0b',
  Hard: '#ef4444',
};

export const DifficultyChart: React.FC<DifficultyChartProps> = ({ data }) => {
  const chartData = data.map((item) => ({
    name: item.difficulty,
    value: item.solved,
    total: item.total,
    percentage: item.percentage,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">
            {item.name}
          </p>
          <p className="text-sm text-slate-600">
            Solved: <span className="font-bold">{item.value}/{item.total}</span>
          </p>
          <p className="text-sm text-primary-600">
            Completion: <span className="font-bold">{item.percentage.toFixed(1)}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = (entry: any) => {
    return `${entry.name}: ${entry.value}`;
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Problems by Difficulty
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.name as keyof typeof COLORS]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.difficulty}
            className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200"
          >
            <div
              className={`inline-block w-3 h-3 rounded-full mb-2`}
              style={{
                backgroundColor: COLORS[item.difficulty],
              }}
            />
            <p className="text-xs text-slate-600 font-medium">{item.difficulty}</p>
            <p className="text-lg font-bold text-slate-900">
              {item.solved}/{item.total}
            </p>
            <p className="text-xs text-slate-500">{item.percentage.toFixed(1)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};
