import React from 'react';
import { format } from 'date-fns';
import { Trophy } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementsListProps {
  data: Achievement[];
}

export const AchievementsList: React.FC<AchievementsListProps> = ({ data }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary':
        return 'from-yellow-400 to-orange-500';
      case 'Epic':
        return 'from-purple-400 to-pink-500';
      case 'Rare':
        return 'from-blue-400 to-indigo-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'Legendary':
        return 'border-yellow-400';
      case 'Epic':
        return 'border-purple-400';
      case 'Rare':
        return 'border-blue-400';
      default:
        return 'border-gray-400';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h3 className="text-xl font-bold text-slate-900">
          Achievements
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 bg-gradient-to-br from-white to-slate-50 rounded-lg border-2 ${getRarityBorder(
              achievement.rarity
            )} hover:shadow-lg transition-all hover:scale-105`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`text-3xl w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${getRarityColor(
                  achievement.rarity
                )} shadow-md`}
              >
                {achievement.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    {achievement.title}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      achievement.rarity === 'Legendary'
                        ? 'bg-yellow-100 text-yellow-800'
                        : achievement.rarity === 'Epic'
                        ? 'bg-purple-100 text-purple-800'
                        : achievement.rarity === 'Rare'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {achievement.rarity}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  {achievement.description}
                </p>
                <p className="text-xs text-slate-500">
                  Unlocked: {format(new Date(achievement.unlockedAt), 'MMM dd, yyyy')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
