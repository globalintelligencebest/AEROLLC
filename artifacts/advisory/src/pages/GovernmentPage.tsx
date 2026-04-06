import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Landmark, CheckCircle2, Shield, FileText, Users, Lock, Globe, BarChart3 } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

export default function GovernmentPage() {
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
              <a href="mailto:government@aerocooperation.com">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Landmark className="w-3 h-3 mr-1" />
              For Government Agencies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              AI Governance for the Public Sector
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              AERO helps government ministries, agencies, and regulatory bodies develop responsible AI frameworks that align with democratic values and public accountability.
            </p>
          </div>

          {/* Key Concerns */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <Shield className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">EU AI Act</div>
              <div className="text-sm text-white/70">Compliance Ready</div>
            </Card>
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <FileText className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">ISO 42001</div>
              <div className="text-sm text-white/70">Framework Alignment</div>
            </Card>
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <Lock className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">GDPR</div>
              <div className="text-sm text-white/70">Privacy by Design</div>
            </Card>
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <Globe className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">NIST AI RMF</div>
              <div className="text-sm text-white/70">Risk Management</div>
            </Card>
          </div>

          {/* Public Sector Challenges */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">The Public Sector AI Challenge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Where Governments Struggle</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "AI systems deployed without documented risk assessments", pct: "72%" },
                    { label: "Lack of cross-departmental AI oversight structures", pct: "65%" },
                    { label: "Insufficient explainability documentation", pct: "80%" },
                    { label: "No formal human oversight protocols for AI decisions", pct: "58%" },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium">{pct}</span>
                      </div>
                      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: pct }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">High-Stakes AI Use Cases</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Benefits & Eligibility Decisions", desc: "AI systems determining social benefit access require robust fairness and appeals frameworks." },
                    { title: "Law Enforcement & Predictive Tools", desc: "High-risk AI systems under EU AI Act Article 6 require mandatory conformity assessments." },
                    { title: "Healthcare & Clinical AI", desc: "Patient-impacting AI must meet both AI Act and GDPR requirements for data use." },
                    { title: "Border Control & Biometrics", desc: "Biometric categorization systems face strictest EU AI Act prohibitions and restrictions." },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{title}</p>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Growing Regulatory Pressure */}
          <Card className="p-8 mb-16 bg-muted/30 border-0">
            <h3 className="text-xl font-semibold mb-6 text-center">The Regulatory Timeline</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Aug 2026</div>
                <p className="text-sm text-muted-foreground">EU AI Act full application — high-risk systems must be compliant or face penalties up to €30M</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">72h</div>
                <p className="text-sm text-muted-foreground">Maximum window to report serious AI incidents to national supervisory authorities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4%</div>
                <p className="text-sm text-muted-foreground">Global annual turnover penalty risk for deploying non-compliant high-risk AI systems</p>
              </div>
            </div>
          </Card>

          {/* How AERO Helps */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">How AERO Supports Government Agencies</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  {
                    title: "AI Inventory & Risk Classification",
                    desc: "We document every AI system in use across your agency, classify risk levels under EU AI Act criteria, and prioritize compliance actions.",
                  },
                  {
                    title: "Policy & Governance Framework Design",
                    desc: "We design AI governance policies tailored to public sector accountability requirements, FOI obligations, and democratic oversight principles.",
                  },
                  {
                    title: "Procurement Guidance",
                    desc: "Vendor assessment frameworks ensure every AI system you procure meets your governance standards before deployment.",
                  },
                  {
                    title: "Staff & Leadership Training",
                    desc: "Executive briefings and department-level workshops build internal AI literacy aligned with your regulatory obligations.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{title}</p>
                      <p className="text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-8 bg-[#1E3A8A] text-white">
                <h3 className="text-2xl font-semibold mb-6">AERO Government Engagements Include</h3>
                <div className="space-y-4 text-white/80">
                  {[
                    "EU AI Act readiness assessments for national agencies",
                    "ISO/IEC 42001 certification pathway support",
                    "Fundamental rights impact assessment design",
                    "AI oversight committee structuring",
                    "Cross-departmental governance coordination",
                    "Incident response & reporting protocol design",
                    "Procurement framework review and AI supplier vetting",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-muted/30 rounded-2xl p-12">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Partner With AERO</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Work with our team of AI governance specialists to build a compliant, accountable, and trustworthy AI environment across your agency.
            </p>
            <Button size="lg" className="h-12 px-8" asChild>
              <a href="mailto:government@aerocooperation.com">
                Contact Government Relations
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
