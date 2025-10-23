
interface LeetCodeProfile {
  username: string;
  realName: string;
  avatar: string;
  country: string;
  school: string;
  ranking: number;
  reputation: number;
  starRating: number;
  github: string;
  linkedin: string;
  twitter: string;
  about: string;
  solved: {
    all: number;
    easy: number;
    medium: number;
    hard: number;
  };
  totals: {
    all: number;
    easy: number;
    medium: number;
    hard: number;
  };
  submissions: number;
  successRate: number;
  percentageRank: number;
}