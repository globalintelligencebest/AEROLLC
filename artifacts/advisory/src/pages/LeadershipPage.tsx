import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Globe, Building2, Shield, Target, Heart, Scale, Cpu } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const leaders = [
  {
    initials: "SM",
    name: "Sébastien Moreau",
    title: "Founder & Managing Director",
    background:
      "20+ years in international organizations including peacekeeping, counter-terrorism, and humanitarian affairs. Founded AERO to bring structured, independent AI governance to global enterprises navigating emerging regulation.",
  },
  {
    initials: "AK",
    name: "Anika Kessler",
    title: "Head of AI Policy & Regulatory Affairs",
    background:
      "Former EU regulatory consultant specializing in data protection and emerging technology law. Led ISO/IEC 42001 readiness programs for financial institutions across Germany, France, and the Netherlands.",
  },
  {
    initials: "JT",
    name: "James Tran",
    title: "Principal AI Risk Advisor",
    background:
      "Cybersecurity and AI risk specialist with prior roles at leading global consultancies. Designed AI risk frameworks for Fortune 500 clients subject to GDPR, NIST AI RMF, and EU AI Act obligations.",
  },
  {
    initials: "LO",
    name: "Layla O'Brien",
    title: "Director of Executive Education",
    background:
      "Organizational learning strategist with experience designing AI literacy programs for C-suite audiences. Formerly at McKinsey and Columbia University's Executive Education division.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoBlue} alt="AERO Cooperation" className="h-16" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground hidden md:block">Home</Link>
            <Button asChild data-testid="button-get-started">
              <a href="mailto:contact@aerocooperation.com">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="w-3 h-3 mr-1" />
              Leadership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Guided by Global Experience
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our leadership brings decades of experience in international organizations, AI regulation, cybersecurity, and enterprise governance.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {leaders.map(({ initials, name, title, background }) => (
              <Card key={name} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">{initials}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{background}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Board Overview */}
          <Card className="p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Advisory Board</h3>
              <p className="text-muted-foreground">
                Comprising AI governance experts, regulators, and enterprise risk professionals across Europe, North America, and Asia
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Regulatory Experts</p>
                <p className="text-sm text-muted-foreground">Former regulators and standards body members</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Enterprise Leaders</p>
                <p className="text-sm text-muted-foreground">Chief Risk Officers and compliance executives</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">AI & Security Specialists</p>
                <p className="text-sm text-muted-foreground">Cybersecurity and AI ethics researchers</p>
              </div>
            </div>
          </Card>

          {/* Mission & Vision */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
                <p className="text-muted-foreground">
                  To help enterprises and governments design, implement, and operationalize responsible AI governance that is aligned with global regulations, human rights principles, and organizational values — without commercial bias or vendor pressure.
                </p>
              </Card>
              <Card className="p-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
                <p className="text-muted-foreground">
                  A world where AI is deployed with documented accountability, where governance is a strategic asset rather than a compliance burden, and where every organization — regardless of size — can navigate the regulatory landscape with confidence.
                </p>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Core Values That Guide Us</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Scale, label: "Neutrality", desc: "Vendor-independent. Framework-agnostic." },
                { icon: Shield, label: "Integrity", desc: "Honest risk assessment, always." },
                { icon: Cpu, label: "Expertise", desc: "Deep AI governance specialization." },
                { icon: Users, label: "Partnership", desc: "Long-term client relationships." },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Quote */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-xl font-semibold mb-6">From the Founder</h3>
            <blockquote className="text-muted-foreground leading-relaxed mb-6 italic border-l-4 border-primary pl-6">
              "Throughout my career in international organizations — from peacekeeping and counter-terrorism to humanitarian coordination — I watched institutions struggle to build accountable systems. AI is now placing the same challenge on every enterprise. AERO was founded to give organizations the independent, expert guidance they need to deploy AI responsibly, without having to navigate a market full of vendors with conflicting interests."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Sébastien Moreau, Founder & Managing Director, AERO Advisory</p>
          </div>

          {/* Advisory Expertise */}
          <Card className="p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Advisory Expertise</h3>
            <p className="text-muted-foreground text-center mb-8">
              Our advisors bring specialized knowledge across critical AI governance domains:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Globe, label: "EU AI Act & International AI Regulation", desc: "Deep expertise in EU AI Act risk classification, compliance timelines, and cross-border implications." },
                { icon: Shield, label: "Cybersecurity & AI System Security", desc: "Ensuring AI systems are secure by design, with documented threat models and access controls." },
                { icon: Building2, label: "Enterprise Risk & Internal Controls", desc: "Designing AI governance controls that integrate with existing enterprise risk management frameworks." },
                { icon: Users, label: "Organizational Change & AI Adoption", desc: "Supporting leadership teams in building AI governance culture and internal oversight capabilities." },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center">
            <Button size="lg" className="h-12 px-8" asChild>
              <a href="mailto:contact@aerocooperation.com">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <GovernanceFooter />
    </div>
  );
}
