import { Heart, User, GraduationCap, Briefcase, MapPin, Home, CheckCircle2, Sparkles, Smile } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PartnerPreferences = () => {
  const { t, language } = useLanguage();
  const isOr = language === "or";

  const preferences = [
    {
      icon: User,
      label: t.partner.labels.ageRange,
      value: t.partner.ageRange,
      hint: isOr ? "ଉପଯୁକ୍ତ ବୟସ ମେଳକ" : "Compatible age range",
    },
    {
      icon: User,
      label: t.partner.labels.height,
      value: t.partner.height,
      hint: isOr ? "ପ୍ରାର୍ଥୀଙ୍କ ସହ ଉଚ୍ଚତା ମେଳ" : "Matching height proportion",
    },
    {
      icon: GraduationCap,
      label: t.partner.labels.education,
      value: t.partner.education,
      hint: isOr ? "ସ୍ନାତକ ବା ତଦୁର୍ଦ୍ଧ୍ୱ ଯୋଗ୍ୟତା" : "Graduate or Professional Degree",
    },
    {
      icon: Briefcase,
      label: t.partner.labels.workingPreference,
      value: t.partner.workingPreference,
      hint: isOr ? "ନିଜର ବ୍ୟକ୍ତିଗତ ପସନ୍ଦ ସ୍ୱାଗତଯୋଗ୍ୟ" : "Personal career choice fully respected",
    },
    {
      icon: Home,
      label: t.partner.labels.familyValues,
      value: t.partner.familyValues,
      hint: isOr ? "ସଂସ୍କାରୀ ଓ ପାରିବାରିକ ମୂଲ୍ୟବୋଧ" : "Values family harmony and elders",
    },
    {
      icon: MapPin,
      label: t.partner.labels.location,
      value: t.partner.location,
      hint: isOr ? "ଓଡ଼ିଶା କିମ୍ବା ସମଗ୍ର ଭାରତରୁ ସ୍ୱାଗତଯୋଗ୍ୟ" : "Open to Odisha or anywhere across India",
    },
  ];

  return (
    <section id="preferences" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>{isOr ? "ଜୀବନ ସାଥୀଙ୍କ ପ୍ରତି ଆଶା" : "Expectations & Compatibility"}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.partner.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-3" />
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {isOr
              ? "ପାରସ୍ପରିକ ସମ୍ମାନ, ସ୍ନେହ, ଏବଂ ବୁଝାମଣା ଉପରେ ଆଧାରିତ ଏକ ସୁଖମୟ ଦାମ୍ପତ୍ୟ ଜୀବନ ପାଇଁ ଆଶା"
              : "Looking for an understanding companion to share a meaningful life journey grounded in trust and togetherness."}
          </p>
        </div>

        {/* Thoughtful Intro Banner */}
        <div className="bg-card rounded-2xl border border-gold/25 p-6 md:p-8 shadow-card mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-1">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {isOr ? "ପାରସ୍ପରିକ ବୁଝାମଣା ଓ ମୂଲ୍ୟବୋଧ" : "Mutual Understanding & Respect"}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-serif whitespace-pre-line">
                {t.partner.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Preferences Grid (6 Cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preferences.map((pref, index) => {
            const Icon = pref.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-card border border-gold/20 shadow-soft hover:shadow-card hover:border-gold/45 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-gold/60" />
                  </div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                    {pref.label}
                  </p>
                  <p className="text-base font-bold text-foreground mb-2">
                    {pref.value}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground italic border-t border-gold/10 pt-2.5 mt-2">
                  {pref.hint}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Minded Assurance Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gold/5 border border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="text-xs md:text-sm text-foreground font-medium">
              {isOr
                ? "କୌଣସି ଯୌତୁକ ଦାବି ନାହିଁ | କେବଳ ସଂସ୍କାର, ଶିକ୍ଷା ଏବଂ ପାରସ୍ପରିକ ବୁଝାମଣା ହିଁ ମୁଖ୍ୟ ବିଷୟ |"
                : "No dowry expectations. We value character, education, mutual respect, and family happiness above all."}
            </p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold whitespace-nowrap">
            {isOr ? "ନିରାଡ଼ମ୍ବର ଓ ଆଦର୍ଶ" : "Ethical & Simple"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PartnerPreferences;
