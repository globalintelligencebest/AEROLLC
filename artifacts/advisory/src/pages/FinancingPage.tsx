import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Building2,
  Globe,
  Users,
  DollarSign,
  Star,
} from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const packageItems = [
  "LLC or C-Corp formation in your chosen US state",
  "EIN (Employer Identification Number) application",
  "Registered agent service — first year included",
  "Operating agreement or corporate bylaws",
  "Compliance calendar with deadline reminders",
  "US business bank account introduction & guidance",
  "Post-formation advisory access (30 days)",
  "Digital document delivery & secure storage",
];

const aiAdvisoryItems = [
  "AI usage policy development for your business",
  "FTC AI disclosure obligation assessment",
  "EU AI Act applicability review (for EU-facing businesses)",
  "State AI law monitoring and compliance alerts",
  "AI vendor assessment and risk review",
  "AI governance documentation tailored to your industry",
];

const faqs = [
  {
    q: "Do I need to be a US resident to form a US company?",
    a: "No. Non-US residents can form and own a US LLC or C-Corporation. AERO specializes in guiding international founders through this process — including the EIN application, which has additional steps for non-residents.",
  },
  {
    q: "What state should I form in?",
    a: "Delaware is the default for C-Corps (preferred by investors). Wyoming and Florida are popular for LLCs due to low fees and privacy. We'll recommend the right state based on your goals and where you do business.",
  },
  {
    q: "How long does formation take?",
    a: "Standard filing takes 5–10 business days in most states. Expedited processing is available in Delaware and Wyoming (1–3 days). EIN processing from the IRS adds 2–4 weeks for non-US applicants — we manage this for you.",
  },
  {
    q: "What is a registered agent and why do I need one?",
    a: "Every US state requires your company to have a registered agent — a person or service with a US address that receives legal and government documents on your behalf. We provide this for your first year at no extra cost.",
  },
  {
    q: "What are the ongoing costs after formation?",
    a: "State annual report fees typically range from $50–$400 depending on your state. Registered agent renewal is a separate flat fee after year one. We provide a full compliance calendar so you're never caught off guard.",
  },
  {
    q: "Is AI governance advisory included in the formation package?",
    a: "No — AI governance is a separate, specialist service with its own pricing. If you use AI tools in your business (ChatGPT, automation, AI-generated content), our AI advisory team can assess your compliance obligations as a standalone engagement.",
  },
];

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoBlue} alt="AERO" className="h-16" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground hidden md:block">Home</Link>
            <Link href="/advisory" className="text-sm font-medium text-foreground/70 hover:text-foreground hidden md:block">Services</Link>
            <Button asChild data-testid="button-get-started">
              <a href="mailto:contact@aerocooperation.com">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <DollarSign className="w-3 h-3 mr-1" />
              Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              One Flat Rate. No Surprises.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              No hourly billing. No piecemeal add-ons. AERO bundles every step of US company
              formation into a single transparent price — so you know exactly what you're paying
              before we begin.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 md:p-12 border-2 border-primary shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-white">Most Popular</Badge>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">US Business Formation Package</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-8">
                Complete setup for your US LLC or C-Corporation — everything from filing to first-year compliance.
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">$499</span>
                <span className="text-muted-foreground ml-2">flat rate</span>
                <p className="text-xs text-muted-foreground mt-1">
                  + state filing fees (vary by state, typically $50–$200)
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {packageItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full py-4 text-lg rounded-full" asChild>
                <a href="mailto:contact@aerocooperation.com?subject=US%20Business%20Formation%20Package">
                  Start Your Formation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>

            <div className="space-y-6">
              {/* What you avoid */}
              <Card className="p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  What You Avoid
                </h4>
                <ul className="space-y-3">
                  {[
                    "Attorney fees of $1,500–$5,000+ for basic formation",
                    "Separate charges for EIN, registered agent, and documents",
                    "Surprise state fees discovered mid-process",
                    "DIY filing errors that delay your formation",
                    "Compliance deadlines missed due to lack of guidance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Why Founders Choose AERO
                </h4>
                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                  "I'd been doing client work for two years under my own name before realizing I needed
                  a proper structure. AERO handled everything — I had my Wyoming LLC and EIN within a week."
                </blockquote>
                <p className="text-xs text-muted-foreground mt-3">— AERO client, independent consultant turned LLC owner</p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  For Non-US Residents
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Non-resident formation includes additional EIN processing steps. AERO manages this
                  entirely — including the IRS Form SS-4 and ITIN coordination where needed.
                </p>
                <span className="text-xs font-medium text-primary">No US address or SSN required</span>
              </Card>
            </div>
          </div>

          {/* AI Advisory Add-on */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Add-On: AI Governance Advisory</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not included in the formation package. If your business uses AI tools, this is a
                separate specialist engagement — priced on scope and complexity.
              </p>
            </div>
            <Card className="p-8 md:p-10 border border-indigo-200 bg-indigo-50/50">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-6 w-6 text-indigo-600" />
                    <h3 className="text-xl font-bold">AI Governance Advisory</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    Specialist advisory for businesses that use AI tools — covering regulatory compliance,
                    disclosure obligations, internal policy, and ongoing monitoring as AI laws evolve.
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-indigo-700">Custom pricing</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quoted based on scope, business type, and AI usage profile
                    </p>
                  </div>
                  <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                    <a href="mailto:contact@aerocooperation.com?subject=AI%20Governance%20Advisory%20Enquiry">
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-800 mb-3">What's covered:</p>
                  <ul className="space-y-2">
                    {aiAdvisoryItems.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    This service is independent of business formation and can be engaged at any time —
                    before or after your company is established.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* State Fees */}
          <Card className="p-8 mb-12 bg-muted/30 border-0">
            <h3 className="text-xl font-semibold mb-6 text-center">State Filing Fees (Approximate)</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { state: "Delaware", fee: "$90–$110", note: "Best for C-Corps / investors" },
                { state: "Wyoming", fee: "$100", note: "Privacy-friendly, low annual fees" },
                { state: "Florida", fee: "$125", note: "Popular for US-based operations" },
                { state: "Other States", fee: "$50–$200", note: "Varies — we advise based on your needs" },
              ].map(({ state, fee, note }) => (
                <div key={state}>
                  <p className="text-2xl font-bold text-primary mb-1">{fee}</p>
                  <p className="font-medium">{state}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6">
              State fees are paid at cost — AERO charges no markup on government filing fees.
            </p>
          </Card>

          {/* What's covered long-term */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Fast Turnaround</h4>
              <p className="text-sm text-muted-foreground">
                Standard formation in 5–10 business days. Expedited available in most states.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Human Support</h4>
              <p className="text-sm text-muted-foreground">
                A real person reviews your intake, advises on structure, and follows through to completion.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Complete Package</h4>
              <p className="text-sm text-muted-foreground">
                Formation, EIN, registered agent, documents, banking intro, and AI tools — one price.
              </p>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <Card key={q} className="p-6">
                  <h4 className="font-semibold mb-2">{q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="h-12 px-8 rounded-full" asChild>
              <a href="mailto:contact@aerocooperation.com?subject=Start%20US%20Business%20Formation">
                Start Your Formation Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Questions? Email <a href="mailto:contact@aerocooperation.com" className="text-primary hover:underline">contact@aerocooperation.com</a> — we respond within 1 business day.
            </p>
          </div>
        </div>
      </main>
      <GovernanceFooter />
    </div>
  );
}
