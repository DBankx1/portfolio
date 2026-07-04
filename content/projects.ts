export type Project = {
  id: string;
  name: string;
  status: "active" | "shipped";
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "drafter",
    name: "Drafter",
    status: "active",
    description:
      "Embedded AI consultation tool for businesses. A multi-tenant SaaS platform with a FastAPI backend and Next.js frontend, using a RAG pipeline with LangChain and OpenAI LLMs to automate proposal generation, targeting a 60% reduction in client onboarding time.",
    stack: ["FastAPI", "Next.js", "LangChain", "OpenAI", "RAG", "Multi-tenant"],
    links: [],
  },
  {
    id: "image-search",
    name: "Image Search",
    status: "shipped",
    description:
      "Object detection and classification for bulk images. A scalable image-search application for large datasets with class-based filtering via Ultralytics YOLO models, a Python backend, and a Gradio interface for real-time exploration and retrieval.",
    stack: ["Python", "Ultralytics YOLO", "Gradio", "Computer Vision"],
    links: [],
  },
];
