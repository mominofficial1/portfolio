# MD Momin Ali — Premium Static Portfolio Website

A high-end, 100% static portfolio website for **MD Momin Ali** (Motion Designer • Video Editor • Shopify Developer • Digital Marketer • Google Merchant Center Specialist) built with a Warm Cream & Deep Dark Teal visual identity derived from the **LeadLux** brand mark.

---

## ⚡ Key Highlights
- **100% Static Frontend**: Zero backend, zero database, zero server dependencies.
- **GitHub Pages Ready**: Configured with relative asset paths (`./`) so it works seamlessly on custom domains or GitHub Pages subpaths.
- **Typography**: Space Grotesk (Headings) + Manrope (Body).
- **Brand Palette**: Warm Cream (`#F7F4EC`), Deep Dark Teal (`#0A2625`), Soft Gold (`#C89D5C`), and Off-White (`#FAF8F5`).
- **Real Showcase Assets**: Authentic screenshots for Modeflo, Caspier, Zalivia, ReviveBerry, De_Bellas, Chez Provence, Saltline, Thames Glow Beauty, GMC Misrepresentation Clearances (Light Keepers Bookstore, Seveck Wellness, Southern Luxe Savon), Google Shopping campaigns, and NASA / Varendra University certifications.

---

## 🚀 Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build Static Production Assets
```bash
npm run build
```
The static production files will be output to the `dist/` directory.

---

## 📦 How to Deploy to GitHub Pages

### Method 1: Push Repository to GitHub (Recommended)

1. Open your terminal in the `momin-portfolio` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website — MD Momin Ali"
   git branch -M main
   git remote add origin https://github.com/mominofficial/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

2. Deploy using `gh-pages` script:
   ```bash
   npm run deploy
   ```

3. Enable GitHub Pages in your repository settings:
   - Go to **GitHub** → **Repository** → **Settings** → **Pages**
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages` / `/ (root)` and click **Save**.

Your portfolio will now be live at:
`https://mominofficial.github.io/YOUR_REPOSITORY_NAME/`

---

## 📁 Project Architecture
```text
momin-portfolio/
├── index.html                  # Home page
├── about.html                  # About & story page
├── works.html                  # Filterable works showcase & case study modals
├── services.html               # 6 services & transparent pricing tiers
├── certifications.html         # Verified certifications & lightbox viewer
├── contact.html                # Direct WhatsApp, Email, and social buttons
├── privacy.html                # Privacy policy
├── terms.html                  # Terms of service
├── 404.html                    # GitHub Pages 404 fallback
├── package.json                # Project build scripts & dependencies
├── vite.config.js              # Multi-page static build configuration
├── src/
│   ├── assets/                 # Project mockups & certificate images
│   ├── data/                   # Local static data modules (projects, services, certs)
│   ├── styles/                 # LeadLux CSS design system (variables, base, components, animations)
│   └── js/                     # Interaction scripts (navbar, modals, lightbox, copy toast)
└── public/                     # Static media files copied directly to dist/
```

---

## 📞 Direct Contact
- **Behance Portfolio**: [behance.net/mominofficial](https://www.behance.net/mominofficial)
- **WhatsApp**: [+880 1792 872188](https://wa.me/8801792872188)
- **Email**: [232311005@vu.edu.bd](mailto:232311005@vu.edu.bd)
- **GitHub**: [github.com/mominofficial1](https://github.com/mominofficial1)
- **LinkedIn**: [linkedin.com/in/md-momin-ali-3913b6351](https://www.linkedin.com/in/md-momin-ali-3913b6351)

© 2026 MD Momin Ali. All rights reserved.
