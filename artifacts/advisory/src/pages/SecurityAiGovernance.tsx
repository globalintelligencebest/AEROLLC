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
import aeroLogoWhite from "@assets/aero_logo_white.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const frameworks = [
  {
    icon: Scale,
    title: "ISO/IEC 42001 Alignment",
    badge: "AI Management System",
    description:
      "AERO's AI governance framework is designed to align with ISO/IEC 42001, the international standard for Artificial Intelligence Management Systems (AIMS).",
    points: [
      "Structured AI risk assessment for tax guidance outputs",
      "Human oversight mechanisms for all AI-generated recommendations",
      "Continuous monitoring and improvement of AI model performance",
      "Documented AI lifecycle management from development to deployment",
      "Stakeholder communication and transparency protocols",
      "Regular internal audits of AI system behavior and outputs",
    ],
  },
  {
    icon: Globe,
    title: "EU AI Act Compliance",
    badge: "Regulatory Alignment",
    description:
      "As a provider of AI-assisted financial guidance, AERO proactively aligns with the EU Artificial Intelligence Act to ensure responsible deployment across jurisdictions.",
    points: [
      "Risk classification: Tax guidance AI categorized as limited-risk under Article 52",
      "Transparency obligations: Users informed when interacting with AI-generated content",
      "Human oversight (Article 14): All AI outputs subject to human review capability",
      "Data governance (Article 10): Training data quality controls and bias monitoring",
      "Technical documentation maintained for AI system capabilities and limitations",
      "AI decision logging with confidence scores for auditability",
    ],
  },
  {
    icon: Shield,
    title: "GDPR Data Protection",
    badge: "Privacy by Design",
    description:
      "AERO implements GDPR-compliant data protection practices as a foundational principle, ensuring user data sovereignty and privacy across all processing activities.",
    points: [
      "Data minimization: Only essential personal data collected for tax calculations",
      "Purpose limitation: Data processed solely for declared tax guidance purposes",
      "Storage limitation: Password reset tokens expire within 1 hour, hashed with SHA-256",
      "Right to erasure: Complete data deletion available through account settings",
      "Data portability: Full data export in machine-readable format",
      "Privacy by design: End-to-end encryption for document storage, ACL-enforced access",
    ],
  },
];

const securityControls = [
  {
    icon: KeyRound,
    title: "Authentication Security",
    items: [
      "OIDC-based authentication (Google, GitHub, Apple, email/password)",
      "TOTP-based two-factor authentication with Google Authenticator",
      "Backup codes for MFA account recovery",
      "JWT tokens with session management and secure cookie policies",
      "bcrypt password hashing with cost factor 12",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    items: [
      "Rate limiting: 10 login attempts per 15 minutes per IP",
      "Failed login monitoring: Alert triggers after 5 failures in 10 minutes",
      "Sensitive operations rate limited: 5 requests per hour",
      "Global API rate limiting: 100 requests per minute",
      "In-memory tracking with automatic cleanup of expired entries",
    ],
  },
  {
    icon: Lock,
    title: "Token & Session Security",
    items: [
      "Password reset tokens hashed with SHA-256 before database storage",
      "Reset tokens single-use with 1-hour expiration",
      "PostgreSQL-backed session storage with automatic expiry",
      "Secure cookie attributes: HttpOnly, SameSite=Lax, Secure in production",
      "SMTP connection verification on startup with diagnostic categorization",
    ],
  },
  {
    icon: Database,
    title: "Data Security",
    items: [
      "PostgreSQL with row-level security considerations",
      "Document vault with ACL policies ensuring owner-only access",
      "Presigned URLs for secure direct uploads to cloud storage",
      "Zod schema validation for all API inputs",
      "Comprehensive audit trail for all sensitive operations",
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
            AERO is built with enterprise-grade security controls, regulatory-aligned AI governance,
            and comprehensive audit capabilities designed for cross-border tax professionals.
          </p>
        </div>
      </section>

      <section id="frameworks" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-4 text-center" data-testid="text-frameworks-title">
          Regulatory Framework Alignment
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          AERO's compliance posture is designed around internationally recognized standards
          and emerging AI regulations.
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
            Authentication & Security Controls
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Multi-layered security controls protect user accounts, data integrity, and platform operations.
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
          Every security-relevant action is immutably logged for forensic analysis, compliance reporting, and incident response.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6" data-testid="card-audit-events">
            <FileText className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Logged Events</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Successful and failed login attempts</li>
              <li>User registrations</li>
              <li>Password reset requests and completions</li>
              <li>MFA setup and verification</li>
              <li>Document access and uploads</li>
              <li>Tax obligation calculations</li>
              <li>Profile and data modifications</li>
              <li>Admin actions (approvals, revocations)</li>
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
              <li>User agent (browser identification)</li>
              <li>Contextual details (sanitized)</li>
              <li>Rule references (for tax calculations)</li>
            </ul>
          </Card>

          <Card className="p-6" data-testid="card-audit-privacy">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Privacy Safeguards</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Passwords never logged (pre-sanitized)</li>
              <li>Tokens stripped before audit storage</li>
              <li>MFA secrets excluded from logs</li>
              <li>Email addresses logged only for auth events</li>
              <li>IP addresses retained for security only</li>
              <li>Audit data subject to retention policies</li>
              <li>Access-controlled admin-only visibility</li>
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
            Our AI systems operate under strict governance principles ensuring transparency,
            fairness, and human oversight at every stage.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6" data-testid="card-ai-transparency">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Transparency & Explainability</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Users are clearly informed when AI is involved in generating tax guidance,
                document analysis, or scenario recommendations.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  AI-generated content clearly labeled
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Confidence scores attached to AI outputs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Decision rationale logged for all AI interactions
                </li>
              </ul>
            </Card>

            <Card className="p-6" data-testid="card-ai-oversight">
              <ClipboardCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Human Oversight & Control</h3>
              <p className="text-sm text-muted-foreground mb-3">
                AI systems operate under human supervision with mechanisms for override,
                correction, and continuous improvement.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Deterministic rule engine for core tax calculations
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  AI used for supplementary guidance, not binding advice
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  Human review capability for all AI decisions
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
