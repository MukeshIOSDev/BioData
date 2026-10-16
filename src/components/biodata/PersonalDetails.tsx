import { personalDetails } from "@/data/biodata";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Star,
  Ruler,
  Palette,
  User,
  Heart,
  Utensils,
  Globe,
  Activity,
  ShieldCheck,
  Compass,
} from "lucide-react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DetailItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  badge?: string;
}

const DetailRow: React.FC<DetailItemProps> = ({ icon: Icon, label, value, badge }) => (
  <div className="flex items-center justify-between p-3.5 rounded-xl bg-background/60 hover:bg-background border border-gold/10 hover:border-gold/30 transition-all duration-200">
    <div className="flex items-center gap-3 min-w-0">
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <p className="text-sm md:text-base font-semibold text-foreground truncate">{value}</p>
      </div>
    </div>
    {badge && (
      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/25 flex-shrink-0 ml-2">
        {badge}
      </span>
    )}
  </div>
);

const PersonalDetails = () => {
  const { t, language } = useLanguage();

  const isOr = language === "or";

  // Section 1: Physical & Personal Info
  const generalDetails = [
    {
      icon: Calendar,
      label: t.personalDetails.dateOfBirthLabel,
      value: personalDetails.dateOfBirth,
    },
    {
      icon: User,
      label: t.personalDetails.ageLabel,
      value: t.personalDetails.age,
    },
    {
      icon: Ruler,
      label: t.personalDetails.heightLabel,
      value: t.personalDetails.height,
    },
    {
      icon: Activity,
      label: t.personalDetails.weightLabel,
      value: personalDetails.weight,
    },
    {
      icon: Palette,
      label: t.personalDetails.complexionLabel,
      value: t.personalDetails.complexion,
    },
    {
      icon: Heart,
      label: t.personalDetails.bloodGroupLabel,
      value: personalDetails.bloodGroup,
    },
    {
      icon: Utensils,
      label: t.personalDetails.dietLabel,
      value: t.personalDetails.diet,
      badge: isOr ? "ଶାକାହାରୀ" : "Pure Veg",
    },
    {
      icon: Globe,
      label: t.personalDetails.languageLabel,
      value: t.personalDetails.languages,
    },
  ];

  // Section 2: Astrological & Kundali Details
  const astroDetails = [
    {
      icon: Clock,
      label: t.personalDetails.timeOfBirthLabel,
      value: personalDetails.timeOfBirth,
    },
    {
      icon: MapPin,
      label: t.personalDetails.placeOfBirthLabel,
      value: t.personalDetails.placeOfBirth,
    },
    {
      icon: Sparkles,
      label: t.personalDetails.rashiLabel,
      value: isOr ? "ସିଂହ ରାଶି" : "Leo (Simha)",
      badge: isOr ? "ରବି ଅଧିପତି" : "Sun Ruler",
    },
    {
      icon: Star,
      label: t.personalDetails.nakshatraLabel,
      value: isOr ? "ମଘା ନକ୍ଷତ୍ର" : "Magha Nakshatra",
      badge: isOr ? "ଚରଣ ୧" : "Pada 1",
    },
    {
      icon: Compass,
      label: t.personalDetails.gotraLabel,
      value: isOr ? "କଚ୍ଛପ ଗୋତ୍ର" : personalDetails.gotra,
    },
    {
      icon: ShieldCheck,
      label: isOr ? "ମାଙ୍ଗଳିକ ସ୍ଥିତି" : "Manglik Status",
      value: isOr ? "ନାହିଁ (ସାଧାରଣ)" : "No (Non-Manglik)",
      badge: isOr ? "ଶୁଭ" : "Compatible",
    },
  ];

  return (
    <section id="personal" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background embellishment */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isOr ? "ପ୍ରାଥମିକ ତଥ୍ୟ" : "Core Profile"}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {isOr ? "ବ୍ୟକ୍ତିଗତ ଓ କୁଣ୍ଡଳୀ ବିବରଣୀ" : "Personal & Horoscope Details"}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-3" />
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            {isOr
              ? "ପ୍ରାର୍ଥୀଙ୍କ ବ୍ୟକ୍ତିଗତ ପରିଚୟ, ଶାରୀରିକ ଗଠନ ଏବଂ କୁଣ୍ଡଳୀ/ଜ୍ୟୋତିଷ ସମ୍ବନ୍ଧୀୟ ସମ୍ପୂର୍ଣ୍ଣ ତଥ୍ୟ"
              : "Comprehensive personal profile, physical attributes, and astrological credentials for matrimonial horoscope matching."}
          </p>
        </div>

        {/* 2 Dedicated Cards Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card 1: Personal Attributes */}
          <div className="bg-card rounded-2xl border border-gold/25 shadow-card p-6 md:p-8 hover:border-gold/45 transition-all">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/15">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {isOr ? "ବ୍ୟକ୍ତିଗତ ଓ ଶାରୀରିକ ବିବରଣୀ" : "Personal & Physical Profile"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {isOr ? "ଶାରୀରିକ ଗଠନ ଓ ଜୀବନଶୈଳୀ" : "Attributes, health & lifestyle"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {generalDetails.map((detail, index) => (
                <DetailRow
                  key={index}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                  badge={detail.badge}
                />
              ))}
            </div>
          </div>

          {/* Card 2: Astrological / Kundali Details */}
          <div className="bg-card rounded-2xl border border-gold/25 shadow-card p-6 md:p-8 hover:border-gold/45 transition-all">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold/15">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {isOr ? "କୁଣ୍ଡଳୀ ଓ ଜ୍ୟୋତିଷ ତଥ୍ୟ" : "Horoscope & Kundali Details"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {isOr ? "ରାଶି, ନକ୍ଷତ୍ର ଓ ଗୋତ୍ର ସୂଚନା" : "Birth chart, planetary & gotra details"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {astroDetails.map((detail, index) => (
                <DetailRow
                  key={index}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                  badge={detail.badge}
                />
              ))}
            </div>

            {/* Auspicious note box */}
            <div className="mt-6 p-4 rounded-xl bg-gold/5 border border-gold/20 flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
              <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <p>
                {isOr
                  ? "ଜନ୍ମ ପତ୍ରିକା (କୁଣ୍ଡଳୀ) ମେଳକ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ଉପଲବ୍ଧ ଅଛି | ଆବଶ୍ୟକ ହେଲେ ପରିବାର ସହିତ ଯୋଗାଯୋଗ କରିପାରିବେ |"
                  : "Complete birth chart and Kundali are readily available upon request for astrological compatibility matching."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
