import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Landmark, CheckCircle2, Globe, TrendingUp, Users, DollarSign, BarChart3, PieChart } from "lucide-react";
import aeroLogoBlue from "@assets/aero_logo_blue.png";
import aeroLogoWhite from "@assets/aero_logo_white.png";
import { Link } from "wouter";

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
              <a href="https://planetaxapp.com" target="_blank" rel="noopener noreferrer">
                Try the App
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
              For Governments
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              The Platform Governments Trust
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Partner with AERO to recover lost revenue and support compliant global citizens.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center bg-[#3D4785] text-white">
              <DollarSign className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">$427B</div>
              <div className="text-sm text-white/70">Annual Global Tax Gap</div>
            </Card>
            <Card className="p-6 text-center bg-[#3D4785] text-white">
              <Users className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">68%</div>
              <div className="text-sm text-white/70">Unintentional Non-Filers</div>
            </Card>
            <Card className="p-6 text-center bg-[#3D4785] text-white">
              <Globe className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">12M+</div>
              <div className="text-sm text-white/70">Global Mobile Workers</div>
            </Card>
            <Card className="p-6 text-center bg-[#3D4785] text-white">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">23%</div>
              <div className="text-sm text-white/70">Annual Growth in Remote Work</div>
            </Card>
          </div>

          {/* The Problem Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">The Global Tax Compliance Challenge</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Lost Revenue by Region</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>North America</span>
                      <span className="font-medium">$125B</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Europe</span>
                      <span className="font-medium">$98B</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Asia Pacific</span>
                      <span className="font-medium">$112B</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Latin America</span>
                      <span className="font-medium">$52B</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Rest of World</span>
                      <span className="font-medium">$40B</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <PieChart className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Why People Don't File</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      42%
                    </div>
                    <div>
                      <p className="font-medium">Complexity & Confusion</p>
                      <p className="text-sm text-muted-foreground">Don't understand requirements</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold">
                      26%
                    </div>
                    <div>
                      <p className="font-medium">Unaware of Obligations</p>
                      <p className="text-sm text-muted-foreground">Don't know they need to file</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/60 flex items-center justify-center text-white font-bold">
                      18%
                    </div>
                    <div>
                      <p className="font-medium">Cost of Professional Help</p>
                      <p className="text-sm text-muted-foreground">Can't afford tax advisors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center text-white font-bold">
                      14%
                    </div>
                    <div>
                      <p className="font-medium">Intentional Avoidance</p>
                      <p className="text-sm text-muted-foreground">Deliberate non-compliance</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Growth Trends */}
          <Card className="p-8 mb-16 bg-muted/30 border-0">
            <h3 className="text-xl font-semibold mb-6 text-center">The Growing Challenge</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">87%</div>
                <p className="text-sm text-muted-foreground">increase in digital nomad visas issued since 2020</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$4.5T</div>
                <p className="text-sm text-muted-foreground">in cross-border income expected by 2030</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">156</div>
                <p className="text-sm text-muted-foreground">countries with tax treaty networks that create complexity</p>
              </div>
            </div>
          </Card>

          {/* The Solution */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">How AERO Bridges the Gap</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Increase Voluntary Compliance</p>
                      <p className="text-muted-foreground">When citizens understand their obligations, they file. AERO makes complex rules accessible and actionable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Reduce Administrative Burden</p>
                      <p className="text-muted-foreground">Pre-populated forms and accurate calculations mean fewer errors, amendments, and enforcement costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">International Standards Alignment</p>
                      <p className="text-muted-foreground">Built on international tax cooperation frameworks and best practices for global interoperability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Neutral Third Party</p>
                      <p className="text-muted-foreground">Independent platform with no national bias or political affiliations, serving all jurisdictions equally.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-[#3D4785] text-white">
                <h3 className="text-2xl font-semibold mb-6">Projected Impact</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">Compliance Rate Improvement</span>
                      <span className="font-bold">+35%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">Filing Error Reduction</span>
                      <span className="font-bold">-60%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">Administrative Cost Savings</span>
                      <span className="font-bold">$2.3B</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">Revenue Recovery Potential</span>
                      <span className="font-bold">$85B</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-muted/30 rounded-2xl p-12">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join the growing network of governments working with AERO to improve cross-border tax compliance and recover lost revenue.
            </p>
            <Button size="lg" className="h-12 px-8" asChild>
              <a href="mailto:government@aerocooperation.com">
                Contact Government Relations
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-12 bg-[#1E2344] text-white" style={{ fontFamily: 'Calibri, sans-serif' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={aeroLogoWhite} alt="AERO Cooperation" className="h-16 mb-4" />
              <p className="text-sm text-white/70">
                Advancing global tax transparency through cooperation and technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
                <li><Link href="/financing" className="hover:text-white transition-colors">Financing</Link></li>
                <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
                <li><Link href="/hiring" className="hover:text-white transition-colors">Hiring</Link></li>
                <li><Link href="/government" className="hover:text-white transition-colors">Organisations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="https://aerocooperation.com/faq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Help Center/FAQ</a></li>
                <li><a href="mailto:feedback@aerocooperation.com" className="hover:text-white transition-colors">Send Feedback</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <a href="mailto:contact@aerocooperation.com" className="text-white/70 hover:text-white transition-colors">
                contact@aerocooperation.com
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/50">
                Not legal or tax advice. Consult qualified professionals for your specific situation.
              </p>
              <p className="text-sm text-white/50">
                AERO Cooperation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
