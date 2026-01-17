import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  personalDetails,
  familyDetails,
  addresses
} from "@/data/biodata";
import { TranslationData } from "@/data/translations";
import profileImg from "@/assets/gallery/mukesh_profile.jpg";

export const generateBiodataPDF = (t: TranslationData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const goldColor: [number, number, number] = [184, 134, 11];
  const textColor: [number, number, number] = [31, 41, 55];
  const mutedTextColor: [number, number, number] = [107, 114, 128];

  let yPosition = 25;

  // Helper: Draw Page Decoration (Border)
  const drawPageBorder = () => {
    doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setLineWidth(0.5);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
    doc.setLineWidth(0.2);
    doc.rect(12, 12, pageWidth - 24, pageHeight - 24);
  };

  // Helper: Section Header
  const addSectionHeader = (title: string) => {
    checkPageBreak(20);
    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.rect(20, yPosition, pageWidth - 40, 10, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text(title.toUpperCase(), pageWidth / 2, yPosition + 7, { align: "center" });
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    yPosition += 15;
  };

  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - 25) {
      doc.addPage();
      drawPageBorder();
      yPosition = 25;
      return true;
    }
    return false;
  };

  const addWrappedText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = textColor) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    doc.setFont("helvetica", isBold ? "bold" : "normal");

    const margin = 25;
    const maxWidth = pageWidth - 2 * margin;
    const lines = doc.splitTextToSize(text, maxWidth);

    lines.forEach((line: string) => {
      checkPageBreak(7);
      doc.text(line, margin, yPosition);
      yPosition += 7;
    });
  };

  // --- Start Generation ---
  drawPageBorder();

  // 1. Header with Image & Name
  try {
    // Round Profile Image (approximate with a clip if possible, or just square for simplicity in standard jspdf)
    // Custom rounding is hard in basic jspdf without plugins, so we use a styled square or just add the image.
    doc.addImage(profileImg, "JPEG", 25, 20, 35, 35);
  } catch (e) {
    console.error("Could not load profile image for PDF", e);
  }

  // Name & Tagline
  doc.setFontSize(26);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
  doc.text(t.personalDetails.name, 65, 32);

  doc.setFontSize(12);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(mutedTextColor[0], mutedTextColor[1], mutedTextColor[2]);
  const taglineLines = doc.splitTextToSize(t.personalDetails.tagline, pageWidth - 90);
  doc.text(taglineLines, 65, 40);

  yPosition = 65;

  // 2. Personal Details Table
  addSectionHeader(t.navigation.personal || "Personal Details");

  const personalData = [
    [t.personalDetails.dateOfBirthLabel, personalDetails.dateOfBirth],
    [t.personalDetails.ageLabel, t.personalDetails.age],
    [t.personalDetails.timeOfBirthLabel, personalDetails.timeOfBirth],
    [t.personalDetails.placeOfBirthLabel, t.personalDetails.placeOfBirth],
    [t.personalDetails.rashiLabel, t.personalDetails.rashiLabel === "Rashi" ? personalDetails.rashi : "ସିଂହ ରାଶି"],
    [t.personalDetails.nakshatraLabel, t.personalDetails.nakshatraLabel === "Nakshatra" ? personalDetails.nakshatra : "ମଘା ନକ୍ଷତ୍ର"],
    [t.personalDetails.heightLabel, t.personalDetails.height],
    [t.personalDetails.complexionLabel, t.personalDetails.complexion],
    [t.personalDetails.dietLabel, t.personalDetails.diet],
    [t.personalDetails.languageLabel, t.personalDetails.languages],
  ];

  autoTable(doc, {
    startY: yPosition,
    body: personalData,
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 3, textColor: textColor },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 50 } },
    margin: { left: 25 },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 10;

  // 3. About Me
  addSectionHeader(t.about.title);
  addWrappedText(t.about.content, 10);
  yPosition += 10;

  // 4. Education & Career
  addSectionHeader(t.educationWork.title);

  // Education
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(t.educationWork.educationTitle + ":", 25, yPosition);
  yPosition += 8;

  t.educationWork.educationDetails.forEach(edu => {
    checkPageBreak(15);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(edu.degree + " in " + edu.field, 30, yPosition);
    yPosition += 5;
    doc.setFont("helvetica", "normal");
    doc.text(edu.institution + " (" + edu.duration + ")", 30, yPosition);
    yPosition += 10;
  });

  // Career
  checkPageBreak(25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text(t.educationWork.workTitle + ":", 25, yPosition);
  yPosition += 8;

  const work = t.educationWork.workDetails;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(work.currentRole, 30, yPosition);
  yPosition += 5;
  doc.setFont("helvetica", "normal");
  doc.text(work.company + " | " + work.location, 30, yPosition);
  yPosition += 5;
  doc.text(work.experience, 30, yPosition);
  yPosition += 7;
  addWrappedText(work.description, 10);
  yPosition += 10;

  // 5. Hobbies
  addSectionHeader(t.hobbies.title);
  const hobbiesText = t.hobbies.list.join(" • ");
  addWrappedText(hobbiesText, 10);
  yPosition += 15;

  // 6. Family Background
  addSectionHeader(t.family.title);
  addWrappedText(t.family.background, 10);
  yPosition += 10;

  // Family Members Table
  const familyData = t.family.members.map(m => [m.relation, m.name, m.profession, m.mobile || "-"]);
  autoTable(doc, {
    startY: yPosition,
    head: [[t.family.headers.relation, t.family.headers.name, t.family.headers.profession, "Mobile"]],
    body: familyData,
    theme: "striped",
    headStyles: { fillColor: goldColor, textColor: 255 },
    styles: { fontSize: 9, cellPadding: 3 },
    margin: { left: 25, right: 25 },
  });
  yPosition = (doc as any).lastAutoTable.finalY + 15;

  // 7. Partner Preferences
  addSectionHeader(t.partner.title);
  addWrappedText(t.partner.subtitle, 10);
  yPosition += 5;

  const partnerData = [
    [t.partner.labels.ageRange, t.partner.ageRange],
    [t.partner.labels.height, t.partner.height],
    [t.partner.labels.education, t.partner.education],
    [t.partner.labels.workingPreference, t.partner.workingPreference],
    [t.partner.labels.familyValues, t.partner.familyValues],
    [t.partner.labels.location, t.partner.location],
  ];
  autoTable(doc, {
    startY: yPosition,
    body: partnerData,
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 2, textColor: textColor },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 50 } },
    margin: { left: 25 },
  });
  yPosition = (doc as any).lastAutoTable.finalY + 15;

  // 8. Contact & Socials
  addSectionHeader(t.contact.title);
  const contactInfo = [
    [t.personalDetails.phoneLabel, "+91 " + personalDetails.phone],
    [t.personalDetails.instagramLabel, "Instagram: @mukeshsbehera"],
    ["LinkedIn", personalDetails.linkedIn.split("in/")[1].replace("/", "")],
  ];
  autoTable(doc, {
    startY: yPosition,
    body: contactInfo,
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 2 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 50 } },
    margin: { left: 25 },
  });

  // Save PDF
  const filename = t.pdf.filename || `${personalDetails.name.replace(/\s+/g, "_")}_Biodata.pdf`;
  doc.save(filename);
};
