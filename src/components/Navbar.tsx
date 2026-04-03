import { Home, Trophy, User, Settings, PlusSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Navbar() {
  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: Trophy, label: 'Rankings', path: '/rankings' },
    { icon: PlusSquare, label: 'Submeter', path: '/admin' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-white/5 px-6 py-3 pb-6 z-50 flex justify-between items-center md:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "nav-item",
              isActive && "active"
            )
          }
        >
          <item.icon size={24} />
          <span className="text-[10px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
