import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle2,
  AlertCircle,
  Shield,
  Clock,
  RefreshCw,
  Building2,
} from "lucide-react";
import { GovernanceFooter } from "@/components/GovernanceFooter";

interface FormationControl {
  id: string;
  category: string;
  checkName: string;
  description: string;
  notes: string;
  status: string;
  lastReviewedAt?: string | Date | null;
}

const MOCK_CONTROLS: FormationControl[] = [
  {
    id: "formation-1",
    category: "ENTITY",
    checkName: "State Filing Confirmation",
    description: "Articles of Organization / Incorporation filed and confirmed by the Secretary of State.",
    notes: "Document receipt logged. State confirmation number recorded. Formation documents delivered to client.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "formation-2",
    category: "ENTITY",
    checkName: "EIN Application Status",
    description: "Employer Identification Number applied for and received from the IRS.",
    notes: "IRS Form SS-4 submitted. EIN confirmation letter received and delivered to client. Banking-ready.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "formation-3",
    category: "ENTITY",
    checkName: "Operating Agreement / Bylaws",
    description: "Governing documents drafted, customized, and delivered to the client.",
    notes: "Document customized for single-member LLC structure. Delivered via secure client portal. Signed copy received.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "compliance-1",
    category: "COMPLIANCE",
    checkName: "Registered Agent Activated",
    description: "Registered agent service active and confirmed in the formation state.",
    notes: "First year included in package. Agent address confirmed in state records. Renewal date logged in compliance calendar.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "compliance-2",
    category: "COMPLIANCE",
    checkName: "Compliance Calendar Delivered",
    description: "Client has received their compliance calendar with all key state and federal deadlines.",
    notes: "Calendar includes annual report date, franchise tax deadline, registered agent renewal, and BOI filing status.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "compliance-3",
    category: "COMPLIANCE",
    checkName: "BOI Report (FinCEN)",
    description: "Beneficial Ownership Information report filed with FinCEN per Corporate Transparency Act.",
    notes: "Report filed within 90 days of formation for new entities. Confirmation reference number on file.",
    status: "active",
    lastReviewedAt: null,
  },
  {
    id: "banking-1",
    category: "BANKING",
    checkName: "Banking Introduction Completed",
    description: "Client provided with banking options and document checklist for account opening.",
    notes: "Recommended Mercury and Relay for non-resident clients. Document checklist sent. Follow-up call scheduled.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "banking-2",
    category: "BANKING",
    checkName: "Account Opening Confirmed",
    description: "Client confirms US business bank account has been successfully opened.",
    notes: "Confirmation received from client. Business banking milestone marked complete in CRM.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 95 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "ai-1",
    category: "AI_TOOLS",
    checkName: "AI Toolkit Access Granted",
    description: "Client provisioned with access to AERO's AI business document toolkit.",
    notes: "Login credentials delivered. Onboarding guide sent. First document generation confirmed working.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "ai-2",
    category: "AI_TOOLS",
    checkName: "AI Governance Briefing",
    description: "Client informed about AI tool usage obligations and included advisory access.",
    notes: "Briefing document sent covering FTC AI disclosure guidelines and EU AI Act relevance for their business type.",
    status: "active",
    lastReviewedAt: null,
  },
];

const categoryLabels: Record<string, string> = {
  ENTITY: "Entity Formation",
  COMPLIANCE: "Compliance Setup",
  BANKING: "Banking",
  AI_TOOLS: "AI Tools & Advisory",
};

const categoryColors: Record<string, string> = {
  ENTITY: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  COMPLIANCE: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  BANKING: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  AI_TOOLS: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
};

function formatDate(date: string | Date | null | undefined): string {
  if (!date) return "Never";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function daysSince(date: string | Date | null | undefined): number | null {
  if (!date) return null;
  const d = typeof date === "string" ? new Date(date) : date;
  const diff = Date.now() - d.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function AdminGovernance() {
  const { toast } = useToast();
  const [controls, setControls] = useState<FormationControl[]>(MOCK_CONTROLS);

  const markReviewed = (id: string) => {
    setControls((prev) =>
      prev.map((ctrl) =>
        ctrl.id === id ? { ...ctrl, lastReviewedAt: new Date().toISOString() } : ctrl
      )
    );
    toast({ title: "Checklist Item Reviewed", description: "Last reviewed timestamp updated." });
  };

  const grouped = controls.reduce<Record<string, FormationControl[]>>((acc, ctrl) => {
    if (!acc[ctrl.category]) acc[ctrl.category] = [];
    acc[ctrl.category].push(ctrl);
    return acc;
  }, {});

  const totalControls = controls.length;
  const activeControls = controls.filter((c) => c.status === "active").length;
  const needsReview = controls.filter((c) => {
    const days = daysSince(c.lastReviewedAt);
    return days === null || days > 90;
  }).length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8" data-testid="page-admin-governance">
      <div className="flex items-center gap-3">
        <Building2 className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-display font-semibold" data-testid="text-governance-title">
            Formation Checklist Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Internal client onboarding and formation checklist tracker.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card data-testid="card-stat-total">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">{totalControls}</p>
                <p className="text-sm text-muted-foreground">Total Checklist Items</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-active">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{activeControls}</p>
                <p className="text-sm text-muted-foreground">Active / Complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-review">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-amber-600" />
              <div>
                <p className="text-2xl font-bold">{needsReview}</p>
                <p className="text-sm text-muted-foreground">Needs Review (&gt;90 days)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {Object.entries(grouped).map(([category, categoryControls]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2" data-testid={`text-framework-${category}`}>
            <Badge className={`${categoryColors[category] || ""} border-0`}>
              {categoryLabels[category] || category}
            </Badge>
          </h2>

          <div className="grid gap-4">
            {categoryControls.map((ctrl) => {
              const days = daysSince(ctrl.lastReviewedAt);
              const stale = days === null || days > 90;
              return (
                <Card key={ctrl.id} className="overflow-visible" data-testid={`card-control-${ctrl.id}`}>
                  <CardHeader className="pb-2 flex flex-row items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base">{ctrl.checkName}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{ctrl.description}</p>
                    </div>
                    <Badge
                      variant={ctrl.status === "active" ? "default" : "destructive"}
                      data-testid={`badge-status-${ctrl.id}`}
                    >
                      {ctrl.status === "active" ? "Complete" : "Pending"}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-md p-3 text-xs font-mono text-muted-foreground mb-3" data-testid={`text-implementation-${ctrl.id}`}>
                      {ctrl.notes}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid={`text-reviewed-${ctrl.id}`}>
                        <Clock className="h-4 w-4" />
                        <span>Last reviewed: {formatDate(ctrl.lastReviewedAt)}</span>
                        {stale && (
                          <Badge variant="outline" className="text-amber-600 border-amber-300">
                            Overdue
                          </Badge>
                        )}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => markReviewed(ctrl.id)}
                        data-testid={`button-review-${ctrl.id}`}
                      >
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Mark Reviewed
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
      <GovernanceFooter />
    </div>
  );
}
