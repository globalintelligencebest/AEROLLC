import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Database,
  FileText,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Brain,
  KeyRound,
  ClipboardCheck,
  Zap,
  Building2,
} from "lucide-react";
import aeroLogoWhite from "@/assets/aero_logo_white.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const aiTools = [
  {
    icon: FileText,
    title: "Business Document Generator",
    badge: "Included in Package",
    description:
      "AI-assisted drafting of the core documents every new business needs — from client contracts to privacy policies, service agreements, and non-disclosure agreements. Tailored to your industry and state.",
    points: [
      "Client service agreements and contracts",
      "Privacy policy and terms of service",
      "Non-disclosure agreements (NDAs)",
      "Contractor and freelancer agreements",
      "Invoice templates and payment terms",
      "Basic employee or team agreements",
    ],
  },
  {
    icon: Globe,
    title: "Compliance Monitoring Dashboard",
    badge: "Included in Package",
    description:
      "A simple AI-powered tool that tracks your company's compliance obligations — state annual reports, registered agent renewals, franchise taxes, and federal filings — and sends you reminders before deadlines.",
    points: [
      "State annual report deadlines and instructions",
      "Franchise tax schedules by state",
      "Registered agent renewal reminders",
      "BOI (Beneficial Ownership) filing status",
      "Federal tax estimate calendar",
      "State license renewal tracking (if applicable)",
    ],
  },
  {
    icon: Brain,
    title: "AI Governance Advisory for Small Business",
    badge: "Included in Package",
    description:
      "As your business grows and you adopt AI tools (ChatGPT, automation, AI-powered software), our advisory guidance helps you understand your obligations. AI regulations are evolving — we keep you ahead of them.",
    points: [
      "Guidance on AI disclosure obligations to clients",
      "AI tool usage policies for your business",
      "Data privacy considerations when using AI",
      "US and international AI regulatory updates",
      "When and how to document your use of AI",
      "Consumer protection considerations for AI-generated content",
    ],
  },
];

const securityControls = [
  {
    icon: KeyRound,
    title: "Client Data Security",
    items: [
      "End-to-end encryption for all client documents and formation data",
      "Role-based access — your files accessible only to your account",
      "Multi-factor authentication on all AERO staff and client portals",
      "Secure document delivery and digital signature support",
      "Automatic data deletion upon client request",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Platform & Infrastructure",
    items: [
      "Continuous security monitoring of all AERO systems",
      "Regular penetration testing and vulnerability assessments",
      "Incident response plan with defined escalation paths",
      "Third-party vendor security reviews for all sub-processors",
      "System redundancy and disaster recovery protocols",
    ],
  },
  {
    icon: Lock,
    title: "Data Protection",
    items: [
      "Client data never used to train AI models",
      "No sharing of client information with third parties without consent",
      "Data stored in jurisdictions with strong privacy protections",
      "Secure deletion procedures upon engagement close",
      "DLP controls preventing unauthorized data exfiltration",
    ],
  },
  {
    icon: Database,
    title: "Compliance Standards",
    items: [
      "GDPR-aligned data handling practices",
      "CCPA compliance for California-resident clients",
      "Processing records maintained per Article 30",
      "Annual data protection assessments",
      "Client data portability available at any time",
    ],
  },
];

export default function SecurityAiGovernance() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-security-ai-governance">
      <nav className="px-4 pt-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto rounded-full px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" data-testid="link-home">
            <img src={aeroLogoWhite} alt="AERO" className="h-12" />
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#ai-tools" className="text-white/70 hover:text-white transition-colors">AI Tools</a>
            <a href="#security" className="text-white/70 hover:text-white transition-colors">Security</a>
            <a href="#governance" className="text-white/70 hover:text-white transition-colors">Governance</a>
          </div>
          <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-5 text-sm font-semibold">
            <a href="mailto:contact@aerocooperation.com">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-2 rounded-full" data-testid="badge-hero">
            Specialist Advisory · Separate Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display mb-6" data-testid="text-hero-title">
            AI Governance Advisory
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-description">
            A dedicated advisory service for businesses that use AI tools. Separate from business
            formation — priced on scope and engaged independently whenever you need it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-full px-8 py-4 text-lg bg-indigo-600 hover:bg-indigo-700 text-white">
              <a href="mailto:contact@aerocooperation.com?subject=AI%20Governance%20Advisory%20Enquiry">Request a Quote</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-4 text-lg">
              <Link href="/financing">View Formation Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHO NEEDS THIS */}
      <section className="bg-indigo-950/5 py-16 border-y">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
            Who this service is for
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Creators using AI-generated content", desc: "If you sell AI-generated art, writing, or music — FTC disclosure rules and platform policies apply to you." },
              { title: "Businesses with EU customers", desc: "The EU AI Act may apply if you serve European customers with AI-assisted products or automated decision-making." },
              { title: "Founders using AI in operations", desc: "If ChatGPT, automation tools, or AI software are part of how you run your business, you need a usage policy." },
            ].map(({ title, desc }) => (
              <Card key={title} className="p-5">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 mb-3" />
                <p className="font-semibold text-sm mb-1">{title}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section id="ai-tools" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-frameworks-title">
          What's Covered
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Each AI governance engagement is tailored to your business type, the AI tools you use,
          and the markets you operate in. Here are the core areas we address.
        </p>

        <div className="grid gap-8">
          {aiTools.map((tool, i) => (
            <Card key={i} className="p-8" data-testid={`card-framework-${i}`}>
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <tool.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{tool.title}</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">{tool.badge}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {tool.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW AI GOVERNANCE FITS */}
      <section className="bg-blue-950/10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-0">Why It Matters</Badge>
              <h2 className="text-3xl font-semibold mb-4">
                Why Small Businesses Need AI Governance Too
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You might think AI governance is just for big corporations — but if you use
                ChatGPT to write copy, an AI image generator for products, or automation tools
                to run your shop, you're already subject to evolving AI regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The EU AI Act, FTC guidelines on AI disclosures, and state-level consumer protection
                laws are increasingly affecting small businesses too. AERO's AI governance advisory
                keeps you informed and compliant as these rules take shape.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Zap, title: "FTC AI Disclosure Guidelines", desc: "The FTC requires transparency when AI generates content marketed to consumers. We explain what this means for your business." },
                { icon: Globe, title: "EU AI Act (if you sell to EU customers)", desc: "If your US business sells to EU residents, EU AI regulations may apply to your AI-generated content or automated decisions." },
                { icon: Building2, title: "State AI Laws", desc: "Several US states are enacting their own AI transparency and consumer protection laws — we track them for you." },
                { icon: Shield, title: "Platform Terms & AI", desc: "Marketplaces like Etsy, Amazon, and Shopify are updating their policies around AI-generated content — we keep you up to date." },
              ].map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="p-4">
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY CONTROLS */}
      <section id="security" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-security-title">
            How We Protect Your Data
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your formation documents, EIN, and personal information are handled with enterprise-grade
            security controls — the same standards we apply to our largest clients.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {securityControls.map((ctrl, i) => (
              <Card key={i} className="p-6" data-testid={`card-security-${i}`}>
                <div className="flex items-center gap-3 mb-4">
                  <ctrl.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{ctrl.title}</h3>
                </div>
                <ul className="space-y-2">
                  {ctrl.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OUR OWN AI GOVERNANCE */}
      <section id="governance" className="bg-muted/30 dark:bg-muted/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-ai-governance-title">
            How AERO Uses AI Responsibly
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We practice what we preach. AERO's own use of AI tools follows the same governance
            principles we advise our clients on.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6" data-testid="card-ai-transparency">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Transparency & Disclosure</h3>
              <p className="text-sm text-muted-foreground mb-3">
                When AI tools assist in drafting documents or generating recommendations for your formation,
                we disclose this clearly. Every AI-assisted output is reviewed by a qualified AERO advisor before delivery.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  AI assistance disclosed in all deliverables
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Human review required before any client-facing output
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Your data never used to train AI models
                </li>
              </ul>
            </Card>

            <Card className="p-6" data-testid="card-ai-oversight">
              <ClipboardCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Human Control Always</h3>
              <p className="text-sm text-muted-foreground mb-3">
                AI tools support but do not replace our advisors. Formation decisions, document review,
                and client guidance are always the responsibility of a qualified human on our team.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  No autonomous AI decisions affecting your formation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  All state filings reviewed by a human before submission
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Override and correction mechanisms on all AI-assisted steps
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <GovernanceFooter />
    </div>
  );
}
