import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Mail, CheckCircle2 } from "lucide-react";
import aeroLogoBlue from "@assets/aero_logo_blue.png";
import aeroLogoWhite from "@assets/aero_logo_white.png";
import { Link, useParams } from "wouter";
import { positions } from "./Hiring";
import { GovernanceFooter } from "@/components/GovernanceFooter";

export default function JobDetail() {
  const params = useParams<{ id: string }>();
  const position = positions.find(p => p.id === params.id);

  if (!position) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Position Not Found</h1>
          <Link href="/hiring">
            <Button>View All Positions</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = position.icon;

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src={aeroLogoBlue} alt="AERO Cooperation" className="h-16" />
          </Link>
          <Link href="/hiring">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              All Positions
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/hiring" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-4">
              <ArrowLeft className="w-3 h-3" />
              Back to all positions
            </Link>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold mb-2">{position.title}</h1>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="gap-1">
                    <MapPin className="w-3 h-3" />
                    Remote / Global
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Clock className="w-3 h-3" />
                    Full-time
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">About This Role</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {position.details}
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {position.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Competitive compensation with global equity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Fully remote work environment with flexible hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Health and wellness benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Professional development budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Annual team retreats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">Mission-driven work with global impact</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div>
              <Card className="p-6 sticky top-28">
                <h3 className="font-semibold mb-4">Apply Now</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Interested in this position? Send us your resume and a brief note about why you're excited about AERO Cooperation.
                </p>
                <Button className="w-full gap-2" asChild>
                  <a href="mailto:careers@aerocooperation.com">
                    <Mail className="w-4 h-4" />
                    Apply via Email
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  careers@aerocooperation.com
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <GovernanceFooter />
    </div>
  );
}
