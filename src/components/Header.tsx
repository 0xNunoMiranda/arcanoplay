import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-arcano-bg/80 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-arcano-primary to-arcano-secondary rounded-lg flex items-center justify-center shadow-lg shadow-arcano-primary/30">
          <span className="text-white font-black text-xl">A</span>
        </div>
        <span className="text-xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          ARCANO<span className="text-arcano-primary">PLAY</span>
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-arcano-secondary rounded-full border border-arcano-bg"></span>
        </button>
        <Link to="/profile" className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </header>
  );
}
