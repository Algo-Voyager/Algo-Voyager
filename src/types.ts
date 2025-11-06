export interface UserMetrics {
  totalProblems: number;
  problemsSolved: number;
  successRate: number;
  currentStreak: number;
  longestStreak: number;
  totalTimeSpent: number; // in minutes
  rank: number;
  skillLevel: string;
}

export interface AlgorithmStats {
  category: string;
  solved: number;
  total: number;
  accuracy: number;
}

export interface ProblemDifficulty {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  solved: number;
  total: number;
  percentage: number;
}

export interface PerformanceData {
  date: string;
  problemsSolved: number;
  timeSpent: number;
  accuracy: number;
}

export interface TopicProgress {
  topic: string;
  progress: number;
  problemsSolved: number;
  totalProblems: number;
  lastPracticed: string;
}

export interface RecentActivity {
  id: string;
  problemName: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'Solved' | 'Attempted' | 'Failed';
  timeSpent: number;
  date: string;
  language: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

export interface LanguageStats {
  language: string;
  problemsSolved: number;
  percentage: number;
}

export interface ComparisonData {
  metric: string;
  user: number;
  average: number;
  top10: number;
}
