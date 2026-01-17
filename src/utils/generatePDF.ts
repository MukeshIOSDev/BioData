import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  personalDetails,
  aboutMe,
  hobbiesInterests,
  familyDetails,
  familyBackground,
  addresses,
  educationDetails,
  workDetails,
  partnerPreferences,
} from "@/data/biodata";

export const generateBiodataPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Helper function to add a new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (
    text: string,
    fontSize: number,
    isBold: boolean = false,
    color: [number, number, number] = [0, 0, 0]
  ) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    if (isBold) {
      doc.setFont("helvetica", "bold");
    } else {
      doc.setFont("helvetica", "normal");
    }

    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    const lines = doc.splitTextToSize(text, maxWidth);

    lines.forEach((line: string) => {
      checkPageBreak(7);
      doc.text(line, margin, yPosition);
      yPosition += 7;
    });
  };

  // Title
  doc.setFontSize(24);
  doc.setTextColor(184, 134, 11); // Gold color
  doc.setFont("helvetica", "bold");
  doc.text("MARRIAGE BIODATA", pageWidth / 2, yPosition, { align: "center" });
  yPosition += 15;

  // Name
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.text(personalDetails.name, pageWidth / 2, yPosition, { align: "center" });
  yPosition += 10;

  // Tagline
  doc.setFontSize(12);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(100, 100, 100);
  doc.text(personalDetails.tagline, pageWidth / 2, yPosition, {
    align: "center",
  });
  yPosition += 15;

  // Personal Details Section
  checkPageBreak(30);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Personal Details", 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);

  const personalData = [
    ["Date of Birth", personalDetails.dateOfBirth],
    ["Age", personalDetails.age],
    ["Time of Birth", personalDetails.timeOfBirth],
    ["Place of Birth", personalDetails.placeOfBirth],
    ["Rashi", personalDetails.rashi],
    ["Nakshatra", personalDetails.nakshatra],
    ["Gotra", personalDetails.gotra],
    ["Height", personalDetails.height],
    ["Weight", personalDetails.weight],
    ["Complexion", personalDetails.complexion],
    ["Blood Group", personalDetails.bloodGroup],
    ["Marital Status", personalDetails.maritalStatus],
    ["Diet", personalDetails.diet],
    ["Languages", personalDetails.language],
  ];

  autoTable(doc, {
    startY: yPosition,
    head: [],
    body: personalData,
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 3 },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 60 },
      1: { cellWidth: "auto" },
    },
    margin: { left: 20, right: 20 },
  });

  yPosition = (doc as any).lastAutoTable?.finalY + 10 || yPosition + 20;

  // About Me Section
  checkPageBreak(30);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("About Me", 20, yPosition);
  yPosition += 10;

  addText(aboutMe, 10, false, [0, 0, 0]);
  yPosition += 5;

  // Education & Work Section
  checkPageBreak(30);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Education & Career", 20, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Education:", 20, yPosition);
  yPosition += 7;

  educationDetails.forEach((edu) => {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${edu.degree} - ${edu.field}`, 25, yPosition);
    yPosition += 6;
    doc.text(`${edu.institution} (${edu.duration})`, 25, yPosition);
    yPosition += 8;
  });

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Current Position:", 20, yPosition);
  yPosition += 7;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(
    `${workDetails.currentRole} at ${workDetails.company}`,
    25,
    yPosition
  );
  yPosition += 6;
  doc.text(`Location: ${workDetails.location}`, 25, yPosition);
  yPosition += 6;
  doc.text(`Experience: ${workDetails.experience}`, 25, yPosition);
  yPosition += 6;
  doc.text(`Annual Salary: ${personalDetails.annualSalary}`, 25, yPosition);
  yPosition += 6;
  addText(workDetails.description, 10, false, [0, 0, 0]);
  yPosition += 5;

  // Hobbies & Interests
  checkPageBreak(20);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Hobbies & Interests", 20, yPosition);
  yPosition += 10;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(hobbiesInterests.join(", "), 20, yPosition);
  yPosition += 10;

  // Family Details Section
  checkPageBreak(30);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Family Background", 20, yPosition);
  yPosition += 10;

  addText(familyBackground, 10, false, [0, 0, 0]);
  yPosition += 5;

  checkPageBreak(30);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Family Members", 20, yPosition);
  yPosition += 10;

  const familyData = familyDetails.map((member) => [
    member.relation,
    member.name,
    member.profession,
    member.mobile || "N/A",
  ]);

  autoTable(doc, {
    startY: yPosition,
    head: [["Relation", "Name", "Profession", "Mobile"]],
    body: familyData,
    theme: "striped",
    headStyles: {
      fillColor: [184, 134, 11],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    styles: { fontSize: 10, cellPadding: 3 },
    margin: { left: 20, right: 20 },
  });

  yPosition = (doc as any).lastAutoTable?.finalY + 10 || yPosition + 20;

  // Address Section
  checkPageBreak(30);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Address Details", 20, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Current Address:", 20, yPosition);
  yPosition += 7;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(
    `${addresses.current.city}, ${addresses.current.state}`,
    25,
    yPosition
  );
  yPosition += 6;
  doc.text(addresses.current.country, 25, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Native Place:", 20, yPosition);
  yPosition += 7;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`${addresses.permanent.village}`, 25, yPosition);
  yPosition += 6;
  doc.text(
    `P.O: ${addresses.permanent.postOffice}, Via: ${addresses.permanent.via}`,
    25,
    yPosition
  );
  yPosition += 6;
  doc.text(
    `${addresses.permanent.district}, ${addresses.permanent.state}`,
    25,
    yPosition
  );
  yPosition += 6;
  doc.text(addresses.permanent.country, 25, yPosition);
  yPosition += 10;

  // Partner Preferences
  checkPageBreak(30);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Partner Preferences", 20, yPosition);
  yPosition += 10;

  const preferenceData = [
    ["Age Range", partnerPreferences.ageRange],
    ["Height", partnerPreferences.height],
    ["Education", partnerPreferences.education],
    ["Working Preference", partnerPreferences.workingPreference],
    ["Family Values", partnerPreferences.familyValues],
    ["Location", partnerPreferences.location],
  ];

  autoTable(doc, {
    startY: yPosition,
    head: [],
    body: preferenceData,
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 3 },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 60 },
      1: { cellWidth: "auto" },
    },
    margin: { left: 20, right: 20 },
  });

  yPosition = (doc as any).lastAutoTable?.finalY + 10 || yPosition + 20;

  // Contact Information
  checkPageBreak(20);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(184, 134, 11);
  doc.text("Contact Information", 20, yPosition);
  yPosition += 10;

  const contactData = [
    ["Phone", personalDetails.phone],
    ["Email", personalDetails.email],
    ["LinkedIn", personalDetails.linkedIn],
  ];

  autoTable(doc, {
    startY: yPosition,
    head: [],
    body: contactData,
    theme: "plain",
    styles: { fontSize: 10, cellPadding: 3 },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 60 },
      1: { cellWidth: "auto" },
    },
    margin: { left: 20, right: 20 },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 15;

  // Footer
  checkPageBreak(10);
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(150, 150, 150);
  doc.text("Generated from Biodata Website", pageWidth / 2, yPosition, {
    align: "center",
  });

  // Save the PDF
  doc.save(`${personalDetails.name.replace(/\s+/g, "_")}_Biodata.pdf`);
};
