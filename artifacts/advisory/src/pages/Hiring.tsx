import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Briefcase, Code, Users, Scale, Shield, Search, GraduationCap, Brain, Globe } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const positions = [
  {
    id: "ai-governance-advisor",
    title: "AI Governance Advisor",
    icon: Brain,
    description: "Help enterprises design and implement responsible AI governance frameworks",
    details: "Join our advisory team to lead client engagements across AI risk assessment, regulatory alignment, and governance framework design. Work with organizations navigating the EU AI Act, ISO/IEC 42001, and GDPR obligations.",
    responsibilities: [
      "Lead AI risk assessment engagements for enterprise clients",
      "Design AI governance policies aligned to EU AI Act and ISO 42001",
      "Conduct AI system audits and control gap analyses",
      "Support clients in building internal AI oversight capabilities",
      "Author advisory reports and governance documentation",
    ],
  },
  {
    id: "regulatory-affairs",
    title: "AI Regulatory Affairs Specialist",
    icon: Scale,
    description: "Navigate the evolving landscape of AI regulation across jurisdictions",
    details: "Track, analyze, and apply developments in AI legislation globally. Support client engagements requiring deep regulatory expertise, including EU AI Act conformity assessments, GDPR AI-related obligations, and emerging national AI laws.",
    responsibilities: [
      "Monitor AI regulatory developments across EU, UK, US, and APAC",
      "Draft regulatory analysis and compliance guidance for clients",
      "Support conformity assessment preparation for high-risk AI systems",
      "Present at client workshops and industry events",
      "Contribute to AERO's published policy positions and whitepapers",
    ],
  },
  {
    id: "government-relations",
    title: "Government Relations",
    icon: Users,
    description: "Build partnerships with public sector agencies on AI governance",
    details: "Develop and maintain AERO's relationships with government ministries, regulatory bodies, and international organizations. Represent AERO in policy forums and help public sector clients navigate AI governance obligations.",
    responsibilities: [
      "Develop relationships with government AI policy teams",
      "Represent AERO at international AI governance forums",
      "Draft policy recommendations and position papers",
      "Support public sector procurement AI governance frameworks",
      "Navigate agency-specific regulatory and oversight requirements",
    ],
  },
  {
    id: "executive-education",
    title: "Executive Education Lead",
    icon: GraduationCap,
    description: "Develop and deliver AI governance training for leadership teams",
    details: "Design and facilitate AI governance workshops, briefings, and training programs for C-suite and board-level audiences. Translate complex regulatory and technical concepts into actionable executive guidance.",
    responsibilities: [
      "Design AI governance curriculum for executive audiences",
      "Facilitate workshops and board briefings on AI risk",
      "Develop training materials and case study content",
      "Assess organizational AI literacy and training needs",
      "Customize programs for specific sectors and jurisdictions",
    ],
  },
  {
    id: "security-ai-risk",
    title: "AI Security & Risk Specialist",
    icon: Shield,
    description: "Assess AI system security risks and adversarial vulnerabilities",
    details: "Apply cybersecurity expertise to AI-specific risk assessment, including adversarial robustness, data integrity threats, model supply chain risks, and AI system security architecture review.",
    responsibilities: [
      "Conduct AI system security risk assessments for clients",
      "Review AI vendor security practices and contracts",
      "Develop AI incident response planning documentation",
      "Assess adversarial attack surfaces for deployed AI systems",
      "Align security controls with ISO 42001 and NIST AI RMF",
    ],
  },
  {
    id: "research",
    title: "AI Governance Research Analyst",
    icon: Search,
    description: "Advance AERO's thought leadership in AI governance",
    details: "Conduct research on AI governance best practices, regulatory trends, and sector-specific compliance challenges. Publish findings to support client work and position AERO as a leading voice in responsible AI.",
    responsibilities: [
      "Research AI governance frameworks and regulatory developments",
      "Analyze sector-specific AI governance challenges",
      "Author whitepapers, reports, and policy briefs",
      "Support advisory engagements with evidence-based insights",
      "Present at conferences and academic forums",
    ],
  },
  {
    id: "legal",
    title: "Legal Counsel",
    icon: Globe,
    description: "Navigate AI law, data protection, and advisory operations",
    details: "Provide legal expertise across AI regulation, data protection law, and advisory firm operations. Support client engagements on AI Act obligations, contractual risk allocation, and data governance legal frameworks.",
    responsibilities: [
      "Advise on EU AI Act, GDPR, and AI liability frameworks",
      "Draft and review client advisory agreements and deliverables",
      "Support AI contract review and vendor assessment work",
      "Maintain AERO's internal compliance posture",
      "Advise on data protection obligations across jurisdictions",
    ],
  },
  {
    id: "technology",
    title: "Technology & Tools",
    icon: Code,
    description: "Build internal tools and digital capabilities supporting our advisory work",
    details: "Develop the internal platforms, workflow tools, and governance documentation systems that power AERO's client engagements. Work at the intersection of AI governance expertise and software development.",
    responsibilities: [
      "Build and maintain AERO's internal advisory workflow tools",
      "Develop governance documentation and reporting systems",
      "Automate regulatory monitoring and alert pipelines",
      "Maintain secure client data handling infrastructure",
      "Collaborate with advisors to translate process into tooling",
    ],
  },
  {
    id: "interns",
    title: "Interns",
    icon: GraduationCap,
    description: "Launch your career in AI governance and regulatory affairs",
    details: "Gain hands-on experience in a mission-driven advisory firm working at the forefront of AI regulation and responsible AI deployment. Contribute to real client work and published research.",
    responsibilities: [
      "Support advisory teams on client engagement research",
      "Conduct regulatory monitoring and analysis",
      "Contribute to whitepaper and report drafting",
      "Participate in client workshops and team meetings",
      "Receive mentorship from senior governance advisors",
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
              Help organizations govern AI responsibly. We are building a world-class advisory team at the intersection of AI regulation, enterprise risk, and responsible technology deployment.
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
              We are building a team that helps the world's enterprises deploy AI responsibly. If you bring expertise in AI governance, regulatory affairs, or enterprise risk — we want to hear from you.
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
