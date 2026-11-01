import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ts from 'typescript';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Dynamically load portfolio source of truth
const portfolioPath = path.join(projectRoot, 'src', 'lib', 'portfolio.ts');
const portfolioSource = fs.readFileSync(portfolioPath, 'utf8');
const transpiled = ts.transpileModule(portfolioSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }
});
const base64Module = Buffer.from(transpiled.outputText).toString('base64');
const portfolio = await import(`data:text/javascript;base64,${base64Module}`);

const { EMAIL, SOCIALS, PROJECTS } = portfolio;
const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

const roylux = getProject('roylux-ecommerce');
const gym = getProject('safdarabad-gym-khana');
const modeflo = getProject('modeflo');
const fairprices = getProject('fair-prices');
const terrafarm = getProject('terra-farm-nasa');

const photoPath = path.join(projectRoot, 'public', 'momin.jpg');
const outputPath = path.join(projectRoot, 'public', 'Md_Momin_Ali_CV.pdf');

// PDF Geometry - Strict A4 Standard (210 x 297 mm, 595.28 x 841.89 pt)
const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_LEFT = 36;
const MARGIN_RIGHT = 36;
const MARGIN_TOP = 30;
const MARGIN_BOTTOM = 30;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT; // 523.28 pt

// Editorial ATS-Compliant Palette
const COLOR_PRIMARY = '#0f172a'; // Deep Navy / Charcoal
const COLOR_ACCENT = '#3730a3';  // Indigo Accent
const COLOR_MUTED = '#475569';   // Slate Body/Muted
const COLOR_LINE = '#cbd5e1';    // Border / Divider
const COLOR_LINK = '#2563eb';    // Accessible Link Blue

const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: MARGIN_TOP,
    bottom: MARGIN_BOTTOM,
    left: MARGIN_LEFT,
    right: MARGIN_RIGHT
  },
  bufferPages: true,
  autoFirstPage: true
});

let totalPageBreaks = 1;
doc.on('pageAdded', () => {
  totalPageBreaks++;
  console.log(`[PDFKit] Page added event fired. Page count: ${totalPageBreaks}`);
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Helper: Section Heading (14-16 pt, Times-Bold)
function drawSectionHeader(title, y) {
  doc.font('Times-Bold')
     .fontSize(14)
     .fillColor(COLOR_PRIMARY)
     .text(title, MARGIN_LEFT, y, { width: CONTENT_WIDTH, characterSpacing: 0.5 });
  
  const lineY = y + 17;
  doc.strokeColor(COLOR_ACCENT)
     .lineWidth(1.2)
     .moveTo(MARGIN_LEFT, lineY)
     .lineTo(MARGIN_LEFT + CONTENT_WIDTH, lineY)
     .stroke();
  
  return lineY + 6;
}

// Helper: Boundary-Safe Bullet Point (Body: Strictly 12 pt, Times New Roman)
function drawBullet(lead, text, y, options = {}) {
  const bulletX = options.indent || (MARGIN_LEFT + 8);
  const textX = bulletX + 12;
  const availWidth = CONTENT_WIDTH - (textX - MARGIN_LEFT); // Exact boundary

  // Bullet symbol
  doc.font('Times-Bold')
     .fontSize(12)
     .fillColor(COLOR_ACCENT)
     .text('•', bulletX, y, { lineBreak: false });

  // Text content with explicit column width starting at textX
  if (lead) {
    doc.font('Times-Bold')
       .fontSize(12)
       .fillColor(COLOR_PRIMARY)
       .text(lead + ' ', textX, y, { width: availWidth, lineGap: 1.4, continued: true });
    
    doc.font('Times-Roman')
       .fontSize(12)
       .fillColor(COLOR_PRIMARY)
       .text(text, { width: availWidth, lineGap: 1.4, continued: false });
  } else {
    doc.font('Times-Roman')
       .fontSize(12)
       .fillColor(COLOR_PRIMARY)
       .text(text, textX, y, { width: availWidth, lineGap: 1.4, continued: false });
  }

  return doc.y + (options.spacingAfter ?? 2.5);
}

// ============================================================================
// PAGE 1: HEADER, SUMMARY, TECHNICAL SKILLS, EXPERIENCE, EDUCATION
// ============================================================================
let curY = MARGIN_TOP;

// 1. Profile Photo (Top Right Circular Avatar)
const photoSize = 62;
const photoX = MARGIN_LEFT + CONTENT_WIDTH - photoSize;
const photoY = MARGIN_TOP;
const radius = photoSize / 2;

if (fs.existsSync(photoPath)) {
  doc.save();
  doc.circle(photoX + radius, photoY + radius, radius).clip();
  doc.image(photoPath, photoX, photoY, { width: photoSize, height: photoSize });
  doc.restore();
  doc.circle(photoX + radius, photoY + radius, radius)
     .lineWidth(1.5)
     .strokeColor(COLOR_ACCENT)
     .stroke();
}

// 2. Candidate Name & Professional Subheading
const headerTextWidth = CONTENT_WIDTH - photoSize - 14;

doc.font('Times-Bold')
   .fontSize(20)
   .fillColor(COLOR_PRIMARY)
   .text('MD MOMIN ALI', MARGIN_LEFT, curY, { width: headerTextWidth });

curY = doc.y + 1.5;

doc.font('Times-Bold')
   .fontSize(12)
   .fillColor(COLOR_ACCENT)
   .text('Full-Stack Web Developer  |  Shopify Specialist  |  Growth & Tech Partner', MARGIN_LEFT, curY, { width: headerTextWidth });

curY = doc.y + 3.5;

// 3. Contact Information (11.5 pt readable text with active clickable hyperlinks)
const phoneDisplay = '+880 1792 872188';
const phoneLink = SOCIALS.whatsapp || 'https://wa.me/8801792872188';
const emailDisplay = EMAIL;
const emailLink = `mailto:${EMAIL}`;
const webDisplay = 'mominofficial.me';
const webLink = 'https://mominofficial.me';
const behanceDisplay = 'behance.net/mominofficial';
const behanceLink = SOCIALS.behance || 'https://www.behance.net/mominofficial';
const githubDisplay = 'github.com/mominofficial1';
const githubLink = SOCIALS.github;
const linkedinDisplay = 'linkedin.com/in/md-momin-ali';
const linkedinLink = SOCIALS.linkedin;

doc.font('Times-Roman').fontSize(11.5);

// Contact Line 1: Location, Phone, Email
doc.fillColor(COLOR_MUTED).text('Location: ', MARGIN_LEFT, curY, { continued: true });
doc.fillColor(COLOR_PRIMARY).text('Rajshahi, Bangladesh   |   ', { continued: true });
doc.fillColor(COLOR_MUTED).text('Phone: ', { continued: true });
doc.fillColor(COLOR_LINK).text(phoneDisplay, { link: phoneLink, underline: true, continued: true });
doc.fillColor(COLOR_PRIMARY).text('   |   ', { continued: true });
doc.fillColor(COLOR_MUTED).text('Email: ', { continued: true });
doc.fillColor(COLOR_LINK).text(emailDisplay, { link: emailLink, underline: true });

curY = doc.y + 2;

// Contact Line 2: Portfolio & Behance Portfolio
doc.fillColor(COLOR_MUTED).text('Portfolio: ', MARGIN_LEFT, curY, { continued: true });
doc.fillColor(COLOR_LINK).text(webDisplay, { link: webLink, underline: true, continued: true });
doc.fillColor(COLOR_PRIMARY).text('   |   ', { continued: true });
doc.fillColor(COLOR_MUTED).text('Behance: ', { continued: true });
doc.fillColor(COLOR_LINK).text(behanceDisplay, { link: behanceLink, underline: true });

curY = doc.y + 2;

// Contact Line 3: GitHub & LinkedIn Profiles
doc.fillColor(COLOR_MUTED).text('GitHub: ', MARGIN_LEFT, curY, { continued: true });
doc.fillColor(COLOR_LINK).text(githubDisplay, { link: githubLink, underline: true, continued: true });
doc.fillColor(COLOR_PRIMARY).text('   |   ', { continued: true });
doc.fillColor(COLOR_MUTED).text('LinkedIn: ', { continued: true });
doc.fillColor(COLOR_LINK).text(linkedinDisplay, { link: linkedinLink, underline: true });

curY = Math.max(doc.y + 8, photoY + photoSize + 6);

// Divider rule below header
doc.strokeColor(COLOR_LINE)
   .lineWidth(0.75)
   .moveTo(MARGIN_LEFT, curY)
   .lineTo(MARGIN_LEFT + CONTENT_WIDTH, curY)
   .stroke();

curY += 6;

// 4. Section: Professional Summary (Concise 3-4 lines, Strictly 12 pt)
curY = drawSectionHeader('PROFESSIONAL SUMMARY', curY);

const summaryText =
  'Performance-driven Full-Stack Web Developer and Shopify Specialist pursuing a B.Sc. in Computer Science & Engineering at Varendra University. Experienced in architecting end-to-end e-commerce storefronts, scalable React/TypeScript web platforms, AI applications, and high-converting B2B customer pipelines across global markets. National 2nd Runner Up & Global Nominee at NASA Space Apps Challenge 2025.';

doc.font('Times-Roman')
   .fontSize(12)
   .fillColor(COLOR_PRIMARY)
   .text(summaryText, MARGIN_LEFT, curY, {
     width: CONTENT_WIDTH,
     lineGap: 2.0,
     align: 'justify'
   });

curY = doc.y + 7;

// 5. Section: Technical Skills (Consolidated from ALL project categories, Strictly 12 pt)
curY = drawSectionHeader('TECHNICAL SKILLS', curY);

const skillGroups = [
  { label: 'Programming Languages:', items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3, Dart, Python, C/C++' },
  { label: 'Frontend Development:', items: 'React.js, Next.js, Vite, TanStack Router / Start, Tailwind CSS, Flutter (Mobile), Responsive UI' },
  { label: 'E-Commerce & Shopify:', items: 'Shopify Liquid Theming, Custom Sections, Cart Drawer Optimization, Store Architecture, Checkout UX' },
  { label: 'Backend & Databases:', items: 'Node.js, Express.js, RESTful API Engineering, MongoDB, SQL, Firebase (Firestore & Storage), Authentication' },
  { label: 'Digital Marketing & Growth:', items: 'Digital Marketing, Social Media Management (SMM), B2B Lead Gen & Outreach, Growth Partner Strategy, GMC Recovery, Google Shopping' },
  { label: 'Creative & Motion Tools:', items: 'Adobe Premiere Pro, After Effects, CapCut Pro, DaVinci Resolve, Kinetic Typography, Commercial Video Ads' },
  { label: 'Tools & Platforms:', items: 'Git, GitHub, Vercel, Postman, Linux Shell, npm/pnpm, Core Web Vitals Optimization' }
];

for (const group of skillGroups) {
  doc.font('Times-Bold')
     .fontSize(12)
     .fillColor(COLOR_PRIMARY)
     .text(group.label + ' ', MARGIN_LEFT + 6, curY, { width: CONTENT_WIDTH - 6, lineGap: 1.4, continued: true });
  
  doc.font('Times-Roman')
     .fontSize(12)
     .fillColor(COLOR_PRIMARY)
     .text(group.items, { width: CONTENT_WIDTH - 6, lineGap: 1.4, continued: false });
  
  curY = doc.y + 2.2;
}

curY += 4.5;

// 6. Section: Work Experience (Concise, high-impact bullets, Strictly 12 pt)
curY = drawSectionHeader('WORK EXPERIENCE', curY);

// Role 1: Royal Hair Wigs
doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('Royal Hair Wigs', MARGIN_LEFT, curY, { continued: true });

doc.font('Times-Italic')
   .fontSize(12)
   .fillColor(COLOR_MUTED)
   .text(' — Creative Lead & Web Developer / Growth Partner', { continued: false });

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('Oct 2024 – Present   |   Rajshahi, Bangladesh & International Markets (Dubai, USA, Italy)', MARGIN_LEFT, doc.y + 1);

curY = doc.y + 3;

curY = drawBullet(
  'Client Outreach & Growth:',
  'Directed multi-channel digital client acquisition and commercial video campaigns, generating high-intent wholesale buyer pipelines across Dubai, the USA, and Italy.',
  curY
);

curY = drawBullet(
  'Process Automation:',
  'Engineered automated WhatsApp API lead capture workflows and optimized digital product showcases, accelerating inquiry response times and improving customer conversion.',
  curY
);

curY += 3.5;

// Role 2: Freelance Full-Stack & Shopify Developer
doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('Freelance Full-Stack & Shopify Developer', MARGIN_LEFT, curY, { continued: true });

doc.font('Times-Italic')
   .fontSize(12)
   .fillColor(COLOR_MUTED)
   .text(' — Self-Employed', { continued: false });

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('2024 – Present   |   Remote (Serving Clients in UK, Europe & Asia)', MARGIN_LEFT, doc.y + 1);

curY = doc.y + 3;

curY = drawBullet(
  'Storefront & Web Delivery:',
  'Architected custom high-converting Shopify storefronts using bespoke Liquid sections, custom cart drawers, and engineered sub-second responsive React web platforms.',
  curY
);

curY = drawBullet(
  'GMC Recovery & Compliance:',
  'Diagnosed and rectified Google Merchant Center policy violations (Misrepresentation), successfully restoring suspended retail product feeds to full approval.',
  curY
);

curY += 4.5;

// 7. Section: Education (Concise, Strictly 12 pt)
curY = drawSectionHeader('EDUCATION', curY);

doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)', MARGIN_LEFT, curY);

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('Varendra University, Rajshahi, Bangladesh   |   2022 – 2026 (Final Year)', MARGIN_LEFT, doc.y + 1);

curY = doc.y + 2.5;

curY = drawBullet(
  'Core Coursework:',
  'Data Structures & Algorithms, Object-Oriented Programming, Database Systems (SQL), Software Engineering, Web Engineering, and Computer Networks.',
  curY,
  { spacingAfter: 0 }
);

console.log('Page 1 completed at Y:', curY, 'Max allowed boundary:', PAGE_HEIGHT - MARGIN_BOTTOM);

// ============================================================================
// PAGE 2: RUNNING HEADER, SELECTED BALANCED PROJECTS, HONORS & AWARDS, STRENGTHS
// ============================================================================
doc.addPage();
curY = MARGIN_TOP;

// Page 2 Running Header
doc.font('Times-Bold')
   .fontSize(11)
   .fillColor(COLOR_PRIMARY)
   .text('MD MOMIN ALI', MARGIN_LEFT, curY, { continued: true });

doc.font('Times-Roman')
   .fontSize(11)
   .fillColor(COLOR_MUTED)
   .text('   •   CURRICULUM VITAE   •   ', { continued: true });

doc.font('Times-Roman')
   .fontSize(11)
   .fillColor(COLOR_LINK)
   .text('mominofficial.me', { link: 'https://mominofficial.me', underline: true, continued: true });

doc.font('Times-Roman')
   .fontSize(11)
   .fillColor(COLOR_MUTED)
   .text('   •   ', { continued: true });

doc.font('Times-Roman')
   .fontSize(11)
   .fillColor(COLOR_LINK)
   .text('behance.net/mominofficial', { link: behanceLink, underline: true, continued: true });

doc.font('Times-Italic')
   .fontSize(11)
   .fillColor(COLOR_MUTED)
   .text('   (Page 2 of 2)', { align: 'right' });

curY = doc.y + 4;

doc.strokeColor(COLOR_LINE)
   .lineWidth(0.75)
   .moveTo(MARGIN_LEFT, curY)
   .lineTo(MARGIN_LEFT + CONTENT_WIDTH, curY)
   .stroke();

curY += 6;

// Section: Selected Projects (Balanced: Web, Shopify, Mobile/AI, Creative)
curY = drawSectionHeader('SELECTED PROJECTS', curY);

// Project 1: RoyLux (Web Development / E-Commerce)
doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('01. RoyLux – Premium E-Commerce Website (Web Development)', MARGIN_LEFT, curY);

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('Tech: React, Vite, Tailwind CSS, Lucide Icons   |   Live Demo: ', MARGIN_LEFT, doc.y + 1, { continued: true });

doc.font('Times-Roman')
   .fontSize(11.5)
   .fillColor(COLOR_LINK)
   .text('roylux-ecommerce.vercel.app', { link: 'https://roylux-ecommerce.vercel.app/', underline: true });

curY = doc.y + 2.5;

curY = drawBullet(
  'Purpose & Highlights:',
  'Architected a luxury fashion e-commerce storefront with categorized collections, product detail pages, and seamless checkout supporting Cash on Delivery (COD) and online card payment simulation.',
  curY
);

curY += 3.5;

// Project 2: Safdarabad Gym Khan'a (Web Development / Gym Management System)
doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text("02. Safdarabad Gym Khan'a – Full-Stack Gym Management System (Web Development)", MARGIN_LEFT, curY);

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('Tech: Full-Stack Web, Member Auth, Management Workflows   |   Live Website: ', MARGIN_LEFT, doc.y + 1, { continued: true });

doc.font('Times-Roman')
   .fontSize(11.5)
   .fillColor(COLOR_LINK)
   .text('sfdgymkhana.com', { link: 'http://sfdgymkhana.com/', underline: true });

curY = doc.y + 2.5;

curY = drawBullet(
  'Purpose & Highlights:',
  'Engineered a complete gym operations platform featuring online membership enrollment, secure member accounts, recurring fee payment status tracking, and direct WhatsApp admin inquiry triggers.',
  curY
);

curY += 3.5;

// Project 3: ModeFlo (Shopify Storefront Development)
doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('03. ModeFlo – Minimalist Fashion Storefront (Shopify Development)', MARGIN_LEFT, curY);

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('Tech: Shopify Theme Customization, Liquid, Cart Drawer   |   Case Study: ', MARGIN_LEFT, doc.y + 1, { continued: true });

doc.font('Times-Roman')
   .fontSize(11.5)
   .fillColor(COLOR_LINK)
   .text('mominofficial.me/works/modeflo', { link: 'https://mominofficial.me/works/modeflo', underline: true });

curY = doc.y + 2.5;

curY = drawBullet(
  'Purpose & Highlights:',
  'Crafted a high-converting bespoke Shopify fashion storefront with custom Liquid sections, slide-out quick-add cart drawer, editorial typography, and trust badge integrations.',
  curY
);

curY += 3.5;

// Project 4: Fair Prices (App & AI Civic Platform)
doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('04. Fair Prices – AI Market & Grocery Budgeting App (Mobile & AI App)', MARGIN_LEFT, curY);

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('Tech: React, Vite, Google Gemini AI API, Tailwind CSS   |   Live Demo: ', MARGIN_LEFT, doc.y + 1, { continued: true });

doc.font('Times-Roman')
   .fontSize(11.5)
   .fillColor(COLOR_LINK)
   .text('fairprices.vercel.app', { link: 'https://fairprices.vercel.app/', underline: true, continued: true });

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('   |   GitHub: ', { continued: true });

doc.font('Times-Roman')
   .fontSize(11.5)
   .fillColor(COLOR_LINK)
   .text('github.com/mominofficial1/Fair-Prices', { link: 'https://github.com/mominofficial1/Fair-Prices', underline: true });

curY = doc.y + 2.5;

curY = drawBullet(
  'Purpose & Highlights:',
  'Civic commodity monitor comparing daily grocery prices with government benchmark rates, featuring Google Gemini AI for smart budget advice and market price disparity detection.',
  curY
);

curY += 3.5;

// Project 5: Terra Farm (NASA Space Apps Challenge 2025 / Content & Creative)
doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('05. Terra Farm – NASA Space Apps Challenge 2025 (Creative & Content)', MARGIN_LEFT, curY);

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('Tech: NASA Telemetry, Adobe After Effects, Storyboarding   |   Case Study: ', MARGIN_LEFT, doc.y + 1, { continued: true });

doc.font('Times-Roman')
   .fontSize(11.5)
   .fillColor(COLOR_LINK)
   .text('mominofficial.me/works/terra-farm-nasa', { link: 'https://mominofficial.me/works/terra-farm-nasa', underline: true });

curY = doc.y + 2.5;

curY = drawBullet(
  'Purpose & Highlights:',
  'National 2nd Runner Up platform combining NASA planetary datasets, narrative storyboarding, and motion graphics to solve agricultural climate adaptation challenges.',
  curY
);

curY += 4.5;

// Section: Honors & Awards (14 pt bold)
curY = drawSectionHeader('HONORS & AWARDS', curY);

doc.font('Times-Bold')
   .fontSize(12.5)
   .fillColor(COLOR_PRIMARY)
   .text('NASA Space Apps Challenge 2025 — 2nd Runner Up & Global Nominee', MARGIN_LEFT, curY);

doc.font('Times-Italic')
   .fontSize(11.5)
   .fillColor(COLOR_ACCENT)
   .text('National Stage, Bangladesh (2025)   |   Organized by NASA Space Apps Challenge', MARGIN_LEFT, doc.y + 1);

curY = doc.y + 2.5;

curY = drawBullet(
  'Achievement Summary:',
  'Secured 2nd Runner Up nationally and nominated for global judging out of hundreds of engineering teams for developing an innovative Earth-observation data visualization application under 48-hour sprint constraints.',
  curY
);

curY += 4.5;

// Section: Professional Strengths & Highlights (14 pt bold)
curY = drawSectionHeader('PROFESSIONAL STRENGTHS & HIGHLIGHTS', curY);

curY = drawBullet(
  'Full Lifecycle Engineering:',
  'Experienced in the complete development lifecycle from requirements discovery, database schema design, and modular UI engineering to production deployment on Vercel and GitHub.',
  curY
);

curY = drawBullet(
  'Growth, SMM & Conversion UX:',
  'Proven expertise combining custom Shopify architecture, Google Merchant Center compliance, commercial video production, and social media management for business revenue growth.',
  curY
);

curY = drawBullet(
  'Performance & Accessibility:',
  'Dedicated to 95+ Core Web Vitals optimization, mobile-first touch optimization, accessible semantic HTML, and conversion-focused user journeys.',
  curY,
  { spacingAfter: 0 }
);

console.log('Page 2 completed at Y:', curY, 'Max allowed boundary:', PAGE_HEIGHT - MARGIN_BOTTOM);

// ============================================================================
// FOOTERS ON ALL PAGES (Zero Margin Break Safety)
// ============================================================================
const totalPages = doc.bufferedPageRange().count;
console.log('Total pages before footer application:', totalPages);

if (totalPages !== 2) {
  throw new Error(`CRITICAL ERROR: CV must be exactly 2 pages before footer! Actual: ${totalPages}`);
}

for (let i = 0; i < totalPages; i++) {
  doc.switchToPage(i);
  doc.page.margins.bottom = 0;
  
  // Footer divider line
  doc.strokeColor(COLOR_LINE)
     .lineWidth(0.5)
     .moveTo(MARGIN_LEFT, PAGE_HEIGHT - 24)
     .lineTo(MARGIN_LEFT + CONTENT_WIDTH, PAGE_HEIGHT - 24)
     .stroke();

  // Footer label
  doc.font('Times-Roman')
     .fontSize(10)
     .fillColor(COLOR_MUTED)
     .text(
       `Md_Momin_Ali_CV.pdf   •   MD Momin Ali   •   Page ${i + 1} of ${totalPages}`,
       MARGIN_LEFT,
       PAGE_HEIGHT - 18,
       { width: CONTENT_WIDTH, align: 'center', lineBreak: false }
     );
}

const finalPages = doc.bufferedPageRange().count;
console.log('Final verified page count:', finalPages);

if (finalPages !== 2) {
  throw new Error(`CRITICAL ERROR: CV final page count is ${finalPages}, MUST BE EXACTLY 2!`);
}

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(outputPath);
  console.log(`\n======================================================`);
  console.log(`CV PDF GENERATION SUCCESSFUL`);
  console.log(`File: ${outputPath}`);
  console.log(`File Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`Total Pages: ${finalPages}`);
  console.log(`======================================================\n`);
});
