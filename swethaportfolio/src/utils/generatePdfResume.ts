import { jsPDF } from 'jspdf';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  INTERNSHIPS_DATA,
  PROJECTS_DATA,
  CERTIFICATES_DATA,
  ACHIEVEMENTS_DATA,
  SKILLS_DATA,
  RESEARCH_PAPER
} from '../data/portfolioData';

export function generatePdfResume() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  let y = margin;

  // Helper to add new page if needed
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Accent Line
  doc.setFillColor(16, 185, 129); // emerald-500
  doc.rect(0, 38, pageWidth, 1.8, 'F');

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(PERSONAL_INFO.name, margin, 16);

  // Subtitle
  doc.setFontSize(10.5);
  doc.setTextColor(52, 211, 153); // emerald-400
  doc.setFont('helvetica', 'normal');
  doc.text('Master of Computer Applications (MCA) Candidate | Full-Stack Web Developer & Data Analyst', margin, 23);

  // Contact line
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225); // slate-300
  const contactText = `Phone: ${PERSONAL_INFO.phone}  |  Email: ${PERSONAL_INFO.email}  |  GitHub: ${PERSONAL_INFO.githubUsername}  |  LinkedIn: ${PERSONAL_INFO.linkedinUsername}`;
  doc.text(contactText, margin, 31);

  y = 47;

  // Section Header helper
  const drawSectionHeader = (title: string, iconText: string = '') => {
    checkPageBreak(14);
    doc.setFillColor(241, 245, 249); // slate-100
    doc.roundedRect(margin, y, pageWidth - margin * 2, 6.5, 1, 1, 'F');

    doc.setFillColor(16, 185, 129);
    doc.rect(margin, y, 3, 6.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${title.toUpperCase()}`, margin + 6, y + 4.8);

    y += 9.5;
  };

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(
    'Motivated and detail-oriented Master of Computer Applications (MCA) candidate with hands-on technical internship experience in web development, sensor technology, and UI/UX design. Proven ability to build full-stack web platforms, published IoT research ("Smart Irrigation using IoT"), and modern digital solutions. Recognized with the Best Innovator Award (2026) and active leadership as Secretary of the Mental Wellbeing Club.',
    pageWidth - margin * 2
  );
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 3.8 + 2;

  // 2. EDUCATION
  drawSectionHeader('Education');
  EDUCATION_DATA.forEach((edu) => {
    checkPageBreak(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(16, 185, 129);
    doc.text(edu.score, pageWidth - margin, y, { align: 'right' });

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`${edu.institution}, ${edu.location}`, margin, y);
    doc.setTextColor(100, 116, 139);
    doc.text(edu.period, pageWidth - margin, y, { align: 'right' });

    y += 4.5;
  });

  y += 1;

  // 3. TECHNICAL & PROFESSIONAL SKILLS
  drawSectionHeader('Technical Skills & Core Domains');
  checkPageBreak(22);
  
  const skillCols = [
    { label: 'Programming & Web', val: 'HTML5, Python, SQL, PHP, JavaScript, CSS3/Tailwind' },
    { label: 'AI & Analytical Tools', val: 'ChatGPT, Claude AI, Grok, Power BI, Web Analytics (Accenture)' },
    { label: 'Databases & Cloud', val: 'MongoDB, Microsoft Azure Services, MySQL, Sensor Tech / IoT' },
    { label: 'Productivity & Office', val: 'Microsoft Excel (Advanced), Microsoft PowerPoint, Microsoft Word' },
    { label: 'Core Domains', val: 'Web Development, Data Analytics, Artificial Intelligence, Data Visualization' },
  ];

  skillCols.forEach((sc) => {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${sc.label}: `, margin, y);

    const labelWidth = doc.getTextWidth(`${sc.label}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(sc.val, margin + labelWidth, y);
    y += 4.2;
  });

  y += 2;

  // 4. INTERNSHIPS & EXPERIENCE
  drawSectionHeader('Internship Experience');
  INTERNSHIPS_DATA.forEach((intern) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${intern.title}  |  ${intern.company}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(intern.period, pageWidth - margin, y, { align: 'right' });

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(51, 65, 85);
    const descLines = doc.splitTextToSize(`• ${intern.description}`, pageWidth - margin * 2);
    doc.text(descLines, margin, y);
    y += descLines.length * 3.6 + 1.5;
  });

  // 5. KEY PROJECTS
  drawSectionHeader('Featured Projects');
  PROJECTS_DATA.slice(0, 4).forEach((proj) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${proj.title} (${proj.year})`, margin, y);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(16, 185, 129);
    doc.text(proj.techStack.join(' • '), pageWidth - margin, y, { align: 'right' });

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(51, 65, 85);
    const projDesc = doc.splitTextToSize(`• ${proj.shortDescription} ${proj.keyFeatures[0]}`, pageWidth - margin * 2);
    doc.text(projDesc, margin, y);
    y += projDesc.length * 3.6 + 1.5;
  });

  // 6. RESEARCH PAPER & PUBLICATIONS
  drawSectionHeader('Research & Publications');
  checkPageBreak(15);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(`Paper: "${RESEARCH_PAPER.title}"`, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(RESEARCH_PAPER.date, pageWidth - margin, y, { align: 'right' });

  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(51, 65, 85);
  const confText = doc.splitTextToSize(
    `Presented at ${RESEARCH_PAPER.conference}, organized by ${RESEARCH_PAPER.organizer}, ${RESEARCH_PAPER.institution}. Focus: Automated sensor calibration for soil moisture and water distribution optimization.`,
    pageWidth - margin * 2
  );
  doc.text(confText, margin, y);
  y += confText.length * 3.6 + 3;

  // 7. KEY CERTIFICATES
  drawSectionHeader('Selected Certifications');
  const certItems = CERTIFICATES_DATA.slice(0, 6);
  certItems.forEach((c) => {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.3);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${c.title}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`${c.organization} (${c.date})`, pageWidth - margin, y, { align: 'right' });
    y += 3.8;
  });

  y += 2;

  // 8. KEY HONORS & LEADERSHIP
  drawSectionHeader('Leadership & Key Achievements');
  const achItems = [
    'Best Innovator Award (2026) - Holy Cross College',
    'Secretary of Mental Wellbeing Club (2026) - Holy Cross College',
    '1st Place in Multimedia Presentation (Web Scintillator 2025) & 3rd in Idea Pitching',
    'Student Council Member (SCM) Certificate of Appreciation (2024-2025) - SRC',
    '48-Hour National Hackathon Participant at Sacred Heart College, Tiruppatur (2025)',
    'Diploma in Information Technology (DIT, 3 Years) with Distinction',
    'March Past Team Leader & NSS Volunteer (2022-2024)'
  ];

  achItems.forEach((ach) => {
    checkPageBreak(4.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(51, 65, 85);
    doc.text(`• ${ach}`, margin, y);
    y += 3.6;
  });

  // Footer for every page
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Swetha J | MCA Candidate Portfolio & Resume | Generated on ${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`,
      margin,
      pageHeight - 6
    );
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 6, { align: 'right' });
  }

  // Save the document
  doc.save('Swetha_J_Resume.pdf');
}
