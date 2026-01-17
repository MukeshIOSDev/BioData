import { partnerPreferences } from "@/data/biodata";
import { Heart, User, GraduationCap, Briefcase, MapPin, Home } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const PartnerPreferences = () => {
  const { t } = useLanguage();
  const preferences = [
    { icon: User, label: t.partner.labels.ageRange, value: t.partner.ageRange },
    { icon: User, label: t.partner.labels.height, value: t.partner.height },
    { icon: GraduationCap, label: t.partner.labels.education, value: t.partner.education },
    { icon: Briefcase, label: t.partner.labels.workingPreference, value: t.partner.workingPreference },
    { icon: Home, label: t.partner.labels.familyValues, value: t.partner.familyValues },
    { icon: MapPin, label: t.partner.labels.location, value: t.partner.location },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
              <Heart className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.partner.title}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-4">
              {t.partner.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          {/* Preferences Grid */}
          <div className="bg-card rounded-2xl border border-gold/20 shadow-card p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {preferences.map((pref, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <pref.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{pref.label}</p>
                    <p className="font-medium text-foreground">{pref.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPreferences;
