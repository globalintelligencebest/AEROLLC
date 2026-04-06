import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Globe, Building2, Shield, Target, Heart, Scale } from "lucide-react";
import aeroLogoBlue from "@assets/aero_logo_blue.png";
import aeroLogoWhite from "@assets/aero_logo_white.png";
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
              Guided by Global Experience
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our leadership brings decades of experience in international organizations, financial services, and global security.
            </p>
          </div>

          <Card className="p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Board of Directors</h3>
              <p className="text-muted-foreground">
                Comprising members of international organizations, financial leaders, and security professionals
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">International Organizations</p>
                <p className="text-sm text-muted-foreground">Former UN and World Bank officials</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Financial Leaders</p>
                <p className="text-sm text-muted-foreground">Banking and fintech executives</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Security Experts</p>
                <p className="text-sm text-muted-foreground">Data protection and compliance specialists</p>
              </div>
            </div>
          </Card>

          {/* OUR MISSION */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission & Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
                <p className="text-muted-foreground">
                  To empower globally mobile individuals with clear, accurate, and unbiased tax guidance. We believe that understanding your tax obligations should not be a privilege reserved for those who can afford expensive international tax attorneys.
                </p>
              </Card>
              <Card className="p-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
                <p className="text-muted-foreground">
                  A world where cross-border tax compliance is accessible to everyone, where technology bridges the gap between complex regulations and individual understanding, and where no one faces penalties simply because they lacked the resources to navigate international tax law.
                </p>
              </Card>
            </div>
          </div>

          {/* CORE VALUES */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Core Values That Guide Us</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">Neutrality</p>
                <p className="text-sm text-muted-foreground">Serving all users equally regardless of origin</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">Integrity</p>
                <p className="text-sm text-muted-foreground">Honest, accurate guidance always</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">Accessibility</p>
                <p className="text-sm text-muted-foreground">Making complexity understandable</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">Service</p>
                <p className="text-sm text-muted-foreground">Putting user needs first</p>
              </div>
            </div>
          </div>

          {/* FROM THE FOUNDER */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-xl font-semibold mb-6">From the Founder</h3>
            <blockquote className="text-muted-foreground leading-relaxed mb-6 italic border-l-4 border-primary pl-6">
              "As a global citizen, I spent a lifetime watching peers become overwhelmed by the cross-border tax process. With a career working for leading international organizations in counter-terrorism, peacekeeping, and humanitarian affairs, I understood the need for transparent, neutral systems that serve everyone equally. AERO was born from this vision: a platform where the complexity of international tax becomes accessible, and where governments and citizens can find common ground in compliance."
            </blockquote>
            <p className="text-sm text-muted-foreground">
              Founded with the belief that tax compliance should empower, not burden, the globally mobile.
            </p>
          </div>

          {/* ADVISORY EXPERTISE */}
          <Card className="p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Advisory Expertise</h3>
            <p className="text-muted-foreground text-center mb-8">
              Our advisory board brings specialized knowledge across critical domains:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">International Tax Treaty Specialists</p>
                  <p className="text-sm text-muted-foreground">Experts in cross-border tax agreements and treaty benefits</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Cybersecurity Professionals</p>
                  <p className="text-sm text-muted-foreground">Ensuring your sensitive documents remain protected</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Former Government Officials</p>
                  <p className="text-sm text-muted-foreground">Insight into regulatory frameworks and compliance expectations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Expatriate Community Leaders</p>
                  <p className="text-sm text-muted-foreground">Understanding the real challenges faced by globally mobile individuals</p>
                </div>
              </div>
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
