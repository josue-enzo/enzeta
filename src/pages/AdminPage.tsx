import { Check, RotateCcw, Save } from 'lucide-react';
import { useState } from 'react';
import { equipmentList } from '@/data/equipment.js';

type Equipment = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
};

const STORAGE_KEY = 'enzeta-equipment';

function readEquipment(): Equipment[] {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) return equipmentList as Equipment[];
  try {
    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed as Equipment[] : equipmentList as Equipment[];
  } catch {
    return equipmentList as Equipment[];
  }
}

export default function AdminPage() {
  const [equipment, setEquipment] = useState<Equipment[]>(readEquipment);
  const [saved, setSaved] = useState(false);

  const updateProduct = (id: number, field: 'name' | 'price' | 'image', value: string) => {
    const next = equipment.map((item) => item.id === id ? { ...item, [field]: field === 'price' ? Number(value) : value } : item);
    setEquipment(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(true);
  };

  const reset = () => {
    setEquipment(equipmentList as Equipment[]);
    window.localStorage.removeItem(STORAGE_KEY);
    setSaved(false);
  };

  return <main className="min-h-screen bg-cream px-5 py-10 md:px-10"><div className="mx-auto max-w-6xl"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="font-display text-xs font-bold uppercase tracking-[.2em] text-orange">ENZETA / CMS LOCAL</p><h1 className="mt-2 font-display text-4xl font-bold tracking-[-.07em] text-ink md:text-6xl">Renta de equipo</h1><p className="mt-3 text-sm text-ink/65">Los cambios se guardan automáticamente en este navegador.</p></div><button onClick={reset} className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-3 font-display text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-white"><RotateCcw size={15} /> RESTABLECER</button></div><div className="grid gap-4">{equipment.map((item) => <section key={item.id} className="grid gap-5 rounded-3xl bg-white p-5 shadow-sm md:grid-cols-[150px_1fr] md:items-center"><div className="flex h-32 items-center justify-center rounded-2xl bg-cream p-3"><img src={item.image} alt={item.name} className="h-full w-full object-contain" /></div><div className="grid gap-4 md:grid-cols-[1fr_180px]"><div className="grid gap-4"><label className="grid gap-2 font-display text-[10px] font-bold uppercase tracking-wide text-ink/60">Nombre<input value={item.name} onChange={(event) => updateProduct(item.id, 'name', event.target.value)} className="rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm font-medium normal-case tracking-normal text-ink outline-none focus:border-enzeta" /></label><label className="grid gap-2 font-display text-[10px] font-bold uppercase tracking-wide text-ink/60">URL de imagen<input value={item.image} onChange={(event) => updateProduct(item.id, 'image', event.target.value)} className="rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm font-medium normal-case tracking-normal text-ink outline-none focus:border-enzeta" /></label></div><label className="grid content-start gap-2 font-display text-[10px] font-bold uppercase tracking-wide text-ink/60">Precio<input type="number" min="0" value={item.price} onChange={(event) => updateProduct(item.id, 'price', event.target.value)} className="rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm font-medium normal-case tracking-normal text-ink outline-none focus:border-enzeta" /><span className="text-[10px] font-medium normal-case tracking-normal text-ink/45">MXN por 12 horas</span></label></div></section>)}</div>{saved && <p className="mt-6 flex items-center justify-center gap-2 font-display text-xs font-bold text-enzeta"><Check size={15} /> CAMBIOS GUARDADOS EN ESTE NAVEGADOR</p>}<div className="mt-10 flex justify-center"><a href="/renta-de-equipo" className="inline-flex items-center gap-2 rounded-full bg-enzeta px-6 py-3 font-display text-xs font-bold text-white transition-colors hover:bg-orange"><Save size={15} /> VER CATÁLOGO</a></div></div></main>;
}
