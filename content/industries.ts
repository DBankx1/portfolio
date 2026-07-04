export type Industry = {
  label: string;
  icon: string;
  accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
};

export const industries: Industry[] = [
  { label: "Construction", icon: "🏗️", accent: "cyan" },
  { label: "Recruitment & Staffing", icon: "🤝", accent: "violet" },
  { label: "Retail & E-commerce", icon: "🛍️", accent: "emerald" },
  { label: "Finance & Payments", icon: "💳", accent: "amber" },
  { label: "Education", icon: "🎓", accent: "rose" },
  { label: "Logistics & Field Ops", icon: "🚚", accent: "cyan" },
  { label: "Crypto & Web3", icon: "🪙", accent: "amber" },
  { label: "Fashion & AI Styling", icon: "👗", accent: "emerald" },
  { label: "Telecom & VoIP", icon: "📞", accent: "violet" },
  { label: "Media & Social", icon: "🎬", accent: "rose" },
  { label: "AI & SaaS", icon: "🤖", accent: "cyan" },
];
