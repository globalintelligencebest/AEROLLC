import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, ShieldCheck } from "lucide-react";
import aeroLogoWhite from "@/assets/aero_logo_white.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

export default function Advisory() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="px-4 pt-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoWhite} alt="AERO" className="h-12" />
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-2 rounded-full">
            Advisory Services
          </Badge>

          <h1 className="text-4xl md:text-5xl font-display mb-6">
            AI Governance & Risk Advisory
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We help enterprises design, implement, and operationalize responsible
            AI governance aligned with GDPR, EU AI Act, NIST AI RMF, ISO standards,
            and cross-border compliance obligations.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <main className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        <Card className="p-8 rounded-2xl shadow-md">
          <ShieldCheck className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-4">
            AI Risk Assessments
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Structured AI impact assessments, model risk classification,
            regulatory exposure analysis, and governance framework design.
          </p>
        </Card>

        <Card className="p-8 rounded-2xl shadow-md">
          <Calendar className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-4">
            Regulatory Readiness
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Alignment support for GDPR data principles, EU AI Act risk tiers,
            internal documentation policies, and board-level oversight controls.
          </p>
        </Card>

        <Card className="p-8 rounded-2xl shadow-md">
          <Mail className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-4">
            Executive Workshops
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            On-site or virtual governance briefings for leadership teams,
            compliance officers, and technical stakeholders.
          </p>
        </Card>
      </main>

      {/* CTA */}
      <section className="py-20 bg-muted/30 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Schedule a Consultation
          </h2>

          <p className="text-muted-foreground mb-10">
            Discuss your AI governance posture and regulatory exposure with
            our advisory team.
          </p>

          <Button
            onClick={() =>
              window.open("https://calendly.com/inquiries-aerocooperation", "_blank")
            }
            className="px-8 py-4 text-lg rounded-full"
          >
            Book via Calendar
          </Button>
        </div>
      </section>
      <GovernanceFooter />
    </div>
  );
}
