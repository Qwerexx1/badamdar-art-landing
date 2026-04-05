import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-gold/10 py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="font-serif text-2xl text-cream mb-4">Badam d'Art</h3>
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/40 mb-6">Restaurant</p>

        <a
          href="https://instagram.com/badamdart_baku"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-gold transition-colors font-sans"
        >
          <Instagram className="h-4 w-4" />
          @badamdart_baku
        </a>

        <div className="gold-line mx-auto mt-8 w-16 mb-8" />

        <p className="font-sans text-xs text-cream/30">
          © {new Date().getFullYear()} Badam d'Art Restaurant. Bütün hüquqlar qorunur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
