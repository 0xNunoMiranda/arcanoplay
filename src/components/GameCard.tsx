import { Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Game } from '@/types';

interface GameCardProps {
  game: Game;
  key?: string | number;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-arcano-surface rounded-2xl overflow-hidden border border-white/5 shadow-xl"
    >
      <Link to={`/game/${game.id}`}>
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src={game.thumbnail} 
            alt={game.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arcano-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
              <Star size={12} className="text-arcano-gold fill-arcano-gold" />
              <span className="text-[10px] font-bold text-white">{game.rating}</span>
            </div>
            <div className="bg-arcano-primary p-2 rounded-xl shadow-lg shadow-arcano-primary/40 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Play size={16} className="text-white fill-white" />
            </div>
          </div>
        </div>
        
        <div className="p-3">
          <h3 className="text-sm font-bold text-white truncate group-hover:text-arcano-primary transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
              {game.category}
            </span>
            <span className="text-[10px] text-arcano-accent font-bold">
              {game.plays.toLocaleString()} plays
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
