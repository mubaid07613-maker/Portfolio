# Ubaid Ur Rehman — Developer Portfolio & Engineering Dashboard

A dark technical developer portfolio and engineering telemetry dashboard for **Ubaid Ur Rehman**, Computer Engineering student at Bahauddin Zakariya University (BZU), Multan.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**, configured for static export (`output: 'export'`) and deployment on **AWS Amplify**.

---

## 🚀 Key Features

- **Interactive Live Wallpaper Canvas:**
  - **Neural / Constellation Mode:** Dynamic nodes with cursor gravity (AI/ML).
  - **DSP Waveform Mode:** Harmonic FFT sine wave visualizer (Signal Processing).
  - **Wallpaper Switcher:** Floating control pill in bottom-right corner to toggle modes or turn off.
- **Academic Distinction & Telemetry:**
  - Highlights **CGPA 3.99 / 4.00**, 3rd Semester standing, and PEC-recognized BZU Computer Engineering track.
- **Strictly Grounded Content:**
  - **Systems Programming in C:** Custom structs, pointers, dynamic memory allocation (`malloc`/`free`), console CRUD operations.
  - **Machine Learning with Python:** Data preprocessing, train/test splitting, sample weighting, and decision tree classification with `scikit-learn`.
  - **Object-Oriented C#:** 3-tier user authentication workflow with local relational data storage.
  - **Signal Processing with MATLAB:** Continuous and discrete sampling, Nyquist frequency adherence, and Fast Fourier Transform (FFT) spectral analysis.
  - **Academic Leadership:** Official Class Representative & Departmental Laboratory Support Liaison at BZU.
- **Modular Data Architecture:**
  - All content, projects, GitHub repository URLs, social profiles, and certificates reside in **a single file**: `src/data/portfolioData.ts`.
- **AWS Amplify Ready:**
  - Includes pre-configured `amplify.yml` and Next.js static export for free-tier global CDN distribution.

---

## 🛠️ How to Add, Edit, or Modify Projects & GitHub Links

You don't need to touch any UI or HTML code to update your portfolio. Everything is managed in:
👉 `src/data/portfolioData.ts`

### 1. Update Your GitHub Links
Find the project in `src/data/portfolioData.ts` and edit `githubUrl`:
```typescript
{
  id: "c-student-management",
  title: "C Student Management System",
  // ...
  githubUrl: "https://github.com/your-username/your-repo-name", // 👈 Paste your actual repo link here
}
```

### 2. Add a New Project
Simply copy an existing project block in the `projects` array and paste it:
```typescript
{
  id: "new-embedded-system-project",
  title: "Microcontroller Logic Controller",
  category: "Engineering", // Choose: 'Systems' | 'Machine Learning' | 'Software' | 'Engineering'
  tagline: "Real-time digital logic controller in Embedded C.",
  description: "Detailed description of what you engineered...",
  highlights: [
    "Interfaced sensors using ADC and interrupts.",
    "Wrote optimized hardware driver routines in C."
  ],
  techStack: ["Embedded C", "Proteus", "Digital Logic", "Microcontrollers"],
  githubUrl: "https://github.com/your-username/new-project",
  featured: true,
  status: "Completed",
  date: "2026",
  badge: "Embedded Engineering"
}
```

### 3. Add Your Certificates
When you finish a certification (e.g. Coursera, Kaggle, Cisco, AWS), scroll down to `certificates` in `src/data/portfolioData.ts`:
```typescript
{
  id: "cert-coursera-ml",
  title: "Supervised Machine Learning: Regression and Classification",
  issuer: "DeepLearning.AI / Coursera",
  issueDate: "2026",
  status: "Completed", // or 'In Progress' or 'Planned'
  credentialUrl: "https://coursera.org/verify/YOUR_ID", // 👈 Verification link
  skills: ["Supervised ML", "Logistic Regression", "Decision Trees", "Python"]
}
```

---

## ☁️ How to Deploy on AWS Amplify

This website is configured with `output: 'export'` in `next.config.mjs` and includes `amplify.yml`.

### Step 1: Push your code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Ubaid Ur Rehman Developer Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to AWS Amplify
1. Log into your [AWS Management Console](https://console.aws.amazon.com/amplify).
2. Go to **AWS Amplify** > click **Create new app** > select **GitHub**.
3. Authorize GitHub and select your `portfolio` repository and `main` branch.
4. AWS Amplify will automatically detect the included `amplify.yml`:
   - Pre-build: `npm ci`
   - Build: `npm run build`
   - Base directory: `out`
5. Click **Save and deploy**.
6. In ~2 minutes, your website is live worldwide with free automatic HTTPS/SSL!

---

## 💻 Local Development

Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

To test the production build locally:
```bash
npm run build
```
This generates the optimized static export in the `out/` folder.
