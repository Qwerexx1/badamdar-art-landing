import { useEffect, useRef, useState } from "react";
import menuMainImg from "@/assets/menu-main.jpg";
import menuBanquetImg from "@/assets/menu-banquet.jpg";
import menuBreakfastImg from "@/assets/menu-breakfast.jpg";

const menus = [
  {
    title: "Əsas Menyu",
    subtitle: "Fine Dining",
    description: "Ən yaxşı təbii inqrediyentlərdən hazırlanmış seçmə yeməklər",
    image: menuMainImg,
  },
  {
    title: "Banket Menyuları",
    subtitle: "Celebrations & Events",
    description: "Xüsusi günlər, toy mərasimləri və korporativ tədbirlər üçün",
    image: menuBanquetImg,
  },
  {
    title: "Səhər Yeməyi",
    subtitle: "Breakfast",
    description: "Hər səhər 09:00-dan — zəngin və dadlı səhər süfrəsi",
    image: menuBreakfastImg,
  },
];

const MenuSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Menyular</p>
          <h2 className="font-serif text-3xl font-light text-cream md:text-4xl">Kulinariya Sənəti</h2>
          <div className="gold-line mx-auto mt-6 w-20" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {menus.map((menu, i) => (
            <div
              key={menu.title}
              className={`group border border-gold/20 bg-navy-deep/50 overflow-hidden transition-all duration-700 hover:border-gold/50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-2">{menu.subtitle}</p>
                <h3 className="font-serif text-xl text-cream mb-2">{menu.title}</h3>
                <p className="text-sm text-cream/50 font-sans leading-relaxed">{menu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
