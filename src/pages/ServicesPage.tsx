import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Footer, Header } from '@/components/SiteChrome';

const heroImage = 'https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=1800';

const serviceCards = [
  {
    title: 'CICLORAMA',
    tone: 'bg-enzeta',
    details: ['Ciclorama 80m2 (Climatizado)', '10 aislantes + 1 mesa plegable', 'Estructura dinámica para tramoya', 'Internet Wifi', 'Camerino 10m2', 'Paquetes con más opciones disponibles'],
    action: 'Paquetes y precios',
  },
  {
    title: 'SALA DE PODCAST',
    tone: 'bg-orange',
    details: ['Sala de 24m2 climatizada', 'Mobiliario (TV, mesa y sillas)', '4 micrófonos marca SHURE', 'Paquetes con más opciones disponibles', 'Consola de audio'],
    action: 'Paquetes y precios',
  },
  {
    title: 'RENTA DE EQUIPO',
    tone: 'bg-lime',
    details: ['Renta equipo profesional y produce contenido', 'Con la calidad que tu proyecto merece'],
    action: 'Ver equipo',
  },
];

function ServiceCard({ title, tone, details, action }: { title: string; tone: string; details: string[]; action: string }) {
  const isEquipment = title === 'RENTA DE EQUIPO';
  const actionHref = isEquipment ? '/renta-de-equipo' : '/#contacto';
  return <motion.article whileHover={{ y: -6 }} className={`group relative overflow-hidden rounded-[28px] px-7 py-8 shadow-sm md:px-10 md:py-9 ${tone} ${isEquipment ? 'text-ink' : 'text-white'}`}><div className={`absolute -right-16 -top-28 h-[380px] w-[380px] rounded-full border-[54px] ${isEquipment ? 'border-ink/5' : 'border-white/10'} transition-transform duration-700 group-hover:scale-110`} /><div className="relative z-10 md:pr-[290px]"><h2 className="font-display text-4xl font-bold leading-none tracking-[-.07em] md:text-5xl">{title}</h2>{isEquipment ? <><p className="mt-2 font-display text-lg font-bold">Todo lo que necesitas para empezar a crear.</p><p className="mt-4 max-w-md text-sm font-medium leading-tight">{details[0]}<br />{details[1]}</p></> : <><p className="mt-2 font-display text-sm font-bold uppercase">Incluye:</p><div className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">{details.map((detail) => <p key={detail} className="flex items-start gap-1.5 text-xs font-medium leading-tight"><CheckCircle size={13} className="mt-0.5 shrink-0" fill="currentColor" strokeWidth={2.5} />{detail}</p>)}</div></>}</div><a href={actionHref} className={`relative z-10 mt-7 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-display text-sm font-bold transition-colors md:absolute md:right-9 md:top-1/2 md:mt-0 md:-translate-y-1/2 ${isEquipment ? 'bg-lilac text-white hover:bg-enzeta' : 'bg-lilac text-white hover:bg-ink'}`}>{action}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a></motion.article>;
}

export default function ServicesPage() {
  return <div className="min-h-screen overflow-hidden bg-cream"><Header /><main><section className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-ink px-6 pt-20"><img src={heroImage} alt="Ciclorama de ENZETA" className="absolute inset-0 h-full w-full object-cover opacity-60" /><div className="absolute inset-0 bg-ink/35" /><div className="relative z-10 text-center"><p className="mb-4 font-display text-xs font-bold uppercase tracking-[.25em] text-lime">Espacios para crear</p><h1 className="font-display text-6xl font-bold uppercase leading-[.82] tracking-[-.09em] text-white md:text-8xl">Nuestros<br />servicios</h1></div></section><section className="relative px-5 py-8 md:px-12 md:py-10"><div className="mx-auto flex max-w-[1120px] flex-col gap-4">{serviceCards.map((service) => <ServiceCard key={service.title} {...service} />)}</div></section></main><Footer /></div>;
}
