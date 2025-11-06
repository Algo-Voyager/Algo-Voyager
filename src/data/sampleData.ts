import {
  UserMetrics,
  AlgorithmStats,
  ProblemDifficulty,
  PerformanceData,
  TopicProgress,
  RecentActivity,
  Achievement,
  LanguageStats,
  ComparisonData,
} from '../types';

export const userMetrics: UserMetrics = {
  totalProblems: 500,
  problemsSolved: 247,
  successRate: 78.5,
  currentStreak: 12,
  longestStreak: 45,
  totalTimeSpent: 14850, // in minutes (247.5 hours)
  rank: 1247,
  skillLevel: 'Advanced',
};

export const algorithmStats: AlgorithmStats[] = [
  { category: 'Arrays & Strings', solved: 45, total: 80, accuracy: 82 },
  { category: 'Dynamic Programming', solved: 28, total: 65, accuracy: 71 },
  { category: 'Trees & Graphs', solved: 38, total: 75, accuracy: 76 },
  { category: 'Sorting & Searching', solved: 32, total: 50, accuracy: 88 },
  { category: 'Linked Lists', solved: 24, total: 40, accuracy: 85 },
  { category: 'Hash Tables', solved: 22, total: 35, accuracy: 90 },
  { category: 'Recursion & Backtracking', solved: 18, total: 45, accuracy: 68 },
  { category: 'Greedy Algorithms', solved: 15, total: 30, accuracy: 75 },
  { category: 'Bit Manipulation', solved: 12, total: 25, accuracy: 72 },
  { category: 'Math & Geometry', solved: 13, total: 35, accuracy: 65 },
];

export const problemDifficulty: ProblemDifficulty[] = [
  { difficulty: 'Easy', solved: 125, total: 200, percentage: 62.5 },
  { difficulty: 'Medium', solved: 98, total: 220, percentage: 44.5 },
  { difficulty: 'Hard', solved: 24, total: 80, percentage: 30.0 },
];

export const performanceData: PerformanceData[] = [
  { date: '2025-10-27', problemsSolved: 3, timeSpent: 85, accuracy: 75 },
  { date: '2025-10-28', problemsSolved: 4, timeSpent: 120, accuracy: 80 },
  { date: '2025-10-29', problemsSolved: 2, timeSpent: 95, accuracy: 70 },
  { date: '2025-10-30', problemsSolved: 5, timeSpent: 150, accuracy: 85 },
  { date: '2025-10-31', problemsSolved: 3, timeSpent: 110, accuracy: 78 },
  { date: '2025-11-01', problemsSolved: 6, timeSpent: 180, accuracy: 88 },
  { date: '2025-11-02', problemsSolved: 4, timeSpent: 130, accuracy: 82 },
  { date: '2025-11-03', problemsSolved: 5, timeSpent: 145, accuracy: 86 },
  { date: '2025-11-04', problemsSolved: 3, timeSpent: 100, accuracy: 80 },
  { date: '2025-11-05', problemsSolved: 7, timeSpent: 200, accuracy: 90 },
  { date: '2025-11-06', problemsSolved: 4, timeSpent: 125, accuracy: 84 },
];

export const topicProgress: TopicProgress[] = [
  {
    topic: 'Arrays & Strings',
    progress: 56,
    problemsSolved: 45,
    totalProblems: 80,
    lastPracticed: '2025-11-06',
  },
  {
    topic: 'Dynamic Programming',
    progress: 43,
    problemsSolved: 28,
    totalProblems: 65,
    lastPracticed: '2025-11-05',
  },
  {
    topic: 'Trees & Graphs',
    progress: 51,
    problemsSolved: 38,
    totalProblems: 75,
    lastPracticed: '2025-11-06',
  },
  {
    topic: 'Sorting & Searching',
    progress: 64,
    problemsSolved: 32,
    totalProblems: 50,
    lastPracticed: '2025-11-04',
  },
  {
    topic: 'Linked Lists',
    progress: 60,
    problemsSolved: 24,
    totalProblems: 40,
    lastPracticed: '2025-11-03',
  },
  {
    topic: 'Hash Tables',
    progress: 63,
    problemsSolved: 22,
    totalProblems: 35,
    lastPracticed: '2025-11-02',
  },
];

export const recentActivity: RecentActivity[] = [
  {
    id: '1',
    problemName: 'Two Sum',
    difficulty: 'Easy',
    status: 'Solved',
    timeSpent: 15,
    date: '2025-11-06',
    language: 'Python',
  },
  {
    id: '2',
    problemName: 'Binary Tree Maximum Path Sum',
    difficulty: 'Hard',
    status: 'Solved',
    timeSpent: 45,
    date: '2025-11-06',
    language: 'JavaScript',
  },
  {
    id: '3',
    problemName: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    status: 'Solved',
    timeSpent: 30,
    date: '2025-11-05',
    language: 'Python',
  },
  {
    id: '4',
    problemName: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    status: 'Attempted',
    timeSpent: 40,
    date: '2025-11-05',
    language: 'Java',
  },
  {
    id: '5',
    problemName: 'Valid Parentheses',
    difficulty: 'Easy',
    status: 'Solved',
    timeSpent: 10,
    date: '2025-11-04',
    language: 'Python',
  },
  {
    id: '6',
    problemName: 'Course Schedule II',
    difficulty: 'Medium',
    status: 'Solved',
    timeSpent: 35,
    date: '2025-11-04',
    language: 'C++',
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: '100 Problems Solved',
    description: 'Solved your first 100 problems',
    icon: '🎯',
    unlockedAt: '2025-09-15',
    rarity: 'Epic',
  },
  {
    id: '2',
    title: 'Week Warrior',
    description: 'Maintained a 7-day streak',
    icon: '🔥',
    unlockedAt: '2025-10-28',
    rarity: 'Rare',
  },
  {
    id: '3',
    title: 'Algorithm Master',
    description: 'Mastered 5 different algorithm categories',
    icon: '👑',
    unlockedAt: '2025-10-20',
    rarity: 'Legendary',
  },
  {
    id: '4',
    title: 'Speed Demon',
    description: 'Solved 10 problems in one day',
    icon: '⚡',
    unlockedAt: '2025-10-05',
    rarity: 'Rare',
  },
  {
    id: '5',
    title: 'First Steps',
    description: 'Solved your first problem',
    icon: '🌟',
    unlockedAt: '2025-07-10',
    rarity: 'Common',
  },
  {
    id: '6',
    title: 'Hard Mode',
    description: 'Solved 20 hard problems',
    icon: '💪',
    unlockedAt: '2025-11-01',
    rarity: 'Epic',
  },
];

export const languageStats: LanguageStats[] = [
  { language: 'Python', problemsSolved: 98, percentage: 39.7 },
  { language: 'JavaScript', problemsSolved: 67, percentage: 27.1 },
  { language: 'Java', problemsSolved: 45, percentage: 18.2 },
  { language: 'C++', problemsSolved: 28, percentage: 11.3 },
  { language: 'Go', problemsSolved: 9, percentage: 3.7 },
];

export const comparisonData: ComparisonData[] = [
  { metric: 'Problems Solved', user: 247, average: 125, top10: 450 },
  { metric: 'Success Rate (%)', user: 78.5, average: 65, top10: 92 },
  { metric: 'Avg. Time (min)', user: 60, average: 75, top10: 45 },
  { metric: 'Current Streak', user: 12, average: 5, top10: 30 },
];
