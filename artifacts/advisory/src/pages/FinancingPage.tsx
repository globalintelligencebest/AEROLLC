import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Shield, Check, Info, Globe, Users, TrendingUp, Heart } from "lucide-react";
import aeroLogoBlue from "@assets/aero_logo_blue.png";
import aeroLogoWhite from "@assets/aero_logo_white.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

export default function FinancingPage() {
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
              <a href="https://aerocooperation.com" target="_blank" rel="noopener noreferrer">
                Try the App
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Building2 className="w-3 h-3 mr-1" />
              Our Funding Model
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Truly Independent. Truly Neutral.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              AERO Cooperation maintains complete independence through a unique funding structure that ensures no conflicts of interest.
            </p>
          </div>

          <Card className="p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  What We Don't Accept
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    National or sovereign wealth investments
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Private equity or venture capital
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Corporate sponsorships
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Political contributions
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Lobbying group funding
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Our Revenue Sources
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Direct platform user subscriptions
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    One-time lifetime access payments
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Annual tax document service fees
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Educational partnerships with neutral institutions
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Carefully vetted neutral grants
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-muted/30 rounded-2xl p-8 text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">A Non-Partisan Front for Global Tax Transparency</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              By funding operations exclusively through user payments, AERO remains independent of any government, corporation, or political entity. This ensures our guidance serves users equally, regardless of nationality or jurisdiction.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "The information provided does not favor one nation, entity, or global arena over any other."
            </p>
          </div>

          {/* WHY INDEPENDENCE MATTERS */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Independence Matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Global Neutrality</h4>
                <p className="text-sm text-muted-foreground">
                  No country or bloc influences our guidance. We serve users from every nation with equal accuracy and care.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">User-First Priorities</h4>
                <p className="text-sm text-muted-foreground">
                  Without external investors demanding returns, every decision prioritizes user benefit over profit maximization.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Trust & Transparency</h4>
                <p className="text-sm text-muted-foreground">
                  Our funding sources are fully transparent. Users can trust that our guidance isn't influenced by hidden agendas.
                </p>
              </Card>
            </div>
          </div>

          {/* SUSTAINABLE MODEL */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">A Sustainable Model for the Long Term</h3>
                <p className="text-muted-foreground mb-4">
                  AERO is built for longevity. Our revenue model ensures we can continue serving globally mobile individuals for years to come, without the pressure of quarterly earnings or investor exits.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Revenue directly from the users we serve
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Heart className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Aligned incentives between platform and users
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary mt-1 shrink-0" />
                    No pressure to monetize user data
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-5xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">User-Funded Operations</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mb-8">
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Note on Grants</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  In some individual case-by-case instances, grants may be reviewed for acceptance when they do not interfere with transparent and independent representation. All grant considerations undergo rigorous evaluation to ensure alignment with our mission of neutrality and equal service to all users globally.
                </p>
                <a href="mailto:grants@aerocooperation.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Contact: grants@aerocooperation.com
                </a>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="h-12 px-8" asChild>
              <a href="mailto:contact@aerocooperation.com">
                Get in Touch
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
