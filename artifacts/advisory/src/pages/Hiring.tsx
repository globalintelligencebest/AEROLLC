import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Briefcase, Code, Users, Calculator, Scale, Heart, Shield, Search, GraduationCap } from "lucide-react";
import aeroLogoBlue from "@/assets/aero_logo_blue.png";
import aeroLogoWhite from "@/assets/aero_logo_white.png";
import { Link } from "wouter";
import { GovernanceFooter } from "@/components/GovernanceFooter";

const positions = [
  {
    id: "software-development",
    title: "Software Development",
    icon: Code,
    description: "Build the technology that powers global tax transparency",
    details: "Join our engineering team to develop cutting-edge solutions for cross-border tax compliance. Work with modern technologies including React, TypeScript, and Node.js. Help create secure, scalable platforms that serve globally mobile professionals worldwide.",
    responsibilities: [
      "Develop and maintain web applications using React and TypeScript",
      "Build secure API endpoints and database systems",
      "Implement smart document processing features",
      "Ensure platform security and data protection compliance",
      "Collaborate with product and design teams"
    ]
  },
  {
    id: "government-relations",
    title: "Government Relations",
    icon: Users,
    description: "Bridge the gap between citizens and tax authorities",
    details: "Work with government agencies and international organizations to build partnerships that advance tax transparency. Represent AERO Cooperation in diplomatic settings and help shape policy discussions around cross-border tax compliance.",
    responsibilities: [
      "Develop relationships with tax authorities globally",
      "Represent AERO at international forums and conferences",
      "Draft policy recommendations and white papers",
      "Navigate regulatory requirements across jurisdictions",
      "Support government partnership initiatives"
    ]
  },
  {
    id: "customer-engagement",
    title: "Customer Engagement",
    icon: Heart,
    description: "Support our global community of users",
    details: "Be the voice of AERO Cooperation for our worldwide user base. Help globally mobile professionals navigate the platform and achieve tax compliance with confidence. Create educational content and build community.",
    responsibilities: [
      "Provide excellent customer support across channels",
      "Create user guides and educational content",
      "Gather and analyze user feedback",
      "Build and nurture user community",
      "Conduct user onboarding and training"
    ]
  },
  {
    id: "accounting",
    title: "Accounting",
    icon: Calculator,
    description: "Ensure accuracy in tax calculations and guidance",
    details: "Apply your accounting expertise to validate our tax calculation engine and ensure accuracy across jurisdictions. Work with international tax specialists to keep our rules database current and comprehensive.",
    responsibilities: [
      "Validate tax calculations and form generation",
      "Research tax rules for new jurisdictions",
      "Maintain tax reference database accuracy",
      "Review system-generated tax guidance",
      "Support audit and compliance processes"
    ]
  },
  {
    id: "legal",
    title: "Legal",
    icon: Scale,
    description: "Navigate the complex landscape of international law",
    details: "Provide legal expertise across multiple jurisdictions to ensure AERO operates within regulatory frameworks globally. Handle contracts, compliance, data protection, and intellectual property matters.",
    responsibilities: [
      "Advise on international regulatory compliance",
      "Draft and review contracts and agreements",
      "Ensure GDPR and data protection compliance",
      "Support government partnership negotiations",
      "Manage intellectual property matters"
    ]
  },
  {
    id: "hr",
    title: "HR",
    icon: Users,
    description: "Build a world-class global team",
    details: "Shape the culture and people practices of a truly global organization. Recruit talent from around the world and create an inclusive environment where diverse perspectives thrive.",
    responsibilities: [
      "Recruit and onboard global talent",
      "Develop HR policies for international workforce",
      "Manage compensation and benefits programs",
      "Foster inclusive company culture",
      "Support employee development and growth"
    ]
  },
  {
    id: "interns",
    title: "Interns",
    icon: GraduationCap,
    description: "Launch your career in global tax transparency",
    details: "Gain hands-on experience in a mission-driven organization working at the intersection of technology, international relations, and finance. Learn from experienced professionals and contribute meaningfully to real projects.",
    responsibilities: [
      "Support various teams based on interests and skills",
      "Conduct research and analysis projects",
      "Participate in team meetings and planning",
      "Receive mentorship from senior team members",
      "Contribute to meaningful platform improvements"
    ]
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    description: "Protect sensitive financial data worldwide",
    details: "Ensure the security and integrity of user data across our global platform. Implement industry-leading security practices and maintain compliance with international data protection standards.",
    responsibilities: [
      "Implement and maintain security infrastructure",
      "Conduct security audits and vulnerability assessments",
      "Ensure compliance with security standards",
      "Respond to security incidents",
      "Train team on security best practices"
    ]
  },
  {
    id: "research",
    title: "Research",
    icon: Search,
    description: "Advance the science of tax compliance",
    details: "Conduct research on international tax systems, cross-border compliance patterns, and emerging trends in global mobility. Publish findings and contribute to the broader discourse on tax transparency.",
    responsibilities: [
      "Research international tax systems and treaties",
      "Analyze cross-border compliance trends",
      "Publish research papers and reports",
      "Support product development with insights",
      "Present at conferences and academic forums"
    ]
  }
];

export default function Hiring() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Briefcase className="w-3 h-3 mr-1" />
              Careers
            </Badge>
            <h1 className="text-4xl font-semibold mb-4 tracking-tight">
              Join Our Growing Team
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of global tax transparency. We're looking for passionate individuals who believe in making cross-border compliance accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {positions.map((position) => (
              <Link key={position.id} href={`/hiring/${position.id}`}>
                <Card className="p-6 h-full hover-elevate cursor-pointer transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <position.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{position.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {position.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="p-8 bg-primary text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Make an Impact?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              We're building something meaningful: a platform that helps millions of globally mobile professionals navigate tax compliance with confidence. Join us in advancing global tax transparency.
            </p>
            <p className="text-white/60 text-sm">
              Send your resume to <a href="mailto:careers@aerocooperation.com" className="text-white underline">careers@aerocooperation.com</a>
            </p>
          </Card>
        </div>
      </main>
      <GovernanceFooter />
    </div>
  );
}

export { positions };
