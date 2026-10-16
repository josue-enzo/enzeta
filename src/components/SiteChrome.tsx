import { Instagram, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { useState } from 'react';

const logo = 'https://enzeta.mx/wp-content/uploads/2023/12/enzeta-logo-azul.png';

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'INICIO', href: '/#inicio' },
    { label: 'PRECIOS', href: '/#membresías' },
    { label: 'EVENTOS', href: '/#colaboradores' },
    { label: 'MEMBRESÍAS', href: '/#membresías' },
    { label: 'COLABORADORES', href: '/#colaboradores' },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-30 px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between">
        <a href="/#inicio" aria-label="ENZETA inicio"><img src={logo} alt="ENZETA" className="h-8 w-auto object-contain" /></a>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => <a key={link.label} href={link.href} className="font-display text-[9px] font-bold text-ink transition-colors hover:text-orange">{link.label}</a>)}
          <a href="/#contacto" className="font-display text-[9px] font-bold text-ink transition-colors hover:text-orange">CONTACTO/RESERVAR</a>
        </nav>
        <button aria-label="Abrir menú" onClick={() => setOpen(!open)} className="rounded-full bg-orange p-2 text-white lg:hidden">{open ? <X size={17} /> : <Menu size={17} />}</button>
        <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-orange text-white lg:flex"><span className="text-sm">●</span></div>
      </div>
      {open && <div className="mx-auto mt-4 flex max-w-[1180px] flex-col gap-4 rounded-2xl bg-white p-6 shadow-soft lg:hidden">{[...links, { label: 'CONTACTO/RESERVAR', href: '/#contacto' }].map((link) => <a onClick={() => setOpen(false)} key={link.label} href={link.href} className="font-display text-xs font-bold">{link.label}</a>)}</div>}
    </header>
  );
}

export function Footer() {
  return <footer className="border-t border-ink/20 px-6 py-10 md:px-16"><div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1fr_1fr_.9fr]"><div><img src={logo} alt="ENZETA" className="h-12 w-auto" /><p className="mt-5 flex items-start gap-2 text-xs leading-relaxed"><MapPin size={15} className="mt-0.5 shrink-0 text-enzeta" />Juan Gutemberg 62 Nte, Tecno Parque<br />de Gob. Colonia Centro, Coahuila</p><p className="mt-2 flex gap-2 text-xs"><Phone size={14} className="text-enzeta" />(871) 137 2391</p></div><div className="md:pt-5"><p className="font-display text-sm font-bold">Escríbenos</p><p className="mt-3 text-xs">info@enzeta.com</p><div className="mt-5 flex gap-3"><a href="/#contacto" className="rounded-full bg-enzeta p-2 text-white"><MessageCircle size={15} /></a><a href="/#contacto" className="rounded-full bg-enzeta p-2 text-white"><Instagram size={15} /></a></div></div><div className="h-40 overflow-hidden rounded-lg bg-[#a7dcca] opacity-90"><div className="relative h-full w-full opacity-60" style={{ backgroundImage: 'linear-gradient(35deg, transparent 48%, #70aeb0 49%, transparent 51%), linear-gradient(110deg, transparent 48%, #70aeb0 49%, transparent 51%)', backgroundSize: '80px 60px' }}><MapPin className="absolute left-1/2 top-1/2 text-orange" fill="currentColor" /></div></div></div><div className="mx-auto mt-9 max-w-[1180px] border-t border-ink/15 pt-4 text-center text-[9px] text-ink/70">ENZETA ® 2024 · Todos los derechos reservados · Políticas de privacidad · Políticas de cookies</div></footer>;
}
