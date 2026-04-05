import heroImage from "@/assets/hero-view.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Panoramic view of Baku from Badam d'Art Restaurant"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/50 to-navy-deep/90" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <img
          src={logo}
          alt="Badam d'Art Restaurant Logo"
          className="mb-8 h-28 w-28 animate-fade-in-up object-contain md:h-36 md:w-36"
        />

        <h1 className="font-serif text-3xl font-light tracking-wide text-cream animate-fade-in-up-delay-1 md:text-5xl lg:text-6xl max-w-4xl leading-tight">
          Badam d'Art Restaurant
        </h1>

        <div className="gold-line my-6 w-32 animate-fade-in-up-delay-1" />

        <p className="font-serif text-lg italic text-gold animate-fade-in-up-delay-2 md:text-xl max-w-2xl">
          İncəsənət və Dadın Görüşdüyü Məkan
        </p>

        <p className="mt-4 max-w-xl text-sm text-cream/70 animate-fade-in-up-delay-2 md:text-base font-sans">
          Enjoy an exquisite atmosphere, private cabinets, and a breathtaking panoramic view of Baku.
        </p>

        <a
          href="tel:+994774921313"
          className="mt-10 animate-fade-in-up-delay-3 inline-block border border-gold bg-gold/10 px-10 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy-deep"
        >
          Masanı Rezerv Et
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border border-gold/40 flex items-start justify-center pt-1.5">
          <div className="h-2 w-0.5 rounded-full bg-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
