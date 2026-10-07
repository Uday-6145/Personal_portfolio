# Uday Pratap Singh – Personal Developer Portfolio

A production-ready, accessible, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with a minimalist, restrained, editorial dark aesthetic without gradients, animations tuned for clarity, and a single centralized source of truth for all content.

**Live URL:** *(Deploy on Vercel and paste your URL here: e.g. `https://uday-pratap-singh-portfolio.vercel.app`)*

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Custom flat dark theme, strictly zero gradients)
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Fonts:** Inter (Body/Headings) & JetBrains Mono (Badges/Labels)
- **Deployment:** Vercel

---

## ✨ Features

- **Strict Single Source of Truth:** All copy, project descriptions, skills, education, achievements, and social links reside exclusively in [`src/data/content.js`](./src/data/content.js). Components contain zero hardcoded strings.
- **Editorial Dark Theme:** Consistent solid color palette (`#0F172A` background, `#1E293B` cards, `#F8FAFC` text, `#94A3B8` muted, `#3B82F6` accent, `#334155` borders) with 1px borders and zero gradients.
- **Smooth Navigation:** Sticky navigation bar with scroll-progress indicator, section spy highlighting, and responsive mobile menu.
- **Full-Screen Preloader:** Minimalist solid preloader on initial page load with a percentage counter and body scroll lock.
- **Scroll Reveals & Section Dividers:** Staggered upward slide-in transitions and animated expanding horizontal divider lines between every section.
- **Accessibility & SEO:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), full keyboard focus states, WCAG AA contrast, Open Graph tags, and SVG monogram favicon.
- **Automatic Link Verification Script:** Built-in verification script (`scripts/check-links.mjs`) to test all external URLs.

---

## 📂 Project Structure

```text
├── index.html                    # HTML entry point, SEO meta, Open Graph tags, UP SVG favicon
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind color system and font definitions
├── vite.config.js                # Vite build configuration
├── public/
│   └── Uday_Pratap_Singh_Resume.pdf  # PDF resume file for downloads & viewing
├── scripts/
│   └── check-links.mjs           # Node script to verify all external URLs
└── src/
    ├── App.jsx                   # Main single-page application layout
    ├── index.css                 # Base styles, Tailwind directives, reduced-motion rules
    ├── main.jsx                  # React DOM rendering entry point
    ├── data/
    │   └── content.js            # SINGLE SOURCE OF TRUTH (all data and links)
    └── components/
        ├── Preloader.jsx         # 1.5s countdown loader with body scroll lock
        ├── Navbar.jsx            # Sticky navbar, scroll indicator, mobile drawer
        ├── Hero.jsx              # Editorial intro, role, tagline, chips, CTAs
        ├── About.jsx             # 3-5 line bio, quick facts card, profile links
        ├── Skills.jsx            # 5 category cards with tag lists
        ├── Projects.jsx          # 3 featured projects, live demo (CourseApp), repo link
        ├── Education.jsx         # Vertical timeline with degrees and institution data
        ├── Achievements.jsx      # Factual hackathon & competition awards
        ├── Resume.jsx            # Download and new-tab preview buttons
        ├── Contact.jsx           # Contact rows, copy email toast, mailto form
        ├── Footer.jsx            # Copyright, social icons, back-to-top button
        ├── SectionDivider.jsx    # Animated horizontal divider with section number
        └── Reveal.jsx            # Reusable scroll animation wrapper
```

---

## ✏️ How to Edit Content

To update any content or URLs on this site, edit **[`src/data/content.js`](./src/data/content.js)**:

1. **Personal Information:** Edit `personalInfo` (name, role, tagline, chips, about paragraphs, quick facts).
2. **Projects:** Modify the `projects` array. Note: CourseApp has a live demo, while others have `live: null`.
3. **Skills:** Modify `skillCategories` (Frontend, Backend, Databases, AI / Generative AI, Tools / Languages).
4. **Education & Achievements:** Update the `education` and `achievements` arrays.
5. **Links:** Edit the `links` object for your GitHub, LinkedIn, email, and resume paths.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Steps
1. Clone or navigate to the repository:
   ```bash
   cd /path/to/portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Verify all links:
   ```bash
   npm run check-links
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## ☁️ How to Deploy to Vercel

1. **Commit and Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy modern developer portfolio"
   git push origin main
   ```
2. **Import Project in Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** > **"Project"**.
   - Select your repository (`Personal_portfolio` or `Portfolio`).
3. **Configure & Deploy:**
   - Framework Preset: **Vite** (detected automatically).
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **"Deploy"**.
4. **Live URL:**
   - Once deployed, copy your generated Vercel domain and update the `Live URL` in this README and in your resume / social profiles!
