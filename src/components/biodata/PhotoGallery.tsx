import { useState } from "react";
import { X } from "lucide-react";
import { personalDetails } from "@/data/biodata";
import img2 from "@/assets/gallery/mukesh_1.jpg";
import img3 from "@/assets/gallery/mukesh_2.jpg";
import img4 from "@/assets/gallery/mukesh_3.jpg";
import img6 from "@/assets/gallery/mukesh_family_1.jpg";
import img8 from "@/assets/gallery/mukesh_wedding_1.jpg";
import img9 from "@/assets/gallery/mukesh_lifestyle_mirror.jpg";

const galleryImages = [
  {
    src: img6,
    alt: `${personalDetails.name} - With family in mountains`,
    category: "Family",
  },
  {
    src: img8,
    alt: `${personalDetails.name} - Formal wear at an event`,
    category: "Formal",
  },
  {
    src: img2,
    alt: `${personalDetails.name} - Traditional wear at a temple`,
    category: "Traditional",
  },
  {
    src: img3,
    alt: `${personalDetails.name} - Casual outdoor photo`,
    category: "Lifestyle",
  },
  {
    src: img4,
    alt: `${personalDetails.name} - Beach side photo`,
    category: "Travel",
  },
  {
    src: img9,
    alt: `${personalDetails.name} - Mirror selfie`,
    category: "Lifestyle",
  },
];

import { useLanguage } from "@/contexts/LanguageContext";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const galleryImagesWithSrc = t.gallery.images.map((img, idx) => {
    const sources = [img6, img8, img2, img3, img4, img9];
    return {
      ...img,
      src: sources[idx],
      category: t.gallery.categories[img.categoryKey as keyof typeof t.gallery.categories]
    };
  });

  return (
    <section id="gallery" className="py-20 bg-card" aria-label="Photo Gallery">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.gallery.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              {t.gallery.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImagesWithSrc.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 border-2 border-transparent hover:border-gold/30"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ objectPosition: "center 35%" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <span className="inline-block px-3 py-1 bg-gold/95 text-primary-foreground text-xs font-medium rounded-full shadow-lg">
                    {image.category}
                  </span>
                </div>
                {/* Highlight overlay on hover */}
                <div className="absolute inset-0 ring-2 ring-gold/0 group-hover:ring-gold/50 transition-all duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt={`${t.personalDetails.name} - Full size biodata gallery photo preview`}
            className="max-w-full max-h-[90vh] rounded-xl shadow-elevated animate-scale-in object-contain"
            style={{ objectPosition: "center center" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
