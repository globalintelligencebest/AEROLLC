import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Landmark, CheckCircle2, Shield, FileText, Users, Globe, BarChart3, Building2, DollarSign } from "lucide-react";
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
              <a href="mailto:contact@aerocooperation.com">
                Get Started
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
              US Regulatory Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Understanding the US Business Landscape
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Forming a business in the United States involves federal agencies, state governments,
              and specific rules depending on your entity type and industry. Here's what you need to know.
            </p>
          </div>

          {/* Key Entities */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <Shield className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold mb-1">IRS</div>
              <div className="text-sm text-white/70">Federal Tax Authority</div>
            </Card>
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <FileText className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold mb-1">Secretary of State</div>
              <div className="text-sm text-white/70">Entity Registration</div>
            </Card>
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <Building2 className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold mb-1">FinCEN</div>
              <div className="text-sm text-white/70">Beneficial Ownership</div>
            </Card>
            <Card className="p-6 text-center bg-[#1E3A8A] text-white">
              <Globe className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold mb-1">50 States</div>
              <div className="text-sm text-white/70">Varying Requirements</div>
            </Card>
          </div>

          {/* The Formation Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">The US Formation Process — Simplified</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Federal Requirements</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "EIN (Employer Identification Number)", note: "Issued by the IRS — your business tax ID, required for banking and taxes" },
                    { label: "Beneficial Ownership Report (BOI)", note: "Required for most LLCs/Corps under FinCEN's 2024 Corporate Transparency Act" },
                    { label: "Annual Federal Tax Filing", note: "LLC: pass-through to personal return; C-Corp: separate corporate return" },
                    { label: "No Federal Registration for the Entity", note: "Companies are formed at the state level — federal only handles tax IDs and reporting" },
                  ].map(({ label, note }) => (
                    <div key={label}>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{label}</p>
                          <p className="text-xs text-muted-foreground">{note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">State Requirements</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Articles of Organization / Incorporation", desc: "Filed with the Secretary of State in your chosen formation state." },
                    { title: "Registered Agent", desc: "A person or service with a physical address in the state — required in every state." },
                    { title: "Annual Reports & Franchise Taxes", desc: "Due annually — deadlines and amounts vary by state. Missing them can lead to dissolution." },
                    { title: "State Business Licenses", desc: "Depending on your industry and state, additional licenses may be required." },
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

          {/* LLC vs C-Corp */}
          <Card className="p-8 mb-16 bg-muted/30 border-0">
            <h3 className="text-xl font-semibold mb-6 text-center">LLC vs C-Corporation — Which Is Right for You?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-primary">LLC (Limited Liability Company)</h4>
                <ul className="space-y-3">
                  {[
                    "Simpler to set up and maintain",
                    "Pass-through taxation — profits go to your personal return",
                    "Flexible management structure",
                    "Great for solo founders, freelancers, and small teams",
                    "Popular in Wyoming (privacy) and Delaware (credibility)",
                    "Can elect S-Corp tax status for additional savings",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">C-Corporation</h4>
                <ul className="space-y-3">
                  {[
                    "Preferred by venture capital investors",
                    "Separate corporate tax return (21% federal rate)",
                    "Can issue multiple classes of stock",
                    "Required for equity-based fundraising",
                    "Delaware is the dominant state for C-Corps",
                    "More formal governance requirements (bylaws, board)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              Not sure which to choose? AERO advises you on the right structure based on your goals, income, and future plans.
            </p>
          </Card>

          {/* State Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Popular Formation States Compared</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  state: "Delaware",
                  flag: "🏛️",
                  bestFor: "C-Corps, investor-backed startups",
                  annualFee: "$300 franchise tax (min.)",
                  privacy: "Moderate",
                  notes: "Gold standard for startups seeking investment. Court of Chancery specializes in corporate law.",
                },
                {
                  state: "Wyoming",
                  flag: "🏔️",
                  bestFor: "LLCs, privacy-conscious founders",
                  annualFee: "$60 minimum",
                  privacy: "High",
                  notes: "Strong owner privacy protections. No state income tax. Very low annual fees. Popular for non-residents.",
                },
                {
                  state: "Florida",
                  flag: "🌴",
                  bestFor: "Owners who operate in the US",
                  annualFee: "$138.75",
                  privacy: "Moderate",
                  notes: "No state income tax. Good for owners who spend time in Florida or plan to operate there.",
                },
              ].map(({ state, flag, bestFor, annualFee, privacy, notes }) => (
                <Card key={state} className="p-6">
                  <div className="text-3xl mb-3">{flag}</div>
                  <h4 className="text-xl font-bold mb-1">{state}</h4>
                  <p className="text-sm text-primary font-medium mb-4">{bestFor}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex justify-between">
                      <span>Annual Fee</span>
                      <span className="font-medium text-foreground">{annualFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Privacy</span>
                      <span className="font-medium text-foreground">{privacy}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{notes}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* New in 2024: BOI */}
          <Card className="p-8 mb-16 border-amber-200 bg-amber-50">
            <div className="flex items-start gap-4">
              <DollarSign className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">New Requirement: Beneficial Ownership Report (BOI)</h3>
                <p className="text-amber-800 text-sm mb-4">
                  Under the Corporate Transparency Act, most US LLCs and corporations must file a Beneficial
                  Ownership Information (BOI) report with FinCEN (the Financial Crimes Enforcement Network).
                  This applies to most new and existing small businesses. Failure to file can result in penalties.
                </p>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>• Companies formed in 2024 or later: file within 90 days of formation</li>
                  <li>• Companies formed before 2024: filing requirements vary — check current FinCEN guidance</li>
                  <li>• AERO guides you through BOI reporting as part of your formation package</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center bg-muted/30 rounded-2xl p-12">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Let Us Navigate This For You</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              US formation rules are complex and vary by state. AERO handles every step —
              so you spend your energy building your business, not reading government instructions.
            </p>
            <Button size="lg" className="h-12 px-8 rounded-full" asChild>
              <a href="mailto:contact@aerocooperation.com">
                Start My US Business
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
