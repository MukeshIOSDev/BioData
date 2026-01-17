import { personalDetails } from "@/data/biodata";
import { Calendar, Clock, MapPin, Sparkles, Star, Ruler, Palette, User, Heart, Utensils, Globe } from "lucide-react";

const DetailRow = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors duration-300">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-gold" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  </div>
);

import { useLanguage } from "@/contexts/LanguageContext";

const PersonalDetails = () => {
  const { t } = useLanguage();
  const details = [
    { icon: Calendar, label: t.personalDetails.dateOfBirthLabel, value: personalDetails.dateOfBirth },
    { icon: User, label: t.personalDetails.ageLabel, value: t.personalDetails.age },
    { icon: Clock, label: t.personalDetails.timeOfBirthLabel, value: personalDetails.timeOfBirth },
    { icon: MapPin, label: t.personalDetails.placeOfBirthLabel, value: t.personalDetails.placeOfBirth },
    { icon: Sparkles, label: t.personalDetails.rashiLabel, value: t.personalDetails.rashiLabel === "Rashi" ? personalDetails.rashi : "ସିଂହ ରାଶି" },
    { icon: Star, label: t.personalDetails.nakshatraLabel, value: t.personalDetails.nakshatraLabel === "Nakshatra" ? personalDetails.nakshatra : "ମଘା ନକ୍ଷତ୍ର" },
    { icon: Ruler, label: t.personalDetails.heightLabel, value: t.personalDetails.height },
    { icon: Palette, label: t.personalDetails.complexionLabel, value: t.personalDetails.complexionLabel === "Complexion" ? personalDetails.complexion : "ଗୋରା" },
    { icon: Heart, label: t.personalDetails.maritalStatusLabel, value: t.personalDetails.maritalStatus },
    { icon: Utensils, label: t.personalDetails.dietLabel, value: t.personalDetails.diet },
    { icon: Globe, label: t.personalDetails.languageLabel, value: t.personalDetails.languages },
  ];

  return (
    <section id="personal" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.personalDetails.name} - {t.navigation.personal}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          {/* Details Card */}
          <div className="bg-card rounded-2xl border border-gold/20 shadow-card p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {details.map((detail, index) => (
                <DetailRow
                  key={index}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
