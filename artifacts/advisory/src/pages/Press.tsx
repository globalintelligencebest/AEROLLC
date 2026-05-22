import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Mic, Newspaper, Video, Globe, FileText, ExternalLink } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const pressItems = [
  {
    outlet: "Founder & Freelancer Magazine",
    headline: "How Non-US Residents Are Quietly Building American Businesses From Abroad",
    date: "March 2026",
    type: "Feature Interview",
  },
  {
    outlet: "The Creator Economy Report",
    headline: "LLC or Sole Proprietor? Why More Hobbyists Are Choosing Incorporation",
    date: "January 2026",
    type: "Expert Commentary",
  },
  {
    outlet: "Small Business Weekly",
    headline: "AERO Advisory on the Flat-Rate Formation Model: Accessibility Over Complexity",
    date: "November 2025",
    type: "Op-Ed",
  },
  {
    outlet: "Global Entrepreneur Summit",
    headline: "AERO at GES 2025: Democratizing US Business Ownership for International Founders",
    date: "October 2025",
    type: "Speaking Engagement",
  },
];

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
              In the News
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AERO Advisory contributes expert commentary on US business formation, international entrepreneurship,
              and the growing movement of creators and freelancers launching legitimate US companies.
            </p>
          </div>

          {/* Recent Coverage */}
          <div className="space-y-4 mb-12">
            {pressItems.map(({ outlet, headline, date, type }) => (
              <Card key={headline} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{type}</Badge>
                      <span className="text-xs text-muted-foreground">{date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 leading-snug">{headline}</h3>
                    <p className="text-sm text-primary font-medium">{outlet}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                </div>
              </Card>
            ))}
          </div>

          {/* Media Inquiry */}
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
                AERO accepts invitations to speak at conferences, podcasts, and industry events on topics including
                US business formation, international entrepreneurship, the creator economy, and AI tools for small businesses.
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
                For interviews, feature articles, and expert commentary on US business formation for hobbyists,
                freelancers, and international founders — reach our communications team directly.
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
                For press kit materials, leadership bios, data on international founders forming US businesses,
                and other media resources, contact our press team. We aim to respond to all media inquiries within 48 business hours.
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
                <Badge variant="outline" className="gap-1">
                  <FileText className="w-3 h-3" />
                  Founder Guides
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <GovernanceFooter />
    </div>
  );
}
