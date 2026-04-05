import { Phone } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <a
      href="tel:+994774921313"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 border border-gold bg-navy-deep/95 backdrop-blur-sm px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-gold shadow-lg transition-all duration-300 hover:bg-gold hover:text-navy-deep md:bottom-8 md:right-8"
    >
      <Phone className="h-4 w-4" />
      Rezerv Et
    </a>
  );
};

export default FloatingBookButton;
