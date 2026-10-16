import { addresses } from "@/data/biodata";
import { MapPin, Home, Building2, Copy, Check, ExternalLink, Navigation2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "sonner";

const AddressSection = () => {
  const { t, language } = useLanguage();
  const isOr = language === "or";
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success(isOr ? `${label} କପି ହୋଇଗଲା!` : `${label} copied to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const currentAddressText = `${addresses.current.city}, ${addresses.current.state}, ${addresses.current.country}`;
  const permanentAddressText = `${addresses.permanent.village}, PO: ${addresses.permanent.postOffice}, Via: ${addresses.permanent.via}, Dist: ${addresses.permanent.district}, ${addresses.permanent.state}, ${addresses.permanent.country}`;

  return (
    <section id="address" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Navigation2 className="w-3.5 h-3.5" />
            <span>{isOr ? "ଠିକଣା ଓ ମୂଳ ବାସସ୍ଥାନ" : "Residence & Heritage"}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.address.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-3" />
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            {isOr
              ? "ବର୍ତ୍ତମାନର ବାସସ୍ଥାନ (ଗୁଜୁରାଟ) ଏବଂ ଓଡ଼ିଶାରେ ଥିବା ପୈତୃକ ମୂଳ ଗ୍ରାମର ସମ୍ପୂର୍ଣ୍ଣ ଠିକଣା"
              : "Present residential base in Gujarat and ancestral roots in Odisha, India."}
          </p>
        </div>

        {/* Address Cards (2 Cards) */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* 1. Present Address */}
          <div className="bg-background rounded-2xl border border-gold/25 p-6 md:p-8 shadow-card flex flex-col justify-between hover:border-gold/45 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {t.address.currentLabel}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {isOr ? "ପ୍ରାର୍ଥୀ ଓ ପରିବାରର ବର୍ତ୍ତମାନର ସ୍ଥାନ" : "Present Residence & Work Base"}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/25">
                  {isOr ? "ସୁରଟ, ଗୁଜୁରାଟ" : "Surat Base"}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-card border border-gold/15 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-base mb-1">
                      {isOr ? "ସୁରଟ, ଗୁଜୁରାଟ" : "Surat, Gujarat"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isOr ? "ଭାରତ (ପରିବାର ଏଠାରେ ସ୍ଥାୟୀ ଭାବରେ ବସବାସ କରୁଛନ୍ତି)" : "India (Family residing here)"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                {isOr
                  ? "ପରିବାର ଦୀର୍ଘ ବର୍ଷ ଧରି ସୁରଟରେ ସ୍ଥାପିତ | ପ୍ରାର୍ଥୀ ମଧ୍ୟ ଏଠାରୁ ନିଜର ଆଇଟି କାର୍ଯ୍ୟ ରିମୋଟ୍ ଭାବରେ ସମ୍ପାଦନ କରୁଛନ୍ତି |"
                  : "The family is well settled in Surat, Gujarat. Candidate works remotely from here with excellent connectivity."}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-gold/15">
              <button
                onClick={() =>
                  copyToClipboard(
                    currentAddressText,
                    "current",
                    isOr ? "ବର୍ତ୍ତମାନର ଠିକଣା" : "Current Address"
                  )
                }
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gold/10 hover:bg-gold/20 text-gold text-xs font-semibold transition-colors"
              >
                {copiedKey === "current" ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{isOr ? "କପି ହୋଇଛି" : "Copied"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{isOr ? "ଠିକଣା କପି କରନ୍ତୁ" : "Copy Address"}</span>
                  </>
                )}
              </button>
              <a
                href="https://maps.google.com/?q=Surat,Gujarat,India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-gold/30 hover:bg-gold/10 text-foreground text-xs font-medium transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
                <span>{isOr ? "ମ୍ୟାପ୍" : "Maps"}</span>
              </a>
            </div>
          </div>

          {/* 2. Permanent / Native Address */}
          <div className="bg-background rounded-2xl border border-gold/25 p-6 md:p-8 shadow-card flex flex-col justify-between hover:border-gold/45 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {t.address.permanentLabel}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {isOr ? "ପୈତୃକ ମୂଳ ବାସସ୍ଥାନ" : "Ancestral Village & Roots"}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/25">
                  {isOr ? "ଗଞ୍ଜାମ, ଓଡ଼ିଶା" : "Ganjam, Odisha"}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-card border border-gold/15 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground text-base mb-1">
                      {isOr ? "ଗ୍ରାମ: ମୁକ୍ତାପୁଞ୍ଜି" : "At: Muktapunji"}
                    </p>
                    <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                      {isOr ? "ପୋଷ୍ଟ: ଜହଦା" : "P.O: Jahada"} • {isOr ? "ଭାୟା: ଧରାକୋଟ" : "Via: Dharakot"}
                      <br />
                      {isOr ? "ଜିଲ୍ଲା: ଗଞ୍ଜାମ, ଓଡ଼ିଶା - ଭାରତ" : "Dist: Ganjam, Odisha, India"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                {isOr
                  ? "ଓଡ଼ିଶାର ଗଞ୍ଜାମ ଜିଲ୍ଲାରେ ପୈତୃକ ଭିଟାମାଟି | ଆମେ ନିଜର ସଂସ୍କୃତି, ପର୍ବପର୍ବାଣୀ ଏବଂ ଜ୍ଞାତିକୁଟୁମ୍ବ ସହିତ ଗଭୀର ଭାବରେ ଯୋଡ଼ି ହୋଇ ରହିଛୁ |"
                  : "Our ancestral roots belong to Ganjam district, Odisha. We celebrate all traditional festivals and maintain close ties with relatives."}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-gold/15">
              <button
                onClick={() =>
                  copyToClipboard(
                    permanentAddressText,
                    "permanent",
                    isOr ? "ପୈତୃକ ଠିକଣା" : "Native Address"
                  )
                }
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gold/10 hover:bg-gold/20 text-gold text-xs font-semibold transition-colors"
              >
                {copiedKey === "permanent" ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{isOr ? "କପି ହୋଇଛି" : "Copied"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{isOr ? "ଠିକଣା କପି କରନ୍ତୁ" : "Copy Address"}</span>
                  </>
                )}
              </button>
              <a
                href="https://maps.google.com/?q=Dharakot,Ganjam,Odisha,India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-gold/30 hover:bg-gold/10 text-foreground text-xs font-medium transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
                <span>{isOr ? "ମ୍ୟାପ୍" : "Maps"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
