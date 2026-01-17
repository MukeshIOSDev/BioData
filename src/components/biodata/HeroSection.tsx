import { Button } from "@/components/ui/button";
import { personalDetails } from "@/data/biodata";
import { Phone, Download, MapPin, Heart, Sparkles } from "lucide-react";
import img11 from "@/assets/gallery/mukesh_profile.jpg";
import { generateBiodataPDF } from "@/utils/generatePDF";

import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const handleCall = () => {
    window.open(`tel:${personalDetails.phone}`, "_self");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${personalDetails.phone}`, "_blank");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Marriage Biodata Badge */}
          {/* <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
              <Heart className="w-4 h-4 fill-gold" />
              Marriage Biodata
            </span>
          </div> */}

          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-gold p-1 shadow-elevated mx-auto">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img
                    src={img11}
                    alt={`${t.personalDetails.name} - Professional profile photo for marriage biodata`}
                    className="w-full h-full object-cover"
                    itemProp="image"
                  />
                </div>
              </div>
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-gold/20 animate-pulse"
                style={{ transform: "scale(1.15)" }}
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-slide-up">
            {t.personalDetails.name}
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-slide-up stagger-1 font-serif italic">
            {t.personalDetails.tagline}
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up stagger-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-gold/20 shadow-soft">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-foreground">
                {t.personalDetails.ageLabel}: {t.personalDetails.age.replace("Years", "").replace("ବର୍ଷ", "")} • {t.personalDetails.height}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-gold/20 shadow-soft">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm text-foreground">
                {t.personalDetails.placeOfBirthLabel}: {language === 'en' ? personalDetails.placeOfBirth : "ସୁରଟ, ଗୁଜୁରାଟ"}
              </span>
            </div>
          </div>

          {/* Key Details */}
          <div className="flex justify-center gap-8 md:gap-12 mb-12 animate-slide-up stagger-3">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-gold">
                {t.personalDetails.education.split(" ")[0]}
              </p>
              <p className="text-sm text-muted-foreground">{t.personalDetails.educationLabel}</p>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-gold">
                {t.personalDetails.rashiLabel === "Rashi" ? personalDetails.rashi : "ସିଂହ"}
              </p>
              <p className="text-sm text-muted-foreground">{t.personalDetails.rashiLabel}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up stagger-4">
            <Button
              variant="gold"
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="w-5 h-5" />
              {t.navigation.contact}
            </Button>
            <Button
              variant="gold-outline"
              size="xl"
              onClick={() => generateBiodataPDF(t)}
            >
              <Download className="w-5 h-5" />
              {t.pdf.download}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
