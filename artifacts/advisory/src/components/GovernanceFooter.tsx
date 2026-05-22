import { Mail, MessageSquare, ExternalLink, Briefcase, Globe, Building2 } from "lucide-react";
import { Link } from "wouter";
import aeroLogoWhite from "@/assets/aero_logo_white.png";

export function GovernanceFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-900 dark:bg-slate-950 mt-auto" data-testid="section-governance-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Column 1: AERO Brand */}
          <div className="space-y-4">
            <img src={aeroLogoWhite} alt="AERO" className="h-10 mb-2" />
            <p className="text-sm text-white/70 leading-relaxed">
              Helping people establish their work as a proper US business — with every step of formation handled at one flat rate.
            </p>
            <p className="text-xs text-white/50 leading-relaxed">
              AERO also offers specialist AI governance advisory as a separate service — for businesses navigating FTC guidelines, the EU AI Act, and emerging AI regulations.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/leadership" className="hover:text-white transition-colors" data-testid="link-gov-leadership">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-white transition-colors" data-testid="link-gov-financing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white transition-colors" data-testid="link-gov-press">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/hiring" className="hover:text-white transition-colors" data-testid="link-gov-careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90 text-sm">Support</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:support@aerocooperation.com"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  data-testid="link-gov-support"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://aerocooperation.com/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  data-testid="link-gov-onboarding-faq"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Help Center / FAQ
                  <ExternalLink className="w-3 h-3 text-white/30 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:feedback@aerocooperation.com?subject=Feedback"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  data-testid="link-gov-feedback"
                >
                  <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Send Feedback
                </a>
              </li>
              <li className="pt-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-xs text-blue-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Our team is growing
                </div>
              </li>
              <li>
                <a
                  href="mailto:careers@aerocooperation.com?subject=Business%20Formation%20Advisor%20Application"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  data-testid="link-gov-careers-advisor"
                >
                  <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Business Formation Advisors
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@aerocooperation.com?subject=Compliance%20Specialist%20Application"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                  data-testid="link-gov-careers-ai"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Compliance Specialists
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90 text-sm">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:contact@aerocooperation.com"
                  className="hover:text-white transition-colors"
                  data-testid="link-gov-contact"
                >
                  contact@aerocooperation.com
                </a>
              </li>
              <li className="text-white/40 text-xs mt-1">AERO Cooperation</li>
              <li className="pt-2">
                <a
                  href="mailto:contact@aerocooperation.com?subject=Start%20My%20US%20Business"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 text-xs text-white/70 hover:text-white hover:border-white/40 transition-colors"
                  data-testid="button-gov-contact-leadership"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  Start My US Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              AERO Advisory · US Business Formation &amp; AI Governance
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span>© {new Date().getFullYear()} AERO Cooperation. All rights reserved.</span>
              <a href="https://aerocooperation.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy</a>
              <a href="https://aerocooperation.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
