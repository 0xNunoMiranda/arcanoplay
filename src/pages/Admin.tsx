import { Header } from '@/components/Header';
import { Upload, Gamepad2, Users, BarChart3, Plus, Search, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Admin() {
  return (
    <div className="pb-24">
      <Header />
      
      <main className="px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-black text-white">Painel Admin</h1>
          <button className="btn-primary py-2 px-4 text-xs flex items-center gap-2">
            <Plus size={16} />
            NOVO JOGO
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass rounded-3xl p-5 border-arcano-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Users size={16} className="text-arcano-primary" />
              <span className="text-[10px] font-bold text-gray-500 uppercase">Usuários</span>
            </div>
            <span className="text-xl font-black text-white">12.4K</span>
            <div className="text-[10px] text-green-500 font-bold mt-1">+12% este mês</div>
          </div>
          <div className="glass rounded-3xl p-5 border-arcano-secondary/20">
            <div className="flex items-center gap-2 mb-2">
              <Gamepad2 size={16} className="text-arcano-secondary" />
              <span className="text-[10px] font-bold text-gray-500 uppercase">Jogos</span>
            </div>
            <span className="text-xl font-black text-white">156</span>
            <div className="text-[10px] text-arcano-accent font-bold mt-1">5 pendentes</div>
          </div>
        </div>

        {/* Game Submission Form Mockup */}
        <section className="mb-10">
          <h2 className="text-lg font-extrabold text-white mb-4">Submeter Novo Jogo</h2>
          <div className="glass rounded-3xl p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Título do Jogo</label>
              <input 
                type="text" 
                placeholder="Ex: Arcano Adventure"
                className="w-full bg-arcano-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-arcano-primary outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Categoria</label>
              <select className="w-full bg-arcano-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-arcano-primary outline-none transition-colors">
                <option>Ação</option>
                <option>Aventura</option>
                <option>Puzzle</option>
                <option>RPG</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Thumbnail</label>
              <div className="w-full aspect-video border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:border-arcano-primary hover:text-arcano-primary transition-all cursor-pointer">
                <Upload size={24} />
                <span className="text-xs font-bold">Clique para upload</span>
              </div>
            </div>
            <button className="btn-primary w-full mt-4">PUBLICAR JOGO</button>
          </div>
        </section>

        {/* Recent Users / Games Management */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-white">Gerir Jogos</h2>
            <Search size={18} className="text-gray-500" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-arcano-surface overflow-hidden">
                    <img src={`https://picsum.photos/seed/game${i}/200`} alt="Game" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Game Title {i}</h3>
                    <span className="text-[10px] text-gray-500 font-bold uppercase">Ação • 1.2K plays</span>
                  </div>
                </div>
                <button className="p-2 text-gray-500">
                  <MoreVertical size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
