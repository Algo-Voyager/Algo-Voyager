import React from 'react';
import { format } from 'date-fns';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { RecentActivity } from '../types';

interface RecentActivityListProps {
  data: RecentActivity[];
}

export const RecentActivityList: React.FC<RecentActivityListProps> = ({ data }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Solved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      Easy: 'badge-success',
      Medium: 'badge-warning',
      Hard: 'badge-error',
    };
    return colors[difficulty as keyof typeof colors] || 'badge-info';
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Recent Activity
      </h3>
      <div className="space-y-3">
        {data.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary-300 transition-all hover:shadow-md"
          >
            <div className="mr-4">
              {getStatusIcon(activity.status)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-semibold text-slate-900">
                  {activity.problemName}
                </h4>
                <span className={`badge ${getDifficultyBadge(activity.difficulty)}`}>
                  {activity.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{activity.language}</span>
                <span>•</span>
                <span>{activity.timeSpent} min</span>
                <span>•</span>
                <span>{format(new Date(activity.date), 'MMM dd, yyyy')}</span>
              </div>
            </div>
            <div className="ml-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  activity.status === 'Solved'
                    ? 'bg-green-100 text-green-700'
                    : activity.status === 'Failed'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
