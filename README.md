# Ubaid Ur Rehman — Premium Developer Portfolio & Engineering Dashboard

A dark technical developer portfolio and interactive engineering dashboard for **Ubaid Ur Rehman**, Computer Engineering student at Bahauddin Zakariya University (BZU), Multan.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**, configured for static export (`output: 'export'`) and deployment on **AWS Amplify**.

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
  focus: "Transitioning into deep neural architectures and tensor computation...",
  progressPercent: 65,
  nextMilestone: "Build a convolutional image and acoustic signal classifier in PyTorch.",
  tags: ["PyTorch", "Neural Networks", "Deep Learning"]
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

## ☁️ How to Deploy on AWS Amplify

Your project already includes the required `amplify.yml` build configuration and Next.js static export (`output: 'export'`).

### Step 1: Push your code to GitHub
```bash
git add .
git commit -m "feat: complete interactive engineering portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy in AWS Amplify Console
1. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify).
2. Click **Create new app** > Select **GitHub** as the source.
3. Choose your `portfolio` repository and `main` branch.
4. AWS Amplify will automatically detect the pre-configured `amplify.yml` file:
   - Build command: `npm run build`
   - Output directory: `out`
5. Click **Save and deploy**.

Your portfolio will be live worldwide on AWS CloudFront's global CDN with automatic free SSL/HTTPS in under 2 minutes.

---

## 💻 Running the Site Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
