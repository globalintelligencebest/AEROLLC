import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Scale,
  Database,
  FileText,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Brain,
  KeyRound,
  ClipboardCheck,
} from "lucide-react";
import aeroLogoWhite from "@/assets/aero_logo_white.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const frameworks = [
  {
    icon: Scale,
    title: "ISO/IEC 42001 Alignment",
    badge: "AI Management System",
    description:
      "AERO's internal advisory practices are designed to align with ISO/IEC 42001, the international standard for Artificial Intelligence Management Systems (AIMS). This ensures our advisory work meets the same standards we recommend to clients.",
    points: [
      "Structured AI risk assessment methodology for all advisory engagements",
      "Human oversight protocols for all AI-assisted analysis outputs",
      "Continuous monitoring and improvement of advisory AI tool performance",
      "Documented AI lifecycle management from selection to retirement",
      "Stakeholder communication and transparency requirements",
      "Regular internal audits of AI-assisted advisory processes",
    ],
  },
  {
    icon: Globe,
    title: "EU AI Act Compliance",
    badge: "Regulatory Alignment",
    description:
      "As an advisor to organizations navigating the EU AI Act, AERO proactively maintains its own EU AI Act compliance posture. Our practices reflect the same standards we help our clients implement.",
    points: [
      "AI system inventory maintained for all AI tools used in advisory delivery",
      "Risk classification applied to each AI system under EU AI Act criteria",
      "Transparency obligations: clients informed when AI-assisted analysis is used",
      "Human oversight (Article 14): all AI-assisted outputs reviewed by qualified advisors",
      "Data governance: training data quality and bias monitoring for AI tools",
      "Technical documentation maintained for all AI systems in use",
    ],
  },
  {
    icon: Shield,
    title: "GDPR Data Protection",
    badge: "Privacy by Design",
    description:
      "AERO implements GDPR-compliant data protection practices as a foundational principle, ensuring client data is handled with the highest standards of confidentiality, integrity, and security.",
    points: [
      "Data minimization: only data necessary for the advisory engagement is collected",
      "Purpose limitation: client data processed solely for agreed advisory purposes",
      "Storage limitation: engagement data retained per contractually agreed schedules",
      "Right to erasure: complete client data deletion available upon request",
      "Data portability: client deliverables and data provided in portable formats",
      "Privacy by design: end-to-end encryption for all client document handling",
    ],
  },
];

const securityControls = [
  {
    icon: KeyRound,
    title: "Access & Authentication",
    items: [
      "Multi-factor authentication required for all AERO staff systems",
      "Role-based access control for client engagement data",
      "Privileged access reviews conducted quarterly",
      "Zero-trust network access for remote advisory team",
      "Credential vaulting with hardware security key support",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection & Monitoring",
    items: [
      "Continuous security monitoring of advisory platforms and data stores",
      "Anomaly detection for unusual data access patterns",
      "Security incident response plan with defined escalation paths",
      "Quarterly vulnerability assessments and penetration testing",
      "Supplier and vendor security risk reviews",
    ],
  },
  {
    icon: Lock,
    title: "Data Protection Controls",
    items: [
      "Encryption at rest and in transit for all client data",
      "Secure document handling with access-controlled client portals",
      "Client data segmentation to prevent cross-engagement exposure",
      "Secure deletion procedures for engagement data at project close",
      "DLP controls preventing unauthorized exfiltration of client information",
    ],
  },
  {
    icon: Database,
    title: "Data Governance",
    items: [
      "Client data classification policy (confidential, restricted, internal)",
      "Data retention schedules aligned to contractual and legal obligations",
      "Processing records maintained per GDPR Article 30",
      "Third-party data processor agreements in place for all sub-processors",
      "Annual data protection impact assessments for high-risk processing",
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
            <a href="#frameworks" className="text-white/70 hover:text-white transition-colors">Frameworks</a>
            <a href="#security" className="text-white/70 hover:text-white transition-colors">Security Controls</a>
            <a href="#audit" className="text-white/70 hover:text-white transition-colors">Audit Logging</a>
            <a href="#ai-governance" className="text-white/70 hover:text-white transition-colors">AI Governance</a>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-2 rounded-full" data-testid="badge-hero">
            Security & AI Governance
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display mb-6" data-testid="text-hero-title">
            Trust, Transparency & Compliance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-description">
            AERO Advisory maintains enterprise-grade security controls, regulatory-aligned AI governance practices,
            and comprehensive audit capabilities — holding ourselves to the same standards we help our clients achieve.
          </p>
        </div>
      </section>

      <section id="frameworks" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-frameworks-title">
          Regulatory Framework Alignment
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          AERO's internal compliance posture is designed around the same internationally recognized standards
          and AI regulations that govern our client work.
        </p>

        <div className="grid gap-8">
          {frameworks.map((fw, i) => (
            <Card key={i} className="p-8" data-testid={`card-framework-${i}`}>
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <fw.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{fw.title}</h3>
                    <Badge variant="secondary">{fw.badge}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{fw.description}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {fw.points.map((point, j) => (
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

      <section id="security" className="bg-muted/30 dark:bg-muted/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-security-title">
            Security Controls
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Multi-layered controls protect client data, advisory platforms, and operational integrity across all AERO systems.
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

      <section id="audit" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-audit-title">
          Audit Logging & Accountability
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Every security-relevant action and AI-assisted advisory step is logged for forensic analysis, compliance reporting, and continuous improvement.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6" data-testid="card-audit-events">
            <FileText className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Logged Events</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Client data access and document operations</li>
              <li>AI-assisted analysis invocations and outputs</li>
              <li>Advisory deliverable generation and approvals</li>
              <li>Staff authentication and privilege escalations</li>
              <li>Data exports and client portal access</li>
              <li>System configuration changes</li>
              <li>Incident detection and response actions</li>
              <li>Third-party access events</li>
            </ul>
          </Card>

          <Card className="p-6" data-testid="card-audit-data">
            <Eye className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Captured Data</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Timestamp (server-generated, UTC)</li>
              <li>User identifier (pseudonymized)</li>
              <li>Action type and entity reference</li>
              <li>IP address (for security investigation)</li>
              <li>Session context and device identifier</li>
              <li>Contextual outcome details (sanitized)</li>
              <li>AI model version and parameters used</li>
            </ul>
          </Card>

          <Card className="p-6" data-testid="card-audit-privacy">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Privacy Safeguards</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Credentials and secrets never logged</li>
              <li>Client content excluded from system-level logs</li>
              <li>Pseudonymization applied to identifiers</li>
              <li>Logs subject to documented retention policies</li>
              <li>Access to audit logs restricted and monitored</li>
              <li>Log integrity protected against tampering</li>
              <li>GDPR Article 30 processing records maintained</li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="ai-governance" className="bg-muted/30 dark:bg-muted/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-ai-governance-title">
            AI Governance Principles
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            AERO's internal AI governance principles ensure every AI-assisted advisory output meets our standards
            for transparency, accuracy, and human accountability.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6" data-testid="card-ai-transparency">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Transparency & Explainability</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Clients are clearly informed when AI tools are used in advisory analysis, research synthesis, or documentation drafting. Every AI-assisted deliverable is reviewed and validated by a qualified AERO advisor before client delivery.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  AI-assisted analysis disclosed in advisory deliverables
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Reasoning and evidence trails documented for recommendations
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  AI tool version and configuration logged for all advisory outputs
                </li>
              </ul>
            </Card>

            <Card className="p-6" data-testid="card-ai-oversight">
              <ClipboardCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Human Oversight & Control</h3>
              <p className="text-sm text-muted-foreground mb-3">
                AI tools support but do not replace AERO's qualified advisors. All advisory recommendations, risk assessments, and governance frameworks are authored and reviewed by certified human experts before delivery.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Qualified advisor review required for all client-facing outputs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  AI used for research and drafting support, not final judgments
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Override and correction mechanisms in place for all AI-assisted processes
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
