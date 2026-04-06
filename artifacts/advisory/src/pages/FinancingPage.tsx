import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Shield, Check, Info, Globe, Users, TrendingUp, Heart } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
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
              <Building2 className="w-3 h-3 mr-1" />
              Our Funding Model
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Truly Independent. Truly Neutral.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              AERO Advisory maintains complete independence through a funding structure that ensures our guidance is never influenced by investor pressure or commercial conflicts.
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
                  {[
                    "National or sovereign wealth investments",
                    "Private equity or venture capital",
                    "Corporate sponsorships from AI vendors",
                    "Political contributions",
                    "Lobbying group funding",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Our Revenue Sources
                </h3>
                <ul className="space-y-3">
                  {[
                    "Enterprise AI governance advisory retainers",
                    "Project-based risk assessment engagements",
                    "Executive and leadership training programs",
                    "AI policy workshop facilitation fees",
                    "Carefully vetted neutral institutional grants",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-muted/30 rounded-2xl p-8 text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">A Non-Partisan Advisor for AI Governance</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              By funding operations exclusively through direct client engagements, AERO remains independent of any technology vendor, government, or political entity. This ensures our AI governance guidance reflects best practice rather than commercial interest.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "The guidance we provide does not favor one AI vendor, framework, or regulatory jurisdiction over any other."
            </p>
          </div>

          {/* Why Independence Matters */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Independence Matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Vendor Neutrality</h4>
                <p className="text-sm text-muted-foreground">
                  We don't sell AI products, so our recommendations are never shaped by vendor relationships or referral incentives.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Client-First Priorities</h4>
                <p className="text-sm text-muted-foreground">
                  Without external investors demanding returns, every recommendation is made in the best interest of our clients' governance goals.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Trust & Transparency</h4>
                <p className="text-sm text-muted-foreground">
                  Our funding sources are fully transparent. Clients can trust that our AI governance guidance is unbiased and evidence-based.
                </p>
              </Card>
            </div>
          </div>

          {/* Sustainable Model */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">A Sustainable Model for Long-Term Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  AERO is built for longevity. Our revenue model ensures we can continue providing independent AI governance advisory for years to come, without the pressure of venture returns or acquisition outcomes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Revenue directly from the organizations we advise
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Heart className="w-4 h-4 text-primary mt-1 shrink-0" />
                    Incentives fully aligned with client governance outcomes
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary mt-1 shrink-0" />
                    No pressure to recommend any specific AI platform
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-5xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Client-Funded, Vendor-Neutral</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mb-8">
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Note on Institutional Grants</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  In select circumstances, AERO may accept institutional grants that support AI governance research and education, provided they impose no influence on our advisory positions or client recommendations. All grant considerations undergo rigorous evaluation to ensure alignment with our independence standards.
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
