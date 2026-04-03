import { useState } from 'react';
import { Header } from '@/components/Header';
import { CategoryBar } from '@/components/CategoryBar';
import { GameCard } from '@/components/GameCard';
import { Game } from '@/types';
import { motion } from 'motion/react';
import { Flame, Trophy, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const MOCK_GAMES: Game[] = [
  {
    id: '1',
    title: 'Arcane Quest',
    thumbnail: 'https://picsum.photos/seed/quest/800/600',
    category: 'RPG',
    rating: 4.8,
    plays: 12500,
    description: 'Uma jornada épica pelo mundo de Arcano.'
  },
  {
    id: '2',
    title: 'Neon Racer',
    thumbnail: 'https://picsum.photos/seed/race/800/600',
    category: 'Corrida',
    rating: 4.5,
    plays: 8900,
    description: 'Corra em alta velocidade em pistas neon.'
  },
  {
    id: '3',
    title: 'Shadow Blade',
    thumbnail: 'https://picsum.photos/seed/blade/800/600',
    category: 'Ação',
    rating: 4.9,
    plays: 45000,
    description: 'Torne-se o mestre das sombras.'
  },
  {
    id: '4',
    title: 'Puzzle Master',
    thumbnail: 'https://picsum.photos/seed/puzzle/800/600',
    category: 'Puzzle',
    rating: 4.2,
    plays: 5600,
    description: 'Desafie sua mente com quebra-cabeças.'
  },
  {
    id: '5',
    title: 'Cyber Strike',
    thumbnail: 'https://picsum.photos/seed/cyber/800/600',
    category: 'Ação',
    rating: 4.7,
    plays: 23000,
    description: 'Combate futurista intenso.'
  },
  {
    id: '6',
    title: 'Magic Tiles',
    thumbnail: 'https://picsum.photos/seed/magic/800/600',
    category: 'Arcade',
    rating: 4.6,
    plays: 15000,
    description: 'Siga o ritmo da magia.'
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredGames = selectedCategory === 'Todos' 
    ? MOCK_GAMES 
    : MOCK_GAMES.filter(g => g.category === selectedCategory);

  return (
    <div className="pb-24">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="px-4 py-6">
          <div className="relative h-48 rounded-3xl overflow-hidden shadow-2xl shadow-arcano-primary/20">
            <img 
              src="https://picsum.photos/seed/hero/1200/600" 
              alt="Featured" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-arcano-bg via-arcano-bg/40 to-transparent p-6 flex flex-col justify-center">
              <span className="text-arcano-accent font-bold text-xs uppercase tracking-widest mb-2">Destaque da Semana</span>
              <h2 className="text-2xl font-black text-white leading-tight mb-4">ARCANE QUEST:<br/>THE LOST REALM</h2>
              <button className="btn-primary w-fit py-2 px-6 text-sm">JOGAR AGORA</button>
            </div>
          </div>
        </section>

        <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />

        {/* Trending Section */}
        <section className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="text-arcano-secondary" size={20} />
              <h2 className="text-lg font-extrabold text-white">Mais Jogados</h2>
            </div>
            <button className="text-xs font-bold text-arcano-primary">VER TODOS</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {filteredGames.slice(0, 4).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* New Games Section */}
        <section className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="text-arcano-accent" size={20} />
              <h2 className="text-lg font-extrabold text-white">Novidades</h2>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {MOCK_GAMES.map((game) => (
              <div key={game.id} className="min-w-[200px]">
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </section>

        {/* Top Rankings Preview */}
        <section className="px-4 py-4">
          <div className="glass rounded-3xl p-6 border-arcano-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="text-arcano-gold" size={20} />
              <h2 className="text-lg font-extrabold text-white">Top Jogadores</h2>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((rank) => (
                <div key={rank} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "w-6 h-6 flex items-center justify-center rounded-full text-xs font-black",
                      rank === 1 ? "bg-arcano-gold text-black" : "bg-white/10 text-white"
                    )}>
                      {rank}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-arcano-surface border border-white/10 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${rank}`} alt="User" />
                    </div>
                    <span className="text-sm font-bold text-white">Player_{rank}42</span>
                  </div>
                  <span className="text-xs font-bold text-arcano-accent">{(10000 / rank).toLocaleString()} pts</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 rounded-2xl border border-white/10 text-xs font-bold text-gray-400 hover:bg-white/5 transition-colors">
              VER RANKING COMPLETO
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
