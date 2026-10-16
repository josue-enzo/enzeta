import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Footer, Header } from '@/components/SiteChrome';
import { equipmentList } from '@/data/equipment.js';

type Equipment = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
};

const STORAGE_KEY = 'enzeta-equipment';
const heroImage = equipmentList[0].image;

function getEquipment(): Equipment[] {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return equipmentList as Equipment[];
  try {
    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed as Equipment[] : equipmentList as Equipment[];
  } catch {
    return equipmentList as Equipment[];
  }
}

function formatPrice(price: number) {
  return `$${price.toLocaleString('es-MX')} MXN / 12H`;
}

export default function RentalPage() {
  const [equipment, setEquipment] = useState<Equipment[]>(getEquipment);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleStorage = () => setEquipment(getEquipment());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return <div className="min-h-screen overflow-hidden bg-cream"><Header /><main><section className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-ink px-6 pt-20"><img src={heroImage} alt="Equipo de iluminación ENZETA" className="absolute inset-0 h-full w-full object-cover opacity-60" /><div className="absolute inset-0 bg-ink/45" /><div className="relative z-10 text-center"><h1 className="font-display text-5xl font-bold uppercase leading-[.85] tracking-[-.08em] text-white md:text-8xl">Renta de<br />equipo</h1><p className="mx-auto mt-6 w-fit rounded-full bg-lime px-6 py-3 font-display text-sm font-bold text-ink">Solamente disponible en Torreón</p><p className="mt-4 text-xs font-medium text-white">Renta estos productos por 12 h fuera de Enzeta o por hora en Enzeta</p></div></section><section className="relative px-5 py-12 md:px-12 md:py-16"><div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange/60 blur-3xl" /><div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-lime/60 blur-3xl" /><div className="relative mx-auto grid max-w-[1120px] gap-4 sm:grid-cols-2 lg:grid-cols-3">{equipment.map((item) => <motion.article whileHover={{ y: -7 }} key={item.id} className="group flex min-h-[390px] flex-col overflow-hidden rounded-[24px] bg-white shadow-sm"><div className="relative h-56 overflow-hidden bg-white p-5"><img src={item.image} alt={item.name} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />{item.originalPrice && <span className="absolute left-5 top-5 rounded-full bg-orange px-3 py-1 font-display text-[10px] font-bold text-white">OFERTA</span>}</div><div className="flex flex-1 flex-col items-center px-5 pb-6 text-center"><h2 className="font-display text-lg font-bold uppercase leading-tight text-ink">{item.name}</h2><p className="mt-2 font-display text-sm font-bold text-ink">{formatPrice(item.price)}</p>{item.originalPrice && <p className="text-xs text-ink/45 line-through">{formatPrice(item.originalPrice)}</p>}<a href={`https://wa.me/5218711372391?text=${encodeURIComponent(`Hola ENZETA, me interesa rentar: ${item.name}`)}`} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 font-display text-xs font-bold text-ink transition-colors hover:bg-enzeta hover:text-white"><MessageCircle size={15} /> RENTAR</a><p className="mt-3 text-[10px] font-bold leading-tight text-ink">Renta por 12h<br />Renta en Enzeta</p></div></motion.article>)}</div><div className="relative mx-auto mt-12 flex max-w-[1120px] items-center justify-center gap-5 font-display text-sm font-bold"><button aria-label="Página anterior" onClick={() => setPage(Math.max(1, page - 1))} className="transition-colors hover:text-orange"><ChevronLeft /></button><span className="flex h-7 w-7 items-center justify-center rounded-full bg-enzeta text-white">{page}</span><button onClick={() => setPage(Math.min(3, page + 1))} className="transition-colors hover:text-orange">2</button><button onClick={() => setPage(Math.min(3, page + 1))} className="transition-colors hover:text-orange">3</button><span>...</span><button aria-label="Página siguiente" onClick={() => setPage(Math.min(3, page + 1))} className="transition-colors hover:text-orange"><ChevronRight /></button></div></section></main><Footer /></div>;
}
