export type Cert = {
  id: string;
  name: string;
  issuer: string;
  status: "earned" | "in-progress";
  year?: string;
};

export const certs: Cert[] = [
  {
    id: "az-305",
    name: "AZ-305: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    status: "earned",
  },
  {
    id: "ai-900",
    name: "AI-900: Azure AI Fundamentals",
    issuer: "Microsoft",
    status: "earned",
  },
  {
    id: "itil",
    name: "ITIL 4 Foundation",
    issuer: "PeopleCert",
    status: "earned",
  },
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    status: "in-progress",
  },
];
