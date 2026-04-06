import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GovernanceFooter } from "@/components/GovernanceFooter";
import {
  Globe,
  Shield,
  Calendar,
  FileText,
  Lock,
  Scale,
  Database,
  CheckCircle2,
} from "lucide-react";
import aeroLogoWhite from "@assets/aero_logo_white.png";
import { Link } from "wouter";

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
            <a href="#framework" className="text-white/80 hover:text-white transition-colors">Framework</a>
            <a href="#compliance" className="text-white/80 hover:text-white transition-colors">Regulatory Alignment</a>
            <a href="#controls" className="text-white/80 hover:text-white transition-colors">Controls</a>
            <a href="#consultation" className="text-white/80 hover:text-white transition-colors">Consultation</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 rounded-full">
            AI Governance for Real-World Business Risk
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Understand, Control, and Safely Scale Your Use of AI
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Most businesses are already using AI—often without realizing where or how.
            AERO helps you identify where AI is impacting your business and reduce hidden risks.
          </p>
        </div>
      </section>


      {/* CONTROL ENVIRONMENT */}
      <section id="controls" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-white">
            Why This Matters Now
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              " 75% of enterprises are expected to implement AI governance by 2025  ",
              "  80% of leaders cite risk as the main barrier to AI adoption ",
              " Companies with controls are far more likely to see ROI ",
              " Up to 40% of AI projects fail due to lack of oversight  ",
      " 60% of organizations lack formal AI governance frameworks today ",
      " Over 70% of AI leaders report concerns about data quality and model reliability ",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="text-cyan-400 mt-1 shrink-0" />
                <p className="text-blue-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FRAMEWORK */}
      <section id="framework" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-12 text-center text-white">
          How You Stay in Control
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8 rounded-2xl shadow-lg bg-blue-900/40 border border-blue-700/30">
            <Shield className="h-10 w-10 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">AI Does Not Act on Its Own</h3>
            <p className="text-blue-200 leading-relaxed">
              AI is used as a support tool—not something that acts independently.
              No decisions, financial actions, or critical outcomes happen without human approval.
            </p>
          </Card>

          <Card className="p-8 rounded-2xl shadow-lg bg-cyan-900/30 border border-cyan-700/30">
            <Calendar className="h-10 w-10 text-cyan-300 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">You Stay in Control</h3>
            <p className="text-blue-200 leading-relaxed">
              AI provides recommendations, but your team makes the final decisions.
            </p>
          </Card>

          <Card className="p-8 rounded-2xl shadow-lg bg-indigo-900/30 border border-indigo-700/30">
            <FileText className="h-10 w-10 text-indigo-300 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">Full Visibility</h3>
            <p className="text-blue-200 leading-relaxed">
              Every AI interaction can be tracked, reviewed, and explained.
              You can see what was asked, what was generated, and how outcomes were supported.
            </p>
          </Card>

          <Card className="p-8 rounded-2xl shadow-lg bg-slate-800/60 border border-slate-700/40">
            <Database className="h-10 w-10 text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">Your Data Stays Protected</h3>
            <p className="text-blue-200 leading-relaxed">
              We limit how data is used and ensure your information is never used to train external AI models.
            </p>
          </Card>
        </div>
      </section>

      {/* REGULATORY ALIGNMENT */}
      <section id="compliance" className="bg-blue-950/60 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center text-white">
            Built to Reduce Legal and Compliance Risk
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-2xl shadow-md bg-blue-900/40 border border-blue-700/30">
              <Scale className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Data Protection & Privacy</h3>
              <ul className="space-y-3 text-blue-200 text-sm">
                <li>• Limit how AI uses sensitive data  </li>
                <li>• Reduce cross-border data exposure risks</li>
                <li>• Support access and deletion requirements</li>
                <li>• Build privacy into how AI is used from the start</li>
              </ul>
            </Card>

            <Card className="p-8 rounded-2xl shadow-md bg-indigo-900/30 border border-indigo-700/30">
              <Lock className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">Aligned with Global Standards</h3>
              <ul className="space-y-3 text-blue-200 text-sm">
                <li>• EU AI Act</li>
                <li>• NIST AI Risk Management Framework</li>
                <li>• ISO security and risk standards</li>
                <li>• SOC 2 expectations</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 text-center text-blue-300 max-w-3xl mx-auto text-sm leading-relaxed">
            AERO doesn't replace your legal or compliance teams—we help you reduce risk and avoid costly mistakes as AI becomes more regulated.
          </div>
        </div>
      </section>

      {/* CONTROL ENVIRONMENT */}
      <section id="controls" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-white">
            How Risk Is Reduced in Practice
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Clear rules around how AI can be used",
              "Controlled access to systems and data",
              "Full visibility over AI implementation",
              "Human review before important decisions",
              "No autonomous AI actions",
              "Configurable controls for your business",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="text-cyan-400 mt-1 shrink-0" />
                <p className="text-blue-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section
        id="consultation"
        className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl text-white mb-8">
            Understand Your AI Risk Exposure
          </h2>
          <p className="text-white/80 mb-12 text-lg max-w-2xl mx-auto">
            Most companies don't realize how much AI is already influencing their operations.
            We help you identify risks and put simple controls in place so you stay in control.
          </p>

          <Link href="/advisory">
            <Button className="bg-white text-blue-800 border-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
      <GovernanceFooter />
    </div>
  );
}
