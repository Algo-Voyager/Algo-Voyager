import React from 'react';
import { format } from 'date-fns';
import { TopicProgress } from '../types';

interface TopicProgressListProps {
  data: TopicProgress[];
}

export const TopicProgressList: React.FC<TopicProgressListProps> = ({ data }) => {
  const getProgressColor = (progress: number) => {
    if (progress >= 70) return 'bg-green-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getProgressBarColor = (progress: number) => {
    if (progress >= 70) return 'bg-green-100';
    if (progress >= 40) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Topic Progress
      </h3>
      <div className="space-y-4">
        {data.map((topic) => (
          <div
            key={topic.topic}
            className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-slate-900">
                {topic.topic}
              </h4>
              <span className="text-xs text-slate-500">
                Last: {format(new Date(topic.lastPracticed), 'MMM dd')}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-600">
                {topic.problemsSolved} / {topic.totalProblems} problems
              </span>
              <span className="text-sm font-bold text-primary-600">
                {topic.progress}%
              </span>
            </div>
            <div className={`w-full h-2 ${getProgressBarColor(topic.progress)} rounded-full overflow-hidden`}>
              <div
                className={`h-full ${getProgressColor(topic.progress)} transition-all duration-500 ease-out rounded-full`}
                style={{ width: `${topic.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
