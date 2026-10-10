export const links = {
  email: "mailto:udaypratap6145@gmail.com",
  emailAddress: "udaypratap6145@gmail.com",
  github: "https://github.com/Uday-6145",
  githubRepos: "https://github.com/Uday-6145?tab=repositories",
  linkedin: "https://www.linkedin.com/in/uday-pratap-singh-8a0a40375",
  resume: "/Uday_Pratap_Singh_Software_Development_Intern_Resume.pdf",
};

export const personalInfo = {
  monogram: "UP",
  name: "Uday Pratap Singh",
  role: "Software Development Intern (seeking SDE intern roles) | Computer Science Student | Full-Stack and Applied AI",
  heroTagline: "Computer Science student building full-stack web apps and applied AI systems with React, Node.js, MongoDB and Python.",
  heroChips: ["React", "Node.js", "MongoDB", "Python", "LangGraph"],
  aboutSummary: [
    "Computer Science student with hands-on experience building complete applications across frontend, backend, and applied AI.",
    "Comfortable with React, JavaScript, Node.js, Express, MongoDB, Python, and REST APIs. I enjoy understanding how each part of a product fits together, testing what I build, and improving it through iteration.",
    "Looking for a Software Development Intern role where I can contribute to real products and grow with an engineering team.",
  ],
  quickFacts: [
    { label: "Education", value: "B.Tech CSE at NIAT" },
    { label: "Focus", value: "Full-stack + Applied AI" },
    { label: "Looking for", value: "SDE Intern role" },
  ],
};

export const navItems = [
  { id: "about", label: "About", number: "01" },
  { id: "skills", label: "Skills", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "education", label: "Education", number: "04" },
  { id: "achievements", label: "Achievements", number: "05" },
  { id: "resume", label: "Resume", number: "06" },
  { id: "contact", label: "Contact", number: "07" },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "React Native", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Router"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "API integration", "JWT authentication"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "AI / Generative AI",
    skills: ["Python", "LangChain", "LangGraph", "RAG", "ChromaDB", "FAISS", "Groq", "LangSmith"],
  },
  {
    category: "Tools / Languages",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Java", "C++"],
  },
];

export const projects = [
  {
    id: "course-app",
    name: "CourseApp",
    description: "Course-selling application with an Express and MongoDB backend.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Course-selling application with an Express and MongoDB backend.",
      "Designed Mongoose models for users, admins, courses, and purchases.",
      "Organized the REST API into separate routes for the platform's main areas.",
      "Deployed a live Vercel demo so it can be reviewed online.",
    ],
    github: "https://github.com/Uday-6145/Course-selling-backend",
    live: "https://course-selling-backend-puce.vercel.app/",
  },
  {
    id: "e-commerce-web-app",
    name: "E-Commerce Web Application",
    description: "Product catalog loading products from a live API, with price sorting and loading feedback.",
    tech: ["React.js", "React Router"],
    bullets: [
      "Product catalog loading products from a live API, with price sorting and loading feedback.",
      "JWT login and protected React Router routes; cookie-based session persistence keeps users signed in after refresh.",
      '"Prime Deals" area showing offers to eligible users and a sign-up prompt to others.',
    ],
    github: "https://github.com/Uday-6145/E-commerce-website",
    live: null,
  },
  {
    id: "kestrel-research-assistant",
    name: "Kestrel Multi-Agent Research Assistant",
    description: "Four-agent RAG pipeline using LangGraph, ChromaDB, Groq, and LangSmith.",
    tech: ["Python", "LangGraph", "ChromaDB", "Groq", "LangSmith"],
    bullets: [
      "Four-agent RAG pipeline: router interprets the question, retriever searches ChromaDB, verifier checks the evidence, synthesizer prepares the answer.",
      "Verifier labels evidence as supported, partially supported, conflicting, or insufficient; the system avoids guessing when evidence is weak.",
      "Evaluated 15 questions with LangSmith, reaching 80% verdict accuracy; fixed a citation-parsing bug and moved inference to Groq to improve response speed.",
    ],
    github: "https://github.com/Uday-6145/Kestrel_Research_Assistant",
    live: null,
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science Engineering",
    institution: "NxtWave Institute of Advanced Technologies (NIAT)",
    period: "2025-2029",
    grade: "CGPA: 8.75 (1st Year)",
  },
  {
    degree: "Class XII",
    institution: "Kaushalya Devi Public School",
    period: "2024-2025",
    grade: null,
  },
  {
    degree: "Class X",
    institution: "Gyan Vallen Co-Ed School",
    period: "2022-2023",
    grade: null,
  },
];

export const achievements = [
  {
    title: "2nd place, Webathon",
    description: "Built a webpage in a three-hour, no-internet university challenge.",
    badge: "medal",
  },
  {
    title: "Finalist, OpenAI Buildathon",
    description: "Selected as a finalist in the OpenAI Buildathon challenge.",
    badge: "trophy",
  },
  {
    title: "Finalist, Smart India Hackathon (SIH)",
    description: "Finalist in the Smart India Hackathon internal round.",
    badge: "flag",
  },
];

export const contactDetails = {
  heading: "Let's Connect",
  subheading: "Open to Software Development Intern roles and technical discussions.",
  emailLabel: "Email",
  emailDisplay: "udaypratap6145@gmail.com",
  githubLabel: "GitHub",
  githubDisplay: "github.com/Uday-6145",
  linkedinLabel: "LinkedIn",
  linkedinDisplay: "linkedin.com/in/uday-pratap-singh-8a0a40375",
};
