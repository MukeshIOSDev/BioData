import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  personalDetails,
  familyDetails,
  addresses,
  educationDetails,
  workDetails,
} from "@/data/biodata";
import { TranslationData } from "@/data/translations";
import emblemImg from "@/assets/biodata-emblem.jpg";

interface JsPDFWithAutoTable extends jsPDF {
  lastAutoTable: {
    finalY: number;
  };
}

// Helper to reliably load images for jsPDF in the browser
const loadImgElement = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = src;
  });
};

export const generateBiodataPDF = async (t?: TranslationData) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  }) as JsPDFWithAutoTable;

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Premium Royal Matrimonial Color Palette
  const goldColor: [number, number, number] = [184, 134, 11]; // #B8860B
  const darkGold: [number, number, number] = [145, 105, 8];
  const textColor: [number, number, number] = [28, 36, 48];
  const mutedTextColor: [number, number, number] = [95, 105, 120];
  const bannerBg: [number, number, number] = [248, 243, 230];
  const ribbonBg: [number, number, number] = [252, 250, 244];

  // Helper: Draw Double Royal Border and Page Footer (applied to all pages at the end)
  const drawPageBorders = (pageNum: number, totalPages: number) => {
    // Outer border
    doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setLineWidth(0.65);
    doc.rect(8, 8, pageWidth - 16, pageHeight - 16);

    // Inner thin border
    doc.setLineWidth(0.25);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

    // Corner decorative accents
    const corners = [
      [10, 10],
      [pageWidth - 10, 10],
      [10, pageHeight - 10],
      [pageWidth - 10, pageHeight - 10],
    ];
    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    corners.forEach(([cx, cy]) => {
      doc.circle(cx, cy, 0.8, "F");
    });

    // Page footer line
    doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setLineWidth(0.3);
    doc.line(16, pageHeight - 14, pageWidth - 16, pageHeight - 14);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
    doc.text(
      "Mukesh Behera — Marriage Biodata | Strictly for Matrimonial Purpose",
      16,
      pageHeight - 10
    );

    doc.setFont("helvetica", "bold");
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - 16, pageHeight - 10, {
      align: "right",
    });
  };

  // Helper: Add Section Banner
  const addSectionBanner = (title: string, yPos: number): number => {
    doc.setFillColor(bannerBg[0], bannerBg[1], bannerBg[2]);
    doc.roundedRect(16, yPos, pageWidth - 32, 6.2, 1, 1, "F");

    doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(16, yPos, pageWidth - 32, 6.2, 1, 1, "S");

    // Decorative side dots
    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.circle(20, yPos + 3.1, 0.8, "F");
    doc.circle(pageWidth - 20, yPos + 3.1, 0.8, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(darkGold[0], darkGold[1], darkGold[2]);
    doc.text(title.toUpperCase(), pageWidth / 2, yPos + 4.3, { align: "center" });

    return yPos + 8;
  };

  // =========================================================================
  // PAGE 1: Core Candidate Profile, Horoscope & Professional Career
  // =========================================================================

  // 1. Auspicious Sacred Heading (baseline at y = 16)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.text("|| OM SHRI GANESHAYA NAMAH ||", pageWidth / 2, 16, { align: "center" });

  // 2. Auspicious Lord Ganesha Emblem (placed at y = 18 to y = 40)
  const emblemSize = 22;
  try {
    const loadedImg = await loadImgElement(emblemImg);
    doc.addImage(
      loadedImg,
      "JPEG",
      (pageWidth - emblemSize) / 2,
      18,
      emblemSize,
      emblemSize
    );
  } catch (e) {
    console.warn("Could not load emblem image for PDF", e);
  }

  // 3. Candidate Full Name (baseline at y = 48.5, well below the emblem at y = 40)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.text(personalDetails.name.toUpperCase(), pageWidth / 2, 48.5, { align: "center" });

  // 4. Tagline (baseline at y = 54)
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
  doc.text(`"${personalDetails.tagline}"`, pageWidth / 2, 54, { align: "center" });

  // 5. Highlights Ribbon Box (y = 57.5 to y = 63.5)
  doc.setFillColor(ribbonBg[0], ribbonBg[1], ribbonBg[2]);
  doc.roundedRect(16, 57.5, pageWidth - 32, 6, 1, 1, "F");
  doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.setLineWidth(0.2);
  doc.roundedRect(16, 57.5, pageWidth - 32, 6, 1, 1, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const highlightBar = `Sr. Software Developer (Remote)  •  B.Tech (CSE)  •  ${personalDetails.age}  •  ${personalDetails.height}  •  Surat (Gujarat)`;
  doc.text(highlightBar, pageWidth / 2, 61.7, { align: "center" });

  // 6. Section 1: Personal & Physical Profile (starts at y = 68)
  let y = 68;
  y = addSectionBanner("1. Personal & Physical Profile", y);

  const personalRows = [
    ["Date of Birth", personalDetails.dateOfBirth, "Height", `${personalDetails.height} (173 cm)`],
    ["Current Age", personalDetails.age, "Weight", personalDetails.weight],
    ["Complexion", personalDetails.complexion, "Blood Group", personalDetails.bloodGroup],
    ["Diet / Habits", `${personalDetails.diet} (Pure Veg)`, "Mother Tongue", "Odia"],
    ["Languages Known", personalDetails.language, "Marital Status", "Never Married (Unmarried)"],
  ];

  autoTable(doc, {
    startY: y,
    body: personalRows,
    theme: "plain",
    styles: {
      fontSize: 8,
      cellPadding: 1.5,
      textColor: textColor,
    },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      1: { cellWidth: 55 },
      2: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      3: { cellWidth: 55 },
    },
    margin: { left: 16, right: 16 },
  });
  y = doc.lastAutoTable.finalY + 4;

  // 7. Section 2: Horoscope & Astrological Details (Kundali)
  y = addSectionBanner("2. Horoscope & Astrological Details (Kundali)", y);

  const astroRows = [
    ["Time of Birth", personalDetails.timeOfBirth, "Rashi (Moon Sign)", `${personalDetails.rashi} (Simha Rashi)`],
    ["Place of Birth", personalDetails.placeOfBirth, "Nakshatra", `${personalDetails.nakshatra} (Pada 1)`],
    ["Gotra", personalDetails.gotra, "Manglik Status", "Non-Manglik (Normal / Shubh)"],
    [
      "Kundali Matching",
      {
        content: "Complete birth horoscope available upon request for compatibility matching",
        colSpan: 3,
      },
    ],
  ];

  autoTable(doc, {
    startY: y,
    body: astroRows,
    theme: "plain",
    styles: {
      fontSize: 8,
      cellPadding: 1.5,
      textColor: textColor,
    },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      1: { cellWidth: 55 },
      2: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      3: { cellWidth: 55 },
    },
    margin: { left: 16, right: 16 },
  });
  y = doc.lastAutoTable.finalY + 4;

  // 8. Section 3: Education & Professional Career
  y = addSectionBanner("3. Education & Professional Career", y);

  const careerRows = [
    ["Current Role", `${workDetails.currentRole} (Permanent Remote / Work From Home)`],
    ["Organization", `${workDetails.company} (Headquartered in Mumbai, Maharashtra)`],
    ["Experience & Domain", `${workDetails.experience} | Specialized in Mobile & Web Engineering`],
    ["Career Stability", workDetails.description],
    ["Highest Degree", `${educationDetails[0].degree} in ${educationDetails[0].field} (${educationDetails[0].duration})`],
    ["Institute", educationDetails[0].institution],
  ];

  autoTable(doc, {
    startY: y,
    body: careerRows,
    theme: "plain",
    styles: {
      fontSize: 8,
      cellPadding: 1.5,
      textColor: textColor,
    },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 36, textColor: darkGold },
      1: { cellWidth: 142 },
    },
    margin: { left: 16, right: 16 },
  });

  // =========================================================================
  // PAGE 2: Family Background, About Me, Partner Preferences, Address & Contact
  // =========================================================================
  doc.addPage();

  // Page 2 Mini Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.text("MUKESH BEHERA — MARRIAGE BIODATA", pageWidth / 2, 15, { align: "center" });

  // 9. Section 4: Family Background & Members
  y = 19;
  y = addSectionBanner("4. Family Background & Members", y);

  // Family narrative intro
  y += 3.5; // Top padding for family background narrative paragraph
  const famSummary =
    "We are a close-knit, middle-class Odia family permanently settled in Surat, Gujarat. We deeply cherish traditional cultural values, mutual respect, education, and strong family bonds.";
  const famLines = doc.splitTextToSize(famSummary, pageWidth - 32);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
  doc.text(famLines, 16, y);
  y += famLines.length * 3.5 + 2.5;

  const familyMembersTable = [
    [familyDetails[0].relation, familyDetails[0].name, familyDetails[0].profession, `+91 ${familyDetails[0].mobile}`],
    [familyDetails[1].relation, familyDetails[1].name, familyDetails[1].profession, `+91 ${familyDetails[1].mobile}`],
    [familyDetails[2].relation, familyDetails[2].name, familyDetails[2].profession, "Unmarried (Younger brother)"],
  ];

  autoTable(doc, {
    startY: y,
    head: [["Relationship", "Full Name", "Profession / Occupation", "Contact / Note"]],
    body: familyMembersTable,
    theme: "striped",
    headStyles: {
      fillColor: goldColor,
      textColor: 255,
      fontStyle: "bold",
      fontSize: 8,
      cellPadding: 1.8,
    },
    styles: {
      fontSize: 8,
      cellPadding: 1.8,
      textColor: textColor,
    },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 32 },
      1: { cellWidth: 48 },
      2: { cellWidth: 54 },
      3: { cellWidth: 44 },
    },
    margin: { left: 16, right: 16 },
  });
  y = doc.lastAutoTable.finalY + 4;

  // 10. Section 5: About Candidate & Personal Outlook
  y = addSectionBanner("5. About Candidate & Personal Outlook", y);

  const aboutRows = [
    [
      "Personal Outlook",
      "Simple, caring, and family-oriented person who values traditional moral principles alongside modern progressive thinking. Believes in honest communication and mutual respect.",
    ],
    [
      "Hobbies & Leisure",
      "Spending time with family • Watching movies • Traveling & exploring • Learning new technologies • Listening to music • Reading books • Fitness & wellness",
    ],
  ];

  autoTable(doc, {
    startY: y,
    body: aboutRows,
    theme: "plain",
    styles: {
      fontSize: 8,
      cellPadding: 1.5,
      textColor: textColor,
    },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 36, textColor: darkGold },
      1: { cellWidth: 142 },
    },
    margin: { left: 16, right: 16 },
  });
  y = doc.lastAutoTable.finalY + 4;

  // 11. Section 6: Life Partner Preferences
  y = addSectionBanner("6. Life Partner Preferences", y);

  const partnerRows = [
    ["Age Range", "20 – 25 Years", "Height Range", "5'0\" – 5'6\""],
    ["Education", "Graduate or above (Any discipline)", "Working Status", "Working or Non-working (Personal choice)"],
    ["Family Values", "Moderate / Traditional & Caring", "Location", "Odisha or All Over India"],
    [
      "Expectations",
      {
        content:
          "Looking for an understanding companion who believes in mutual respect and family happiness. No dowry expectations.",
        colSpan: 3,
      },
    ],
  ];

  autoTable(doc, {
    startY: y,
    body: partnerRows,
    theme: "plain",
    styles: {
      fontSize: 8,
      cellPadding: 1.5,
      textColor: textColor,
    },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      1: { cellWidth: 55 },
      2: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      3: { cellWidth: 55 },
    },
    margin: { left: 16, right: 16 },
  });
  y = doc.lastAutoTable.finalY + 4;

  // 12. Section 7: Present Residence & Ancestral Roots
  y = addSectionBanner("7. Present Residence & Ancestral Roots", y);

  const addressRows = [
    [
      "Surat, Gujarat, India\n(Family settled in Surat; candidate works remotely)",
      `At: ${addresses.permanent.village}, P.O: ${addresses.permanent.postOffice}, Via: ${addresses.permanent.via}\nDist: ${addresses.permanent.district}, State: ${addresses.permanent.state}, India\n(Ancestral roots & native heritage)`,
    ],
  ];

  autoTable(doc, {
    startY: y,
    head: [["Present Residential Base (Surat, Gujarat)", "Permanent Ancestral Roots (Ganjam, Odisha)"]],
    body: addressRows,
    theme: "plain",
    headStyles: {
      fillColor: ribbonBg,
      textColor: darkGold,
      fontStyle: "bold",
      fontSize: 8,
      cellPadding: 1.8,
    },
    styles: {
      fontSize: 7.8,
      cellPadding: 1.8,
      textColor: textColor,
    },
    columnStyles: {
      0: { cellWidth: 89 },
      1: { cellWidth: 89 },
    },
    margin: { left: 16, right: 16 },
  });
  y = doc.lastAutoTable.finalY + 4;

  // 13. Section 8: Family Contact & Communication
  y = addSectionBanner("8. Family Contact & Communication", y);

  const contactRows = [
    ["Candidate (Mukesh)", `+91 ${personalDetails.phone} (Call & WhatsApp)`, "Father (Shyam Ghan)", `+91 ${familyDetails[0].mobile}`],
    ["Mother (Sukanti)", `+91 ${familyDetails[1].mobile}`, "Social Profiles", "LinkedIn: mukesh-behera • Instagram: @mukeshsbehera"],
  ];

  autoTable(doc, {
    startY: y,
    body: contactRows,
    theme: "plain",
    styles: {
      fontSize: 8,
      cellPadding: 1.5,
      textColor: textColor,
    },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      1: { cellWidth: 55 },
      2: { fontStyle: "bold", cellWidth: 34, textColor: darkGold },
      3: { cellWidth: 55 },
    },
    margin: { left: 16, right: 16 },
  });

  // Apply borders and page numbering to each page cleanly at the end
  const totalPages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    drawPageBorders(p, totalPages);
  }

  // Save the PDF
  const filename = t?.pdf?.filename || `${personalDetails.name.replace(/\s+/g, "_")}_Marriage_Biodata.pdf`;
  doc.save(filename);
};
