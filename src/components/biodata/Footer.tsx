import { personalDetails } from "@/data/biodata";
import { Heart, Sparkles, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const isOr = language === "or";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-foreground text-background border-t border-gold/20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-background/10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-display text-xl font-bold text-background tracking-wide">
                {t.personalDetails.name}
              </span>
            </div>
            <p className="text-xs text-background/60">
              {isOr ? "ପାରମ୍ପରିକ ଓଡ଼ିଆ ବିବାହ ବାୟୋଡାଟା" : "Traditional Matrimonial Biodata"}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-background/70">
            <a href="#personal" className="hover:text-gold transition-colors">
              {isOr ? "ବ୍ୟକ୍ତିଗତ" : "Personal"}
            </a>
            <span>•</span>
            <a href="#career" className="hover:text-gold transition-colors">
              {isOr ? "କ୍ୟାରିୟର" : "Career"}
            </a>
            <span>•</span>
            <a href="#family" className="hover:text-gold transition-colors">
              {isOr ? "ପରିବାର" : "Family"}
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-gold transition-colors">
              {isOr ? "ଯୋଗାଯୋଗ" : "Contact"}
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 hover:bg-gold hover:text-foreground text-xs font-medium transition-all"
            aria-label="Scroll to top"
          >
            <span>{isOr ? "ଉପରକୁ ଯାଆନ୍ତୁ" : "Back to Top"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 text-center text-xs text-background/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="flex items-center justify-center gap-1.5">
            <span>{t.footer.madeWith}</span>
          </p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
