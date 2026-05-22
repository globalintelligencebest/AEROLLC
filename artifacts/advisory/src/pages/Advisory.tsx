import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  FileText,
  Shield,
  DollarSign,
  Calendar,
  Globe,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Users,
  Zap,
} from "lucide-react";
import aeroLogoWhite from "@/assets/aero_logo_white.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const services = [
  {
    icon: Building2,
    title: "Entity Formation",
    badge: "Core Service",
    badgeColor: "bg-blue-100 text-blue-800",
    desc: "We file your LLC or C-Corporation with the state of your choice — Delaware, Wyoming, and Florida are the most popular for non-residents. Your formation documents are handled from start to finish.",
    items: [
      "Articles of Organization or Incorporation filed",
      "State selection guidance (Delaware, Wyoming, FL, others)",
      "Name availability search included",
      "Expedited filing available",
    ],
  },
  {
    icon: Landmark,
    title: "EIN from the IRS",
    badge: "Required for Banking",
    badgeColor: "bg-green-100 text-green-800",
    desc: "An Employer Identification Number (EIN) is your business's tax ID — required to open a US bank account, hire contractors, and file taxes. We apply on your behalf directly with the IRS.",
    items: [
      "IRS SS-4 application completed for you",
      "Works for both US and non-US residents",
      "Required for business bank accounts",
      "Needed for contractor payments (1099s)",
    ],
  },
  {
    icon: Shield,
    title: "Registered Agent (Year 1 Included)",
    badge: "Compliance",
    badgeColor: "bg-purple-100 text-purple-800",
    desc: "Every US state requires a registered agent — a person or entity with a US address that receives official state and legal mail on behalf of your business. First year is included in your AERO package.",
    items: [
      "Licensed registered agent in your formation state",
      "Physical US address for official correspondence",
      "Forwarding of state notices and legal documents",
      "Annual renewal available at a low flat rate",
    ],
  },
  {
    icon: FileText,
    title: "Operating Agreement & Bylaws",
    badge: "Legal Foundation",
    badgeColor: "bg-orange-100 text-orange-800",
    desc: "Your operating agreement (for LLCs) or corporate bylaws (for C-Corps) define how the business is governed, how profits are split, and what happens if founders exit. We draft these for your specific situation.",
    items: [
      "Customized to single-member or multi-member structure",
      "Profit distribution and management clauses",
      "Founder exit and dissolution provisions",
      "Ready for bank account opening",
    ],
  },
  {
    icon: Calendar,
    title: "Compliance Calendar",
    badge: "Stay in Good Standing",
    badgeColor: "bg-cyan-100 text-cyan-800",
    desc: "Missing an annual report or state fee can get your company dissolved. We set you up with a compliance calendar so you always know what's due and when — and we send reminders.",
    items: [
      "State annual report deadlines",
      "Franchise tax and fee schedules",
      "Registered agent renewal date",
      "Federal and state tax filing dates",
    ],
  },
  {
    icon: DollarSign,
    title: "Business Banking Introduction",
    badge: "Open Your Account",
    badgeColor: "bg-emerald-100 text-emerald-800",
    desc: "Once your EIN is in hand and documents are ready, we guide you through opening a US business bank account — including options that work for non-US residents.",
    items: [
      "Recommended banking partners for non-residents",
      "Document checklist for account opening",
      "Fintech alternatives (Mercury, Relay, Brex)",
      "Guidance on keeping business and personal funds separate",
    ],
  },
];


export default function Advisory() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="px-4 pt-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoWhite} alt="AERO" className="h-12" />
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/financing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
            <Link href="/government" className="text-white/80 hover:text-white transition-colors">US Guide</Link>
          </div>
          <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-5 text-sm font-semibold">
            <a href="mailto:contact@aerocooperation.com">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Badge className="mb-6 gradient-primary text-white border-0 px-4 py-2 rounded-full">
            Formation Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display mb-6">
            Everything You Need to Launch<br />Your US Business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            One package, one flat rate. From entity filing to banking guidance —
            AERO covers the entire journey from unregistered to properly established US business owner.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-12 text-center">What's Included in Your Package</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map(({ icon: Icon, title, badge, badgeColor, desc, items }) => (
            <Card key={title} className="p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-4 ${badgeColor}`}>
                {badge}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* AI ADVISORY SEPARATE */}
        <div className="mt-16 border-t pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 mb-4">
                Separate service · Custom pricing
              </span>
              <h2 className="text-2xl font-semibold mb-4">AI Governance Advisory</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AERO also provides specialist AI governance advisory — but this is entirely
                separate from the formation package and priced independently.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                If your business uses AI tools (ChatGPT, automation, AI-generated products or content),
                you may have regulatory obligations under the FTC, EU AI Act, or emerging state laws.
                Our AI advisory team assesses your exposure and builds the policies and documentation
                you need to operate compliantly.
              </p>
              <div className="flex gap-3">
                <Button asChild className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <a href="mailto:contact@aerocooperation.com?subject=AI%20Governance%20Advisory%20Enquiry">
                    Request a Quote
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/security-ai-governance">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Zap, title: "AI Disclosure & Transparency", desc: "FTC and state-level obligations for disclosing AI use to customers and clients." },
                { icon: Globe, title: "EU AI Act Assessment", desc: "Whether and how the EU AI Act applies to your business if you sell to European customers." },
                { icon: Users, title: "Internal AI Policy", desc: "Custom AI usage policies, vendor frameworks, and governance documentation for your team." },
              ].map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="p-5 rounded-xl flex items-start gap-4">
                  <Icon className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{title}</p>
                    <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="py-20 bg-muted/30 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Form Your US Business?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get in touch and we'll walk you through which entity type and state is right for you —
            then we take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                window.open("https://calendly.com/inquiries-aerocooperation", "_blank")
              }
              className="px-8 py-4 text-lg rounded-full"
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" asChild className="px-8 py-4 text-lg rounded-full">
              <Link href="/financing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
      <GovernanceFooter />
    </div>
  );
}
