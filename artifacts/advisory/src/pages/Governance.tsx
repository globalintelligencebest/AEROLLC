import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GovernanceFooter } from "@/components/GovernanceFooter";
import {
  Globe,
  Shield,
  FileText,
  CheckCircle2,
  Building2,
  DollarSign,
  Zap,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import aeroLogoWhite from "@/assets/aero_logo_white.png";
import { Link } from "wouter";

const steps = [
  {
    step: "01",
    title: "Tell us about your work",
    desc: "A short intake form — we learn what you do and what kind of US entity makes the most sense for you.",
  },
  {
    step: "02",
    title: "We handle all the paperwork",
    desc: "State filing, EIN application, registered agent setup, operating agreement — all done for you.",
  },
  {
    step: "03",
    title: "Your US business is live",
    desc: "Receive your formation documents, start opening a US bank account, and operate legally as a US business.",
  },
];

const included = [
  "LLC or C-Corp formation in your chosen US state",
  "Employer Identification Number (EIN) from the IRS",
  "Registered agent service — first year included",
  "Operating agreement or corporate bylaws",
  "Compliance calendar with key annual deadlines",
  "US business bank account introduction",
  "Digital document delivery & secure storage",
  "Post-formation support (30 days)",
];

const whyUS = [
  { stat: "330M+", label: "Consumer market" },
  { stat: "$1T+", label: "E-commerce spend" },
  { stat: "50 states", label: "One single filing" },
  { stat: "~7 days", label: "Average formation time" },
];

export default function Governance() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* HEADER */}
      <nav className="px-4 pt-2 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto rounded-full px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoWhite} alt="AERO" className="h-12" />
          </Link>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/advisory" className="text-white/80 hover:text-white transition-colors">Services</Link>
            <Link href="/financing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
            <Link href="/government" className="text-white/80 hover:text-white transition-colors">US Guide</Link>
            <Link href="/leadership" className="text-white/80 hover:text-white transition-colors">Team</Link>
          </div>

          <Button
            asChild
            className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-5 py-2 text-sm font-semibold hidden md:flex"
          >
            <a href="mailto:contact@aerocooperation.com">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 rounded-full">
            One flat rate · Everything included
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display mb-6 text-white leading-tight">
            Your Work Deserves a<br />
            <span className="text-cyan-300">Registered US Business</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you freelance, consult, create, or run an independent operation —
            AERO gets you properly incorporated in the United States so you can operate, get paid, and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/advisory">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 rounded-full px-8 py-4 text-lg font-semibold shadow-xl">
                See What's Included
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/financing">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY THE US */}
      <section className="py-16 bg-blue-950/60 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-blue-300 text-sm font-medium uppercase tracking-widest mb-8">
            Why establish your business in the United States
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyUS.map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat}</p>
                <p className="text-blue-300 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center text-white">
            How It Works
          </h2>
          <p className="text-center text-blue-300 mb-16 max-w-2xl mx-auto">
            From signup to a fully formed US company in as little as one week.
            We guide you through every step and do the heavy lifting for you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-6xl font-bold text-blue-800/50 mb-4 font-display">{step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-blue-950/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                One flat rate — no surprise fees
              </Badge>
              <h2 className="text-3xl font-semibold mb-6 text-white">
                Everything You Need to Launch Your US Business
              </h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                You pay once. We handle every step of formation — entity filing, EIN,
                registered agent, governing documents, and banking guidance.
              </p>
              <Link href="/financing">
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-full px-6 py-3">
                  See Full Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 mt-0.5 shrink-0 h-5 w-5" />
                  <p className="text-blue-100 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            For Anyone Who Hasn't Made It Official Yet
          </h2>
          <p className="text-blue-300 mb-16 max-w-2xl mx-auto">
            You don't need a law degree or an accountant on retainer. AERO is for people
            whose work is real — and who are ready to give it the legal foundation it deserves.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "Creators & Independent Sellers",
                desc: "Artists, designers, and product makers who want to sell professionally and protect their personal assets.",
              },
              {
                icon: Zap,
                title: "Freelancers & Consultants",
                desc: "Writers, designers, developers, and coaches who want to invoice clients through a legitimate US company.",
              },
              {
                icon: Globe,
                title: "International Entrepreneurs",
                desc: "Non-US residents who want access to US payment processors, customers, and the credibility of a US-registered entity.",
              },
              {
                icon: Building2,
                title: "Side Hustle Founders",
                desc: "Anyone running a project on the side that's generating income and ready to be structured properly.",
              },
              {
                icon: Users,
                title: "Small Teams",
                desc: "Co-founders and small partnerships who want a clean legal structure from day one.",
              },
              {
                icon: Shield,
                title: "First-Time Business Owners",
                desc: "People who have never formed a company before and want expert guidance every step of the way.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-6 rounded-2xl bg-blue-900/30 border border-blue-800/40 text-left">
                <Icon className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI ADVISORY ADD-ON */}
      <section className="py-24 bg-blue-950/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                Optional add-on · Separate pricing
              </Badge>
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Need AI Governance Advisory Too?
              </h2>
              <p className="text-blue-200 leading-relaxed mb-4">
                If your business uses AI tools — ChatGPT, automation, AI-generated content —
                AERO also offers a dedicated AI governance advisory service to keep you
                compliant as regulations evolve.
              </p>
              <p className="text-blue-300 text-sm leading-relaxed mb-8">
                This is specialist expertise, priced separately. It covers FTC guidelines,
                the EU AI Act (if you sell to EU customers), state AI laws, and platform
                policy compliance — tailored to your business type.
              </p>
              <Link href="/security-ai-governance">
                <Button className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-full px-6 py-3">
                  Learn About AI Advisory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { icon: FileText, title: "AI Disclosure Obligations", desc: "Know when and how to disclose AI use to your customers — required under FTC guidelines and emerging state laws." },
                { icon: Shield, title: "EU AI Act Compliance", desc: "Selling to EU customers? We assess whether and how the EU AI Act applies to your AI-assisted products." },
                { icon: DollarSign, title: "AI Policy Development", desc: "Custom internal AI usage policies, vendor assessment frameworks, and governance documentation for your business." },
              ].map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/40 flex items-start gap-4">
                  <Icon className="h-6 w-6 text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-blue-200 text-xs leading-relaxed">{desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-display">
            Ready to Make It Official?
          </h2>
          <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">
            One flat rate. No hidden fees. Your US business — formed, documented, and ready to operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@aerocooperation.com">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 border-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl">
                Start Your US Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/advisory">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <GovernanceFooter />
    </div>
  );
}
