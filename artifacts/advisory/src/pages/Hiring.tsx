import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Briefcase, Code, Users, Scale, Shield, Search, GraduationCap, Brain, Globe } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const positions = [
  {
    id: "business-formation-advisor",
    title: "Business Formation Advisor",
    icon: Briefcase,
    description: "Guide clients through every step of launching their US business",
    details: "Join our formation team to lead clients from intake through completed LLC or C-Corp setup. Work directly with first-time business owners — freelancers, independent consultants, international entrepreneurs, and anyone establishing their work as a proper business — helping them navigate state filings, EIN applications, and compliance setup.",
    responsibilities: [
      "Manage client formation engagements from intake to completion",
      "Advise on entity type selection (LLC vs C-Corp) and state choice",
      "Coordinate state filings and IRS EIN applications",
      "Review and customize operating agreements and bylaws",
      "Guide clients through registered agent setup and compliance calendars",
    ],
  },
  {
    id: "regulatory-affairs",
    title: "US Regulatory Affairs Specialist",
    icon: Scale,
    description: "Track and apply US state and federal business formation requirements",
    details: "Monitor, analyze, and apply changes in US business formation law, FinCEN reporting requirements, state annual report rules, and emerging regulations. Support our advisory team with up-to-date regulatory guidance for every state we serve.",
    responsibilities: [
      "Monitor US state formation law and annual compliance requirements",
      "Track FinCEN Beneficial Ownership reporting rules and updates",
      "Draft regulatory guidance and compliance checklists for clients",
      "Advise on state selection and tax treatment for different entity types",
      "Contribute to AERO's published founder guides and resources",
    ],
  },
  {
    id: "international-client-specialist",
    title: "International Client Specialist",
    icon: Globe,
    description: "Help non-US residents launch their American businesses",
    details: "Specialize in supporting international founders — from visa considerations to ITIN applications, non-resident EIN processes, and banking introductions. AERO serves clients from 40+ countries and this role is central to that mission.",
    responsibilities: [
      "Guide non-US residents through formation and EIN application process",
      "Advise on ITIN requirements and IRS Form SS-4 for foreign applicants",
      "Coordinate banking introductions for non-resident business owners",
      "Navigate cross-border tax considerations at the formation stage",
      "Build and maintain resources for international founder onboarding",
    ],
  },
  {
    id: "client-success",
    title: "Client Success Manager",
    icon: Users,
    description: "Ensure every founder has a seamless, supported formation experience",
    details: "Own the post-sale client relationship from formation kickoff through delivery. Coordinate across advisors, legal, and technology teams to ensure every client receives their documents on time and understands their compliance obligations going forward.",
    responsibilities: [
      "Manage client timelines and formation progress communication",
      "Coordinate document delivery and client portal setup",
      "Answer post-formation questions on compliance and next steps",
      "Collect feedback and drive continuous process improvements",
      "Maintain client relationships for annual compliance renewals",
    ],
  },
  {
    id: "ai-compliance",
    title: "AI Compliance Advisor",
    icon: Brain,
    description: "Help small businesses navigate evolving AI regulations",
    details: "As part of AERO's AI governance advisory service (included in every package), advise clients on how emerging AI regulations — from FTC guidelines to the EU AI Act — affect small businesses using AI tools. Make enterprise-grade AI governance accessible to everyday business owners.",
    responsibilities: [
      "Develop AI governance guidance tailored for small businesses",
      "Track FTC, state, and international AI regulatory developments",
      "Advise clients on AI disclosure obligations for their market",
      "Build and maintain AI policy templates for common business types",
      "Contribute to AERO's AI governance resource library",
    ],
  },
  {
    id: "research",
    title: "Formation Research Analyst",
    icon: Search,
    description: "Build and maintain AERO's state-by-state formation knowledge base",
    details: "Research and document US business formation requirements across all 50 states. Maintain AERO's internal and client-facing guides — including state fees, annual report requirements, processing times, and state-specific rules for non-resident founders.",
    responsibilities: [
      "Research and document state formation rules across all 50 states",
      "Maintain AERO's formation pricing and timeline guides",
      "Track changes in state laws, fee schedules, and processing times",
      "Author founder guides, blog content, and comparison resources",
      "Support the advisory team with state-specific client questions",
    ],
  },
  {
    id: "legal",
    title: "Legal Counsel",
    icon: Shield,
    description: "Support AERO's legal operations and client formation documents",
    details: "Provide legal expertise across US business formation, document review, and advisory firm operations. Review and approve client operating agreements, bylaws, and formation documents. Advise on AERO's own compliance and contractual frameworks.",
    responsibilities: [
      "Review and approve client-facing formation documents",
      "Advise on state-specific LLC and corporation law",
      "Draft and maintain AERO's standard client agreements",
      "Advise on regulatory compliance for AERO operations",
      "Support complex multi-state or international formation cases",
    ],
  },
  {
    id: "technology",
    title: "Product & Technology",
    icon: Code,
    description: "Build the tools that power AERO's formation and compliance platform",
    details: "Develop the internal and client-facing platforms that run AERO's formation process — from intake forms to compliance dashboards, AI document tools, and automated reminder systems. Work at the intersection of legal process and software.",
    responsibilities: [
      "Build and maintain AERO's client portal and formation workflow tools",
      "Develop the AI document generation and compliance tracking features",
      "Automate state filing deadline monitoring and client notifications",
      "Maintain secure document handling and delivery infrastructure",
      "Collaborate with advisors to turn formation steps into scalable tooling",
    ],
  },
  {
    id: "interns",
    title: "Interns",
    icon: GraduationCap,
    description: "Launch your career helping people turn their passions into businesses",
    details: "Gain hands-on experience at a mission-driven firm helping individuals take their first steps as business owners. Contribute to real client work, research projects, and the content that helps thousands of founders understand US business formation.",
    responsibilities: [
      "Support formation advisors on client intake and research",
      "Conduct state-by-state formation and compliance research",
      "Contribute to founder guides, blog posts, and resource creation",
      "Participate in client onboarding calls and team meetings",
      "Receive mentorship from senior advisors across all practice areas",
    ],
  },
];

export default function Hiring() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoBlue} alt="AERO Cooperation" className="h-16" />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Briefcase className="w-3 h-3 mr-1" />
              Careers
            </Badge>
            <h1 className="text-4xl font-semibold mb-4 tracking-tight">
              Join Our Growing Team
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Help people turn their hobbies and side projects into legitimate US businesses.
              We're building a team at the intersection of US business formation, international entrepreneurship, and AI tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {positions.map((position) => (
              <Link key={position.id} href={`/hiring/${position.id}`}>
                <Card className="p-6 h-full hover-elevate cursor-pointer transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <position.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{position.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {position.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="p-8 bg-primary text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Make an Impact?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              We're building a team that helps everyday people become legitimate US business owners.
              If you bring expertise in formation law, international entrepreneurship, compliance, or technology — we want to hear from you.
            </p>
            <p className="text-white/60 text-sm">
              Send your resume to <a href="mailto:careers@aerocooperation.com" className="text-white underline">careers@aerocooperation.com</a>
            </p>
          </Card>
        </div>
      </main>
      <GovernanceFooter />
    </div>
  );
}

export { positions };
