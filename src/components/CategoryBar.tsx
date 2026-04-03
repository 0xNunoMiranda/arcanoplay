import { cn } from '@/lib/utils';

const CATEGORIES = [
  'Todos', 'Ação', 'Aventura', 'Puzzle', 'RPG', 'Estratégia', 'Esportes', 'Corrida', 'Arcade'
];

interface CategoryBarProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function CategoryBar({ selected, onSelect }: CategoryBarProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all border",
            selected === cat 
              ? "bg-arcano-primary border-arcano-primary text-white shadow-lg shadow-arcano-primary/20" 
              : "bg-arcano-surface border-white/5 text-gray-400 hover:border-white/20"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
