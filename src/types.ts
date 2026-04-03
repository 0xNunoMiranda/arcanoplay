export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  rating: number;
  plays: number;
  description: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  rank: number;
  favorites: string[];
  role: 'user' | 'admin';
}

export interface RankingEntry {
  userId: string;
  username: string;
  score: number;
  rank: number;
}
