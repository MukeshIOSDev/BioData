import { Helmet } from "react-helmet-async";
import Navigation from "@/components/biodata/Navigation";
import HeroSection from "@/components/biodata/HeroSection";
import PersonalDetails from "@/components/biodata/PersonalDetails";
import AboutSection from "@/components/biodata/AboutSection";
import PhotoGallery from "@/components/biodata/PhotoGallery";
import FamilySection from "@/components/biodata/FamilySection";
import EducationWorkSection from "@/components/biodata/EducationWorkSection";
import PartnerPreferences from "@/components/biodata/PartnerPreferences";
import AddressSection from "@/components/biodata/AddressSection";
import ContactSection from "@/components/biodata/ContactSection";
import Footer from "@/components/biodata/Footer";
import {
  personalDetails,
  familyDetails,
  addresses,
  educationDetails,
  workDetails,
} from "@/data/biodata";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { generateBiodataPDF } from "@/utils/generatePDF";

import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://mukesh-biodata-2026.netlify.app";
  const fullName = t.personalDetails.name;
  const description = t.seo.description;

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: fullName,
    description: description,
    jobTitle: t.personalDetails.currentPositionLabel,
    worksFor: {
      "@type": "Organization",
      name: t.educationWork.workDetails.company,
      address: {
        "@type": "PostalAddress",
        addressLocality: t.educationWork.workDetails.location.split(",")[0],
        addressRegion: t.educationWork.workDetails.location.split(",")[1]?.trim(),
        addressCountry: "India",
      },
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: t.educationWork.educationDetails[0]?.institution,
    },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: addresses.current.city,
        addressRegion: addresses.current.state,
        addressCountry: addresses.current.country,
        addressType: "Current Address",
      },
      {
        "@type": "PostalAddress",
        streetAddress: `${addresses.permanent.village}, P.O: ${addresses.permanent.postOffice}`,
        addressLocality: addresses.permanent.district,
        addressRegion: addresses.permanent.state,
        addressCountry: addresses.permanent.country,
        addressType: "Native Place",
      },
    ],
    email: personalDetails.email,
    telephone: `+91${personalDetails.phone}`,
    sameAs: [personalDetails.linkedIn],
    birthDate: personalDetails.dateOfBirth,
    height: t.personalDetails.height,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Age",
        value: t.personalDetails.age,
      },
      {
        "@type": "PropertyValue",
        name: "Rashi",
        value: personalDetails.rashi,
      },
      {
        "@type": "PropertyValue",
        name: "Nakshatra",
        value: personalDetails.nakshatra,
      },
      {
        "@type": "PropertyValue",
        name: "Education",
        value: t.personalDetails.education,
      },
    ],
    knowsAbout: ["Software Development", "Technology"],
    url: siteUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: fullName,
        item: `${siteUrl}/#personal`,
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{t.seo.title}</title>
        <meta name="title" content={t.seo.title} />
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
        <meta name="author" content={fullName} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://mukesh-biodata-2026.netlify.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mukesh-biodata-2026.netlify.app/" />
        <meta property="og:title" content={t.seo.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="profile:first_name" content="Mukesh" />
        <meta property="profile:last_name" content="Behera" />
        <meta property="profile:username" content="mukesh-lenka" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mukesh-biodata-2026.netlify.app/" />
        <meta name="twitter:title" content={t.seo.title} />
        <meta name="twitter:description" content={t.seo.description} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:creator" content="@mukesh_dev" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#B8860B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=yes" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <PersonalDetails />
        <AboutSection />
        <PhotoGallery />
        <FamilySection />
        <EducationWorkSection />
        <PartnerPreferences />
        <AddressSection />
        <ContactSection />
        <Footer />

        {/* Fixed Download Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            variant="gold"
            size="lg"
            onClick={generateBiodataPDF}
            className="shadow-elevated hover:shadow-gold/50 rounded-full px-6 py-6 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">{t.pdf.download}</span>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Index;
