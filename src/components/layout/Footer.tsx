export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-[var(--gradient-fade)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-display font-bold text-lg text-white">Safinatul Arkab</span>
        </div>
        
        <p className="text-text-muted text-sm text-center md:text-left">
          © {new Date().getFullYear()} Remaja Musholla Safinatul Arkab. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm text-text-secondary">
          <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
