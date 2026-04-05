import { useEffect, useRef, useState } from "react";
import interiorImg from "@/assets/interior.jpg";
import cabinetsImg from "@/assets/cabinets.jpg";
import terraceImg from "@/assets/terrace.jpg";

const highlights = [
  {
    title: "İnteryer & Atmosfer",
    description: "Sənətkarlıq və zövqün harmoniyası — unikal interyer dizaynı",
    image: interiorImg,
  },
  {
    title: "Kabinetlər",
    description: "VIP otaqlar — iş görüşləri və ailə mərasimləri üçün",
    image: cabinetsImg,
  },
  {
    title: "Mənzərə",
    description: "Bakının panoramik mənzərəsi — teras və açıq hava",
    image: terraceImg,
  },
];

const GallerySection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy-deep py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold mb-3">Kəşf Edin</p>
          <h2 className="font-serif text-3xl font-light text-cream md:text-4xl">Məkanımız</h2>
          <div className="gold-line mx-auto mt-6 w-20" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-cream mb-1">{item.title}</h3>
                <p className="text-sm text-cream/60 font-sans">{item.description}</p>
                <div className="mt-3 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
