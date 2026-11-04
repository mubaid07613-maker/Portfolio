/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * 
 * HOW TO MODIFY:
 * - To add a new project, simply copy an object in the `projects` array and paste it.
 * - To update your GitHub links, replace the `githubUrl` field.
 * - To add certificates, add an object to the `certificates` array.
 * - All content here automatically updates throughout the entire website!
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Systems' | 'Machine Learning' | 'Software' | 'Engineering';
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string; // Set your repo link here, e.g., "https://github.com/ubaid-rehman/my-repo"
  liveDemoUrl?: string; // Optional live link
  featured: boolean;
  status: 'Completed' | 'In Development' | 'Coursework Project';
  date: string;
  badge?: string;
  architectureDetails?: string[];
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

export interface SkillCategory {
  id: string;
  title: string;
  iconName: 'Cpu' | 'Brain' | 'Radio' | 'Code' | 'Terminal' | 'Database';
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Proficient' | 'Exploring';
    tag?: string;
  }[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  impactTags: string[];
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
    semester: "3rd Semester (Active)",
    about: 
      "Computer Engineering student at BZU Multan with hands-on experience in C systems programming, Python data processing, and growing expertise in C# and machine learning. Comfortable building clean software projects, engineering ML classification pipelines with scikit-learn, and conducting signal processing and spectral analysis with MATLAB. Driven by a rigorous engineering and analytical mindset, with a passion for building reliable software.",
    statusBadge: "Available for Internships & Collaborations",
    resumeDownloadUrl: "#", // Replace with your actual resume PDF link or path, e.g. "/resume/Ubaid_Ur_Rehman_Resume.pdf"
  },

  socialLinks: {
    github: "https://github.com/placeholder-ubaid", // EDIT HERE: Your GitHub Profile URL
    linkedin: "https://linkedin.com/in/placeholder-ubaid", // EDIT HERE: Your LinkedIn Profile URL
    email: "mailto:m.ubaid.07613@gmail.com",
    phone: "tel:+923198614307",
  },

  telemetry: {
    academicRank: "High Academic Distinction (CGPA 3.99/4.00)",
    currentSemester: "3rd Semester",
    primaryLanguages: ["C", "Python", "C#"],
    primaryDomains: ["Machine Learning", "Signal Processing (DSP)", "Systems Programming"],
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
        "Consistent academic excellence with a current CGPA of 3.99/4.00.",
        "Class Representative & Departmental Laboratory Support liaison.",
        "Focused study in digital logic, circuit analysis, discrete structures, and signals & systems."
      ]
    },
    {
      institution: "Muslim College",
      location: "Multan, Pakistan",
      degree: "FSc Pre-Engineering",
      period: "2023 – 2025",
      grade: "Completed",
      highlights: [
        "Strong mathematical foundation in calculus, physics, and analytical problem-solving.",
        "Transitioned directly into university-level Computer Engineering."
      ]
    }
  ],

  coursework: [
    { name: "Object-Oriented Programming (C#)", code: "CS-OOP", category: "Software" },
    { name: "Machine Learning with Python", code: "AI-ML", category: "AI / Data" },
    { name: "Signals & Systems", code: "EE-SIG", category: "Engineering" },
    { name: "Digital Logic Design (DLD)", code: "CE-DLD", category: "Hardware" },
    { name: "Circuit Analysis", code: "EE-CKT", category: "Hardware" },
    { name: "Discrete Structures", code: "CS-DIS", category: "Mathematics" },
    { name: "Complex Variables & Transforms", code: "MATH-CV", category: "Mathematics" },
  ],

  skillCategories: [
    {
      id: "programming",
      title: "Core Programming & Systems",
      iconName: "Terminal",
      description: "Low-level memory control, structured coding, and object-oriented paradigms.",
      skills: [
        { name: "C Language", level: "Core", tag: "Pointers & Structs" },
        { name: "Dynamic Memory Allocation", level: "Core", tag: "malloc/free" },
        { name: "Data Structures in C", level: "Core", tag: "Arrays, Records" },
        { name: "C# (.NET)", level: "Proficient", tag: "OOP Fundamentals" },
        { name: "Object-Oriented Design", level: "Proficient", tag: "Inheritance & Polymorphism" },
      ]
    },
    {
      id: "ml-python",
      title: "Python & Machine Learning",
      iconName: "Brain",
      description: "Data exploration, preprocessing, classification models, and evaluation.",
      skills: [
        { name: "Python", level: "Core", tag: "Scripting & Analysis" },
        { name: "scikit-learn", level: "Proficient", tag: "Classifiers & Metrics" },
        { name: "pandas", level: "Proficient", tag: "Dataframes & Cleaning" },
        { name: "NumPy", level: "Proficient", tag: "Vector Operations" },
        { name: "Matplotlib", level: "Proficient", tag: "Visualization" },
        { name: "Decision Trees & Regression", level: "Proficient", tag: "Supervised Learning" },
      ]
    },
    {
      id: "engineering-dsp",
      title: "Engineering & Signal Processing",
      iconName: "Radio",
      description: "Mathematical computing, continuous/discrete signals, and logic circuits.",
      skills: [
        { name: "MATLAB", level: "Core", tag: "Simulation & Modeling" },
        { name: "Signal Sampling & Nyquist", level: "Core", tag: "DSP Fundamentals" },
        { name: "Fast Fourier Transform (FFT)", level: "Core", tag: "Spectral Analysis" },
        { name: "Digital Logic Design", level: "Proficient", tag: "Logic Gates & KMaps" },
        { name: "Proteus Simulation", level: "Proficient", tag: "Circuit Testing" },
      ]
    },
    {
      id: "tools-workflow",
      title: "Tools, Database & Workflow",
      iconName: "Database",
      description: "Version control, foundational querying, and IDE development pipelines.",
      skills: [
        { name: "Git & GitHub", level: "Core", tag: "Version Control" },
        { name: "SQL Fundamentals", level: "Proficient", tag: "Relational Queries" },
        { name: "Visual Studio & VS Code", level: "Core", tag: "IDE Ecosystem" },
        { name: "Input Validation & Debugging", level: "Core", tag: "System Reliability" },
      ]
    }
  ] as SkillCategory[],

  /**
   * PROJECTS
   * You can add, edit, or re-order any project here!
   * Simply duplicate one block and modify the values.
   */
  projects: [
    {
      id: "c-student-management",
      title: "C Student Management System",
      category: "Systems",
      tagline: "Console-based student database managing records with zero external database dependencies.",
      description: 
        "A robust console-based records management system engineered in pure C. Built to demonstrate deep understanding of structs, pointer traversal, dynamic memory allocation, and defensive input validation.",
      highlights: [
        "Architected using custom C structs, dynamic arrays, and memory pointers.",
        "Implemented full CRUD operations: add student, search by roll number, update records, and safely remove entries.",
        "Built defensive input validation handling unexpected character inputs and preventing buffer overruns.",
        "Structured modular functions with clean separation of logic and presentation."
      ],
      techStack: ["C", "Pointers", "Structs", "Dynamic Memory", "Console UI"],
      githubUrl: "https://github.com/placeholder-ubaid/c-student-management", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "Featured Systems Project",
      architectureDetails: [
        "Memory: Struct array with dynamic pointer offsets",
        "Operations: O(N) linear search with formatted tabular report rendering",
        "Validation: Sanitized stdin stream parsing"
      ]
    },
    {
      id: "diabetes-prediction-ml",
      title: "Diabetes Prediction Classification Model",
      category: "Machine Learning",
      tagline: "Supervised machine learning pipeline for diagnostic classification using scikit-learn.",
      description: 
        "An end-to-end machine learning project focusing on data preprocessing, feature correlation, sample weighting, and decision-tree classification on clinical biomarker datasets.",
      highlights: [
        "Cleaned and preprocessed health metrics dataset, handling missing values and scaling numerical attributes.",
        "Conducted train/test splitting and implemented sample weighting to address class balance.",
        "Trained and evaluated a Decision Tree Classifier using scikit-learn with depth tuning.",
        "Generated confusion matrices, accuracy scores, and visual metric plots using Matplotlib."
      ],
      techStack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/placeholder-ubaid/diabetes-prediction-ml", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "Machine Learning",
      architectureDetails: [
        "Model: DecisionTreeClassifier (Gini / Entropy criterion)",
        "Pipeline: Train/Test splitting, feature normalization, evaluation reports",
        "Visualization: Precision/Recall analysis & tree boundary plots"
      ]
    },
    {
      id: "csharp-auth-storage",
      title: "C# Login & Local Data Storage System",
      category: "Software",
      tagline: "Object-oriented authentication workflow with persistent local data storage principles.",
      description: 
        "An application developed in C# that implements a complete user registration and login authentication workflow, applying fundamental Object-Oriented Programming (OOP) patterns and relational SQL concepts.",
      highlights: [
        "Leveraged OOP pillars: encapsulation for user credentials, class abstractions, and secure property validation.",
        "Designed local data persistence applying foundational relational database schema concepts.",
        "Created an intuitive user authentication flow with credential verification and session feedback.",
        "Structured with clean separation between data access layer and presentation logic."
      ],
      techStack: ["C#", ".NET", "OOP", "SQL Fundamentals", "Authentication"],
      githubUrl: "https://github.com/placeholder-ubaid/csharp-login-storage", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "Software Engineering",
      architectureDetails: [
        "Architecture: 3-tier separation (Model, Controller, Storage handler)",
        "Security: Credential sanitization & structured user session states",
        "Storage: Local relational storage integration"
      ]
    },
    {
      id: "matlab-signal-processing",
      title: "MATLAB Signal Processing & Spectral Analysis Suite",
      category: "Engineering",
      tagline: "Continuous and discrete signal analysis workspace featuring Fast Fourier Transform (FFT).",
      description: 
        "A suite of MATLAB scripts and numerical routines created for signal processing coursework, focusing on continuous-to-discrete sampling, frequency-domain FFT decomposition, and waveform visualization.",
      highlights: [
        "Simulated continuous and discrete test signals with varying frequencies and harmonic components.",
        "Applied the Fast Fourier Transform (FFT) algorithm to extract frequency spectra and analyze amplitude distributions.",
        "Demonstrated Nyquist sampling theorem, exploring aliasing phenomena and reconstruction fidelity.",
        "Generated multi-panel plots contrasting time-domain vs. frequency-domain waveforms."
      ],
      techStack: ["MATLAB", "Signals & Systems", "FFT Algorithm", "DSP", "Frequency Analysis"],
      githubUrl: "https://github.com/placeholder-ubaid/matlab-signal-suite", // EDIT HERE
      featured: true,
      status: "Completed",
      date: "2025",
      badge: "DSP & Mathematics",
      architectureDetails: [
        "Sampling: Discrete-time conversion with Nyquist rate adherence",
        "Spectral Analysis: Magnitude & phase computation via discrete FFT",
        "Visualization: Dual-domain real-time waveform rendering"
      ]
    }
  ] as ProjectItem[],

  /**
   * CERTIFICATES & CREDENTIALS
   * Since certificates are upcoming, these placeholders provide a clean structure.
   * As you complete certifications, simply update title, issuer, date, and link!
   */
  certificates: [
    {
      id: "cert-ml-python",
      title: "Machine Learning with Python",
      issuer: "Coursera / IBM / Cognitive Class (Target Credential)",
      issueDate: "In Progress / 2026",
      status: "In Progress",
      credentialUrl: "", // Leave blank or add verification URL
      skills: ["Supervised ML", "Regression", "Decision Trees", "scikit-learn"],
      badgeColor: "emerald"
    },
    {
      id: "cert-c-systems",
      title: "Advanced C Programming & Data Structures",
      issuer: "Academic Specialization / IEEE (Target Credential)",
      issueDate: "Verified Coursework",
      status: "Completed",
      credentialUrl: "",
      skills: ["Pointers", "Dynamic Memory", "Linked Structures", "Algorithms"],
      badgeColor: "cyan"
    },
    {
      id: "cert-aws-cloud",
      title: "Cloud Computing & AWS Deployment Fundamentals",
      issuer: "AWS Educate / AWS Training (Target Credential)",
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
        "Serve as the primary communication bridge between Computer Engineering students and university faculty.",
        "Coordinate academic schedules, assignment milestones, and departmental notifications.",
        "Assist instructors and lab engineers with physics and electronics hardware experiment setup, calibration, and safety checks.",
        "Provide direct technical setup support for lab computers, projection hardware, and software tooling during lectures."
      ],
      impactTags: ["Academic Coordination", "Hardware Lab Setup", "Student Leadership", "Faculty Liaison"]
    }
  ] as LeadershipRole[],

  currentlyLearning: [
    {
      topic: "Deep Learning & Neural Networks",
      context: "Expanding from scikit-learn decision trees into PyTorch foundations for computer vision and signal classification.",
      status: "Active Exploration",
      tags: ["PyTorch", "Neural Nets", "Deep Learning"]
    },
    {
      topic: "Modern Full-Stack & Cloud Architecture",
      context: "Mastering TypeScript, modern React component architecture, and AWS Amplify serverless cloud deployment.",
      status: "In Progress",
      tags: ["TypeScript", "AWS Amplify", "Next.js"]
    },
    {
      topic: "Embedded Systems & Microcontrollers",
      context: "Connecting low-level C programming with hardware architectures, microcontrollers, and real-time digital logic.",
      status: "Upcoming Coursework",
      tags: ["Embedded C", "Microcontrollers", "Hardware/Software Co-design"]
    }
  ]
};

