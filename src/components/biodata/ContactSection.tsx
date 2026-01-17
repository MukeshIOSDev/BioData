import { Button } from "@/components/ui/button";
import { personalDetails } from "@/data/biodata";
import { Phone, MessageCircle, Linkedin, Mail, Heart } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const handleCall = () => {
    window.open(`tel:${personalDetails.phone}`, "_self");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${personalDetails.phone}?text=${encodeURIComponent(t.contact.whatsappMessage)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
              <Heart className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-background rounded-2xl border border-gold/20 p-8 shadow-card mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="w-5 h-5 text-gold" />
              <span className="text-2xl font-display font-semibold text-foreground">
                +91 {personalDetails.phone}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" onClick={handleCall} className="flex-1 sm:flex-none">
                <Phone className="w-5 h-5" />
                {t.contact.callFamily}
              </Button>
              <Button variant="gold-outline" size="lg" onClick={handleWhatsApp} className="flex-1 sm:flex-none">
                <MessageCircle className="w-5 h-5" />
                {t.contact.whatsappButton}
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="elegant" size="icon" asChild className="w-12 h-12">
              <a href={personalDetails.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="elegant" size="icon" asChild className="w-12 h-12">
              <a href={`mailto:${personalDetails.email}`} aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
