# Gagan Gaur – Personal Portfolio Website

> **AI Engineer | Software Engineer | Full-Stack Developer**  
> *Final-Year B.Tech in ECE (LNMIIT, Jaipur) & BS in Data Science (IIT Madras)*

A modern, responsive, high-performance personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Designed to position Gagan Gaur for Software Engineering (SWE), AI/ML, and Full-Stack roles at top tech companies and innovative startups.

---

## 🌟 Key Highlights & Design Identity

- **Dark-First Modern Aesthetics**: Deep navy charcoal palette (`#040711`), electric blue and cyan accent glows, clean spacing, and modern cards without generic AI templates.
- **Interactive Light & Dark Themes**: Persistent theme switcher stored in `localStorage` with zero flicker on page load.
- **Integrated Profile & Agent Mesh Console**: Interactive dual-tab visualizer showcasing Gagan's professional portrait alongside a live simulated Multi-Agent & RAG topology graph.
- **Featured Technical Projects**:
  1. **Multi-Agent Developer Assistant** (LangGraph, ChromaDB, RAG, MCP, Streamlit, SQLite)
  2. **RiskShield AI – Fraud Detection Platform** (React, FastAPI, XGBoost, SHAP, RAG)
  3. **Placement Portal Application (PPA V2)** (Flask, Vue.js, Celery, Redis, SQLite)
  4. **DevFlow – Developer Productivity Platform** (React, Node.js, Express.js, PostgreSQL, Prisma)
  5. **AI Resume Screening & Candidate Ranking System** (Python, Sentence-BERT, TF-IDF, Streamlit)
- **Problem Solving & DSA**: Dedicated LeetCode profile integration (`@Gagan05407`), algorithmic pillars (Big-O analysis, edge-case resilience), and language specializations in Java and Python.
- **Interactive Experience & Education**:
  - UNO Minda Limited (Design & Engineering Intern – May 2025 to July 2025)
  - Dual Degrees: LNMIIT Jaipur (B.Tech ECE 2023–2027) & IIT Madras (BS Data Science & Applications)
- **Leadership**: Fashion Club Coordinator at LNMIIT (Team leadership & 1500+ attendees event management).
- **Printable / Downloadable Resume Modal**: Interactive preview of Gagan's formatted resume with 1-click browser printing/PDF saving.
- **Functional Contact Form**: Direct client-side validation, confetti celebration, mailto fallback, and 1-click clipboard email copying.
- **Centralized Data Store**: All content is managed in a single file (`src/data/portfolioData.js`) for effortless future updates.

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg             # Custom branded vector favicon
│   ├── profile.jpg             # High-resolution professional headshot
│   ├── robots.txt              # Search engine crawler permissions
│   └── sitemap.xml             # SEO sitemap
├── src/
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for projects, skills, bio, links
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with active section spy & theme toggle
│   │   ├── Hero.jsx            # Hero section with avatar, bio & interactive agent console
│   │   ├── About.jsx           # Background narrative & 3 core pillars
│   │   ├── Expertise.jsx       # 4 categorised skill sets with search & filter
│   │   ├── Projects.jsx        # Project showcase with category filters & deep-dives
│   │   ├── Experience.jsx      # Interactive engineering internship timeline
│   │   ├── Education.jsx       # Dual degree academic cards (LNMIIT + IIT Madras)
│   │   ├── ProblemSolving.jsx  # DSA & LeetCode profile highlight
│   │   ├── Leadership.jsx      # Campus leadership & event coordination
│   │   ├── Contact.jsx         # Contact form, mailto handler & copy email
│   │   ├── Footer.jsx          # Footer with dynamic year & back-to-top
│   │   ├── ResumeModal.jsx     # Printable resume sheet modal
│   │   └── Icons.jsx           # Clean SVG brand icons (GitHub, LinkedIn, LeetCode)
│   ├── App.jsx                 # Main layout & theme management
│   ├── index.css               # Tailwind CSS directives & custom glow utilities
│   └── main.jsx                # React root mount
├── index.html                  # SEO metadata, OpenGraph tags, Google fonts
├── tailwind.config.js          # Custom colors, fonts, and dark mode configuration
├── vercel.json                 # Vercel deployment configuration & caching headers
└── package.json                # Project dependencies and build scripts
```

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Public Deployment Guide (Vercel)

Deploying this portfolio on Vercel is free, takes less than 2 minutes, and automatically redeploys whenever you push updates to GitHub.

### Step 1: Push Your Code to GitHub

1. Create a new repository on your GitHub account:
   - Go to [https://github.com/new](https://github.com/new)
   - Repository name: `portfolio` (or `gagan-gaur-portfolio`)
   - Keep it **Public**
   - Do **NOT** initialize with a README, .gitignore, or license (we already have them)
   - Click **Create repository**

2. Run the following commands in your terminal:
   ```bash
   git add .
   git commit -m "feat: complete modern personal portfolio for Gagan Gaur"
   git remote add origin https://github.com/gagan05407/portfolio.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Deploy to Vercel (Method A: Vercel Web Dashboard – Recommended)

1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account (`gagan05407`).
2. Click **Add New...** -> **Project**.
3. Under **Import Git Repository**, select your `portfolio` repository and click **Import**.
4. Configure Project settings (Vercel automatically detects Vite):
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. Within 30 seconds, your site will be live at a public URL (e.g. `https://portfolio-gagan05407.vercel.app` or `https://gagan-gaur.vercel.app`).

#### Customizing your URL:
- In your Vercel Project Dashboard, navigate to **Settings** -> **Domains**.
- You can add `gagan-gaur.vercel.app` or configure a custom personal domain (e.g., `gagangaur.com`).

---

### Step 3: Deploy via Vercel CLI (Method B: Command Line)

If you prefer deploying directly from the command line:

```bash
# 1. Install Vercel CLI globally (if not installed)
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel --prod
```

Follow the interactive prompts:
- *Set up and deploy?* -> `Y`
- *Which scope?* -> Select your personal account
- *Link to existing project?* -> `N`
- *What's your project's name?* -> `gagan-gaur`
- *In which directory is your code located?* -> `./`
- Vercel will output your live URL immediately!

---

### Step 4: Automatic Continuous Deployment (CI/CD)

Whenever you edit `src/data/portfolioData.js` or modify components:
```bash
git add .
git commit -m "update: added new project link"
git push origin main
```
Vercel will detect the push, build, and deploy the updated portfolio to your live URL automatically within seconds.

---

## 🛠️ How to Update Content

All your data is cleanly decoupled into **`src/data/portfolioData.js`**:
- **Personal Info & Headline**: Update `personalInfo` (phone, email, social URLs, status).
- **Projects**: Add, remove, or modify items in `projectsData` (GitHub links, live demo links, features, tech stack).
- **Experience**: Edit `experienceData`.
- **Education**: Edit `educationData`.
- **Technical Skills**: Add new skills or modify categories in `expertiseData`.
- **DSA / LeetCode**: Update `problemSolvingData`.

---

## 📄 License

MIT © Gagan Gaur
