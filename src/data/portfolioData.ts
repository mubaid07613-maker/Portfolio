/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION — UBAID UR REHMAN
 * ============================================================================
 * 
 * HOW TO EDIT YOUR PORTFOLIO:
 * 1. EDIT CURRENTLY LEARNED: Modify or add objects to the `currentlyLearned` array.
 * 2. EDIT CURRENTLY LEARNING: Modify topics in the `currentlyLearning` array.
 * 3. EDIT PROJECTS & GITHUB REPOS: Change `githubUrl` or add new project items.
 * 4. EDIT CERTIFICATES: Add new credentials to the `certificates` array.
 * 
 * Changes here automatically update all interactive dashboards and cards!
 */

export interface LearnedItem {
  id: string;
  topic: string;
  category: 'Systems' | 'Machine Learning' | 'Signal Processing' | 'Software' | 'Hardware';
  period: string; // e.g. "Fall 2026", "Recent"
  takeaway: string; // What you learned and mastered
  appliedIn: string; // Project or lab where applied
  status: 'Mastered' | 'Proficient' | 'Hands-on Practice';
  tags: string[];
}

export interface LearningItem {
  id: string;
  topic: string;
  domain: string;
  focus: string;
  progressPercent: number; // 0 to 100
  nextMilestone: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Systems' | 'Machine Learning' | 'Software' | 'Engineering';
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string; // Replace with your repository link
  liveDemoUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Development' | 'Coursework Project';
  date: string;
  badge?: string;
  architectureDetails: string[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  credentialUrl?: string;
  skills: string[];
  badgeColor?: string;
}

export interface CourseworkItem {
  name: string;
  code: string;
  category: string;
  semester: string;
}

export const portfolioData = {
  personal: {
    name: "Ubaid Ur Rehman",
    tagline: "Computer Engineering Student | Software & Machine Learning",
    location: "Multan, Pakistan",
    email: "m.ubaid.07613@gmail.com",
    phone: "+92319-8614307",
    university: "Bahauddin Zakariya University (BZU), Multan",
    degree: "BSc Computer Engineering",
    cgpa: "3.99 / 4.00",
    semester: "3rd Semester",
    about:
      "Computer Engineering student at BZU Multan combining low-level systems programming in C with machine learning classification in Python and discrete signal processing in MATLAB. Driven by analytical problem-solving and rigorous engineering principles with high academic standing.",
    statusBadge: "Available for Internships & Engineering Roles",
    resumeDownloadUrl: "#", // Add your PDF path here
  },

  socialLinks: {
    github: "https://github.com/placeholder-ubaid", // EDIT HERE: Your GitHub Profile URL
    linkedin: "https://linkedin.com/in/placeholder-ubaid", // EDIT HERE: Your LinkedIn Profile URL
    email: "mailto:m.ubaid.07613@gmail.com",
    phone: "tel:+923198614307",
  },

  education: [
    {
      institution: "Bahauddin Zakariya University (BZU)",
      location: "Multan, Pakistan",
      degree: "BSc Computer Engineering",
      period: "2025 – Present",
      grade: "CGPA 3.99 / 4.00",
      status: "In Progress (3rd Semester)",
      highlights: [
        "Current CGPA of 3.99 / 4.00, placing in top academic distinction.",
        "Official Class Representative & Departmental Laboratory Support liaison.",
        "Engineering curriculum covering digital logic design, signals & systems, and OOP."
      ]
    },
    {
      institution: "Muslim College",
      location: "Multan, Pakistan",
      degree: "FSc Pre-Engineering",
      period: "2023 – 2025",
      grade: "Completed",
      highlights: [
        "Advanced mathematics, calculus, and classical physics foundation."
      ]
    }
  ],

  coursework: [
    { name: "Object-Oriented Programming (C#)", code: "CS-OOP", category: "Software", semester: "3rd Sem" },
    { name: "Machine Learning with Python", code: "AI-ML", category: "AI / Data", semester: "3rd Sem" },
    { name: "Signals & Systems", code: "EE-SIG", category: "DSP", semester: "3rd Sem" },
    { name: "Digital Logic Design (DLD)", code: "CE-DLD", category: "Hardware", semester: "2nd Sem" },
    { name: "Circuit Analysis", code: "EE-CKT", category: "Hardware", semester: "2nd Sem" },
    { name: "Discrete Structures", code: "CS-DIS", category: "Mathematics", semester: "2nd Sem" },
    { name: "Complex Variables & Transforms", code: "MATH-CV", category: "Mathematics", semester: "3rd Sem" },
  ] as CourseworkItem[],

  /**
   * ============================================================================
   * CURRENTLY LEARNED (EDIT THIS TO UPDATE WHAT YOU HAVE MASTERED)
   * ============================================================================
   * Add, remove, or edit any skill/concept you have learned here.
   */
  currentlyLearned: [
    {
      id: "learned-c-memory",
      topic: "Pointers & Dynamic Memory Allocation in C",
      category: "Systems",
      period: "Recently Mastered",
      takeaway:
        "Mastered explicit memory management using malloc(), free(), pointer arithmetic, double pointers, and custom struct data architectures with zero memory leaks.",
      appliedIn: "C Student Management System",
      status: "Mastered",
      tags: ["C", "Pointers", "malloc/free", "Memory Layout", "Structs"]
    },
    {
      id: "learned-ml-trees",
      topic: "Supervised Classification & Decision Trees",
      category: "Machine Learning",
      period: "Recently Mastered",
      takeaway:
        "Implemented scikit-learn classification pipelines, train/test splitting, sample weighting for unbalanced datasets, and tree pruning/depth optimization.",
      appliedIn: "Diabetes Prediction Model",
      status: "Mastered",
      tags: ["Python", "scikit-learn", "Decision Trees", "pandas", "NumPy"]
    },
    {
      id: "learned-dsp-fft",
      topic: "Discrete Sampling & Fast Fourier Transform (FFT)",
      category: "Signal Processing",
      period: "Recently Mastered",
      takeaway:
        "Deep understanding of Nyquist-Shannon sampling theorem, harmonic spectral analysis, and converting time-domain waveforms to frequency spectra in MATLAB.",
      appliedIn: "MATLAB Signal Processing Suite",
      status: "Mastered",
      tags: ["MATLAB", "FFT", "Nyquist Rate", "Continuous vs Discrete", "DSP"]
    },
    {
      id: "learned-csharp-oop",
      topic: "Object-Oriented Programming (OOP) in C#",
      category: "Software",
      period: "Recently Mastered",
      takeaway:
        "Designed clean multi-class architectures leveraging encapsulation, inheritance, interfaces, and local relational data storage principles.",
      appliedIn: "C# Login & Data Storage System",
      status: "Proficient",
      tags: ["C#", ".NET", "OOP Pillars", "SQL Basics", "Authentication"]
    },
    {
      id: "learned-dld-logic",
      topic: "Digital Logic Design & Circuit Simulation",
      category: "Hardware",
      period: "Completed",
      takeaway:
        "Synthesized combinational and sequential logic circuits, Karnaugh maps (K-Maps), Boolean algebra minimization, and schematic simulation in Proteus.",
      appliedIn: "Hardware Lab & Proteus Workflows",
      status: "Proficient",
      tags: ["DLD", "Logic Gates", "K-Maps", "Proteus", "Circuits"]
    },
    {
      id: "learned-git-workflow",
      topic: "Git Version Control & Terminal Workflows",
      category: "Software",
      period: "Daily Practice",
      takeaway:
        "Proficient with branch management, commits, GitHub remote repositories, and terminal development tooling across Windows and Linux environments.",
      appliedIn: "All Software Repositories",
      status: "Mastered",
      tags: ["Git", "GitHub", "CLI", "Version Control"]
    }
  ] as LearnedItem[],

  /**
   * ============================================================================
   * CURRENTLY LEARNING & ROADMAP (EDIT THIS TO UPDATE CURRENT FOCUS)
   * ============================================================================
   */
  currentlyLearning: [
    {
      id: "learning-dl-pytorch",
      topic: "Deep Learning & Neural Networks (PyTorch)",
      domain: "Artificial Intelligence",
      focus: "Transitioning from traditional scikit-learn models into deep neural architectures, backpropagation mathematics, and tensor computation.",
      progressPercent: 65,
      nextMilestone: "Build a convolutional image and acoustic signal classifier in PyTorch.",
      tags: ["PyTorch", "Tensors", "Neural Networks", "Deep Learning"]
    },
    {
      id: "learning-cloud-vercel",
      topic: "Modern Cloud Architecture & Edge Deployment",
      domain: "Cloud Engineering",
      focus: "Mastering static edge deployment, global CDN routing, serverless architecture, and CI/CD automation via Vercel.",
      progressPercent: 85,
      nextMilestone: "Deploy portfolio on Vercel with custom domain routing and automated Git push triggers.",
      tags: ["Vercel", "Edge CDN", "Next.js", "CI/CD"]
    },
    {
      id: "learning-embedded-systems",
      topic: "Embedded Systems & Microcontroller Firmware",
      domain: "Hardware / Systems",
      focus: "Bridging low-level C programming with real hardware registers, timers, interrupts, and GPIO interfacing.",
      progressPercent: 45,
      nextMilestone: "Complete hardware interfacing prototype with simulated microcontroller in Proteus.",
      tags: ["Embedded C", "Microcontrollers", "Timers & Interrupts", "GPIO"]
    }
  ] as LearningItem[],

  /**
   * ============================================================================
   * FEATURED PROJECTS (EDIT REPO LINKS & CODE SNIPPETS HERE)
   * ============================================================================
   */
  projects: [
    {
      id: "c-student-management",
      title: "C Student Management System",
      category: "Systems",
      tagline: "Console-based student database managing records with zero external database dependencies.",
      description:
        "A low-level records management engine written in ANSI C. Employs custom structs, pointers, dynamic memory allocation (malloc/free), and defensive input validation to guard against buffer overruns.",
      highlights: [
        "Dynamic memory allocation for expandable student record stores.",
        "Pointer arithmetic for record traversal, binary searching, and sorting.",
        "Sanitized input parsing protecting against malformed stdin streams.",
        "Clean terminal interface with formatted tabular output."
      ],
      techStack: ["C Language", "Pointers", "Dynamic Memory", "Structs", "Data Structures"],
      githubUrl: "https://github.com/placeholder-ubaid/c-student-management", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "Featured Systems Project",
      architectureDetails: [
        "Memory: Heap-allocated struct array with pointer offsets",
        "Search: Optimized traversal with formatted console tabular view",
        "Integrity: Validated input loops to prevent buffer overflow"
      ],
      codeSnippet: {
        language: "c",
        filename: "student_manager.c",
        code: `typedef struct {
    int rollNumber;
    char name[50];
    float gpa;
} Student;

Student* create_registry(size_t capacity) {
    Student* list = (Student*)malloc(capacity * sizeof(Student));
    if (!list) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    return list;
}`
      }
    },
    {
      id: "diabetes-prediction-ml",
      title: "Diabetes Prediction Classification Pipeline",
      category: "Machine Learning",
      tagline: "Supervised machine learning pipeline for diagnostic classification using scikit-learn.",
      description:
        "Supervised ML classification system built on clinical biomarker data. Implemented complete data preprocessing, train/test splitting, sample weighting for class imbalance, and decision tree classification.",
      highlights: [
        "Cleaned and preprocessed biomedical feature vectors with pandas.",
        "Handled class distribution skew using sample weighting strategies.",
        "Trained DecisionTreeClassifier in scikit-learn with depth pruning.",
        "Evaluated model with confusion matrices, precision/recall, and ROC metrics."
      ],
      techStack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/placeholder-ubaid/diabetes-prediction-ml", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "Machine Learning",
      architectureDetails: [
        "Pipeline: Imputation -> Feature Scaling -> Train/Test Partition (80/20)",
        "Estimator: DecisionTreeClassifier with tuned max_depth & min_samples_split",
        "Evaluation: Precision-Recall curves & confusion matrix heatmaps"
      ],
      codeSnippet: {
        language: "python",
        filename: "model_pipeline.py",
        code: `from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
clf = DecisionTreeClassifier(max_depth=4, class_weight='balanced')
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)
print(classification_report(y_test, y_pred))`
      }
    },
    {
      id: "matlab-signal-processing",
      title: "MATLAB Signal Processing & FFT Suite",
      category: "Engineering",
      tagline: "Continuous and discrete signal analysis workspace featuring Fast Fourier Transform (FFT).",
      description:
        "Comprehensive signal processing toolkit developed in MATLAB. Demonstrates continuous signal sampling, Nyquist-Shannon criteria, aliasing detection, and harmonic spectral decomposition using the Fast Fourier Transform.",
      highlights: [
        "Simulated composite continuous signals with multi-frequency harmonics.",
        "Formulated discrete sampling workflows and Nyquist rate adherence.",
        "Computed Fast Fourier Transform (FFT) for spectral density analysis.",
        "Plotted dual-domain visualizations contrasting time and frequency responses."
      ],
      techStack: ["MATLAB", "Signals & Systems", "FFT", "DSP", "Spectral Analysis"],
      githubUrl: "https://github.com/placeholder-ubaid/matlab-signal-suite", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "DSP & Mathematics",
      architectureDetails: [
        "Sampling: Discrete-time conversion adhering to Fs > 2*Fmax",
        "FFT Decomposition: 1024-point discrete Fourier transform computation",
        "Plotting: Dual-axis time-domain waveforms vs. single-sided amplitude spectra"
      ],
      codeSnippet: {
        language: "matlab",
        filename: "fft_spectral_analysis.m",
        code: `Fs = 1000;            % Sampling frequency (Hz)
T = 1/Fs;             % Sampling period
L = 1500;             % Length of signal
t = (0:L-1)*T;        % Time vector

% Multi-tone composite signal
S = 0.7*sin(2*pi*50*t) + sin(2*pi*120*t);
Y = fft(S);
P2 = abs(Y/L);
P1 = P2(1:L/2+1);
P1(2:end-1) = 2*P1(2:end-1);
f = Fs*(0:(L/2))/L;`
      }
    },
    {
      id: "csharp-auth-storage",
      title: "C# Login & Local Data Storage System",
      category: "Software",
      tagline: "Object-oriented authentication workflow with persistent local data storage principles.",
      description:
        "Desktop authentication and credential management application built in C#. Integrates core OOP patterns (encapsulation, abstraction) with local data persistence applying foundational relational SQL concepts.",
      highlights: [
        "Structured 3-tier architecture: Presentation, Logic, and Data Access layers.",
        "Enforced encapsulation for user credentials and session tokens.",
        "Integrated local relational storage schemas with parameterized queries.",
        "Implemented structured input sanitization and error logging."
      ],
      techStack: ["C#", ".NET", "OOP", "SQL Fundamentals", "Authentication"],
      githubUrl: "https://github.com/placeholder-ubaid/csharp-login-storage", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "Software Engineering",
      architectureDetails: [
        "Design: Multi-tier OOP abstraction with user repository interface",
        "Security: Sanitized credentials and session validation state machine",
        "Data: Local persistence implementing SQL schema principles"
      ],
      codeSnippet: {
        language: "csharp",
        filename: "AuthService.cs",
        code: `public class AuthService : IAuthService
{
    private readonly IUserRepository _repository;

    public AuthService(IUserRepository repository) {
        _repository = repository;
    }

    public bool Authenticate(string username, string passwordHash) {
        var user = _repository.FindByUsername(username);
        return user != null && user.ValidatePassword(passwordHash);
    }
}`
      }
    }
  ] as ProjectItem[],

  certificates: [
    {
      id: "cert-ml-python",
      title: "Machine Learning with Python",
      issuer: "Coursera / IBM / Cognitive Class (Planned / Target Credential)",
      issueDate: "In Progress / 2026",
      status: "In Progress",
      credentialUrl: "",
      skills: ["Supervised ML", "Regression", "Decision Trees", "scikit-learn"],
      badgeColor: "emerald"
    },
    {
      id: "cert-c-systems",
      title: "Advanced C Programming & Data Structures",
      issuer: "Academic Specialization / IEEE (Verified Coursework)",
      issueDate: "Verified Coursework",
      status: "Completed",
      credentialUrl: "",
      skills: ["Pointers", "Dynamic Memory", "Linked Structures", "Algorithms"],
      badgeColor: "cyan"
    },
    {
      id: "cert-aws-cloud",
      title: "Cloud Computing & AWS Deployment Fundamentals",
      issuer: "AWS Educate / AWS Training (Planned / Target Credential)",
      issueDate: "Planned / 2026",
      status: "Planned",
      credentialUrl: "",
      skills: ["AWS Amplify", "Static Hosting", "Cloud Storage", "CI/CD"],
      badgeColor: "amber"
    }
  ] as CertificateItem[],

  leadership: [
    {
      role: "Class Representative & Lab Support Liaison",
      organization: "Bahauddin Zakariya University (BZU)",
      location: "Multan, Pakistan",
      period: "2025 – Present",
      highlights: [
        "Serve as the primary liaison bridging students and engineering faculty for academic schedules and departmental announcements.",
        "Assist instructors with physics and electronics hardware experiment setup, wiring checks, and test equipment calibration.",
        "Manage technical setup, software configurations, and projection systems for laboratory sessions and demonstrations."
      ],
      impactTags: ["Academic Coordination", "Hardware Lab Setup", "Student Leadership", "Faculty Liaison"]
    }
  ]
};
