import { aboutMe, hobbiesInterests } from "@/data/biodata";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="bg-background rounded-2xl border border-gold/20 shadow-soft p-8 md:p-10 mb-12">
            <p className="text-muted-foreground leading-relaxed text-lg font-serif whitespace-pre-line">
              {t.about.content}
            </p>
          </div>

          {/* Hobbies & Interests Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-gold" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {t.hobbies.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {t.hobbies.list.map((hobby, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-gold/30 bg-gold/5 text-foreground hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
