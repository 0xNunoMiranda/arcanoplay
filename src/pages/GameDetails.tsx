import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Star, Play, Share2, Heart, MessageCircle, ChevronLeft, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the game
  const game = {
    id,
    title: 'Arcane Quest: The Lost Realm',
    thumbnail: 'https://picsum.photos/seed/quest/1200/800',
    category: 'RPG',
    rating: 4.8,
    plays: 12500,
    description: 'Embarque em uma jornada épica através do reino perdido de Arcano. Enfrente criaturas místicas, desvende segredos antigos e torne-se a lenda que o mundo precisa. Com gráficos impressionantes e uma jogabilidade imersiva, Arcane Quest redefine o gênero RPG mobile.',
    developer: 'Arcano Studios',
    releaseDate: 'Março 2024'
  };

  return (
    <div className="pb-24">
      <div className="relative h-[40vh] w-full">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arcano-bg via-arcano-bg/20 to-transparent" />
        
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 p-3 glass rounded-2xl text-white active:scale-90 transition-transform"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="absolute bottom-6 left-4 right-4">
          <span className="px-3 py-1 bg-arcano-primary rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-2 inline-block">
            {game.category}
          </span>
          <h1 className="text-3xl font-black text-white leading-tight">{game.title}</h1>
        </div>
      </div>

      <main className="px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-arcano-gold">
                <Star size={18} fill="currentColor" />
                <span className="text-lg font-black">{game.rating}</span>
              </div>
              <span className="text-[10px] text-gray-500 font-bold uppercase">Rating</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-lg font-black text-white">12K+</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase">Plays</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="p-3 glass rounded-2xl text-white active:scale-90 transition-transform">
              <Heart size={20} />
            </button>
            <button className="p-3 glass rounded-2xl text-white active:scale-90 transition-transform">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <button className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-lg mb-8">
          <Play size={24} fill="white" />
          JOGAR AGORA
        </button>

        <section className="mb-8">
          <h2 className="text-lg font-extrabold text-white mb-3">Sobre o Jogo</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            {game.description}
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-white">Rankings</h2>
            <Trophy size={20} className="text-arcano-gold" />
          </div>
          <div className="glass rounded-2xl p-4 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-gray-500">#{i}</span>
                  <span className="text-sm font-bold text-white">Player_{i}99</span>
                </div>
                <span className="text-sm font-black text-arcano-primary">{(5000 - i * 100).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-white">Avaliações</h2>
            <button className="text-xs font-bold text-arcano-primary">VER TODAS</button>
          </div>
          <div className="space-y-4">
            <div className="glass rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-arcano-surface overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana" alt="User" />
                  </div>
                  <span className="text-xs font-bold text-white">Ana_Gamer</span>
                </div>
                <div className="flex text-arcano-gold">
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                </div>
              </div>
              <p className="text-xs text-gray-400">Incrível! Os gráficos são de outro mundo para um jogo mobile.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
