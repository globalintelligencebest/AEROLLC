import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import {
  Loader2,
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

  const { data: controls, isLoading } = useQuery<GovernanceControl[]>({
    queryKey: ["/api/admin/governance-controls"],
  });

  const markReviewedMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest(`/api/admin/governance-controls/${id}/reviewed`, {
        method: "PATCH",
      });
    },
    onSuccess: () => {
      toast({ title: "Control Reviewed", description: "Last reviewed timestamp updated." });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/governance-controls"] });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update control.", variant: "destructive" });
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24" data-testid="loading-governance">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const grouped = (controls || []).reduce<Record<string, GovernanceControl[]>>((acc, ctrl) => {
    if (!acc[ctrl.framework]) acc[ctrl.framework] = [];
    acc[ctrl.framework].push(ctrl);
    return acc;
  }, {});

  const totalControls = controls?.length || 0;
  const activeControls = controls?.filter(c => c.status === "active").length || 0;
  const needsReview = controls?.filter(c => {
    const days = daysSince(c.lastReviewedAt);
    return days === null || days > 90;
  }).length || 0;

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
                        onClick={() => markReviewedMutation.mutate(ctrl.id)}
                        disabled={markReviewedMutation.isPending}
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
