import { educationDetails, workDetails } from "@/data/biodata";
import { Briefcase, GraduationCap, MapPin, Building2 } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const EducationWorkSection = () => {
  const { t } = useLanguage();
  return (
    <section id="background" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.educationWork.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="bg-card rounded-2xl border border-gold/20 p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.educationWork.educationTitle}
                </h3>
              </div>

              {t.educationWork.educationDetails.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gold font-medium mb-1">{edu.field}</p>
                  <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                </div>
              ))}
            </div>

            {/* Work Card */}
            <div className="bg-card rounded-2xl border border-gold/20 p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.educationWork.workTitle}
                </h3>
              </div>

              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                  {t.educationWork.workDetails.currentRole}
                </h4>
                <div className="flex items-center gap-2 text-gold font-medium mb-2">
                  <Building2 className="w-4 h-4" />
                  {t.educationWork.workDetails.company}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {t.educationWork.workDetails.location}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">
                    {t.educationWork.labels.experience}:
                  </span>{" "}
                  {t.educationWork.workDetails.experience}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {t.educationWork.workDetails.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationWorkSection;
