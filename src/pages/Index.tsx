import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/69c61bfd-56be-4aa2-8578-eebc1906fa28/files/fd5e7282-be03-4f54-883c-3808475b6bcb.jpg';
const BAND_IMG = 'https://cdn.poehali.dev/projects/69c61bfd-56be-4aa2-8578-eebc1906fa28/files/da991eb8-9138-4be0-94f3-dcf0be2a423f.jpg';
const BAR_IMG = 'https://cdn.poehali.dev/projects/69c61bfd-56be-4aa2-8578-eebc1906fa28/files/8f4c1598-7fb6-4393-915a-0a9ea06f0e8d.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'events', label: 'События' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'booking', label: 'Бронирование' },
  { id: 'about', label: 'О месте' },
  { id: 'contacts', label: 'Контакты' },
];

const SCHEDULE = [
  { day: 'ПТ', date: '27 июня', time: '20:00', artist: 'Тихий Этаж', genre: 'инди-фолк', desc: 'Камерный сет на двух гитарах и виолончели. Песни о городе и тишине.', img: BAND_IMG },
  { day: 'СБ', date: '28 июня', time: '21:00', artist: 'Ночной Трамвай', genre: 'джаз-фьюжн', desc: 'Импровизационный квартет: саксофон, рояль, контрабас и барабаны.', img: HERO_IMG },
  { day: 'ВС', date: '29 июня', time: '19:30', artist: 'Марина Соль', genre: 'авторская песня', desc: 'Сольный вечер. Только голос, рояль и истории между песнями.', img: BAR_IMG },
  { day: 'ЧТ', date: '3 июля', time: '20:30', artist: 'Электрочайник', genre: 'арт-рок', desc: 'Громкий, тёплый, ламповый рок с синтезаторами и живыми барабанами.', img: BAND_IMG },
];

const GALLERY = [HERO_IMG, BAND_IMG, BAR_IMG, BAND_IMG, BAR_IMG, HERO_IMG];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground grain overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="font-display font-black text-xl tracking-tight neon-sign">
            Квартирник
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('booking')} className="hidden md:inline-flex rounded-full font-display text-xs">
            Забронировать
          </Button>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-foreground/90 hover:text-primary transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-end pb-20 pt-28">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Квартирник" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
        <div className="container relative">
          <p className="font-display text-primary tracking-[0.3em] text-xs md:text-sm mb-4 animate-float-up" style={{ animationDelay: '0.1s' }}>
            ЖИВАЯ МУЗЫКА · БАР · СЦЕНА
          </p>
          <div className="font-display font-black neon-sign text-6xl md:text-9xl leading-none mb-4 animate-float-up" style={{ animationDelay: '0.18s' }}>
            Квартирник
          </div>
          <h1 className="font-display font-black leading-[0.95] text-3xl md:text-6xl max-w-4xl animate-float-up" style={{ animationDelay: '0.3s' }}>
            Здесь играют <span className="text-primary text-glow animate-flicker">вживую</span>
          </h1>
          <p className="font-serif-display italic text-xl md:text-3xl text-foreground/80 mt-6 max-w-2xl animate-float-up" style={{ animationDelay: '0.4s' }}>
            Музыкальное пространство, где сцена в двух шагах от твоего столика, а бар знает твой любимый коктейль.
          </p>
          <div className="flex flex-wrap gap-4 mt-9 animate-float-up" style={{ animationDelay: '0.55s' }}>
            <Button onClick={() => scrollTo('events')} size="lg" className="rounded-full font-display glow-border">
              <Icon name="CalendarDays" size={18} className="mr-2" /> Афиша концертов
            </Button>
            <Button onClick={() => scrollTo('booking')} size="lg" variant="outline" className="rounded-full font-display border-primary/40 text-foreground hover:bg-primary/10">
              Забронировать столик
            </Button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-secondary/40 py-4 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap font-display text-2xl md:text-4xl text-primary/70">
          {Array(2).fill(0).map((_, i) => (
            <span key={i} className="flex gap-10 items-center">
              <span>живые выступления</span><span className="text-accent">✦</span>
              <span>авторские коктейли</span><span className="text-accent">✦</span>
              <span>уютные столики</span><span className="text-accent">✦</span>
              <span>атмосфера квартирника</span><span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* EVENTS / SCHEDULE */}
      <section id="events" className="container py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-display text-primary tracking-[0.25em] text-xs mb-3">РАСПИСАНИЕ ВЫСТУПЛЕНИЙ</p>
            <h2 className="font-display font-bold text-4xl md:text-6xl">Кто играет<br />на этой неделе</h2>
          </div>
          <p className="font-serif-display italic text-lg text-muted-foreground max-w-sm">
            Двери открываются за час до начала. Вход свободный, но столики лучше бронировать заранее.
          </p>
        </div>

        <div className="space-y-4">
          {SCHEDULE.map((e, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[auto_1fr_auto] gap-6 items-center rounded-2xl border border-border bg-card/60 p-5 hover:border-primary/50 hover:bg-card transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="text-center w-16 shrink-0">
                  <div className="font-display font-black text-3xl text-primary">{e.day}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.date}</div>
                </div>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={e.img} alt={e.artist} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display font-bold text-2xl">{e.artist}</h3>
                  <span className="text-xs font-display uppercase tracking-wider px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">{e.genre}</span>
                </div>
                <p className="text-muted-foreground mt-2 max-w-xl">{e.desc}</p>
              </div>
              <div className="flex md:flex-col items-center gap-4 md:gap-2 md:text-right">
                <div className="flex items-center gap-2 font-display text-2xl text-primary">
                  <Icon name="Clock" size={18} /> {e.time}
                </div>
                <Button onClick={() => scrollTo('booking')} variant="outline" size="sm" className="rounded-full border-primary/40 hover:bg-primary/10">
                  Столик
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 border-y border-border carpet">
        <div className="absolute inset-0 bg-background/55" />
        <div className="container relative grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={BAR_IMG} alt="Бар Квартирник" className="carpet-border rounded-xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-5 font-display shadow-2xl">
              <div className="text-3xl font-black">7</div>
              <div className="text-xs tracking-wider">вечеров в неделю</div>
            </div>
          </div>
          <div>
            <p className="font-display text-primary tracking-[0.25em] text-xs mb-4">О МЕСТЕ</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              Не клуб. Не кафе.<br />А что-то <span className="text-primary">тёплое</span> между.
            </h2>
            <p className="font-serif-display text-xl text-foreground/80 leading-relaxed mb-5">
              «Квартирник» вырос из идеи домашних концертов — когда музыкант играет так близко, что слышно дыхание струн.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Внутри — сцена для команд, столики для своих и барная стойка с авторскими коктейлями. Приходи слушать, говорить и оставаться до закрытия.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'Mic', label: 'Сцена для команд' },
                { icon: 'Martini', label: 'Авторский бар' },
                { icon: 'Armchair', label: 'Уютные столики' },
              ].map((f) => (
                <div key={f.label} className="rounded-2xl border border-border bg-card/60 p-5 text-center hover:border-primary/40 transition-colors">
                  <Icon name={f.icon} size={26} className="mx-auto text-primary mb-3" />
                  <div className="text-sm">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="container py-24">
        <div className="text-center mb-12">
          <p className="font-display text-primary tracking-[0.25em] text-xs mb-3">ГАЛЕРЕЯ</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl">Атмосфера вечеров</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((src, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? 'md:row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-square'}`}>
              <img src={src} alt={`Квартирник ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative py-24 border-y border-border overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-primary tracking-[0.25em] text-xs mb-4">БРОНИРОВАНИЕ</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5">Займи лучший<br />столик у сцены</h2>
            <p className="font-serif-display italic text-xl text-foreground/80">
              Оставь заявку — и мы придержим место к началу концерта. Перезвоним, чтобы подтвердить детали.
            </p>
          </div>
          <form className="rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-7 space-y-4 glow-border" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Ваше имя" />
              <input className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Телефон" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="date" className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition-colors text-muted-foreground" />
              <input type="number" min="1" className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Гостей" />
            </div>
            <textarea className="w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 outline-none focus:border-primary transition-colors resize-none" rows={3} placeholder="Пожелания (концерт, повод, столик у сцены)" />
            <Button type="submit" size="lg" className="w-full rounded-xl font-display">
              <Icon name="Send" size={18} className="mr-2" /> Забронировать столик
            </Button>
          </form>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="container py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display font-black text-2xl text-primary text-glow mb-4">Квартирник</div>
            <p className="font-serif-display italic text-lg text-muted-foreground">
              Музыкальное пространство с живой музыкой, сценой и баром.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-display text-primary tracking-[0.2em] text-xs mb-4">КОНТАКТЫ</p>
            <a href="#" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors">
              <Icon name="MapPin" size={18} className="text-primary" /> г. Москва, ул. Музыкальная, 12
            </a>
            <a href="#" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors">
              <Icon name="Phone" size={18} className="text-primary" /> +7 (900) 000-00-00
            </a>
            <a href="#" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors">
              <Icon name="Mail" size={18} className="text-primary" /> hello@kvartirnik.ru
            </a>
          </div>
          <div>
            <p className="font-display text-primary tracking-[0.2em] text-xs mb-4">МЫ ОТКРЫТЫ</p>
            <div className="flex items-center gap-3 text-foreground/90 mb-4">
              <Icon name="Clock" size={18} className="text-primary" /> Ежедневно с 17:00 до 01:00
            </div>
            <div className="flex gap-3">
              {['Instagram', 'Send', 'Youtube'].map((s) => (
                <a key={s} href="#" className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Icon name={s} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          © 2026 Квартирник. Сделано с любовью к живой музыке.
        </div>
      </footer>
    </div>
  );
};

export default Index;