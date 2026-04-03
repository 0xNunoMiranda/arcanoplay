import { Header } from '@/components/Header';
import { Settings, LogOut, Heart, Trophy, Gamepad2, Star, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Profile() {
  const user = {
    username: 'ArcanoPlayer_42',
    rank: 125,
    points: 45000,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    favorites: 12,
    reviews: 8
  };

  const menuItems = [
    { icon: Heart, label: 'Meus Favoritos', count: user.favorites, color: 'text-arcano-secondary' },
    { icon: Trophy, label: 'Meus Rankings', count: user.rank, color: 'text-arcano-gold' },
    { icon: Star, label: 'Minhas Avaliações', count: user.reviews, color: 'text-arcano-accent' },
    { icon: Gamepad2, label: 'Histórico de Jogos', color: 'text-arcano-primary' },
  ];

  return (
    <div className="pb-24">
      <Header />
      
      <main className="px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-arcano-primary p-1 overflow-hidden">
              <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-arcano-secondary p-2 rounded-xl shadow-lg shadow-arcano-secondary/30">
              <Settings size={16} className="text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-white mb-1">{user.username}</h1>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-arcano-primary uppercase tracking-widest">Level 42</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{user.points.toLocaleString()} XP</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="glass rounded-3xl p-6 flex flex-col items-center">
            <span className="text-2xl font-black text-white">#{user.rank}</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase">Global Rank</span>
          </div>
          <div className="glass rounded-3xl p-6 flex flex-col items-center">
            <span className="text-2xl font-black text-white">12</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase">Troféus</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-3 mb-10">
          {menuItems.map((item) => (
            <button 
              key={item.label}
              className="w-full glass rounded-2xl p-4 flex items-center justify-between active:scale-98 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={cn("p-2 rounded-xl bg-white/5", item.color)}>
                  <item.icon size={20} />
                </div>
                <span className="text-sm font-bold text-white">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.count !== undefined && (
                  <span className="text-xs font-black text-gray-500">{item.count}</span>
                )}
                <ChevronRight size={16} className="text-gray-600" />
              </div>
            </button>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full py-4 rounded-2xl border border-red-500/20 text-red-500 text-sm font-bold flex items-center justify-center gap-2 active:scale-98 transition-all">
          <LogOut size={18} />
          SAIR DA CONTA
        </button>
      </main>
    </div>
  );
}
