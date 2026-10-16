import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';
import { Footer, Header } from '@/components/SiteChrome';
import ServicesPage from '@/pages/ServicesPage';
import RentalPage from '@/pages/RentalPage';
import AdminPage from '@/pages/AdminPage';

const assets = {
  logo: 'https://enzeta.mx/wp-content/uploads/2023/12/enzeta-logo-azul.png',
  springLilac: 'https://enzeta.mx/wp-content/uploads/2023/12/enzeta-resorte-lila.png',
  springBlue: 'https://enzeta.mx/wp-content/uploads/2024/05/enzeta-resorte-azul-1-Traced-1.png',
};

const collaborators = ['ESCAPARATE', 'INFLUENCER', 'PLAYERS', 'TERREGRAL', 'ESCAPARATE', 'INFLUENCER', 'PLAYERS', 'TERREGRAL'];
const services = [
  { title: 'SALA DE PODCAST', image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { title: 'CICLORAMA', image: 'https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { title: 'RENTA DE EQUIPO', image: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

function FloatingSpring({ src, className, delay = 0 }: { src: string; className: string; delay?: number }) {
  return <motion.img src={src} alt="" aria-hidden="true" className={`pointer-events-none absolute z-10 w-20 md:w-32 ${className}`} animate={{ y: [0, -13, 0], rotate: [-3, 3, -3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }} />;
}

function SectionTitle({ children, color = 'text-enzeta' }: { children: string; color?: string }) {
  return <h2 className={`font-display text-3xl font-bold tracking-[-0.06em] transition-colors duration-200 hover:text-orange md:text-5xl ${color}`}>{children}</h2>;
}

function Home() {
  const [slide, setSlide] = useState(0);
  return <main>
    <section id="inicio" className="relative flex min-h-[590px] items-center overflow-hidden px-6 pb-16 pt-28 md:min-h-[700px] md:px-16">
      <div className="glow absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-enzeta/70 blur-3xl" />
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-lilac/80 blur-3xl" />
      <FloatingSpring src={assets.springBlue} className="right-8 top-32 rotate-12 md:right-20 md:top-36" />
      <FloatingSpring src={assets.springLilac} className="bottom-6 left-0 -rotate-12 opacity-70" delay={1.4} />
      <div className="relative z-20 mx-auto grid w-full max-w-[1180px] items-center gap-10 md:grid-cols-[1.05fr_.95fr]">
        <div><motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 font-display text-xs font-bold uppercase tracking-[.22em] text-orange">Un espacio para crear</motion.p><motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-[630px] font-display text-[3.8rem] font-bold uppercase leading-[.82] tracking-[-.08em] text-ink transition-colors duration-200 hover:text-orange md:text-[7rem]">Where<br />creatives<br /><span className="text-enzeta">converge</span></motion.h1><p className="mt-7 max-w-sm text-sm leading-relaxed text-ink/75">Tu punto de encuentro para crear, compartir y hacer que tus ideas cobren vida.</p><a href="#servicios" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 font-display text-xs font-bold text-white transition-all hover:bg-orange hover:pr-5">Conoce ENZETA <ArrowRight size={15} /></a></div>
        <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-[390px] md:w-[390px]"><div className="absolute inset-6 rotate-3 bg-lime" style={{ clipPath: 'polygon(50% 0%, 61% 17%, 79% 5%, 80% 25%, 100% 21%, 88% 40%, 100% 51%, 82% 59%, 95% 77%, 74% 74%, 72% 100%, 55% 83%, 43% 100%, 36% 80%, 15% 91%, 21% 69%, 0% 64%, 17% 49%, 0% 37%, 21% 32%, 12% 12%, 36% 19%)' }} /><div className="relative flex h-36 w-28 -rotate-6 items-center justify-center bg-ink text-[8rem] font-display font-bold leading-none text-lime md:h-48 md:w-36">Z</div><div className="absolute bottom-2 right-1 rotate-[-5deg] bg-enzeta px-4 py-3 font-display text-lg font-bold leading-[.85] text-white md:right-0 md:text-2xl">More than<br />a studio</div></div>
      </div>
    </section>

    <section id="colaboradores" className="border-y border-ink/15 py-12"><div className="mx-auto max-w-[1180px] px-6 text-center"><SectionTitle color="text-orange">SOBRE ENZETA</SectionTitle><p className="mx-auto mt-4 max-w-2xl text-xs font-bold leading-relaxed">ENZETA reúne emprendedores, creadores y marcas en un entorno diseñado para colaborar, producir y crecer.</p></div><div className="mt-9 overflow-hidden"><div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap px-8">{collaborators.map((name, index) => <span key={`${name}-${index}`} className={`font-display text-2xl font-bold tracking-[-.08em] ${index % 4 === 1 ? 'text-lime' : index % 4 === 2 ? 'text-ink' : 'text-ink/80'}`}>{name}</span>)}</div></div></section>

    <section id="servicios" className="relative overflow-hidden px-6 py-14 md:px-16"><FloatingSpring src={assets.springLilac} className="-right-5 top-4 rotate-45 opacity-80" delay={.8} /><div className="mx-auto max-w-[1180px]"><div className="mb-8 flex items-end justify-between"><SectionTitle>NUESTROS SERVICIOS</SectionTitle><a href="/servicios" className="hidden items-center gap-2 font-display text-xs font-bold text-orange md:flex">VER TODOS <ArrowRight size={14} /></a></div><div className="grid gap-5 md:grid-cols-3">{services.map((service, index) => <motion.a href={service.title === 'RENTA DE EQUIPO' ? '/renta-de-equipo' : '#contacto'} whileHover={{ y: -8 }} key={service.title} className="group overflow-hidden rounded-2xl bg-white shadow-soft"><div className="h-52 overflow-hidden"><img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="flex items-center justify-between bg-lime px-5 py-3 font-display text-xs font-bold"><span>{service.title}</span><ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></div></motion.a>)}</div></div></section>

    <section id="membresías" className="bg-lilac px-6 py-14 md:px-16"><div className="mx-auto max-w-[950px]"><SectionTitle color="text-orange">MEMBRESÍAS</SectionTitle><div className="mt-8 grid gap-3">{[['PODCAST PRO FULL', '$4,999 / AL MES'], ['PODCAST PRO ESSENTIAL', '$2,999 / AL MES']].map(([name, price]) => <motion.div whileHover={{ x: 8 }} key={name} className="flex items-center justify-between rounded-2xl bg-lilac px-5 py-5 ring-1 ring-white/50 transition-colors hover:bg-enzeta hover:text-white md:px-7"><div><h3 className="font-display text-lg font-bold">{name}</h3><p className="text-sm font-bold">{price}</p></div><a href="#contacto" className="rounded-full bg-lime px-7 py-3 font-display text-xs font-bold text-ink transition-colors hover:bg-orange hover:text-white">VER MÁS</a></motion.div>)}</div></div></section>

    <section className="relative overflow-hidden bg-enzeta px-6 py-14 text-white"><div className="absolute -right-20 -top-28 h-[500px] w-[500px] rounded-full border-[70px] border-white/10" /><div className="relative mx-auto max-w-2xl text-center"><p className="font-display text-xs font-bold uppercase">Clientes satisfechos</p><div className="my-4 text-2xl tracking-[.25em] text-lime">★★★★★</div><p className="mx-auto max-w-lg text-sm leading-relaxed text-white/90">“Excelente lugar para tomar tus fotografías de producto. Cuentan también con espacios para que los modelos puedan estarse cambiando muy fácil, muy efectivo, lo recomiendo mucho.”</p><div className="mt-5 flex justify-center gap-2"><span className="h-2 w-2 rounded-full bg-orange" /><span className="h-2 w-2 rounded-full bg-white/60" /><span className="h-2 w-2 rounded-full bg-white/60" /></div></div></section>

    <section className="group relative h-[330px] overflow-hidden bg-ink md:h-[470px]"><img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Espacio creativo ENZETA" className="h-full w-full object-cover opacity-80 transition-transform duration-[1200ms] group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" /><button aria-label="Reproducir video" className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-white transition-transform hover:scale-110"><Play fill="currentColor" size={22} /></button><button aria-label="Anterior" onClick={() => setSlide(Math.max(0, slide - 1))} className="absolute bottom-8 left-8 text-orange"><ChevronLeft /></button><button aria-label="Siguiente" onClick={() => setSlide(Math.min(2, slide + 1))} className="absolute bottom-8 right-8 text-orange"><ChevronRight /></button></section>

    <section id="contacto" className="relative overflow-hidden px-6 py-14 md:px-16"><div className="absolute -left-28 top-0 h-48 w-48 rounded-full bg-lime/80 blur-3xl" /><div className="mx-auto grid max-w-[1050px] gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center"><div className="relative"><p className="max-w-[220px] font-display text-2xl font-bold leading-[.9] text-ink">LISTO PARA CREAR ALGO INCREÍBLE?</p><h2 className="mt-4 font-display text-4xl font-bold tracking-[-.07em] text-enzeta md:text-5xl">CONTÁCTANOS</h2></div><form className="grid gap-3 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>{['NOMBRE', 'APELLIDOS', 'EMAIL', 'TELÉFONO', 'CIUDAD', 'SERVICIO'].map((placeholder) => <input key={placeholder} aria-label={placeholder} placeholder={placeholder} className="rounded-md border-0 bg-ink/10 px-4 py-3 font-display text-[10px] font-bold outline-none placeholder:text-ink/40 focus:bg-white focus:ring-2 focus:ring-orange" />)}<textarea aria-label="MENSAJE" placeholder="MENSAJE" rows={3} className="rounded-md border-0 bg-ink/10 px-4 py-3 font-display text-[10px] font-bold outline-none placeholder:text-ink/40 focus:bg-white focus:ring-2 focus:ring-orange sm:col-span-2" /><button className="rounded-full bg-orange px-8 py-3 font-display text-xs font-bold text-white transition-colors hover:bg-ink sm:col-span-2 sm:mx-auto">ENVIAR</button></form></div></section>
  </main>;
}

function App() {
  if (window.location.pathname === '/servicios') return <ServicesPage />;
  if (window.location.pathname === '/renta-de-equipo') return <RentalPage />;
  if (window.location.pathname === '/admin') return <AdminPage />;
  return <div className="overflow-hidden bg-cream"><Header /><Home /><Footer /></div>;
}

export default App;
