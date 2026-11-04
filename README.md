# Ubaid Ur Rehman — Premium Developer Portfolio & Engineering Dashboard

A dark technical developer portfolio and interactive engineering dashboard for **Ubaid Ur Rehman**, Computer Engineering student at Bahauddin Zakariya University (BZU), Multan.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**, optimized for instant, zero-config deployment on **Vercel** (or Netlify / Cloudflare Pages).

---

## ⚡ What Makes This Interface Special

- **Interactive Live Wallpaper Canvas (3 Selectable Modes + HUD Controller):**
  - **Neural Constellation Mode:** Dynamic nodes with cursor gravity (AI/ML).
  - **DSP Oscilloscope Mode:** Real-time harmonic sine and Fourier waveform visualizer responding to mouse movement (Signal Processing).
  - **Engineering Code Stream Mode:** Subtle binary / mathematical symbol rain.
  - **Interactive HUD Pill:** Floating dock in bottom-right corner to toggle modes or pause anytime.
- **Interactive Engineering Workbench (Live In-Browser Labs):**
  - **DSP & FFT Synthesizer:** Adjust frequency and sampling rate with live Nyquist aliasing detection.
  - **C Memory Layout Simulator:** Dynamically allocate and free heap blocks (`malloc`/`free`) with pointer address inspection (`0x7ffee4b2`).
  - **ML Decision Tree Classifier:** Interactive clinical biomarker sliders (Glucose & BMI) with instant decision tree branch evaluation.
- **Interactive Command Terminal Dock in Hero:**
  - Type or click `$cgpa`, `$projects`, `$learned`, `$dsp`, `$contact`, `$help` for instant responses.
- **Featured Projects Bento Grid:**
  - Toggle between **Key Highlights**, **Live Code Snippets** (C struct code, scikit-learn pipeline, C# auth, MATLAB FFT), and **Architecture Notes**.
  - One-click **Copy Code** and direct **GitHub Repository** links.
- **Consolidated Mastery Hub (Zero Repetition):**
  - Tab 1: **Currently Learned** — Log of concepts mastered, key takeaways, and project applications.
  - Tab 2: **Currently Learning** — Active roadmap with progress bars (PyTorch, Cloud, Embedded C).
  - Tab 3: **Academic Coursework** — BZU Computer Engineering degree & CGPA 3.99/4.00.
  - Tab 4: **Certificates Shelf** — Active credentials and upcoming certifications with verification links.
- **Academic Leadership:**
  - Official Class Representative & Departmental Laboratory Support Liaison at BZU.

---

## 🚀 How to Deploy on Vercel in 60 Seconds (Recommended)

Vercel is created by the team behind Next.js. It requires **zero configuration**, has no IAM permissions or complex AWS settings, and automatically deploys every time you push to GitHub.

### Step 1: Push your code to GitHub
If you haven't pushed yet, run:
```bash
git add .
git commit -m "feat: complete interactive developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and click **Sign Up** (or log in with your GitHub account).
2. Click **Add New...** > **Project**.
3. You will see your `portfolio` repository listed under "Import Git Repository". Click **Import**.
4. Leave all default settings as-is (Vercel automatically detects Next.js).
5. Click **Deploy**.

That's it! In ~40 seconds, your portfolio is live worldwide on Vercel's Edge Network with a free `https://your-name.vercel.app` domain and free automatic HTTPS/SSL certificates.

---

## 🌐 Other Free Deployment Options

### Option B: Netlify
1. Go to [netlify.com](https://www.netlify.com).
2. Click **Add new site** > **Import an existing project** > **GitHub**.
3. Select your repository. Netlify detects Next.js automatically.
4. Click **Deploy site**.

### Option C: Cloudflare Pages
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select `portfolio`, choose the **Next.js (Static Export)** preset, and click **Save and Deploy**.

---

## 🛠️ How to Edit or Add Your Work

All portfolio content is decoupled from UI code and stored in:
👉 `src/data/portfolioData.ts`

### 1. Edit What You Have Learned (`currentlyLearned`)
Open `src/data/portfolioData.ts` and add or modify items in the `currentlyLearned` array:
```typescript
{
  id: "learned-c-memory",
  topic: "Pointers & Dynamic Memory Allocation in C",
  category: "Systems",
  period: "Recently Mastered",
  takeaway: "Mastered explicit memory management using malloc(), free(), pointer arithmetic...",
  appliedIn: "C Student Management System",
  status: "Mastered",
  tags: ["C", "Pointers", "malloc/free", "Memory Layout"]
}
```

### 2. Edit What You Are Currently Learning (`currentlyLearning`)
Modify your active focus in `src/data/portfolioData.ts`:
```typescript
{
  id: "learning-dl-pytorch",
  topic: "Deep Learning & Neural Networks (PyTorch)",
  domain: "Artificial Intelligence",
  focus: "Transitioning into deep neural architectures, backpropagation, and tensors...",
  progressPercent: 65,
  nextMilestone: "Build a convolutional image and acoustic signal classifier in PyTorch.",
  tags: ["PyTorch", "Tensors", "Neural Networks"]
}
```

### 3. Update Projects & GitHub Links (`projects`)
Change `githubUrl` or add a new project block:
```typescript
{
  id: "c-student-management",
  title: "C Student Management System",
  // ...
  githubUrl: "https://github.com/your-username/your-repo-name", // 👈 Paste repo link here
}
```

### 4. Add Certificates (`certificates`)
Add upcoming credentials to `certificates` in `src/data/portfolioData.ts`:
```typescript
{
  id: "cert-coursera-ml",
  title: "Supervised Machine Learning",
  issuer: "DeepLearning.AI / Coursera",
  issueDate: "2026",
  status: "Completed", // or 'In Progress' or 'Planned'
  credentialUrl: "https://coursera.org/verify/YOUR_ID",
  skills: ["Supervised ML", "Decision Trees", "scikit-learn"]
}
```

---

## 💻 Running the Site Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
