import { Heart, Sparkles, Film, Compass, Code, Music, BookOpen, Utensils, Activity, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const hobbyIconMap: Record<string, React.ElementType> = {
  "Spending time with family": Users,
  "ପରିବାର ସହିତ ସମୟ ବିତାଇବା": Users,
  "Watching movies": Film,
  "ଚଳଚ୍ଚିତ୍ର ଦେଖିବା": Film,
  "Traveling & exploring new places": Compass,
  "ନୂତନ ସ୍ଥାନ ଭ୍ରମଣ କରିବା": Compass,
  "Learning new technologies": Code,
  "ନୂତନ ଜିନିଷ ଶିଖିବା": Code,
  "Learning new things": Code,
  "Listening music": Music,
  "ସଙ୍ଗୀତ ଶୁଣିବା": Music,
  "Reading": BookOpen,
  "ପଢିବା": BookOpen,
  "Cooking occasionally": Utensils,
  "ରୋଷେଇ କରିବା (କେବେ କେବେ)": Utensils,
  "Fitness and wellness activities": Activity,
  "ଫିଟନେସ୍ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକଳାପ": Activity,
};

const AboutSection = () => {
  const { t, language } = useLanguage();
  const isOr = language === "or";

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative ambient spots */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>{isOr ? "ବ୍ୟକ୍ତିତ୍ୱ ଓ ଦୃଷ୍ଟିକୋଣ" : "Personality & Outlook"}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-3" />
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            {isOr
              ? "ଜୀବନ ପ୍ରତି ଏକ ସକାରାତ୍ମକ ଦୃଷ୍ଟିକୋଣ, ସରଳ ଜୀବନଯାପନ ଏବଂ ପାରିବାରିକ ମୂଲ୍ୟବୋଧରେ ବିଶ୍ୱାସ"
              : "A blend of traditional values and progressive modern thinking, dedicated to family and companionship."}
          </p>
        </div>

        {/* About Statement Card with Quote Layout */}
        <div className="bg-background rounded-3xl border border-gold/25 shadow-card p-7 md:p-10 mb-12 relative">
          <div className="text-gold/20 font-serif text-6xl md:text-7xl absolute top-3 left-6 select-none pointer-events-none leading-none">
            “
          </div>
          <div className="relative z-10 pt-4">
            <p className="text-foreground/90 leading-relaxed text-base md:text-lg font-serif whitespace-pre-line tracking-normal">
              {t.about.content}
            </p>
          </div>
        </div>

        {/* Hobbies & Lifestyle Section */}
        <div className="bg-background rounded-2xl border border-gold/25 p-6 md:p-8 shadow-soft">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 text-gold mb-2">
              <Sparkles className="w-4 h-4" />
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                {t.hobbies.title}
              </h3>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              {isOr ? "ଅବସର ସମୟର ରୁଚି ଓ ପସନ୍ଦ" : "Leisure interests, personal pursuits & wellness"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {t.hobbies.list.map((hobby, index) => {
              const Icon = hobbyIconMap[hobby] || Sparkles;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-gold/25 bg-card hover:bg-gold/10 hover:border-gold/50 text-foreground transition-all duration-200 shadow-sm"
                >
                  <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium">{hobby}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
