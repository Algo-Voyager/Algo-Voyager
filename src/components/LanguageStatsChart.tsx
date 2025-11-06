import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { LanguageStats } from '../types';

interface LanguageStatsChartProps {
  data: LanguageStats[];
}

export const LanguageStatsChart: React.FC<LanguageStatsChartProps> = ({ data }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-2">
            {item.language}
          </p>
          <p className="text-sm text-primary-600">
            Problems: <span className="font-bold">{item.problemsSolved}</span>
          </p>
          <p className="text-sm text-slate-600">
            Share: <span className="font-bold">{item.percentage}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Languages Used
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="#cbd5e1" />
          <PolarAngleAxis dataKey="language" tick={{ fontSize: 12, fill: '#64748b' }} />
          <PolarRadiusAxis tick={{ fontSize: 10, fill: '#64748b' }} />
          <Radar
            name="Problems Solved"
            dataKey="problemsSolved"
            stroke="#0ea5e9"
            fill="#0ea5e9"
            fillOpacity={0.6}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="mt-6 space-y-3">
        {data.map((lang, index) => (
          <div key={lang.language} className="flex items-center">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">
                  {lang.language}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {lang.problemsSolved} ({lang.percentage}%)
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-500"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
