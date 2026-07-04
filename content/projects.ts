export type Project = {
  id: string;
  name: string;
  icon: string;
  status: "active" | "shipped";
  accent: "cyan" | "violet" | "emerald" | "amber";
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "drafter",
    name: "Drafter",
    icon: "📝",
    status: "active",
    accent: "cyan",
    description:
      "An embedded AI consultation tool that turns discovery conversations into polished, client-ready proposals. A multi-tenant SaaS platform pairing a FastAPI backend with a Next.js frontend, built around a RAG pipeline on LangChain and OpenAI LLMs so every draft is grounded in the client's own documents. Targeting a 60% reduction in client onboarding time.",
    stack: ["FastAPI", "Next.js", "LangChain", "OpenAI", "RAG", "Multi-tenant"],
    links: [
      { label: "Frontend", href: "https://github.com/DBankx1/drafter_ui" },
      { label: "Backend", href: "https://github.com/DBankx1/drafter_api" },
    ],
  },
  {
    id: "image-search",
    name: "Image Search",
    icon: "🔭",
    status: "shipped",
    accent: "emerald",
    description:
      "Object detection and classification for bulk images. Point it at thousands of photos and explore them by what is actually in them: Ultralytics YOLO models power class-based filtering across large datasets, with a Python backend and a Gradio interface delivering real-time exploration and retrieval without leaving the browser.",
    stack: ["Python", "Ultralytics YOLO", "Gradio", "Computer Vision"],
    links: [
      { label: "GitHub", href: "https://github.com/DBankx1/Image_Search_App" },
    ],
  },
  {
    id: "qlip",
    name: "Qlip",
    icon: "🎮",
    status: "shipped",
    accent: "violet",
    description:
      "A video sharing platform built for gamers to show off their best one-minute clips. A full-stack build: an ASP.NET Core API structured with CQRS through MediatR and Entity Framework over MySQL, a React and TypeScript frontend, and Cloudinary handling video storage, processing, and fast delivery so clips play instantly.",
    stack: [
      "ASP.NET Core",
      "React",
      "TypeScript",
      "MediatR",
      "Entity Framework",
      "MySQL",
      "Cloudinary",
    ],
    links: [{ label: "GitHub", href: "https://github.com/DBankx/Qlip" }],
  },
  {
    id: "taskr",
    name: "Taskr",
    icon: "🧰",
    status: "shipped",
    accent: "amber",
    description:
      "A two-sided task marketplace where people post everyday tasks and taskers bid to win the work. C# and ASP.NET Core power the backend, with a React and TypeScript frontend managed by MobX, Yup-validated forms, a Chakra UI design system, and Stripe integration for secure payments from bid to checkout.",
    stack: [
      "C#",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "MobX",
      "Chakra UI",
      "Stripe",
    ],
    links: [
      {
        label: "Backend",
        href: "https://github.com/DBankx/Taskr_BackEnd_v_1.0.0",
      },
      {
        label: "Frontend",
        href: "https://github.com/DBankx/Taskr_FrontEnd_V.1.0.0",
      },
    ],
  },
];
