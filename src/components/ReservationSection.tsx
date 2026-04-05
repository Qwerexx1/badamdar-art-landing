import { Clock, Phone, MapPin } from "lucide-react";

const ReservationSection = () => {
  return (
    <section className="bg-navy-deep py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Rezervasiya</p>
        <h2 className="font-serif text-3xl font-light text-cream md:text-4xl">Masanızı Ayırın</h2>
        <div className="gold-line mx-auto mt-6 w-20 mb-16" />

        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Clock className="mb-4 h-8 w-8 text-gold" strokeWidth={1} />
            <h3 className="font-serif text-lg text-cream mb-2">İş Saatları</h3>
            <p className="font-sans text-sm text-cream/60">Hər gün</p>
            <p className="font-sans text-lg text-gold font-light">09:00 — 00:00</p>
          </div>

          <div className="flex flex-col items-center">
            <Phone className="mb-4 h-8 w-8 text-gold" strokeWidth={1} />
            <h3 className="font-serif text-lg text-cream mb-2">Əlaqə</h3>
            <a href="tel:+994774921313" className="font-sans text-sm text-cream/80 hover:text-gold transition-colors">
              +994 77 492 13 13
            </a>
            <a href="tel:+994505021313" className="font-sans text-sm text-cream/80 hover:text-gold transition-colors mt-1">
              +994 50 502 13 13
            </a>
            <p className="font-sans text-[10px] uppercase tracking-widest text-cream/40 mt-1">Banket rezerv</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="mb-4 h-8 w-8 text-gold" strokeWidth={1} />
            <h3 className="font-serif text-lg text-cream mb-2">Ünvan</h3>
            <p className="font-sans text-sm text-cream/60 leading-relaxed">
              2-ci massiv, Badamdar,<br />
              Səbail r., Bakı
            </p>
            <a
              href="https://maps.google.com/?q=Badamdar,+Sabail,+Baku"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 font-sans text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors"
            >
              Xəritədə bax →
            </a>
          </div>
        </div>

        <div className="mt-16">
          <a
            href="tel:+994774921313"
            className="inline-block border border-gold bg-gold/10 px-12 py-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy-deep"
          >
            İndi Zəng Edin
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
