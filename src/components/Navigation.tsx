import { motion } from 'motion/react';
import { Phone, Gavel } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Προφίλ', href: '#profile' },
    { name: 'Ποινικό Δίκαιο', href: '#criminal' },
    { name: 'Αστικό & Εμπράγματο', href: '#civil' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-noir/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gavel className="w-6 h-6 text-noir" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight tracking-tight">Δ. Γ. ΜΠΟΤΣΑΡΗΣ</span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-ash font-semibold">Δικηγόρος παρ' Αρείω Πάγω</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-widest font-medium text-noir hover:text-bronze transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="tel:6945690514"
          className="flex items-center gap-2 bg-noir text-white px-5 py-2.5 rounded-sm hover:bg-bronze transition-colors group shadow-lg shadow-noir/10"
        >
          <Phone className="w-4 h-4 group-hover:animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider">6945690514</span>
        </a>
      </div>
    </nav>
  );
}
