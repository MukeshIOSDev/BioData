import { Users, User, Heart, Briefcase, Phone, Sparkles, Home, Shield } from "lucide-react";
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
  const { t, language } = useLanguage();
  const isOr = language === "or";

  return (
    <section id="family" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{isOr ? "ପାରିବାରିକ ପୃଷ୍ଠଭୂମି" : "Family Heritage"}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.family.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-3" />
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            {isOr
              ? "ପାରମ୍ପରିକ ଓଡ଼ିଆ ସଂସ୍କାର, ଆଦର୍ଶ ମୂଲ୍ୟବୋଧ ଏବଂ ପାରସ୍ପରିକ ସମ୍ମାନରେ ବନ୍ଧା ଏକ ସୁଖୀ ପରିବାର"
              : "A close-knit, culturally grounded family cherishing traditional values, education, and mutual respect."}
          </p>
        </div>

        {/* Family Background Intro Card */}
        <div className="bg-card rounded-2xl border border-gold/25 shadow-card p-6 md:p-8 mb-12 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {t.family.membersTitle}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isOr ? "ଓଡ଼ିଆ ପରମ୍ପରା ଓ ସଂସ୍କାର" : "Roots, Values & Culture"}
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed font-serif text-base md:text-lg whitespace-pre-line italic">
            "{t.family.background}"
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-gold/15 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 text-foreground font-medium">
              <Shield className="w-4 h-4 text-gold" />
              <span>{isOr ? "ପାରମ୍ପରିକ ମୂଲ୍ୟବୋଧ" : "Traditional Values"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-foreground font-medium">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>{isOr ? "ଶିକ୍ଷାକୁ ପ୍ରାଥମିକତା" : "Education Focused"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-foreground font-medium">
              <Heart className="w-4 h-4 text-gold" />
              <span>{isOr ? "ନିବିଡ଼ ସ୍ନେହ ଓ ବୁଝାମଣା" : "Close-knit & Supportive"}</span>
            </div>
          </div>
        </div>

        {/* Family Members Grid (3 Cards) */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.family.members.map((member, index) => {
            const Icon = relationIcons[member.relation] || User;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl border border-gold/25 p-6 text-center shadow-soft hover:shadow-card hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Avatar Icon */}
                  <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-9 h-9 text-gold" />
                  </div>

                  {/* Relation Pill */}
                  <span className="inline-block px-3.5 py-1 bg-gold/15 text-gold text-xs font-semibold rounded-full mb-3 uppercase tracking-wider border border-gold/25">
                    {member.relation}
                  </span>

                  {/* Name */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>

                  {/* Profession */}
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3 text-sm">
                    <Briefcase className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{member.profession}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed px-2 mb-4">
                    "{member.description}"
                  </p>
                </div>

                {/* Mobile / Contact Button if available */}
                {member.mobile && (
                  <div className="pt-4 border-t border-gold/15 mt-2">
                    <a
                      href={`tel:${member.mobile}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-gold/10 hover:bg-gold/20 text-gold text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{isOr ? "କଲ୍ କରନ୍ତୁ" : "Call"} ({member.mobile})</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
