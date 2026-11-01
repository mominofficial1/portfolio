import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ts from "typescript";
import PDFDocument from "pdfkit";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// 1. Dynamically load portfolio source of truth
const portfolioPath = path.join(projectRoot, "src", "lib", "portfolio.ts");
const portfolioSource = fs.readFileSync(portfolioPath, "utf8");
const transpiled = ts.transpileModule(portfolioSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const base64Module = Buffer.from(transpiled.outputText).toString("base64");
const portfolio = await import(`data:text/javascript;base64,${base64Module}`);

const { EMAIL, SOCIALS, PROJECTS } = portfolio;
const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

const roylux = getProject("roylux-ecommerce");
const gym = getProject("safdarabad-gym-khana");
const fairprices = getProject("fair-prices");
const fitlog = getProject("fitlog");

const photoPath = path.join(projectRoot, "public", "momin.jpg");
const outputPath = path.join(projectRoot, "public", "Md_Momin_Ali_CV.pdf");

// PDF Geometry - A4 Standard
const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_LEFT = 38;
const MARGIN_RIGHT = 38;
const MARGIN_TOP = 36;
const MARGIN_BOTTOM = 36;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT; // 519.28 pt

// Color Palette - Professional ATS-Compliant Editorial Dark
const COLOR_PRIMARY = "#111827"; // Deep Slate / Charcoal
const COLOR_ACCENT = "#3730a3"; // Deep Indigo
const COLOR_MUTED = "#4b5563"; // Muted Charcoal / Gray
const COLOR_LINE = "#d1d5db"; // Light Border / Divider
const COLOR_LINK = "#2563eb"; // Clean Link Blue

const doc = new PDFDocument({
  size: "A4",
  margins: {
    top: MARGIN_TOP,
    bottom: MARGIN_BOTTOM,
    left: MARGIN_LEFT,
    right: MARGIN_RIGHT,
  },
  bufferPages: true,
  autoFirstPage: true,
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Helper: Section Header
function drawSectionHeader(title, y) {
  doc
    .font("Times-Bold")
    .fontSize(12.5)
    .fillColor(COLOR_PRIMARY)
    .text(title, MARGIN_LEFT, y, { characterSpacing: 0.5 });

  const lineY = y + 16;
  doc
    .strokeColor(COLOR_ACCENT)
    .lineWidth(1.2)
    .moveTo(MARGIN_LEFT, lineY)
    .lineTo(MARGIN_LEFT + CONTENT_WIDTH, lineY)
    .stroke();

  return lineY + 7; // Next content Y
}

// Helper: Bullet with bold lead
function drawBullet(lead, text, y, options = {}) {
  const bulletX = options.indent || MARGIN_LEFT + 10;
  const textX = bulletX + 12;
  const availWidth = CONTENT_WIDTH - (textX - MARGIN_LEFT);

  // Bullet symbol
  doc
    .font("Times-Bold")
    .fontSize(10)
    .fillColor(COLOR_ACCENT)
    .text("•", bulletX, y, { lineBreak: false });

  // Lead + Body
  if (lead) {
    doc
      .font("Times-Bold")
      .fontSize(10)
      .fillColor(COLOR_PRIMARY)
      .text(lead + " ", textX, y, { lineBreak: false, continued: true });

    doc
      .font("Times-Roman")
      .fontSize(10)
      .fillColor(COLOR_PRIMARY)
      .text(text, { width: availWidth, lineGap: 1.5 });
  } else {
    doc
      .font("Times-Roman")
      .fontSize(10)
      .fillColor(COLOR_PRIMARY)
      .text(text, textX, y, { width: availWidth, lineGap: 1.5 });
  }

  return doc.y + (options.spacingAfter ?? 3.5);
}

// ============================================================================
// PAGE 1: HEADER, SUMMARY, SKILLS, EXPERIENCE, EDUCATION
// ============================================================================
let curY = MARGIN_TOP;

// 1. Profile Photo (Circular Frame with Indigo Ring)
const photoSize = 72;
const photoX = MARGIN_LEFT + CONTENT_WIDTH - photoSize;
const photoY = MARGIN_TOP - 2;
const radius = photoSize / 2;

if (fs.existsSync(photoPath)) {
  doc.save();
  doc.circle(photoX + radius, photoY + radius, radius).clip();
  doc.image(photoPath, photoX, photoY, { width: photoSize, height: photoSize });
  doc.restore();
  doc
    .circle(photoX + radius, photoY + radius, radius)
    .lineWidth(1.5)
    .strokeColor(COLOR_ACCENT)
    .stroke();
}

// 2. Candidate Name & Professional Title
const headerTextWidth = CONTENT_WIDTH - photoSize - 16;

doc
  .font("Times-Bold")
  .fontSize(22)
  .fillColor(COLOR_PRIMARY)
  .text("MD MOMIN ALI", MARGIN_LEFT, curY, { width: headerTextWidth });

curY = doc.y + 2;

doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_ACCENT)
  .text("FULL-STACK WEB DEVELOPER & SHOPIFY SPECIALIST", MARGIN_LEFT, curY, {
    width: headerTextWidth,
  });

curY = doc.y + 4;

// 3. Contact Details Grid / Badges with active clickable links
const phoneDisplay = "+880 1792 872188";
const phoneLink = SOCIALS.whatsapp || "https://wa.me/8801792872188";
const emailDisplay = EMAIL;
const emailLink = `mailto:${EMAIL}`;
const webDisplay = "mominofficial.me";
const webLink = "https://mominofficial.me";
const githubDisplay = "github.com/mominofficial1";
const githubLink = SOCIALS.github;
const linkedinDisplay = "linkedin.com/in/md-momin-ali-3913b6351";
const linkedinLink = SOCIALS.linkedin;

doc.font("Times-Roman").fontSize(10);

// Line 1: Location & Contacts
doc.fillColor(COLOR_MUTED).text("Location: ", MARGIN_LEFT, curY, { continued: true });
doc.fillColor(COLOR_PRIMARY).text("Rajshahi, Bangladesh   |   ", { continued: true });
doc.fillColor(COLOR_MUTED).text("Phone: ", { continued: true });
doc.fillColor(COLOR_LINK).text(phoneDisplay, { link: phoneLink, underline: true, continued: true });
doc.fillColor(COLOR_PRIMARY).text("   |   ", { continued: true });
doc.fillColor(COLOR_MUTED).text("Email: ", { continued: true });
doc.fillColor(COLOR_LINK).text(emailDisplay, { link: emailLink, underline: true });

curY = doc.y + 2;

// Line 2: Portfolio & Profiles
doc.fillColor(COLOR_MUTED).text("Portfolio: ", MARGIN_LEFT, curY, { continued: true });
doc.fillColor(COLOR_LINK).text(webDisplay, { link: webLink, underline: true, continued: true });
doc.fillColor(COLOR_PRIMARY).text("   |   ", { continued: true });
doc.fillColor(COLOR_MUTED).text("GitHub: ", { continued: true });
doc
  .fillColor(COLOR_LINK)
  .text(githubDisplay, { link: githubLink, underline: true, continued: true });
doc.fillColor(COLOR_PRIMARY).text("   |   ", { continued: true });
doc.fillColor(COLOR_MUTED).text("LinkedIn: ", { continued: true });
doc.fillColor(COLOR_LINK).text("Profile", { link: linkedinLink, underline: true });

curY = Math.max(doc.y + 12, photoY + photoSize + 10);

// Divider after header
doc
  .strokeColor(COLOR_LINE)
  .lineWidth(0.75)
  .moveTo(MARGIN_LEFT, curY)
  .lineTo(MARGIN_LEFT + CONTENT_WIDTH, curY)
  .stroke();

curY += 8;

// 4. Section: Professional Summary
curY = drawSectionHeader("PROFESSIONAL SUMMARY", curY);

const summaryText =
  "Performance-driven Full-Stack Web Developer and Shopify Specialist pursuing a B.Sc. in Computer Science & Engineering at Varendra University. Experienced in architecting end-to-end e-commerce platforms, responsive React web applications, and AI-integrated digital systems. Proven record of developing commercial storefronts, streamlining automated B2B customer pipelines across global markets, and delivering high-converting, accessible user interfaces. National 2nd Runner Up & Global Nominee at NASA Space Apps Challenge 2025.";

doc.font("Times-Roman").fontSize(10).fillColor(COLOR_PRIMARY).text(summaryText, MARGIN_LEFT, curY, {
  width: CONTENT_WIDTH,
  lineGap: 2.2,
  align: "justify",
});

curY = doc.y + 9;

// 5. Section: Technical Skills
curY = drawSectionHeader("TECHNICAL SKILLS", curY);

const skillCategories = [
  {
    label: "Languages & Core:",
    items: "JavaScript (ES6+), TypeScript, HTML5, Modern CSS3, Tailwind CSS, Dart, Python, C/C++",
  },
  {
    label: "Frameworks & Frontend:",
    items:
      "React.js, Vite, TanStack Router / Start, Next.js, Redux / Context API, Mobile UI (Flutter)",
  },
  {
    label: "E-Commerce & Shopify:",
    items:
      "Shopify Liquid Theming, Custom Sections, Cart Optimization, Store Architecture, Checkout UX",
  },
  {
    label: "Backend & Databases:",
    items: "Node.js, Express.js, RESTful API Engineering, MongoDB, SQL, Firebase, Authentication",
  },
  {
    label: "Tools & Cloud Deployment:",
    items: "Git, GitHub, Vercel, Postman, npm/pnpm, Linux Shell, Core Web Vitals Optimization",
  },
  {
    label: "Marketing & Digital Media:",
    items:
      "Google Merchant Center (GMC Misrepresentation Recovery), Google Shopping, Premiere Pro, After Effects",
  },
];

for (const cat of skillCategories) {
  doc
    .font("Times-Bold")
    .fontSize(10)
    .fillColor(COLOR_PRIMARY)
    .text(cat.label + " ", MARGIN_LEFT + 6, curY, { continued: true });

  doc
    .font("Times-Roman")
    .fontSize(10)
    .fillColor(COLOR_PRIMARY)
    .text(cat.items, { width: CONTENT_WIDTH - 6, lineGap: 1.5 });

  curY = doc.y + 2.5;
}

curY += 6;

// 6. Section: Work Experience
curY = drawSectionHeader("WORK EXPERIENCE", curY);

// Role 1: Royal Hair Wigs
doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text("Royal Hair Wigs", MARGIN_LEFT, curY, { continued: true });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_MUTED)
  .text(" — Social Media & Creative Lead / Web Developer", { continued: false });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "Oct 2024 – Present   |   Rajshahi, Bangladesh & International Markets (Dubai, USA, Italy)",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 4;

curY = drawBullet(
  "Digital Client Acquisition:",
  "Managed multi-channel digital client outreach and commercial video campaigns, generating high-intent wholesale buyer relationships across Dubai, the USA, and Italy.",
  curY,
);

curY = drawBullet(
  "Workflow & Ingestion Automation:",
  "Engineered automated WhatsApp API inquiry workflows and optimized digital product presentations, reducing lead intake response times and improving qualification efficiency.",
  curY,
);

curY = drawBullet(
  "Conversion & Brand Assets:",
  "Produced commercial video assets, kinetic typography ads, and product showcase assets that elevated client trust and inbound conversions.",
  curY,
);

curY += 4;

// Role 2: Freelance Web & Shopify Developer
doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text("Freelance Full-Stack & Shopify Developer", MARGIN_LEFT, curY, { continued: true });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_MUTED)
  .text(" — Self-Employed", { continued: false });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "2024 – Present   |   Remote (Serving Clients in UK, Europe & Asia)",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 4;

curY = drawBullet(
  "E-Commerce Development:",
  "Architected custom high-converting Shopify storefronts using bespoke Liquid sections, custom cart drawers, and conversion-optimized product detail pages for international direct-to-consumer brands.",
  curY,
);

curY = drawBullet(
  "Web Platform Delivery:",
  "Built responsive, accessible web applications with React, TypeScript, and modern styling libraries, ensuring sub-second load times and 95+ Core Web Vitals performance.",
  curY,
);

curY = drawBullet(
  "GMC Compliance Recovery:",
  "Diagnosed and rectified Google Merchant Center policy violations (Misrepresentation, product feeds), successfully restoring suspended retail feeds to active status.",
  curY,
);

curY += 6;

// 7. Section: Education
curY = drawSectionHeader("EDUCATION", curY);

doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text("Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)", MARGIN_LEFT, curY);

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "Varendra University, Rajshahi, Bangladesh   |   2022 – 2026 (Final Year)",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 3.5;

curY = drawBullet(
  "Academic Focus:",
  "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (SQL), Software Engineering Methodologies, Web Engineering, and Computer Networks.",
  curY,
  { spacingAfter: 0 },
);

console.log("Page 1 completed at Y:", curY, "Max allowed:", PAGE_HEIGHT - MARGIN_BOTTOM);

// ============================================================================
// PAGE 2: FEATURED PROJECTS, HONORS & AWARDS, METHODOLOGIES
// ============================================================================
doc.addPage();
curY = MARGIN_TOP;

// Page 2 Running Header
doc
  .font("Times-Bold")
  .fontSize(10)
  .fillColor(COLOR_PRIMARY)
  .text("MD MOMIN ALI", MARGIN_LEFT, curY, { continued: true });

doc
  .font("Times-Roman")
  .fontSize(10)
  .fillColor(COLOR_MUTED)
  .text("   •   CURRICULUM VITAE   •   ", { continued: true });

doc.font("Times-Roman").fontSize(10).fillColor(COLOR_LINK).text("https://mominofficial.me", {
  link: "https://mominofficial.me",
  underline: true,
  continued: true,
});

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_MUTED)
  .text("   (Page 2 of 2)", { align: "right" });

curY = doc.y + 4;

doc
  .strokeColor(COLOR_LINE)
  .lineWidth(0.75)
  .moveTo(MARGIN_LEFT, curY)
  .lineTo(MARGIN_LEFT + CONTENT_WIDTH, curY)
  .stroke();

curY += 8;

// Section: Selected Projects
curY = drawSectionHeader("SELECTED FEATURED PROJECTS", curY);

// --- PROJECT 1: ROYLUX ---
doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text("01. RoyLux — Premium Fashion E-Commerce Platform", MARGIN_LEFT, curY, { continued: true });

doc
  .font("Times-Roman")
  .fontSize(10)
  .fillColor(COLOR_LINK)
  .text("   [Live Demo]", { link: "https://roylux-ecommerce.vercel.app/", underline: true });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "Technologies: React, Vite, Tailwind CSS, Lucide Icons, Modern Client State",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 3.5;

curY = drawBullet(
  "Storefront Architecture:",
  "Designed and implemented a luxury e-commerce experience featuring dynamic product catalog browsing, categorized collection filtering, and dedicated high-fidelity product detail pages.",
  curY,
);

curY = drawBullet(
  "Cart & Checkout Workflows:",
  "Engineered interactive shopping cart state management, customer information collection forms, and checkout processing supporting both Cash on Delivery (COD) and online card payment simulation.",
  curY,
);

curY = drawBullet(
  "Editorial UI/UX:",
  "Delivered an editorial visual identity tailored for modern fashion brands with smooth micro-interactions, responsive mobile slide-out cart drawers, and zero layout shift.",
  curY,
);

curY += 5;

// --- PROJECT 2: SAFDARABAD GYM KHAN'A ---
doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text("02. Safdarabad Gym Khan'a — Full-Stack Gym Management System", MARGIN_LEFT, curY, {
    continued: true,
  });

doc
  .font("Times-Roman")
  .fontSize(10)
  .fillColor(COLOR_LINK)
  .text("   [Live Website]", { link: "http://sfdgymkhana.com/", underline: true });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "Technologies: Full-Stack Web Architecture, Modern CSS, Member Auth, Management Workflows",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 3.5;

curY = drawBullet(
  "Membership Management:",
  "Engineered an end-to-end gym operations website providing online membership enrollment, tier selection (Standard/Pro), member authentication, and account access.",
  curY,
);

curY = drawBullet(
  "Recurring Payment Tracking:",
  "Structured account portals enabling members to monitor monthly fee payment statuses, check registration details, and access trainer timetables and workout schedules.",
  curY,
);

curY = drawBullet(
  "Operational Admin Workflow:",
  "Streamlined back-office record organization and member inquiry routing, integrating direct WhatsApp messaging triggers for rapid front-desk support.",
  curY,
);

curY += 5;

// --- PROJECT 3: FAIR PRICES ---
doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text(
    "03. Fair Prices (ন্যায্য মূল্য) — Civic AI Market & Grocery Budgeting Platform",
    MARGIN_LEFT,
    curY,
    { continued: true },
  );

doc.font("Times-Roman").fontSize(10).fillColor(COLOR_LINK).text("   [Live App]", {
  link: "https://fairprices.vercel.app/",
  underline: true,
  continued: true,
});

doc
  .font("Times-Roman")
  .fontSize(10)
  .fillColor(COLOR_LINK)
  .text("   [GitHub]", { link: "https://github.com/mominofficial1/Fair-Prices", underline: true });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "Technologies: React, Vite, Google Gemini AI API, Tailwind CSS, DAM Live Sync",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 3.5;

curY = drawBullet(
  "Price Transparency Engine:",
  "Developed a consumer advocacy platform comparing daily retail commodity rates directly against government-regulated benchmark prices to curb arbitrary market overcharging.",
  curY,
);

curY = drawBullet(
  "Gemini AI Assistant:",
  "Integrated Google Gemini LLM to interpret household grocery budgets, predict cost fluctuations, and recommend economical purchasing substitutes in real time.",
  curY,
);

curY += 5;

// --- PROJECT 4: FITLOG ---
doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text("04. FitLog — Workout Tracker & Training Planner", MARGIN_LEFT, curY, { continued: true });

doc
  .font("Times-Roman")
  .fontSize(10)
  .fillColor(COLOR_LINK)
  .text("   [Live App]", { link: "https://fitlogapp.vercel.app/", underline: true });

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "Technologies: React, Vite, Tailwind CSS, Local Storage, Mobile-First Web",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 3.5;

curY = drawBullet(
  "Exercise Analytics:",
  "Built a progressive workout logging application with custom routine construction, set/rep tracking, personal record milestones, and volume analytics.",
  curY,
);

curY = drawBullet(
  "Performance & Usability:",
  "Optimized with instant client-side persistence, offline resilience, and touch-first interactions tailored for high-intensity gym floor sessions.",
  curY,
);

curY += 7;

// Section: Honors & Awards
curY = drawSectionHeader("HONORS & AWARDS", curY);

doc
  .font("Times-Bold")
  .fontSize(11)
  .fillColor(COLOR_PRIMARY)
  .text("NASA Space Apps Challenge 2025 — 2nd Runner Up & Global Nominee", MARGIN_LEFT, curY);

doc
  .font("Times-Italic")
  .fontSize(10)
  .fillColor(COLOR_ACCENT)
  .text(
    "National Stage, Bangladesh   |   Issued by NASA Space Apps Challenge Organizers",
    MARGIN_LEFT,
    doc.y + 1,
  );

curY = doc.y + 3.5;

curY = drawBullet(
  "Competitive Recognition:",
  "Secured 2nd Runner Up honors and nominated to represent the nation in global evaluation among hundreds of participating developer and engineering teams nationwide.",
  curY,
);

curY = drawBullet(
  "Scientific Data Integration:",
  "Engineered an innovative Earth-observation data visualization and analysis solution within an intensive 48-hour competitive software hackathon sprint.",
  curY,
);

curY += 7;

// Section: Methodologies & Professional Strengths
curY = drawSectionHeader("PROFESSIONAL METHODOLOGIES & HIGHLIGHTS", curY);

curY = drawBullet(
  "Full Lifecycle Engineering:",
  "Experienced in the complete development pipeline from technical requirements discovery, database schema design, and modular UI component architecture to deployment on cloud hosting (Vercel, GitHub).",
  curY,
);

curY = drawBullet(
  "Performance & Conversion UX:",
  "Dedicated to Core Web Vitals compliance, responsive mobile optimization, accessible semantic HTML, and conversion-centered user flows that turn site visitors into paying customers.",
  curY,
);

curY = drawBullet(
  "Collaborative Execution:",
  "Strong communicator with experience coordinating with international clients, cross-functional project teams, and fast-paced agile development cycles.",
  curY,
  { spacingAfter: 0 },
);

console.log("Page 2 completed at Y:", curY, "Max allowed:", PAGE_HEIGHT - MARGIN_BOTTOM);

// ============================================================================
// FOOTERS ON ALL PAGES
// ============================================================================
const range = doc.bufferedPageRange();
console.log("Total buffered pages:", range.count);

if (range.count !== 2) {
  throw new Error(`CRITICAL: CV must be exactly 2 pages. Current count: ${range.count}`);
}

for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);

  // Footer separator line
  doc
    .strokeColor(COLOR_LINE)
    .lineWidth(0.5)
    .moveTo(MARGIN_LEFT, PAGE_HEIGHT - MARGIN_BOTTOM - 12)
    .lineTo(MARGIN_LEFT + CONTENT_WIDTH, PAGE_HEIGHT - MARGIN_BOTTOM - 12)
    .stroke();

  // Footer text
  doc
    .font("Times-Roman")
    .fontSize(10)
    .fillColor(COLOR_MUTED)
    .text(
      `Md_Momin_Ali_CV.pdf   •   MD Momin Ali   •   Page ${i + 1} of ${range.count}`,
      MARGIN_LEFT,
      PAGE_HEIGHT - MARGIN_BOTTOM - 8,
      { width: CONTENT_WIDTH, align: "center" },
    );
}

doc.end();

writeStream.on("finish", () => {
  const stats = fs.statSync(outputPath);
  console.log(`CV PDF successfully generated at: ${outputPath}`);
  console.log(`File Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`Total Pages: ${range.count}`);
});
