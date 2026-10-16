import { Briefcase, GraduationCap, MapPin, Building2, CheckCircle2, Laptop, Award, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EducationWorkSection = () => {
  const { t, language } = useLanguage();
  const isOr = language === "or";

  const careerHighlights = [
    isOr ? "୫+ ବର୍ଷର ଆଇଟି ଶିଳ୍ପ ଅଭିଜ୍ଞତା" : "5+ Years of Professional IT Experience",
    isOr ? "ରିମୋଟ୍ କାର୍ଯ୍ୟ (Work from Home - ସ୍ଥିର କ୍ୟାରିୟର)" : "Permanent Remote Setup with Work-Life Balance",
    isOr ? "ମୁମ୍ବାଇ ଭିତ୍ତିକ ପ୍ରତିଷ୍ଠିତ ଆଇଟି ସଂସ୍ଥା (Contractor Plus)" : "Reputed US-product firm headquartered in Mumbai",
    isOr ? "ମୋବାଇଲ୍ ଓ ୱେବ୍ ସଫ୍ଟୱେର୍ ବିକାଶରେ ଦକ୍ଷତା" : "Specialized in Modern Mobile & Web Engineering",
  ];

  return (
    <section id="career" className="py-20 bg-card relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{isOr ? "ବୃତ୍ତି ଓ ଶିକ୍ଷା" : "Career & Qualifications"}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.educationWork.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-3" />
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            {isOr
              ? "ଉଚ୍ଚ ଶିକ୍ଷାଗତ ଯୋଗ୍ୟତା ଏବଂ ସଫ୍ଟୱେର୍ ଇଞ୍ଜିନିୟରିଂରେ ଏକ ସ୍ଥିର ଓ ସଫଳ ବୃତ୍ତିଗତ କ୍ୟାରିୟର"
              : "Strong academic foundation and a thriving, stable career in modern software engineering."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Professional Career */}
          <div className="bg-background rounded-2xl border border-gold/25 p-6 md:p-8 shadow-card flex flex-col justify-between hover:border-gold/45 transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {t.educationWork.workTitle}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {isOr ? "ବର୍ତ୍ତମାନର ପଦବୀ ଓ ଅଭିଜ୍ଞତା" : "Current Employment"}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {isOr ? "ସକ୍ରିୟ / ସ୍ଥିର" : "Stable IT Career"}
                </span>
              </div>

              {/* Role & Company */}
              <div className="mb-6">
                <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                  {t.educationWork.workDetails.currentRole}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gold font-semibold mb-3">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>{t.educationWork.workDetails.company}</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1.5 text-muted-foreground font-normal">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{t.educationWork.workDetails.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gold/10 text-gold text-xs font-medium mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>
                    {t.educationWork.labels.experience}: {t.educationWork.workDetails.experience}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">
                  "{t.educationWork.workDetails.description}"
                </p>
              </div>

              {/* Key Career Highlights List */}
              <div className="space-y-2.5">
                {careerHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Academic Qualifications */}
          <div className="bg-background rounded-2xl border border-gold/25 p-6 md:p-8 shadow-card flex flex-col justify-between hover:border-gold/45 transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {t.educationWork.educationTitle}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {isOr ? "ସ୍ନାତକ ଡିଗ୍ରୀ ଓ ଅନୁଷ୍ଠାନ" : "Degrees & Academics"}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/25">
                  {isOr ? "ସ୍ନାତକ ଇଞ୍ଜିନିୟରିଂ" : "Engineering Grad"}
                </span>
              </div>

              {/* Education List */}
              <div className="space-y-6">
                {t.educationWork.educationDetails.map((edu, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-card border border-gold/15 hover:border-gold/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wide">
                        {edu.field}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <h4 className="font-display text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-gold font-medium mb-2">
                      {edu.field}
                    </p>
                    <div className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Academic Ethos note */}
              <div className="mt-6 p-4 rounded-xl bg-gold/5 border border-gold/20 text-xs text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground mb-1">
                  {isOr ? "ଉଚ୍ଚ ଶିକ୍ଷା ସମ୍ବନ୍ଧୀୟ ମୂଲ୍ୟବୋଧ:" : "Educational Values:"}
                </p>
                <p>
                  {isOr
                    ? "ଶିକ୍ଷା ଏବଂ ନିରନ୍ତର ଶିକ୍ଷଣ ପ୍ରତି ଆଗ୍ରହୀ | ବୈଷୟିକ ଜ୍ଞାନ ସହିତ ପାରମ୍ପରିକ ସଂସ୍କାରକୁ ସର୍ବଦା ଗୁରୁତ୍ୱ ଦିଅନ୍ତି |"
                    : "Believes in continuous self-improvement, professional excellence, and balancing technical acumen with humble personal conduct."}
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
