import { addresses } from "@/data/biodata";
import { MapPin, Home, Building2 } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const AddressSection = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.address.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          {/* Address Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Current Address */}
            <div className="bg-card rounded-2xl border border-gold/20 p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.address.currentLabel}
                </h3>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p>
                  {language === 'en' ? addresses.current.city : "ସୁରଟ"}, {language === 'en' ? addresses.current.state : "ଗୁଜୁରାଟ"}<br />
                  {language === 'en' ? addresses.current.country : "ଭାରତ"}
                </p>
              </div>
            </div>

            {/* Permanent Address */}
            <div className="bg-card rounded-2xl border border-gold/20 p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.address.permanentLabel}
                </h3>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p>
                  {language === 'en' ? addresses.permanent.village : "ମୁକ୍ତାପୁଞ୍ଜି"}<br />
                  {language === 'en' ? "PO" : "ପୋଷ୍ଟ"} – {language === 'en' ? addresses.permanent.postOffice : "ଜହଦା"}<br />
                  {language === 'en' ? "Via" : "ଭାୟା"} – {language === 'en' ? addresses.permanent.via : "ଧରାକୋଟ"}<br />
                  {language === 'en' ? "Dist" : "ଜିଲ୍ଲା"} – {language === 'en' ? addresses.permanent.district : "ଗଞ୍ଜାମ"}<br />
                  {language === 'en' ? addresses.permanent.state : "ଓଡ଼ିଶା"}, {language === 'en' ? addresses.permanent.country : "ଭାରତ"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
