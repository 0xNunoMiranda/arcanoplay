import { Header } from '@/components/Header';
import { Trophy, Medal, Crown, Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Rankings() {
  const rankings = [
    { id: '1', username: 'ArcanoMaster', points: 125000, rank: 1, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Master' },
    { id: '2', username: 'ShadowSlayer', points: 98000, rank: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shadow' },
    { id: '3', username: 'NeonRunner', points: 85000, rank: 3, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neon' },
    { id: '4', username: 'PuzzleQueen', points: 72000, rank: 4, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Queen' },
    { id: '5', username: 'CyberGhost', points: 65000, rank: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ghost' },
    { id: '6', username: 'MagicTiles', points: 58000, rank: 6, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Magic' },
    { id: '7', username: 'QuestSeeker', points: 52000, rank: 7, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Seeker' },
  ];

  return (
    <div className="pb-24">
      <Header />
      
      <main className="px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-black text-white">Rankings Globais</h1>
          <TrendingUp className="text-arcano-accent" size={24} />
        </div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-4 mb-12 mt-4">
          {/* Rank 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <div className="w-16 h-16 rounded-full border-2 border-gray-400 p-1 overflow-hidden">
                <img src={rankings[1].avatar} alt="Rank 2" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gray-400 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-black">2</div>
            </div>
            <span className="text-xs font-bold text-white mb-1 truncate w-20 text-center">{rankings[1].username}</span>
            <div className="h-20 w-16 bg-gradient-to-t from-gray-400/20 to-gray-400/40 rounded-t-xl" />
          </div>

          {/* Rank 1 */}
          <div className="flex flex-col items-center">
            <Crown className="text-arcano-gold mb-2" size={24} />
            <div className="relative mb-2">
              <div className="w-20 h-20 rounded-full border-4 border-arcano-gold p-1 overflow-hidden">
                <img src={rankings[0].avatar} alt="Rank 1" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute -top-2 -right-2 bg-arcano-gold w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-black">1</div>
            </div>
            <span className="text-sm font-black text-white mb-1 truncate w-24 text-center">{rankings[0].username}</span>
            <div className="h-28 w-20 bg-gradient-to-t from-arcano-gold/20 to-arcano-gold/40 rounded-t-xl" />
          </div>

          {/* Rank 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <div className="w-16 h-16 rounded-full border-2 border-orange-400 p-1 overflow-hidden">
                <img src={rankings[2].avatar} alt="Rank 3" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute -top-2 -right-2 bg-orange-400 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-black">3</div>
            </div>
            <span className="text-xs font-bold text-white mb-1 truncate w-20 text-center">{rankings[2].username}</span>
            <div className="h-16 w-16 bg-gradient-to-t from-orange-400/20 to-orange-400/40 rounded-t-xl" />
          </div>
        </div>

        {/* List */}
        <div className="space-y-3">
          {rankings.slice(3).map((player) => (
            <div key={player.id} className="glass rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-6 text-center text-sm font-black text-gray-500">#{player.rank}</span>
                <div className="w-10 h-10 rounded-full bg-arcano-surface border border-white/10 overflow-hidden">
                  <img src={player.avatar} alt={player.username} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-bold text-white">{player.username}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-black text-arcano-primary">{player.points.toLocaleString()}</span>
                <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">Pontos</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
