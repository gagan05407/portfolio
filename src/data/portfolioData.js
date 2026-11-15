export const personalInfo = {
  name: "Gagan Gaur",
  headline: "AI Engineer | Software Engineer | Full-Stack Developer",
  status: "Open to Opportunities",
  location: "Jaipur, Rajasthan, India",
  phone: "+91-7689990636",
  email: "gagangaur05407@gmail.com",
  socials: {
    github: "https://github.com/gagan05407",
    linkedin: "https://www.linkedin.com/in/gagan-gaur",
    leetcode: "https://leetcode.com/u/Gagan05407/",
    email: "mailto:gagangaur05407@gmail.com"
  },
  heroIntro: "Building intelligent applications and scalable software solutions. Passionate about solving real-world problems through AI, backend engineering, and modern web technologies.",
  heroInterests: [
    "Artificial Intelligence & Generative AI",
    "Agentic AI & Multi-Agent Systems",
    "Full-Stack Web Development",
    "Data Structures & Algorithms",
    "Scalable Backend Systems"
  ],
  resumeUrl: "#resume-modal" // opens the built-in printable/downloadable resume modal
};

export const aboutData = {
  heading: "A little about me",
  bio: [
    "I'm a final-year B.Tech student at The LNM Institute of Information Technology (LNMIIT), Jaipur, pursuing Electronics and Communication Engineering, alongside a BS in Data Science and Applications from IIT Madras.",
    "I enjoy building software applications, intelligent AI systems, and practical solutions to real-world problems. My technical interests span software engineering, backend development, machine learning, Generative AI, and agentic systems.",
    "I continuously work on improving my problem-solving abilities through Data Structures and Algorithms and hands-on development."
  ],
  pillars: [
    {
      id: "swe",
      title: "Software Engineering",
      icon: "Code2",
      description: "Building full-stack applications, REST APIs, authentication systems, and database-driven platforms with clean architecture and robust tests.",
      highlights: ["REST APIs & JWT Auth", "Relational & Vector DBs", "Async queues & Caching"]
    },
    {
      id: "ai",
      title: "AI & Generative AI",
      icon: "BrainCircuit",
      description: "Developing RAG pipelines, multi-agent applications, machine learning models, and AI-powered solutions that provide explainable insights.",
      highlights: ["LangGraph Multi-Agent", "ChromaDB RAG Pipelines", "Model Context Protocol (MCP)"]
    },
    {
      id: "dsa",
      title: "Problem Solving",
      icon: "Cpu",
      description: "Practicing DSA, algorithms, system design fundamentals, and writing efficient code with rigorous time and space complexity optimizations.",
      highlights: ["Algorithmic Optimization", "Java & Python Practice", "System Design Fundamentals"]
    }
  ]
};

export const expertiseData = [
  {
    category: "Software Engineering",
    id: "software-engineering",
    description: "Core computer science fundamentals, programming languages, and robust software architecture.",
    skills: [
      { name: "Java", level: "Proficient", icon: "Coffee" },
      { name: "Python", level: "Advanced", icon: "Code" },
      { name: "JavaScript", level: "Proficient", icon: "FileCode" },
      { name: "Data Structures & Algorithms", level: "Strong", icon: "Binary" },
      { name: "Object-Oriented Programming", level: "Strong", icon: "Boxes" },
      { name: "DBMS", level: "Proficient", icon: "Database" },
      { name: "Operating Systems", level: "Proficient", icon: "Cpu" },
      { name: "Computer Networks", level: "Proficient", icon: "Network" }
    ]
  },
  {
    category: "Full-Stack Development",
    id: "full-stack",
    description: "Modern component-driven frontends paired with resilient, scalable backend microservices and APIs.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Vue.js", level: "Proficient", icon: "Layers" },
      { name: "Node.js", level: "Proficient", icon: "Server" },
      { name: "Express.js", level: "Proficient", icon: "ServerCog" },
      { name: "Flask", level: "Advanced", icon: "Flame" },
      { name: "FastAPI", level: "Advanced", icon: "Zap" },
      { name: "REST APIs", level: "Expert", icon: "ArrowLeftRight" },
      { name: "JWT Authentication", level: "Proficient", icon: "ShieldCheck" }
    ]
  },
  {
    category: "AI & Machine Learning",
    id: "ai-ml",
    description: "Next-generation LLM pipelines, autonomous multi-agent networks, and explainable ML algorithms.",
    skills: [
      { name: "PyTorch", level: "Proficient", icon: "Flame" },
      { name: "Scikit-learn", level: "Advanced", icon: "Sigma" },
      { name: "XGBoost", level: "Advanced", icon: "TrendingUp" },
      { name: "OpenCV", level: "Working Knowledge", icon: "Eye" },
      { name: "SHAP (Explainable AI)", level: "Proficient", icon: "Sparkles" },
      { name: "NLP", level: "Proficient", icon: "MessageSquareCode" },
      { name: "LangChain", level: "Advanced", icon: "Link" },
      { name: "LangGraph", level: "Advanced", icon: "GitGraph" },
      { name: "RAG Pipelines", level: "Advanced", icon: "SearchCheck" },
      { name: "MCP (Model Context Protocol)", level: "Proficient", icon: "Workflow" },
      { name: "Vector Databases", level: "Proficient", icon: "DatabaseBackup" }
    ]
  },
  {
    category: "Databases & Tools",
    id: "databases-tools",
    description: "Persistent storage solutions, asynchronous message brokers, caching, and developer toolchains.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: "Database" },
      { name: "MySQL", level: "Proficient", icon: "HardDrive" },
      { name: "SQLite", level: "Proficient", icon: "Disc" },
      { name: "ChromaDB", level: "Advanced", icon: "Layers" },
      { name: "Prisma ORM", level: "Proficient", icon: "FileSpreadsheet" },
      { name: "SQLAlchemy", level: "Proficient", icon: "Compass" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Docker", level: "Proficient", icon: "Container" },
      { name: "Postman", level: "Proficient", icon: "Send" },
      { name: "Celery", level: "Proficient", icon: "Clock" },
      { name: "Redis", level: "Proficient", icon: "Boxes" }
    ]
  }
];

export const projectsData = [
  {
    id: "multi-agent-assistant",
    title: "Multi-Agent Developer Assistant",
    tagline: "Autonomous collaborative coding assistant with intelligent query routing and persistent memory",
    badge: "Agentic AI / LLMs",
    category: "AI & Agents",
    description: "Built an autonomous multi-agent developer assistant featuring a central router agent that dynamically delegates tasks to specialized sub-agents. Integrates ChromaDB for context-aware RAG, persistent cross-session memory with SQLite, and extensible tool integration via Model Context Protocol (MCP).",
    problemSolved: "Single-agent LLM systems struggle with complex software workflows requiring distinct research, architectural reasoning, and code execution contexts. This multi-agent system decouples responsibilities, retains long-term developer context, and enables secure tool invocations.",
    keyFeatures: [
      "Multi-agent architecture with dynamic routing agent",
      "ChromaDB-powered Retrieval-Augmented Generation (RAG)",
      "Persistent long-term conversation & project memory using SQLite",
      "Custom tool execution via Model Context Protocol (MCP)",
      "Streamlit UI with real-time token response streaming"
    ],
    technologies: ["LangGraph", "ChromaDB", "RAG", "MCP", "Streamlit", "SQLite", "Python"],
    githubUrl: "https://github.com/gagan05407/multi-agent-dev-assistant", // Configurable placeholder
    demoUrl: "", // Optional live demo link
    featured: true,
    accentColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderHighlight: "group-hover:border-blue-500/40"
  },
  {
    id: "riskshield-ai",
    title: "RiskShield AI – Fraud Detection Platform",
    tagline: "Machine learning transaction risk scoring platform with SHAP explainability and analyst copilot",
    badge: "Machine Learning / FinTech",
    category: "AI & ML",
    description: "Developed an end-to-end intelligent fraud scoring system that assesses financial transactions using a high-precision XGBoost classifier, coupled with TreeSHAP to provide explainable decision attribution for fraud analysts.",
    problemSolved: "Traditional rule-based fraud detection suffers from high false-positive rates and opaque black-box machine learning models that compliance investigators cannot interpret or defend during investigations.",
    keyFeatures: [
      "Sub-second transaction risk score prediction",
      "SHAP-based transparent feature importance attribution for every flagged event",
      "RAG-based AI copilot assisting fraud analysts with investigation summaries",
      "High-throughput FastAPI asynchronous backend architecture",
      "Modern React analytics dashboard for real-time audit trails"
    ],
    technologies: ["React", "FastAPI", "XGBoost", "SHAP", "RAG", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/gagan05407/riskshield-ai-fraud-detection",
    demoUrl: "",
    featured: true,
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderHighlight: "group-hover:border-cyan-500/40"
  },
  {
    id: "placement-portal-v2",
    title: "Placement Portal Application (PPA V2)",
    tagline: "Enterprise campus placement management portal with automated eligibility checks and async task queues",
    badge: "Full-Stack / Systems",
    category: "Full-Stack",
    description: "Architected a scalable full-stack campus placement management platform streamlining company drives, student applications, and recruitment officer workflows with fine-grained role-based access control.",
    problemSolved: "Manual verification of student qualifications against varied company criteria (CGPA cutoffs, allowed branches, backlog constraints) causes operational delays and eligibility errors during high-volume placement seasons.",
    keyFeatures: [
      "Role-Based Access Control (Admin, Placement Officer, Student, Recruiter)",
      "Strict automated CGPA and branch-based eligibility enforcement engine",
      "Asynchronous background workers using Celery and Redis for automated email notifications and PDF/CSV report generation",
      "Redis caching layer reducing dashboard database queries by over 60%",
      "Secure JWT authentication with session expiration handling"
    ],
    technologies: ["Flask", "Vue.js", "Celery", "Redis", "SQLite", "REST APIs", "JWT"],
    githubUrl: "https://github.com/gagan05407/placement-portal-v2",
    demoUrl: "",
    featured: true,
    accentColor: "from-indigo-500/20 via-blue-500/10 to-transparent",
    borderHighlight: "group-hover:border-indigo-500/40"
  },
  {
    id: "devflow-productivity",
    title: "DevFlow – Developer Productivity Platform",
    tagline: "Collaborative project coordination workspace with role-based delegation and relational data modeling",
    badge: "Full-Stack / PERN",
    category: "Full-Stack",
    description: "Developed a full-stack developer productivity and task management platform that allows engineering teams to coordinate sprints, manage modular task assignments, and monitor real-time milestone progress.",
    problemSolved: "Disjointed team communication and lack of transparent task ownership create friction in fast-moving engineering teams. DevFlow organizes tasks with clear responsibility boundaries and audit logs.",
    keyFeatures: [
      "Secure JWT-based authentication and team permissions",
      "Role-based task assignment with granular status pipelines",
      "Multi-user workspace invitation and authorization workflow",
      "Strong relational schema modeling with PostgreSQL and Prisma ORM",
      "Responsive React interface with fast client-side state management"
    ],
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "REST APIs"],
    githubUrl: "https://github.com/gagan05407/devflow-productivity",
    demoUrl: "",
    featured: false,
    accentColor: "from-blue-500/20 via-purple-500/10 to-transparent",
    borderHighlight: "group-hover:border-blue-500/40"
  },
  {
    id: "ai-resume-screener",
    title: "AI Resume Screening & Candidate Ranking System",
    tagline: "Semantic resume-to-job matching engine with Sentence-BERT embeddings and automated question generation",
    badge: "NLP / AI",
    category: "AI & ML",
    description: "Engineered an intelligent resume screening system that computes semantic similarity scores between applicant resumes and technical job descriptions using dense Sentence-BERT embeddings with a TF-IDF lexical fallback.",
    problemSolved: "Keyword-only applicant tracking systems (ATS) frequently reject qualified candidates who use synonymous phrasing, while allowing unqualified candidates who spam keywords. Semantic matching evaluates real contextual relevance.",
    keyFeatures: [
      "Dense semantic similarity computation using Sentence-BERT embeddings",
      "Hybrid TF-IDF fallback mechanism for exact domain keyword verification",
      "Automated candidate ranking matrix based on composite semantic scores",
      "Context-aware generation of role-specific technical interview questions",
      "Interactive Streamlit web interface for recruiters to inspect match rationale"
    ],
    technologies: ["Python", "Sentence-BERT", "TF-IDF", "Streamlit", "Scikit-learn", "NLP"],
    githubUrl: "https://github.com/gagan05407/ai-resume-screening-system",
    demoUrl: "",
    featured: false,
    accentColor: "from-teal-500/20 via-cyan-500/10 to-transparent",
    borderHighlight: "group-hover:border-teal-500/40"
  }
];

export const experienceData = [
  {
    company: "UNO Minda Limited",
    role: "Design & Engineering Intern",
    period: "May 2025 – July 2025",
    location: "India",
    badge: "Engineering Internship",
    description: "Contributed to hardware design specifications, production validation, and system testing workflows within cross-functional engineering teams.",
    points: [
      "Translated technical specifications into production components through cross-functional collaboration and engineering design reviews.",
      "Optimized system testing workflows to reduce validation cycle times and enhance testing consistency.",
      "Coordinated with engineering and manufacturing teams to ensure component reliability and adherence to strict automotive quality standards."
    ],
    note: "Focused on core hardware-software design reviews and production validation methodologies."
  }
];

export const educationData = [
  {
    institution: "The LNM Institute of Information Technology (LNMIIT)",
    location: "Jaipur, Rajasthan",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "2023 – 2027",
    status: "Final Year Student",
    highlights: [
      "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, and DBMS.",
      "Hands-on engineering projects combining embedded firmware, signal systems, and software platforms."
    ]
  },
  {
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, India",
    degree: "BS in Data Science and Applications",
    period: "Pursuing concurrently",
    status: "Dual Degree Student",
    highlights: [
      "Specialized training in Machine Learning, Statistical Modeling, Big Data Systems, Database Architecture, and Deep Learning.",
      "Hands-on algorithmic projects in predictive modeling, feature engineering, and neural network development."
    ]
  }
];

export const problemSolvingData = {
  profileUrl: "https://leetcode.com/u/Gagan05407/",
  username: "Gagan05407",
  title: "Data Structures & Algorithmic Problem Solving",
  tagline: "Dedicated to continuous problem solving, optimal complexity analysis, and clean algorithmic code.",
  topics: [
    { name: "Arrays & Two Pointers", tag: "DSA" },
    { name: "Binary Search", tag: "Algorithms" },
    { name: "Dynamic Programming", tag: "Optimization" },
    { name: "Trees & Binary Search Trees", tag: "Data Structures" },
    { name: "Graph Algorithms (BFS/DFS/Dijkstra)", tag: "Graphs" },
    { name: "Hash Maps & Heaps", tag: "Data Structures" },
    { name: "Recursion & Backtracking", tag: "Algorithms" },
    { name: "System Design Fundamentals", tag: "Architecture" }
  ],
  languages: [
    { name: "Java", focus: "Strict typing, OOP, and fast algorithmic implementations" },
    { name: "Python", focus: "Prototyping, mathematical computations, and ML logic" }
  ],
  pillars: [
    {
      title: "Time & Space Optimization",
      desc: "Analyzing asymptotic complexity (Big-O) to write cache-friendly, non-allocating hot loops."
    },
    {
      title: "Edge-Case Resilience",
      desc: "Testing empty bounds, negative inputs, integer overflows, and concurrency invariants."
    },
    {
      title: "Clean Modular Abstractions",
      desc: "Writing readable, maintainable code with clear naming and testable single-responsibility functions."
    }
  ]
};

export const leadershipData = [
  {
    role: "Fashion Club Coordinator",
    organization: "The LNM Institute of Information Technology (LNMIIT)",
    period: "2024 – Present",
    points: [
      "Led and coordinated cross-functional student teams across production, choreography, and visual staging.",
      "Organized flagship college events and cultural fests with over 1,500+ attendees.",
      "Managed budgeting, vendor logistics, rehearsal schedules, and team coordination under tight deadlines."
    ]
  }
];
