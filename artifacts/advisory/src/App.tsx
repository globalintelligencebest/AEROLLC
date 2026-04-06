import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Governance from "@/pages/Governance";
import Advisory from "@/pages/Advisory";
import FinancingPage from "@/pages/FinancingPage";
import GovernmentPage from "@/pages/GovernmentPage";
import Hiring from "@/pages/Hiring";
import JobDetail from "@/pages/JobDetail";
import LeadershipPage from "@/pages/LeadershipPage";
import Press from "@/pages/Press";
import SecurityAiGovernance from "@/pages/SecurityAiGovernance";
import AdminGovernance from "@/pages/AdminGovernance";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      return (localStorage.getItem("aero-theme") as "light" | "dark") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("aero-theme", theme);
    } catch {
    }
  }, [theme]);

  return <>{children}</>;
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <a href="/" className="text-primary hover:underline">Return to home</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Governance} />
      <Route path="/advisory" component={Advisory} />
      <Route path="/financing" component={FinancingPage} />
      <Route path="/government" component={GovernmentPage} />
      <Route path="/hiring" component={Hiring} />
      <Route path="/hiring/:id" component={JobDetail} />
      <Route path="/leadership" component={LeadershipPage} />
      <Route path="/press" component={Press} />
      <Route path="/governance" component={Governance} />
      <Route path="/security-ai-governance" component={SecurityAiGovernance} />
      <Route path="/admin/governance" component={AdminGovernance} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
