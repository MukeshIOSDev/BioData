import { Button } from "@/components/ui/button";
import { personalDetails, familyDetails } from "@/data/biodata";
import { Phone, MessageCircle, Linkedin, Instagram, Heart, Sparkles, User, Users, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const isOr = language === "or";

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/91${personalDetails.phone}?text=${encodeURIComponent(
        t.contact.whatsappMessage
      )}`,
      "_blank"
    );
  };

  const contacts = [
    {
      title: isOr ? "ପ୍ରାର୍ଥୀ (ମୁକେଶ)" : "Candidate (Mukesh)",
      phone: personalDetails.phone,
      relation: isOr ? "ନିଜେ" : "Direct",
      icon: User,
    },
    {
      title: isOr ? "ପିତା (ଶ୍ୟାମ ଘନ ବେହେରା)" : "Father (Shyam Ghan Behera)",
      phone: familyDetails[0].mobile || "8866307697",
      relation: isOr ? "ପିତା" : "Father",
      icon: Users,
    },
    {
      title: isOr ? "ମାତା (ସୁକାନ୍ତି ବେହେରା)" : "Mother (Sukanti Behera)",
      phone: familyDetails[1].mobile || "9979158709",
      relation: isOr ? "ମାତା" : "Mother",
      icon: Heart,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/25 mb-4">
              <Heart className="w-7 h-7 text-gold fill-gold/20" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Primary Quick WhatsApp Card */}
          <div className="bg-card rounded-3xl border border-gold/30 p-7 md:p-10 shadow-card mb-10 text-center relative overflow-hidden">
            <div className="max-w-lg mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isOr ? "ଶୀଘ୍ର ଯୋଗାଯୋଗ" : "Instant Direct Message"}</span>
              </span>

              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {isOr ? "ହ୍ୱାଟ୍ସଆପ୍ ମାଧ୍ୟମରେ କଥାବାର୍ତ୍ତା କରନ୍ତୁ" : "Connect Directly on WhatsApp"}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-6 leading-relaxed">
                {isOr
                  ? "ବାୟୋଡାଟା ସମ୍ପର୍କରେ କଥାବାର୍ତ୍ତା କିମ୍ବା କୁଣ୍ଡଳୀ ଆଦାନପ୍ରଦାନ ପାଇଁ ସିଧାସଳଖ ମେସେଜ୍ ପଠାନ୍ତୁ"
                  : "Feel free to initiate a respectful conversation or request additional details & horoscope match."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="gold"
                  size="xl"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold gap-2 shadow-gold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.contact.whatsappButton}</span>
                </Button>
                <Button
                  variant="gold-outline"
                  size="xl"
                  onClick={() => handleCall(personalDetails.phone)}
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold gap-2 border-gold/40"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+91 {personalDetails.phone}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Family Contact Numbers Grid */}
          <div className="text-left mb-10">
            <h4 className="font-display text-lg font-bold text-foreground mb-4 text-center">
              {isOr ? "ପାରିବାରିକ ଯୋଗାଯୋଗ ନମ୍ବର" : "Family Calling Contacts"}
            </h4>

            <div className="grid sm:grid-cols-3 gap-4">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-card border border-gold/20 shadow-soft hover:shadow-card hover:border-gold/45 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gold/10 text-gold">
                          {c.relation}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">
                        {c.title}
                      </p>
                      <p className="text-base font-bold text-foreground">
                        +91 {c.phone}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-gold/10">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCall(c.phone)}
                        className="w-full justify-center gap-1.5 text-xs text-gold hover:text-gold hover:bg-gold/10 rounded-xl"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{isOr ? "କଲ୍ କରନ୍ତୁ" : "Dial Number"}</span>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional & Social Profiles */}
          <div className="p-6 rounded-2xl bg-card border border-gold/20 shadow-soft mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-foreground text-sm">
                {isOr ? "ବୃତ୍ତିଗତ ଓ ସାମାଜିକ ପ୍ରୋଫାଇଲ୍" : "Verified Professional & Social Presence"}
              </p>
              <p className="text-xs text-muted-foreground">
                {isOr ? "LinkedIn ଏବଂ Instagram ମାଧ୍ୟମରେ ସଂଯୋଗ ହୁଅନ୍ତୁ" : "Connect via LinkedIn and Instagram"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2 rounded-xl border-gold/30 hover:border-gold hover:bg-gold/10"
              >
                <a
                  href={personalDetails.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gold" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2 rounded-xl border-gold/30 hover:border-gold hover:bg-gold/10"
              >
                <a
                  href={personalDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gold" />
                  <span>Instagram</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Genuine Profile Verification Tag */}
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              {isOr
                ? "ଏହି ବାୟୋଡାଟା ପ୍ରାର୍ଥୀ ଏବଂ ପରିବାର ଦ୍ୱାରା ଯାଞ୍ଚିତ ଓ ପରିଚାଳିତ"
                : "This marriage biodata is verified and managed by candidate & family"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
