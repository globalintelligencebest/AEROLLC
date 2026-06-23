import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Globe, Building2, Shield, Target, Heart, Scale, Cpu } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

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
              Experts in Getting You Started
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our team combines deep expertise in US business law, international compliance,
              and AI governance — purpose-built to serve independent workers and entrepreneurs establishing their businesses.
            </p>
          </div>

          {/* Advisory Board */}
          <Card className="p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Advisory Network</h3>
              <p className="text-muted-foreground">
                US attorneys, CPAs, banking partners, and AI specialists who support AERO clients
                across formations, ongoing compliance, and business growth
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">US Legal Experts</p>
                <p className="text-sm text-muted-foreground">Licensed attorneys in Delaware, Wyoming, and Florida</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Banking Partners</p>
                <p className="text-sm text-muted-foreground">US bank and fintech relationships for business accounts</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">AI & Compliance</p>
                <p className="text-sm text-muted-foreground">Technology advisors keeping your business future-ready</p>
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
                  To remove every barrier between a person doing real work and
                  a properly structured US business — by handling all the paperwork, compliance, and
                  legal setup at one transparent flat rate.
                </p>
              </Card>
              <Card className="p-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
                <p className="text-muted-foreground">
                  A world where anyone — regardless of background, country, or business experience —
                  can launch a legitimate US company and operate with confidence, legal protection,
                  and the tools to grow.
                </p>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Core Values That Guide Us</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Scale, label: "Clarity", desc: "One price. No surprises." },
                { icon: Shield, label: "Integrity", desc: "Honest guidance, always." },
                { icon: Cpu, label: "Expertise", desc: "US formation specialists." },
                { icon: Users, label: "Access", desc: "Democratizing business ownership." },
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
              "I've watched too many talented people leave money on the table or expose themselves to
              personal liability because forming a business seemed complicated and expensive. AERO exists
              to change that. Whether you're a freelancer, a consultant, or running an independent operation —
              you deserve a proper business structure without the runaround."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Sereena Karsou, Founder & Managing Director, AERO Advisory</p>
          </div>

          {/* Expertise Areas */}
          <Card className="p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Our Areas of Expertise</h3>
            <p className="text-muted-foreground text-center mb-8">
              Our team brings specialized knowledge across the full spectrum of US business formation and operation:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Globe, label: "US Entity Formation (LLC & C-Corp)", desc: "State selection, filing, EIN, operating agreements, and registered agent services across all 50 states." },
                { icon: Shield, label: "Non-Resident Business Setup", desc: "Navigating IRS and state requirements for international founders without US SSNs or addresses." },
                { icon: Building2, label: "Business Banking & Finance", desc: "Relationships with US banks and fintech platforms that work for non-resident business owners." },
                { icon: Users, label: "AI Tools & Governance", desc: "AI-powered business toolkits and compliance advisory to keep your business running efficiently and responsibly." },
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
            <Button size="lg" className="h-12 px-8 rounded-full" asChild>
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
