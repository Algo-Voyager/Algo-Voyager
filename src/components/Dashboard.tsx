import React from 'react';
import {
  TrendingUp,
  Target,
  Flame,
  Clock,
  Award,
  BarChart3,
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { ProgressChart } from './ProgressChart';
import { CategoryChart } from './CategoryChart';
import { DifficultyChart } from './DifficultyChart';
import { TopicProgressList } from './TopicProgressList';
import { RecentActivityList } from './RecentActivityList';
import { AchievementsList } from './AchievementsList';
import { LanguageStatsChart } from './LanguageStatsChart';
import { ComparisonChart } from './ComparisonChart';
import {
  userMetrics,
  algorithmStats,
  problemDifficulty,
  performanceData,
  topicProgress,
  recentActivity,
  achievements,
  languageStats,
  comparisonData,
} from '../data/sampleData';

export const Dashboard: React.FC = () => {
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    return `${hours}h`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                Algo-Voyager
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Your Algorithm Learning Journey
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-slate-500">Skill Level</p>
                <p className="text-lg font-bold text-primary-600">
                  {userMetrics.skillLevel}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">Global Rank</p>
                <p className="text-lg font-bold text-slate-900">
                  #{userMetrics.rank.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Problems Solved"
            value={userMetrics.problemsSolved}
            subtitle={`out of ${userMetrics.totalProblems} total`}
            icon={Target}
            iconColor="text-primary-600"
            gradient="from-primary-500 to-primary-600"
            trend={{ value: 12.5, isPositive: true }}
          />
          <MetricCard
            title="Success Rate"
            value={`${userMetrics.successRate}%`}
            subtitle="average accuracy"
            icon={TrendingUp}
            iconColor="text-green-600"
            gradient="from-green-500 to-green-600"
            trend={{ value: 5.2, isPositive: true }}
          />
          <MetricCard
            title="Current Streak"
            value={`${userMetrics.currentStreak} days`}
            subtitle={`longest: ${userMetrics.longestStreak} days`}
            icon={Flame}
            iconColor="text-orange-600"
            gradient="from-orange-500 to-red-600"
            trend={{ value: 8.3, isPositive: true }}
          />
          <MetricCard
            title="Time Invested"
            value={formatTime(userMetrics.totalTimeSpent)}
            subtitle="total learning time"
            icon={Clock}
            iconColor="text-purple-600"
            gradient="from-purple-500 to-purple-600"
            trend={{ value: 15.7, isPositive: true }}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProgressChart data={performanceData} />
          <DifficultyChart data={problemDifficulty} />
        </div>

        {/* Category Progress */}
        <div className="mb-8">
          <CategoryChart data={algorithmStats} />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TopicProgressList data={topicProgress} />
          <LanguageStatsChart data={languageStats} />
        </div>

        {/* Comparison Chart */}
        <div className="mb-8">
          <ComparisonChart data={comparisonData} />
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <AchievementsList data={achievements} />
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <RecentActivityList data={recentActivity} />
        </div>

        {/* Footer Stats */}
        <div className="card bg-gradient-to-r from-primary-50 to-indigo-50 border-primary-200">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-primary-600" />
            <h3 className="text-xl font-bold text-slate-900">
              Quick Statistics
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-primary-600">
                {Math.round((userMetrics.problemsSolved / userMetrics.totalProblems) * 100)}%
              </p>
              <p className="text-xs text-slate-600 mt-1">Overall Progress</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-green-600">
                {algorithmStats.reduce((sum, cat) => sum + cat.solved, 0)}
              </p>
              <p className="text-xs text-slate-600 mt-1">Total Categories</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-purple-600">
                {achievements.length}
              </p>
              <p className="text-xs text-slate-600 mt-1">Achievements</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-orange-600">
                {languageStats.length}
              </p>
              <p className="text-xs text-slate-600 mt-1">Languages Used</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-600">
            Algo-Voyager © 2025 | Keep Learning, Keep Growing
          </p>
        </div>
      </footer>
    </div>
  );
};
