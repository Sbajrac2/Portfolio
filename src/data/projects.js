// ============================================================
// PROJECTS DATA — Add, remove, or edit your projects here
// Each project appears as a card in the Projects section
// ============================================================

const projects = [
  {
    id: 1,
    title: "AllyCo",
    subtitle: "Voice-First Allyship Practice App",
    description:
      "A free voice-powered web app for practicing allyship in real social situations — like a flight simulator for tough conversations. Users pick a realistic scenario, speak out loud, and get real-time AI coaching feedback.",
    tech: ["Next.js", "Gemini AI", "ElevenLabs", "Vercel"],
    date: "Mar 2026 – Present",
    github: "#",    // <-- Add your GitHub link
    demo: "#",      // <-- Add your live demo link
    highlights: [
      "Mission-based scenarios with clear goals",
      "Real-time AI coaching via Gemini",
      "Engagement tracking with streaks and badges",
      "Built in under 24 hours at a hackathon"
    ],
    featured: true,
    category: "AI / Social Impact"
  },
  {
    id: 2,
    title: "Chhaya · छाया",
    subtitle: "Mental Health Check-in App",
    description:
      "A mental health check-in app designed around calm, intentional self-reflection. Features mood check-in via a glowing orb, guided emotional check-in flows, and weather-aware themes that shift the UI between solar and ambient modes.",
    tech: ["React.js", "CSS Animations", "Local Storage"],
    date: "Mar 2026 – Present",
    github: "#",
    demo: "#",
    highlights: [
      "Mood check-in via interactive glowing orb",
      "Insights view to track emotional patterns",
      "Personalized onboarding with color preferences",
      "Weather-aware dynamic themes"
    ],
    featured: true,
    category: "Mental Health / UX"
  },
  {
    id: 3,
    title: "Satori Town",
    subtitle: "Educational Game for Children with ASD",
    description:
      "A free educational game that helps children with Autism Spectrum Disorder practice real-world social skills in a safe, engaging environment. Set in a whimsical village, players guide character Hoshi the Owl to solve social challenges.",
    tech: ["Unity", "Figma", "Tiled", "C#"],
    date: "Feb 2026 – Present",
    github: "#",
    demo: "#",
    highlights: [
      "18 structured scenarios across 3 difficulty levels",
      "Targets Theory of Mind and Executive Functioning",
      "Supported by SCA student grant at SUNY Oswego",
      "Designed for schools and therapy centers"
    ],
    featured: true,
    category: "Game Dev / Accessibility"
  },
  {
    id: 4,
    title: "EmoSense",
    subtitle: "Emotional Learning App for Children with ASD",
    description:
      "An accessible application supporting emotional recognition and learning for children with Autism Spectrum Disorder. Built from wireframes to a fully functional product with interactive lessons and progress tracking.",
    tech: ["React.js", "Front-End Dev", "Accessibility"],
    date: "Aug 2025 – Present",
    github: "#",
    demo: "#",
    highlights: [
      "Student login with interactive lessons",
      "Progress tracking across sessions",
      "Text-to-speech and customization options",
      "Iterated on UI based on real user feedback"
    ],
    featured: false,
    category: "Accessibility / Education"
  },
  {
    id: 5,
    title: "Be Native",
    subtitle: "AI-Powered Language Learning Platform",
    description:
      "Immersive language learning platform for live conversational practice in virtual environments. Built at BigRed Hacks @ Cornell University with a cross-functional team.",
    tech: ["Next.js", "Tailwind CSS", "AI"],
    date: "Sep 2025",
    github: "#",
    demo: "#",
    highlights: [
      "World-map experience for roleplay scenarios",
      "Cafés, museums, streets as virtual environments",
      "Built at BigRed Hacks @ Cornell University",
      "Real-time conversational practice"
    ],
    featured: false,
    category: "AI / Language Learning"
  },
  {
    id: 6,
    title: "Quotable",
    subtitle: "Quote & Reading Platform",
    description:
      "Modern web platform for discovering and interacting with curated quotes, developed in collaboration with IBM as the project stakeholder for a Software Design course.",
    tech: ["React", "REST APIs", "Docker", "Playwright"],
    date: "Jan 2025 – May 2025",
    github: "#",
    demo: "#",
    highlights: [
      "Integrated REST APIs for dynamic content",
      "Dockerized deployments",
      "Playwright tests for cross-browser reliability",
      "IBM stakeholder project collaboration"
    ],
    featured: false,
    category: "Full Stack / IBM"
  },
  {
    id: 7,
    title: "AI for Accessible Education",
    subtitle: "Adaptive Learning Platform",
    description:
      "Adaptive course personalization platform with secure backend operations. Deployed a locally hosted Meta-Llama-3.1-8B model trained on educational datasets for personalized learning.",
    tech: ["Go", "Google OAuth", "Meta-Llama", "PostgreSQL"],
    date: "2024",
    github: "#",
    demo: "#",
    highlights: [
      "CRUD backend with Google OAuth",
      "Meta-Llama-3.1-8B fine-tuned on LectureBank",
      "Adaptive course personalization",
      "Improved system reliability metrics"
    ],
    featured: false,
    category: "AI / Backend"
  },
  {
    id: 8,
    title: "MODIT",
    subtitle: "Machine Operation Data Interpretation Tool",
    description:
      "Web-based tool for client Marquardt Switches Inc. that uses LSTM-based predictive modeling to monitor machine activity, detect performance deviations, and reduce downtime.",
    tech: ["LSTM", "Python", "Web", "Data Analytics"],
    date: "2024",
    github: "#",
    demo: "#",
    highlights: [
      "LSTM-based predictive modeling",
      "Real-time machine activity monitoring",
      "Reduced client downtime and microstops",
      "MODIT 2.0 with predictive analytics"
    ],
    featured: false,
    category: "ML / Data"
  },
  {
    id: 9,
    title: "Weather API & Cloud Deployment",
    subtitle: "Cloud-Deployed REST API",
    description:
      "Cloud-deployed REST API serving live weather data, containerized with Docker and deployed to AWS ECS behind a load balancer with automated CI/CD.",
    tech: ["Go", "Docker", "AWS ECS", "CodePipeline"],
    date: "2024",
    github: "#",
    demo: "#",
    highlights: [
      "Go-based REST API with Gorilla Mux",
      "Containerized with Docker",
      "Deployed to AWS ECS with load balancer",
      "Automated CI/CD with CodeBuild & CodePipeline"
    ],
    featured: false,
    category: "Cloud / Backend"
  }
];

export default projects;
