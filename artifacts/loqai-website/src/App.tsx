import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import PricingPage from "@/pages/PricingPage";
import FeatureDetailPage from "@/pages/FeatureDetailPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/pricing" component={PricingPage} />

      {/* LoqHRMS pages */}
      <Route path="/solutions/hrms/attendance-tracking">
        <FeatureDetailPage slug="attendance-tracking" />
      </Route>
      <Route path="/solutions/hrms/asset-management">
        <FeatureDetailPage slug="asset-management" />
      </Route>
      <Route path="/solutions/hrms/payroll-generation">
        <FeatureDetailPage slug="payroll-generation" />
      </Route>
      <Route path="/solutions/hrms/employee-records">
        <FeatureDetailPage slug="employee-records" />
      </Route>

      {/* LoqTalent pages */}
      <Route path="/solutions/talent/ats">
        <FeatureDetailPage slug="ats" />
      </Route>
      <Route path="/solutions/talent/ai-resume-screener">
        <FeatureDetailPage slug="ai-resume-screener" />
      </Route>
      <Route path="/solutions/talent/talent-acquisition">
        <FeatureDetailPage slug="talent-acquisition" />
      </Route>

      {/* LoqBot pages */}
      <Route path="/solutions/loqbot/hotels">
        <FeatureDetailPage slug="hotels" />
      </Route>
      <Route path="/solutions/loqbot/restaurants">
        <FeatureDetailPage slug="restaurants" />
      </Route>
      <Route path="/solutions/loqbot/e-commerce">
        <FeatureDetailPage slug="e-commerce" />
      </Route>
      <Route path="/solutions/loqbot/real-estate">
        <FeatureDetailPage slug="real-estate" />
      </Route>
      <Route path="/solutions/loqbot/custom-chatbot">
        <FeatureDetailPage slug="custom-chatbot" />
      </Route>

      {/* Loq Custom Solutions pages */}
      <Route path="/solutions/custom/custom-web-apps">
        <FeatureDetailPage slug="custom-web-apps" />
      </Route>
      <Route path="/solutions/custom/mobile-development">
        <FeatureDetailPage slug="mobile-development" />
      </Route>
      <Route path="/solutions/custom/api-integrations">
        <FeatureDetailPage slug="api-integrations" />
      </Route>
      <Route path="/solutions/custom/business-intelligence">
        <FeatureDetailPage slug="business-intelligence" />
      </Route>
      <Route path="/solutions/custom/digital-consulting">
        <FeatureDetailPage slug="digital-consulting" />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
