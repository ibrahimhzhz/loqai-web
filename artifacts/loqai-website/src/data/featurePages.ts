export interface FeatureItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeaturePage {
  slug: string;
  product: "LoqHRMS" | "LoqTalent";
  productSlug: string;
  title: string;
  tagline: string;
  description: string;
  heroDescription: string;
  accentColor: "purple" | "blue";
  features: FeatureItem[];
  stats: StatItem[];
  mockupType: string;
}

export const featurePages: FeaturePage[] = [
  {
    slug: "attendance-tracking",
    product: "LoqHRMS",
    productSlug: "hrms",
    title: "Attendance Tracking",
    tagline: "Know who's in, who's out, and why — in real time.",
    description:
      "LoqHRMS Attendance Tracking gives HR teams and managers instant visibility into workforce attendance. Replace spreadsheets and manual registers with a smart, automated system.",
    heroDescription:
      "From biometric integrations to mobile clock-ins, LoqHRMS captures every attendance event accurately and flags anomalies automatically.",
    accentColor: "purple",
    features: [
      {
        title: "Multiple Clock-In Methods",
        description:
          "Support for mobile app, web browser, biometric device, and QR code clock-in — whichever fits your workplace.",
      },
      {
        title: "Real-Time Dashboard",
        description:
          "See who is present, absent, late, or on break right now. Filter by department, location, or shift.",
      },
      {
        title: "Shift & Schedule Management",
        description:
          "Build rotating shift patterns, assign schedules by team, and handle exceptions with ease.",
      },
      {
        title: "Overtime & Late Alerts",
        description:
          "Automatic notifications when employees exceed shift hours or arrive late, with configurable thresholds.",
      },
      {
        title: "Leave Integration",
        description:
          "Approved leaves automatically sync to attendance, so absences are always explained and accurate.",
      },
      {
        title: "Compliance Reports",
        description:
          "One-click reports for daily, weekly, and monthly attendance — ready for audits and payroll input.",
      },
    ],
    stats: [
      { value: "95%", label: "Reduction in manual errors" },
      { value: "3×", label: "Faster attendance reports" },
      { value: "100%", label: "Audit-ready records" },
    ],
    mockupType: "attendance",
  },
  {
    slug: "asset-management",
    product: "LoqHRMS",
    productSlug: "hrms",
    title: "Asset Management",
    tagline: "Every asset tracked. Every assignment logged.",
    description:
      "From laptops to vehicles, LoqHRMS Asset Management gives you a complete view of your company assets — who has what, where it is, and when it was assigned.",
    heroDescription:
      "Stop losing track of expensive equipment. LoqHRMS creates a living inventory of every company asset, linked directly to the employee it belongs to.",
    accentColor: "purple",
    features: [
      {
        title: "Asset Registry",
        description:
          "Maintain a complete, searchable inventory of all company assets including hardware, software licences, vehicles, and equipment.",
      },
      {
        title: "Employee Assignment",
        description:
          "Link assets to specific employees or departments with a digital handover record and acceptance signature.",
      },
      {
        title: "Lifecycle Tracking",
        description:
          "Track assets from procurement to retirement — including maintenance schedules, warranties, and disposal records.",
      },
      {
        title: "Return Workflow",
        description:
          "Trigger automatic asset return checklists during offboarding so no equipment goes unaccounted for.",
      },
      {
        title: "Depreciation Tracking",
        description:
          "Log asset values and track depreciation over time for accurate financial reporting.",
      },
      {
        title: "QR Code Scanning",
        description:
          "Label assets with QR codes for instant lookup and status updates from any mobile device.",
      },
    ],
    stats: [
      { value: "0", label: "Unaccounted assets at offboarding" },
      { value: "60%", label: "Reduction in asset loss" },
      { value: "Full", label: "Audit trail for every item" },
    ],
    mockupType: "assets",
  },
  {
    slug: "payroll-generation",
    product: "LoqHRMS",
    productSlug: "hrms",
    title: "Payroll Generation",
    tagline: "Accurate payroll. On time. Every time.",
    description:
      "LoqHRMS automates the end-to-end payroll process — from salary calculations and statutory deductions to payslip generation and bank disbursement.",
    heroDescription:
      "Cut payroll processing time by up to 80%. Our engine handles taxes, SSNIT, PAYE, bonuses, and deductions automatically — with zero errors.",
    accentColor: "purple",
    features: [
      {
        title: "Automated Salary Calculation",
        description:
          "Compute gross pay, deductions, allowances, bonuses, and net pay automatically for every employee.",
      },
      {
        title: "Statutory Compliance",
        description:
          "Built-in support for local tax laws, PAYE, SSNIT/pension, and other statutory deductions — updated as regulations change.",
      },
      {
        title: "Payslip Generation",
        description:
          "Generate branded digital payslips instantly and distribute to employees via email or the self-service portal.",
      },
      {
        title: "Bank Integration",
        description:
          "Export approved payrolls directly in formats accepted by major banks for seamless disbursement.",
      },
      {
        title: "Payroll History",
        description:
          "Full archive of every payroll run with drill-down into individual employee breakdowns for any period.",
      },
      {
        title: "Multi-Currency Support",
        description:
          "Run payrolls in multiple currencies for international teams or expatriate employees.",
      },
    ],
    stats: [
      { value: "80%", label: "Faster payroll processing" },
      { value: "100%", label: "Statutory compliance" },
      { value: "0", label: "Payroll errors reported" },
    ],
    mockupType: "payroll",
  },
  {
    slug: "employee-records",
    product: "LoqHRMS",
    productSlug: "hrms",
    title: "Employee Records",
    tagline: "One place for everything about your people.",
    description:
      "Centralise every piece of employee information in a secure, searchable digital profile. Say goodbye to file cabinets and scattered spreadsheets.",
    heroDescription:
      "LoqHRMS Employee Records keeps HR data accurate, accessible, and compliant — from first day to last day and beyond.",
    accentColor: "purple",
    features: [
      {
        title: "Digital Employee Profiles",
        description:
          "Comprehensive profiles covering personal details, job information, compensation history, and emergency contacts.",
      },
      {
        title: "Document Management",
        description:
          "Upload, organise, and retrieve contracts, certificates, ID documents, and HR letters with version control.",
      },
      {
        title: "Performance History",
        description:
          "Log reviews, ratings, goals, and disciplinary notes directly in the employee's record.",
      },
      {
        title: "Role & Department Tracking",
        description:
          "Full history of every role change, promotion, and department transfer with effective dates.",
      },
      {
        title: "Employee Self-Service",
        description:
          "Employees can update personal details, view their documents, and download payslips without involving HR.",
      },
      {
        title: "Secure Access Controls",
        description:
          "Role-based permissions ensure sensitive data is only visible to authorised HR staff and managers.",
      },
    ],
    stats: [
      { value: "100%", label: "Paperless HR records" },
      { value: "5 sec", label: "Average data retrieval time" },
      { value: "GDPR", label: "Compliant by default" },
    ],
    mockupType: "records",
  },
  {
    slug: "ats",
    product: "LoqTalent",
    productSlug: "talent",
    title: "Applicant Tracking System",
    tagline: "Your entire hiring pipeline, organised and moving.",
    description:
      "LoqTalent ATS gives your team a clear visual pipeline for every open role — so candidates never fall through the cracks and hiring decisions happen faster.",
    heroDescription:
      "From application received to offer signed, every step of your hiring process lives in one place. Collaborate, comment, and move candidates with a click.",
    accentColor: "blue",
    features: [
      {
        title: "Visual Kanban Pipeline",
        description:
          "Drag-and-drop candidate cards through customisable hiring stages — Applied, Screening, Interview, Offer, Hired.",
      },
      {
        title: "Collaborative Scorecards",
        description:
          "Team members can leave structured feedback and scores for each candidate after interviews.",
      },
      {
        title: "Automated Stage Emails",
        description:
          "Send branded emails to candidates automatically when they move between stages — no manual follow-up.",
      },
      {
        title: "Multi-Role Management",
        description:
          "Manage dozens of open roles simultaneously with filters, search, and role-specific hiring teams.",
      },
      {
        title: "Interview Scheduling",
        description:
          "Integrated calendar scheduling that syncs with Google Calendar and Outlook for easy interview booking.",
      },
      {
        title: "Hiring Analytics",
        description:
          "Track time-to-hire, source effectiveness, conversion rates, and interviewer activity in real time.",
      },
    ],
    stats: [
      { value: "40%", label: "Faster time-to-hire" },
      { value: "0", label: "Candidates lost in pipeline" },
      { value: "10×", label: "More roles managed per recruiter" },
    ],
    mockupType: "ats",
  },
  {
    slug: "ai-resume-screener",
    product: "LoqTalent",
    productSlug: "talent",
    title: "AI Resume Screener",
    tagline: "Let AI read the resumes. You meet the right people.",
    description:
      "LoqTalent's AI engine reads every resume, scores candidates against your job criteria, and presents a ranked shortlist — in seconds, not days.",
    heroDescription:
      "Built on advanced NLP, our screener understands skills, experience, and context — not just keywords. Reduce screening time by 90% without sacrificing quality.",
    accentColor: "blue",
    features: [
      {
        title: "Intelligent Scoring",
        description:
          "Each resume receives a match score out of 100, based on skills, experience, education, and role relevance.",
      },
      {
        title: "Criteria Builder",
        description:
          "Define must-have and nice-to-have criteria for each role. The AI weighs and applies them automatically.",
      },
      {
        title: "Bias Reduction",
        description:
          "Screen candidates on merit. The AI focuses on qualifications — not names, ages, or gaps that trigger unconscious bias.",
      },
      {
        title: "Bulk Processing",
        description:
          "Upload thousands of resumes at once. Our system processes them in parallel and delivers results in minutes.",
      },
      {
        title: "Explanation Engine",
        description:
          "See exactly why each candidate scored the way they did — transparent reasoning, not a black box.",
      },
      {
        title: "One-Click Shortlisting",
        description:
          "Move top-scoring candidates directly into the ATS pipeline with a single click.",
      },
    ],
    stats: [
      { value: "90%", label: "Reduction in screening time" },
      { value: "2M+", label: "Resumes processed" },
      { value: "94%", label: "Recruiter satisfaction rate" },
    ],
    mockupType: "screener",
  },
  {
    slug: "talent-acquisition",
    product: "LoqTalent",
    productSlug: "talent",
    title: "Talent Acquisition",
    tagline: "Build the team you need, faster than ever.",
    description:
      "LoqTalent's Talent Acquisition suite brings together job posting, candidate sourcing, agency management, and talent pool building — all in one platform.",
    heroDescription:
      "From crafting job descriptions to building a bench of future candidates, LoqTalent gives your recruiting team superpowers.",
    accentColor: "blue",
    features: [
      {
        title: "Multi-Board Job Posting",
        description:
          "Publish job listings to LinkedIn, Jobberman, Indeed, and your careers page simultaneously with one click.",
      },
      {
        title: "Talent Pool",
        description:
          "Build a searchable database of past applicants and passive candidates for future roles.",
      },
      {
        title: "Agency Management",
        description:
          "Invite and manage external recruiting agencies, share roles, and track their submissions in one place.",
      },
      {
        title: "Candidate Sourcing",
        description:
          "Proactively search and engage talent from integrated professional networks and databases.",
      },
      {
        title: "Offer Management",
        description:
          "Generate, send, and track offer letters digitally — with e-signature built in.",
      },
      {
        title: "Onboarding Handoff",
        description:
          "When a candidate accepts, automatically trigger the LoqHRMS onboarding workflow — zero manual handoff.",
      },
    ],
    stats: [
      { value: "6+", label: "Job boards in one click" },
      { value: "50%", label: "Lower cost-per-hire" },
      { value: "3×", label: "Larger candidate pipeline" },
    ],
    mockupType: "talent",
  },
];

export function getFeaturePage(slug: string): FeaturePage | undefined {
  return featurePages.find((p) => p.slug === slug);
}
