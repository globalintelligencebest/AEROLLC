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
} from "lucide-react";

interface GovernanceControl {
  id: string;
  framework: string;
  controlName: string;
  description: string;
  technicalImplementation: string;
  status: string;
  lastReviewedAt?: string | Date | null;
}

const MOCK_CONTROLS: GovernanceControl[] = [
  {
    id: "iso-1",
    framework: "ISO42001",
    controlName: "AI Risk Assessment Process",
    description: "Structured assessment of AI system risks across the development lifecycle.",
    technicalImplementation: "Quarterly risk reviews with documented scoring matrices. Risk register maintained in internal governance portal.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "iso-2",
    framework: "ISO42001",
    controlName: "Human Oversight Mechanism",
    description: "All AI-generated recommendations subject to human review before action.",
    technicalImplementation: "UI approval gates on all AI outputs. Audit trail logged per interaction. No autonomous AI-initiated actions permitted.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "iso-3",
    framework: "ISO42001",
    controlName: "AI Lifecycle Documentation",
    description: "Documented AI system capabilities, limitations, and deployment context.",
    technicalImplementation: "Model cards maintained for each AI component. Version-controlled documentation in internal wiki.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "eu-1",
    framework: "EU_AI_ACT",
    controlName: "Risk Classification Register",
    description: "AI systems classified under EU AI Act risk tiers (unacceptable/high/limited/minimal).",
    technicalImplementation: "Advisory AI categorized as limited-risk under Article 52. Transparency disclosures in place for all user-facing AI interactions.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "eu-2",
    framework: "EU_AI_ACT",
    controlName: "Transparency Obligation",
    description: "Users informed when interacting with AI-generated content per Article 52.",
    technicalImplementation: "In-UI disclosure labels on AI-generated advisory text. System messages identify AI involvement at session start.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "eu-3",
    framework: "EU_AI_ACT",
    controlName: "Technical Documentation",
    description: "Maintained technical documentation for AI system capabilities and limitations.",
    technicalImplementation: "Internal documentation covers model selection rationale, input/output specifications, known limitations, and bias testing results.",
    status: "active",
    lastReviewedAt: null,
  },
  {
    id: "gdpr-1",
    framework: "GDPR",
    controlName: "Data Minimization",
    description: "Only essential personal data collected for advisory service delivery.",
    technicalImplementation: "Data schema reviewed quarterly. Fields not required for core service are excluded. Opt-in only for optional data collection.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "gdpr-2",
    framework: "GDPR",
    controlName: "Right to Erasure",
    description: "Complete data deletion available through account settings and upon request.",
    technicalImplementation: "Deletion workflow cascades across all data stores. Completion confirmed within 30 days. Deletion log retained for compliance audit.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 95 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "internal-1",
    framework: "INTERNAL",
    controlName: "AI Decision Logging",
    description: "All AI interactions logged with confidence scores for auditability.",
    technicalImplementation: "Structured JSON audit logs per AI request. Logs include prompt hash, model version, confidence score, and user action outcome.",
    status: "active",
    lastReviewedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "internal-2",
    framework: "INTERNAL",
    controlName: "Quarterly Model Performance Review",
    description: "Periodic evaluation of AI model outputs for accuracy, fairness, and drift.",
    technicalImplementation: "Cross-functional review team assesses sample outputs. Bias testing on demographic subgroups. Results documented and acted upon within 30 days.",
    status: "active",
    lastReviewedAt: null,
  },
];

const frameworkLabels: Record<string, string> = {
  ISO42001: "ISO/IEC 42001",
  EU_AI_ACT: "EU AI Act",
  GDPR: "GDPR",
  INTERNAL: "Internal",
};

const frameworkColors: Record<string, string> = {
  ISO42001: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  EU_AI_ACT: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  GDPR: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  INTERNAL: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
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
  const [controls, setControls] = useState<GovernanceControl[]>(MOCK_CONTROLS);

  const markReviewed = (id: string) => {
    setControls((prev) =>
      prev.map((ctrl) =>
        ctrl.id === id ? { ...ctrl, lastReviewedAt: new Date().toISOString() } : ctrl
      )
    );
    toast({ title: "Control Reviewed", description: "Last reviewed timestamp updated." });
  };

  const grouped = controls.reduce<Record<string, GovernanceControl[]>>((acc, ctrl) => {
    if (!acc[ctrl.framework]) acc[ctrl.framework] = [];
    acc[ctrl.framework].push(ctrl);
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
      <div>
        <h1 className="text-3xl font-display font-semibold" data-testid="text-governance-title">
          Governance Control Register
        </h1>
        <p className="text-muted-foreground mt-1">
          Internal compliance dashboard for security and AI governance controls.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card data-testid="card-stat-total">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">{totalControls}</p>
                <p className="text-sm text-muted-foreground">Total Controls</p>
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
                <p className="text-sm text-muted-foreground">Active</p>
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

      {Object.entries(grouped).map(([framework, frameworkControls]) => (
        <div key={framework} className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2" data-testid={`text-framework-${framework}`}>
            <Badge className={`${frameworkColors[framework] || ""} border-0`}>
              {frameworkLabels[framework] || framework}
            </Badge>
          </h2>

          <div className="grid gap-4">
            {frameworkControls.map((ctrl) => {
              const days = daysSince(ctrl.lastReviewedAt);
              const stale = days === null || days > 90;
              return (
                <Card key={ctrl.id} className="overflow-visible" data-testid={`card-control-${ctrl.id}`}>
                  <CardHeader className="pb-2 flex flex-row items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base">{ctrl.controlName}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{ctrl.description}</p>
                    </div>
                    <Badge
                      variant={ctrl.status === "active" ? "default" : "destructive"}
                      data-testid={`badge-status-${ctrl.id}`}
                    >
                      {ctrl.status === "active" ? "Active" : "Review Required"}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-md p-3 text-xs font-mono text-muted-foreground mb-3" data-testid={`text-implementation-${ctrl.id}`}>
                      {ctrl.technicalImplementation}
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
    </div>
  );
}
