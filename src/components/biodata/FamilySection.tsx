import { familyDetails, familyBackground } from "@/data/biodata";
import { Users, User, Heart, Briefcase, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const relationIcons: Record<string, React.ElementType> = {
  Father: User,
  Mother: Heart,
  Brother: Users,
  "ପିତା": User,
  "ମାତା": Heart,
  "ଭ୍ରାତା": Users,
};

const FamilySection = () => {
  const { t } = useLanguage();
  return (
    <section id="family" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.family.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          {/* Family Background */}
          <div className="bg-background rounded-2xl border border-gold/20 shadow-soft p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold" />
              {t.family.membersTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed font-serif whitespace-pre-line">
              {t.family.background}
            </p>
          </div>

          {/* Family Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.family.members.map((member, index) => {
              const Icon = relationIcons[member.relation] || User;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl border border-gold/20 p-6 text-center shadow-soft hover:shadow-card hover:border-gold/40 transition-all duration-300 group"
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>

                  {/* Relation */}
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full mb-3">
                    {member.relation}
                  </span>

                  {/* Name */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>

                  {/* Profession */}
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{member.profession}</span>
                  </div>

                  {/* Mobile Number */}
                  {member.mobile && (
                    <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
                      <Phone className="w-4 h-4" />
                      <a
                        href={`tel:${member.mobile}`}
                        className="text-sm hover:text-gold transition-colors"
                      >
                        {member.mobile}
                      </a>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-muted-foreground italic">
                    {member.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
