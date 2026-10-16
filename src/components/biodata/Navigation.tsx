import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: language === "or" ? "ବ୍ୟକ୍ତିଗତ" : "Profile", href: "#personal" },
    { label: language === "or" ? "କ୍ୟାରିୟର ଓ ଶିକ୍ଷା" : "Career & Education", href: "#career" },
    { label: t.navigation.family, href: "#family" },
    { label: t.navigation.about, href: "#about" },
    { label: language === "or" ? "ସାଥୀ ପସନ୍ଦ" : "Preferences", href: "#preferences" },
    { label: language === "or" ? "ଠିକଣା" : "Address", href: "#address" },
    { label: t.navigation.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-soft border-b border-gold/20 py-2.5"
          : "bg-background/60 backdrop-blur-sm py-4 border-b border-gold/10"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center group-hover:bg-gold/25 transition-all">
              <Sparkles className="w-4 h-4 text-gold fill-gold/20" />
            </div>
            <div>
              <span className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-gold transition-colors block leading-tight">
                {t.personalDetails.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-muted-foreground block font-medium">
                {language === "or" ? "ବିବାହ ବାୟୋଡାଟା" : "Marriage Biodata"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-gold font-semibold bg-gold/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-gold/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="gold"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="gap-1.5 rounded-full px-4 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.navigation.contact}</span>
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground rounded-lg hover:bg-gold/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-card/95 backdrop-blur-xl border border-gold/20 rounded-2xl p-4 shadow-elevated animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-2.5 text-left rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-gold/15 text-gold font-semibold"
                        : "text-foreground hover:bg-gold/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-gold/15 mt-2">
                <Button
                  variant="gold"
                  className="w-full gap-2 rounded-xl"
                  onClick={() => scrollToSection("#contact")}
                >
                  <Phone className="w-4 h-4" />
                  {t.navigation.contact}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
