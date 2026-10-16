import { Button } from "@/components/ui/button";
import { personalDetails } from "@/data/biodata";
import {
  Phone,
  Download,
  MapPin,
  Sparkles,
  Briefcase,
  GraduationCap,
  Calendar,
  Compass,
  Heart,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { generateBiodataPDF } from "@/utils/generatePDF";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/91${personalDetails.phone}?text=${encodeURIComponent(
        t.contact.whatsappMessage
      )}`,
      "_blank"
    );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickStats = [
    {
      icon: Calendar,
      label: language === "or" ? "ବୟସ ଓ ଉଚ୍ଚତା" : "Age & Height",
      value:
        language === "or"
          ? `${t.personalDetails.age} • ${t.personalDetails.height}`
          : `${t.personalDetails.age.replace("Years", "").trim()} Yrs • ${t.personalDetails.height}`,
    },
    {
      icon: Briefcase,
      label: language === "or" ? "ବୃତ୍ତି" : "Profession",
      value: language === "or" ? "ସିନିୟର ସଫ୍ଟୱେର୍ ଡେଭଲପର୍" : "Sr. Software Developer",
      sub: language === "or" ? "ରିମୋଟ୍ (Mumbai Based)" : "Remote (Contractor Plus)",
    },
    {
      icon: GraduationCap,
      label: language === "or" ? "ଶିକ୍ଷା" : "Education",
      value: language === "or" ? "ବି.ଟେକ୍ - କମ୍ପ୍ୟୁଟର ସାଇନ୍ସ" : "B.Tech (Computer Science)",
    },
    {
      icon: Compass,
      label: language === "or" ? "ରାଶି ଓ ନକ୍ଷତ୍ର" : "Rashi & Nakshatra",
      value: `${language === "or" ? "ସିଂହ ରାଶି" : "Leo"} • ${language === "or" ? "ମଘା ନକ୍ଷତ୍ର" : "Magha"}`,
    },
    {
      icon: MapPin,
      label: language === "or" ? "ବାସସ୍ଥାନ ଓ ମୂଳ ସ୍ଥାନ" : "Location & Roots",
      value: language === "or" ? "ସୁରଟ (ଗୁଜୁରାଟ) • ଗଞ୍ଜାମ (ଓଡ଼ିଶା)" : "Surat (Gujarat) • Ganjam (Odisha)",
    },
    {
      icon: Heart,
      label: language === "or" ? "ଖାଦ୍ୟପେୟ ଓ ଜୀବନଶୈଳୀ" : "Diet & Values",
      value: language === "or" ? "ଶାକାହାରୀ • ପାରିବାରିକ ମୂଲ୍ୟବୋଧ" : "Vegetarian • Family-Oriented",
    },
  ];

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-28 pb-20"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        {/* Subtle patterned concentric circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-gold/15 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-gold/5 rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center">
          {/* Sacred Auspicious Heading */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold shadow-sm animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs md:text-sm font-serif font-medium tracking-wide">
              {language === "or" ? "॥ ॐ ଶ୍ରୀ ଗଣେଶାୟ ନମଃ ॥" : "॥ Om Shri Ganeshaya Namah ॥"}
            </span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          {/* Auspicious Matrimonial Emblem */}
          <div className="my-5 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-gold p-[2.5px] shadow-gold flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-card overflow-hidden border border-gold/40 flex items-center justify-center p-0.5">
                  <img
                    src="/biodata-emblem.jpg"
                    alt={language === "or" ? "ଶ୍ରୀ ଗଣେଶ ଶୁଭ ବିବାହ ପ୍ରତୀକ" : "Auspicious Lord Ganesha Wedding Emblem"}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-gold/30 animate-pulse pointer-events-none" />
            </div>
          </div>

          {/* Candidate Name */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 tracking-tight animate-slide-up"
            itemProp="name"
          >
            {t.personalDetails.name}
          </h1>

          {/* Matrimonial Subtitle / Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-serif italic animate-slide-up stagger-1 leading-relaxed">
            "{t.personalDetails.tagline}"
          </p>

          {/* Quick-Stats Ribbon Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10 max-w-4xl mx-auto animate-slide-up stagger-2 text-left">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-card/85 backdrop-blur-sm border border-gold/25 rounded-2xl p-4 shadow-soft hover:shadow-card hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="font-medium text-foreground text-sm md:text-base leading-snug">
                    {stat.value}
                  </p>
                  {stat.sub && (
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {stat.sub}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Primary Call-to-Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up stagger-3">
            <Button
              variant="gold"
              size="xl"
              onClick={handleWhatsApp}
              className="rounded-full shadow-gold hover:shadow-elevated gap-2 px-8 text-base font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.contact.whatsappButton}</span>
            </Button>
            <Button
              variant="gold-outline"
              size="xl"
              onClick={() => generateBiodataPDF(t)}
              className="rounded-full gap-2 px-8 text-base font-semibold border-gold/40 hover:bg-gold/10"
            >
              <Download className="w-5 h-5 text-gold" />
              <span>{t.pdf.download}</span>
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="rounded-full gap-2 px-6 text-base font-medium border-border hover:border-gold/40"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>{t.contact.callFamily}</span>
            </Button>
          </div>

          {/* Quick Jump Indicator */}
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => scrollToSection("personal")}
              className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors group cursor-pointer"
              aria-label="Scroll to details"
            >
              <span className="font-medium tracking-wide">
                {language === "or" ? "ସମ୍ପୂର୍ଣ୍ଣ ବିବରଣୀ ଦେଖନ୍ତୁ" : "View Full Details"}
              </span>
              <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/70 group-hover:bg-gold/10 transition-all">
                <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
