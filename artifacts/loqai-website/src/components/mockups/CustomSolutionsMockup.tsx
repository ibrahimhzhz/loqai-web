interface Props {
  variant?: string;
}

const variantConfig: Record<string, {
  title: string;
  phase: string;
  progress: number;
  tasks: { label: string; done: boolean }[];
  stack: string[];
}> = {
  "custom-web-apps": {
    title: "Client Portal — FinServe Ltd.",
    phase: "Development · Sprint 4 of 6",
    progress: 67,
    tasks: [
      { label: "Authentication & SSO", done: true },
      { label: "Dashboard & analytics", done: true },
      { label: "Document management", done: true },
      { label: "Role-based access control", done: false },
      { label: "Client reporting module", done: false },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  "mobile-development": {
    title: "Delivery App — SwiftMove",
    phase: "QA & Testing · Sprint 5 of 5",
    progress: 90,
    tasks: [
      { label: "Driver & customer apps", done: true },
      { label: "Real-time GPS tracking", done: true },
      { label: "Push notifications", done: true },
      { label: "Payment integration", done: true },
      { label: "App store submission", done: false },
    ],
    stack: ["React Native", "Firebase", "Stripe", "Google Maps"],
  },
  "api-integrations": {
    title: "ERP Integration — ManufactCo",
    phase: "Integration · Phase 2 of 3",
    progress: 55,
    tasks: [
      { label: "SAP data mapping", done: true },
      { label: "REST API gateway", done: true },
      { label: "Webhook event system", done: false },
      { label: "Data sync & validation", done: false },
      { label: "Monitoring & alerting", done: false },
    ],
    stack: ["Node.js", "SAP", "Redis", "Datadog"],
  },
  "business-intelligence": {
    title: "BI Dashboard — RetailGroup",
    phase: "Delivery · Final Review",
    progress: 85,
    tasks: [
      { label: "Data warehouse setup", done: true },
      { label: "ETL pipelines", done: true },
      { label: "Executive dashboards", done: true },
      { label: "Predictive analytics", done: true },
      { label: "User training & handoff", done: false },
    ],
    stack: ["Power BI", "Snowflake", "Python", "dbt"],
  },
  "digital-consulting": {
    title: "Digital Strategy — HealthCorp",
    phase: "Discovery & Architecture",
    progress: 30,
    tasks: [
      { label: "Stakeholder interviews", done: true },
      { label: "Technical audit", done: true },
      { label: "Architecture blueprint", done: false },
      { label: "Tech stack recommendation", done: false },
      { label: "Roadmap & delivery plan", done: false },
    ],
    stack: ["Architecture", "Cloud", "Security", "Agile"],
  },
};

export default function CustomSolutionsMockup({ variant = "custom-web-apps" }: Props) {
  const config = variantConfig[variant] ?? variantConfig["custom-web-apps"];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-white/80 text-sm font-semibold">{config.title}</p>
          <p className="text-white/35 text-xs mt-0.5">{config.phase}</p>
        </div>
        <span className="px-2.5 py-1 bg-purple-500/15 border border-purple-500/25 text-purple-400 text-xs font-medium rounded-full">
          In Progress
        </span>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-white/40">Overall progress</span>
          <span className="text-xs font-semibold text-white/70">{config.progress}%</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all"
            style={{ width: `${config.progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-2 mb-5">
        {config.tasks.map((task) => (
          <div key={task.label} className="flex items-center gap-2.5">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${task.done ? "bg-green-500/20 border border-green-500/40" : "border border-white/15"}`}>
              {task.done && (
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className={`text-xs ${task.done ? "text-white/50 line-through" : "text-white/75"}`}>
              {task.label}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-white/8 pt-4">
        <p className="text-xs text-white/30 mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {config.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-zinc-800/80 border border-white/8 text-white/55 text-xs rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
