import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Mic, Newspaper, Video, Globe } from "lucide-react";
import aeroLogoBlue from "@assets/aero_logo_blue.png";
import aeroLogoWhite from "@assets/aero_logo_white.png";
import { Link } from "wouter";

export default function Press() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoBlue} alt="AERO Cooperation" className="h-16" />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Newspaper className="w-3 h-3 mr-1" />
              Press & Media
            </Badge>
            <h1 className="text-4xl font-semibold mb-4 tracking-tight">
              Press Inquiries
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AERO Cooperation welcomes opportunities to participate in public engagement and share our mission for global tax transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Speaking Engagements</h3>
                  <p className="text-sm text-muted-foreground">Conferences & Events</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                AERO Cooperation accepts invitations to participate in public engagement, including conference attendance and speaking engagements on topics of global tax transparency, cross-border compliance, and international cooperation.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Mail className="w-4 h-4" />
                <a href="mailto:press@aerocooperation.com" className="font-medium hover:underline">
                  press@aerocooperation.com
                </a>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Print & Online Media</h3>
                  <p className="text-sm text-muted-foreground">Publications & Interviews</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                For inclusion in print and online media, including interviews, feature articles, and editorial content about our platform, mission, or the broader topic of international tax compliance.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Mail className="w-4 h-4" />
                <a href="mailto:publications@aerocooperation.com" className="font-medium hover:underline">
                  publications@aerocooperation.com
                </a>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-muted/30 border-0">
            <div className="text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Media Resources</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                For press kit materials, logos, executive bios, and other media resources, please contact our press team. We aim to respond to all inquiries within 48 business hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="gap-1">
                  <Video className="w-3 h-3" />
                  Video Interviews
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Mic className="w-3 h-3" />
                  Podcasts
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Newspaper className="w-3 h-3" />
                  Print Media
                </Badge>
              </div>
            </div>
          </Card>
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
