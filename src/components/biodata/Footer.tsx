import { personalDetails } from "@/data/biodata";
import { Heart } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-background/80">
            {t.footer.madeWith}
          </p>
          <p className="text-sm text-background/60 mt-2">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
