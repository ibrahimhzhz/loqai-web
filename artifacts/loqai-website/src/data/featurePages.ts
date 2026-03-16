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
  product: "LoqHRMS" | "LoqTalent" | "LoqBot" | "Loq Custom Solutions";
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
  {
    slug: "hotels",
    product: "LoqBot",
    productSlug: "loqbot",
    title: "LoqBot for Hotels",
    tagline: "Your 24/7 AI concierge. Always on, always helpful.",
    description:
      "Give every guest an instant, intelligent experience. LoqBot handles reservations, room queries, amenity bookings, and local recommendations — around the clock, in any language.",
    heroDescription:
      "From check-in assistance to late-night room service requests, LoqBot ensures no guest query goes unanswered — without adding to your front desk workload.",
    accentColor: "blue",
    features: [
      { title: "Reservation Assistance", description: "Guests can check availability, modify bookings, and confirm reservations directly in the chat — no hold music required." },
      { title: "Room Service Requests", description: "Accept and route room service, housekeeping, and maintenance requests through the bot to the right department instantly." },
      { title: "Amenity Bookings", description: "Let guests book the spa, gym, restaurant tables, and pool slots through a simple conversational interface." },
      { title: "Local Recommendations", description: "LoqBot curates personalised local guides — restaurants, attractions, transport — based on guest preferences." },
      { title: "Multi-Language Support", description: "Communicate with guests in their native language. LoqBot supports 40+ languages out of the box." },
      { title: "PMS Integration", description: "Connect with your property management system to pull live room data, guest profiles, and booking details in real time." },
    ],
    stats: [
      { value: "24/7", label: "Guest support coverage" },
      { value: "40+", label: "Languages supported" },
      { value: "70%", label: "Queries resolved without staff" },
    ],
    mockupType: "loqbot-hotel",
  },
  {
    slug: "restaurants",
    product: "LoqBot",
    productSlug: "loqbot",
    title: "LoqBot for Restaurants",
    tagline: "Fill tables. Delight diners. Automate everything in between.",
    description:
      "LoqBot handles table reservations, menu queries, delivery orders, and customer feedback — so your team can focus on delivering great food and service.",
    heroDescription:
      "Whether it's a walk-in asking about today's specials or an online customer tracking their delivery, LoqBot keeps conversations flowing and operations running smoothly.",
    accentColor: "blue",
    features: [
      { title: "Table Reservations", description: "Guests can book, modify, or cancel reservations via chat — synced directly to your booking system in real time." },
      { title: "Menu & Allergen Queries", description: "Answer questions about dishes, daily specials, allergens, and dietary options instantly and accurately." },
      { title: "Online Order Tracking", description: "Customers can track their delivery or takeaway order status without calling the restaurant." },
      { title: "Feedback Collection", description: "Automatically gather post-dining feedback and flag negative reviews for immediate follow-up." },
      { title: "Loyalty Programme", description: "Integrate with your loyalty scheme so returning customers can check points, rewards, and exclusive offers." },
      { title: "Peak Hour Handling", description: "No matter how busy it gets, LoqBot handles unlimited simultaneous conversations without breaking a sweat." },
    ],
    stats: [
      { value: "3×", label: "More bookings via chat" },
      { value: "0", label: "Missed reservation enquiries" },
      { value: "92%", label: "Customer satisfaction rate" },
    ],
    mockupType: "loqbot-restaurant",
  },
  {
    slug: "e-commerce",
    product: "LoqBot",
    productSlug: "loqbot",
    title: "LoqBot for E-Commerce",
    tagline: "Convert browsers into buyers. Retain them for life.",
    description:
      "LoqBot powers smarter shopping experiences — answering product questions, guiding purchases, recovering abandoned carts, and handling post-sale support automatically.",
    heroDescription:
      "From first visit to repeat purchase, LoqBot is the intelligent assistant that turns your store into a 24/7 sales and support engine.",
    accentColor: "blue",
    features: [
      { title: "Product Discovery", description: "Help shoppers find exactly what they need with conversational product search, filtering, and personalised recommendations." },
      { title: "Cart Recovery", description: "Automatically re-engage customers who abandoned their carts with personalised reminders and incentive offers." },
      { title: "Order Tracking", description: "Customers can check order status, delivery estimates, and shipping updates in real time — no support ticket needed." },
      { title: "Returns & Refunds", description: "Handle return requests, refund status enquiries, and exchange processes through guided chat flows." },
      { title: "Upsell & Cross-Sell", description: "LoqBot intelligently suggests complementary products and upgrades at the right moment in the buying journey." },
      { title: "Shopify & WooCommerce", description: "Integrate seamlessly with your existing store platform — no custom development required." },
    ],
    stats: [
      { value: "35%", label: "Increase in conversion rate" },
      { value: "60%", label: "Reduction in support tickets" },
      { value: "4.8★", label: "Average customer rating" },
    ],
    mockupType: "loqbot-ecommerce",
  },
  {
    slug: "real-estate",
    product: "LoqBot",
    productSlug: "loqbot",
    title: "LoqBot for Real Estate",
    tagline: "Qualify leads while you sleep. Close deals faster.",
    description:
      "LoqBot engages every property enquiry instantly — qualifying leads, answering listing questions, scheduling viewings, and nurturing prospects through the buying journey automatically.",
    heroDescription:
      "Never lose a lead to slow response times again. LoqBot responds in seconds, 24/7, so your agents focus only on the most promising opportunities.",
    accentColor: "blue",
    features: [
      { title: "Lead Qualification", description: "Ask the right questions to qualify buyer intent, budget, and timeline — routing hot leads directly to your agents." },
      { title: "Listing Information", description: "Provide instant answers about property specs, pricing, availability, neighbourhood data, and virtual tour links." },
      { title: "Viewing Scheduler", description: "Let prospects book property viewings directly through the chat — synced to your agents' calendars automatically." },
      { title: "Mortgage Calculator", description: "Give buyers instant indicative mortgage calculations based on property price and deposit, within the conversation." },
      { title: "CRM Integration", description: "Every qualified lead and conversation is pushed automatically to your CRM — no manual data entry." },
      { title: "Follow-Up Sequences", description: "Automated follow-up messages keep prospects warm and guide them toward the next step in their buying journey." },
    ],
    stats: [
      { value: "5 sec", label: "Average lead response time" },
      { value: "4×", label: "More viewings scheduled" },
      { value: "80%", label: "Leads auto-qualified" },
    ],
    mockupType: "loqbot-realestate",
  },
  {
    slug: "custom-chatbot",
    product: "LoqBot",
    productSlug: "loqbot",
    title: "Custom Chatbot",
    tagline: "Built for your business. Trained on your data.",
    description:
      "Every business is unique. LoqBot's custom tier lets you build a fully branded AI assistant trained on your own documents, workflows, and knowledge base — deployed anywhere.",
    heroDescription:
      "From internal knowledge bots to customer-facing agents, LoqBot Custom gives you the full power of AI — configured exactly the way you need it.",
    accentColor: "blue",
    features: [
      { title: "Custom Knowledge Base", description: "Train LoqBot on your own documents, FAQs, SOPs, and data sources so it answers with your specific knowledge." },
      { title: "Brand Personalisation", description: "Full control over the bot's name, avatar, tone of voice, and visual style to match your brand identity." },
      { title: "Multi-Channel Deployment", description: "Deploy your bot on your website, WhatsApp, Instagram DMs, Telegram, and mobile app from a single build." },
      { title: "Workflow Automation", description: "Connect LoqBot to your internal tools — CRM, ERP, ticketing systems — to trigger actions from conversations." },
      { title: "Analytics Dashboard", description: "Track conversation volumes, resolution rates, top queries, and user satisfaction in a real-time dashboard." },
      { title: "Human Handoff", description: "When the bot reaches its limits, it seamlessly transfers the conversation to a live agent — with full context." },
    ],
    stats: [
      { value: "Any", label: "Industry or use case" },
      { value: "6+", label: "Deployment channels" },
      { value: "14 days", label: "Average time to launch" },
    ],
    mockupType: "loqbot-custom",
  },
  {
    slug: "custom-web-apps",
    product: "Loq Custom Solutions",
    productSlug: "custom",
    title: "Custom Web Apps",
    tagline: "Your vision. Our engineering. Built to last.",
    description:
      "We design and build bespoke web applications tailored exactly to your business requirements — from internal tools and client portals to full-scale SaaS platforms.",
    heroDescription:
      "No off-the-shelf compromises. Every line of code is written for your specific workflows, your users, and your growth trajectory.",
    accentColor: "purple",
    features: [
      { title: "Requirements Discovery", description: "We start with deep discovery sessions to map your exact requirements, user journeys, and business logic before writing a single line of code." },
      { title: "UI/UX Design", description: "Custom design systems crafted by experienced designers — visually polished, accessible, and aligned with your brand identity." },
      { title: "Scalable Architecture", description: "Built on proven, scalable architectures so your platform grows with your business — from 100 to 100,000 users without breaking." },
      { title: "Agile Delivery", description: "We deliver in sprints with regular demos, so you see progress every 2 weeks and can provide feedback continuously." },
      { title: "QA & Testing", description: "Rigorous automated and manual testing ensures your product is stable, secure, and bug-free before it ever reaches your users." },
      { title: "Ongoing Support", description: "Post-launch support, maintenance, and feature development — we're your long-term technology partner, not just a vendor." },
    ],
    stats: [
      { value: "50+", label: "Custom apps delivered" },
      { value: "2 wks", label: "Sprint delivery cadence" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    mockupType: "custom-web-apps",
  },
  {
    slug: "mobile-development",
    product: "Loq Custom Solutions",
    productSlug: "custom",
    title: "Mobile Development",
    tagline: "iOS & Android apps that people actually love using.",
    description:
      "We build high-performance native and cross-platform mobile apps — from MVPs to enterprise-grade solutions — with polished UX that drives engagement and retention.",
    heroDescription:
      "Whether you need a consumer app or an internal mobile tool, our team delivers mobile experiences that are fast, intuitive, and built to scale.",
    accentColor: "purple",
    features: [
      { title: "Cross-Platform Development", description: "We build for iOS and Android simultaneously using React Native, reducing cost and time without sacrificing performance." },
      { title: "Offline-First Architecture", description: "Apps designed to work without internet connectivity — syncing seamlessly when the connection is restored." },
      { title: "Push Notifications", description: "Intelligent notification systems that re-engage users at the right moment with personalised, contextual messages." },
      { title: "App Store Submission", description: "We handle the full App Store and Google Play submission process — compliance, metadata, screenshots, and review management." },
      { title: "Performance Optimisation", description: "Every app is profiled and optimised for battery life, memory usage, and render performance on a range of devices." },
      { title: "Analytics Integration", description: "Built-in analytics from day one — track feature usage, funnels, and user behaviour to continuously improve the product." },
    ],
    stats: [
      { value: "30+", label: "Apps launched" },
      { value: "4.8★", label: "Average app store rating" },
      { value: "2×", label: "Faster than native builds" },
    ],
    mockupType: "mobile-development",
  },
  {
    slug: "api-integrations",
    product: "Loq Custom Solutions",
    productSlug: "custom",
    title: "API & Integrations",
    tagline: "Connect your systems. Eliminate data silos. Move faster.",
    description:
      "We build custom API layers and integrations that connect your existing tools — ERPs, CRMs, payment gateways, and third-party services — into one seamless data ecosystem.",
    heroDescription:
      "Stop copying data between systems manually. Our integration specialists build the connective tissue that makes your entire tech stack work as one.",
    accentColor: "purple",
    features: [
      { title: "REST & GraphQL APIs", description: "Custom API design and development — RESTful services or GraphQL endpoints, built to industry standards and secured by default." },
      { title: "Third-Party Integrations", description: "We connect your systems to Salesforce, HubSpot, SAP, Xero, Stripe, and hundreds of other platforms via official and custom integrations." },
      { title: "Webhook Architecture", description: "Real-time event-driven systems using webhooks — so your tools react instantly when something changes anywhere in your stack." },
      { title: "Data Transformation", description: "Custom ETL pipelines that clean, transform, and route data between systems in the exact format each platform needs." },
      { title: "API Gateway & Security", description: "Rate limiting, authentication, and API key management — your integrations are secure, monitored, and production-ready." },
      { title: "Monitoring & Alerting", description: "24/7 monitoring of all integration endpoints with instant alerts when something fails — before your users notice." },
    ],
    stats: [
      { value: "100+", label: "APIs & integrations built" },
      { value: "<50ms", label: "Average API response time" },
      { value: "99.95%", label: "Integration uptime" },
    ],
    mockupType: "api-integrations",
  },
  {
    slug: "business-intelligence",
    product: "Loq Custom Solutions",
    productSlug: "custom",
    title: "Business Intelligence",
    tagline: "Turn your data into decisions. At scale.",
    description:
      "We build custom BI solutions — from data warehouses and ETL pipelines to executive dashboards and predictive analytics — that give your leadership team the clarity to act with confidence.",
    heroDescription:
      "Stop guessing. We transform raw business data into real-time insights, custom dashboards, and predictive models that drive smarter decisions every day.",
    accentColor: "purple",
    features: [
      { title: "Data Warehouse Setup", description: "We architect and implement your cloud data warehouse — Snowflake, BigQuery, or Redshift — designed for performance and cost efficiency." },
      { title: "ETL Pipelines", description: "Automated pipelines that extract data from all your sources, transform it consistently, and load it into your warehouse on schedule." },
      { title: "Executive Dashboards", description: "Custom dashboards that surface the KPIs that matter most to your leadership team — live, drill-downable, and beautifully presented." },
      { title: "Self-Service Analytics", description: "Empower your teams to explore data independently with governed self-service tools — no SQL required." },
      { title: "Predictive Analytics", description: "Machine learning models that forecast demand, churn, revenue, and more — built on your own historical data." },
      { title: "Data Governance", description: "Data cataloguing, lineage tracking, and quality controls ensure your insights are always accurate and trustworthy." },
    ],
    stats: [
      { value: "10×", label: "Faster reporting cycles" },
      { value: "40%", label: "Average cost reduction vs. manual" },
      { value: "Real-time", label: "Dashboard refresh rate" },
    ],
    mockupType: "business-intelligence",
  },
  {
    slug: "digital-consulting",
    product: "Loq Custom Solutions",
    productSlug: "custom",
    title: "Digital Consulting",
    tagline: "Clarity before code. Strategy before spend.",
    description:
      "Before you build, know exactly what to build. Our consulting team helps you define your digital strategy, choose the right technology stack, and create a clear roadmap to execution.",
    heroDescription:
      "We've helped dozens of founders and executives avoid expensive mistakes by getting the architecture, priorities, and technology choices right from day one.",
    accentColor: "purple",
    features: [
      { title: "Technical Discovery", description: "Deep-dive workshops with your team to document requirements, map user journeys, and define the full scope of your digital initiative." },
      { title: "Architecture Design", description: "A clear, documented technical architecture — system design, data models, API contracts, and infrastructure blueprint — before development begins." },
      { title: "Tech Stack Advisory", description: "Unbiased recommendations on the right technologies for your specific context — budget, scale, team, and long-term flexibility." },
      { title: "Build vs. Buy Analysis", description: "Objective evaluation of whether to build custom, buy off-the-shelf, or integrate existing tools — with a full cost and risk comparison." },
      { title: "Delivery Roadmap", description: "A phased, prioritised delivery roadmap that gets you to market faster and de-risks the development journey." },
      { title: "Vendor Selection", description: "If you're evaluating vendors or agencies, we help you define criteria, run RFPs, and assess proposals with expert eyes." },
    ],
    stats: [
      { value: "60+", label: "Consulting engagements" },
      { value: "3 wks", label: "Typical discovery timeline" },
      { value: "100%", label: "Clients who say it was worth it" },
    ],
    mockupType: "digital-consulting",
  },
];

export function getFeaturePage(slug: string): FeaturePage | undefined {
  return featurePages.find((p) => p.slug === slug);
}
