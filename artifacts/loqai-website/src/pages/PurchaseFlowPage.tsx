import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BillingCadence = "monthly" | "annual";
type PlanId = "core-hr" | "hr-payroll" | "ats" | "ats-ai-screener" | "bundle-full-suite";

type PlanDefinition = {
  id: PlanId;
  label: string;
  category: "hr" | "hire" | "bundle";
  basePrice: number;
  perUserRate: number;
  perUserLabel: "employee" | "recruiter";
  summary: string[];
};

const ANNUAL_DISCOUNT = 0.17;
const ENTERPRISE_EMPLOYEE_THRESHOLD = 250;
const BUNDLE_INVOICE_EMPLOYEE_THRESHOLD = 50;
const BUNDLE_INVOICE_MONTHLY_THRESHOLD = 500;
const BUNDLE_INCLUDED_RECRUITER_RATIO = 20;
const BUNDLE_EXTRA_RECRUITER_RATE = 6;
const BUNDLE_EXTRA_RECRUITER_BASE_FEE = 69;

const PLAN_CONFIG: Record<PlanId, PlanDefinition> = {
  "core-hr": {
    id: "core-hr",
    label: "LoqHRMS Core HR",
    category: "hr",
    basePrice: 39,
    perUserRate: 2,
    perUserLabel: "employee",
    summary: [
      "Employee records and profiles",
      "Attendance and leave management",
      "Asset tracking",
    ],
  },
  "hr-payroll": {
    id: "hr-payroll",
    label: "LoqHRMS HR + Payroll",
    category: "hr",
    basePrice: 59,
    perUserRate: 5,
    perUserLabel: "employee",
    summary: [
      "Everything in Core HR",
      "Automated payroll generation",
      "Expense management and payroll sync",
    ],
  },
  ats: {
    id: "ats",
    label: "LoqHire ATS",
    category: "hire",
    basePrice: 49,
    perUserRate: 3,
    perUserLabel: "recruiter",
    summary: [
      "Applicant tracking pipeline",
      "Interview scheduling",
      "Candidate collaboration and notes",
    ],
  },
  "ats-ai-screener": {
    id: "ats-ai-screener",
    label: "LoqHire ATS + AI Screener",
    category: "hire",
    basePrice: 69,
    perUserRate: 6,
    perUserLabel: "recruiter",
    summary: [
      "Everything in ATS",
      "Unlimited AI resume screening",
      "AI candidate ranking",
    ],
  },
  "bundle-full-suite": {
    id: "bundle-full-suite",
    label: "LoqAI Bundle (Full Suite)",
    category: "bundle",
    basePrice: 99,
    perUserRate: 12,
    perUserLabel: "employee",
    summary: [
      "Full HR + Payroll suite",
      "ATS + AI screener",
      "Includes 1 recruiter seat per 20 employees (rounded up)",
    ],
  },
};

const EXISTING_WORKSPACE_DOMAINS = new Set(["acme.com", "loqai.com", "globex.com"]);

type PurchaseStep = 1 | 2 | 3 | 4 | 5;

function parsePlanFromQuery(): PlanId {
  const search = new URLSearchParams(window.location.search);
  const rawPlan = search.get("plan") as PlanId | null;
  if (!rawPlan) return "bundle-full-suite";
  return rawPlan in PLAN_CONFIG ? rawPlan : "bundle-full-suite";
}

function formatCurrency(value: number): string {
  return `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function getDomainFromEmail(email: string): string {
  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) return "";
  return email.slice(atIndex + 1).toLowerCase();
}

export default function PurchaseFlowPage() {
  const [step, setStep] = useState<PurchaseStep>(1);
  const [planId, setPlanId] = useState<PlanId>(parsePlanFromQuery());
  const [billingCadence, setBillingCadence] = useState<BillingCadence>("monthly");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileCountryCode, setMobileCountryCode] = useState("+1");
  const [mobileNumber, setMobileNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [workspaceDecision, setWorkspaceDecision] = useState<"join" | "create" | "unknown">("unknown");

  const [employeesInput, setEmployeesInput] = useState("10");
  const [recruitersInput, setRecruitersInput] = useState("2");
  const [companyEmployeesForHirePlanInput, setCompanyEmployeesForHirePlanInput] = useState("25");
  const [desiredRecruitersForBundleInput, setDesiredRecruitersForBundleInput] = useState("1");

  const [implementationSupport, setImplementationSupport] = useState(false);
  const [dataMigration, setDataMigration] = useState(false);
  const [brandedCareersPage, setBrandedCareersPage] = useState(false);

  const [billingAddress, setBillingAddress] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankCountry, setBankCountry] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [accountError, setAccountError] = useState("");
  const [configError, setConfigError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const activePlan = PLAN_CONFIG[planId];
  const parsedEmployees = parseInt(employeesInput, 10);
  const employees = Number.isFinite(parsedEmployees) ? parsedEmployees : 0;
  const parsedRecruiters = parseInt(recruitersInput, 10);
  const recruiters = Number.isFinite(parsedRecruiters) ? parsedRecruiters : 0;
  const parsedCompanyEmployeesForHirePlan = parseInt(companyEmployeesForHirePlanInput, 10);
  const companyEmployeesForHirePlan = Number.isFinite(parsedCompanyEmployeesForHirePlan)
    ? parsedCompanyEmployeesForHirePlan
    : 0;
  const parsedDesiredRecruiters = parseInt(desiredRecruitersForBundleInput, 10);
  const desiredRecruitersForBundle = Number.isFinite(parsedDesiredRecruiters)
    ? parsedDesiredRecruiters
    : 0;
  const includedRecruiterSeats = useMemo(
    () => (employees > 0 ? Math.ceil(employees / BUNDLE_INCLUDED_RECRUITER_RATIO) : 0),
    [employees]
  );
  const extraRecruiterSeats = useMemo(
    () => Math.max(0, desiredRecruitersForBundle - includedRecruiterSeats),
    [desiredRecruitersForBundle, includedRecruiterSeats]
  );

  const quantityForPricing = activePlan.category === "hire" ? recruiters : employees;
  const monthlyBase = activePlan.basePrice;
  const monthlyUserFees = activePlan.perUserRate * quantityForPricing;
  const monthlyBundleExtraRecruiterFee =
    activePlan.category === "bundle" && extraRecruiterSeats > 0
      ? BUNDLE_EXTRA_RECRUITER_BASE_FEE + extraRecruiterSeats * BUNDLE_EXTRA_RECRUITER_RATE
      : 0;
  const monthlySubtotal = monthlyBase + monthlyUserFees + monthlyBundleExtraRecruiterFee;
  const annualSubtotal = monthlySubtotal * 12 * (1 - ANNUAL_DISCOUNT);
  const annualTotalBeforeDiscount = monthlySubtotal * 12;
  const annualSavings = monthlySubtotal * 12 * ANNUAL_DISCOUNT;

  const implementationFee = implementationSupport ? 299 : 0;
  const migrationFee = dataMigration ? 399 : 0;
  const careersPageFee = brandedCareersPage ? 499 : 0;
  const addonsMonthly = implementationFee + migrationFee + careersPageFee;

  const subtotalBeforeTax =
    billingCadence === "monthly" ? monthlySubtotal + addonsMonthly : annualSubtotal + addonsMonthly;
  const estimatedTax = subtotalBeforeTax * 0.07;
  const totalDueNow = subtotalBeforeTax + estimatedTax;

  const enterpriseByEmployees =
    (activePlan.category === "hire" ? companyEmployeesForHirePlan : employees) >=
    ENTERPRISE_EMPLOYEE_THRESHOLD;
  const bundleInvoiceEligible =
    activePlan.category === "bundle" &&
    (monthlySubtotal > BUNDLE_INVOICE_MONTHLY_THRESHOLD || employees > BUNDLE_INVOICE_EMPLOYEE_THRESHOLD);

  const handlePlanSwitch = (nextPlan: PlanId) => {
    const wasCoreHr = planId === "core-hr";
    setPlanId(nextPlan);

    if (wasCoreHr && nextPlan === "hr-payroll") {
      window.setTimeout(() => {
        alert("You upgraded from Core HR to HR + Payroll. Your new pricing has been recalculated.");
      }, 10);
    }
  };

  const validateAccountStep = () => {
    if (!firstName || !lastName || !mobileNumber || !workEmail || !password || !companyName || !companyWebsite) {
      setAccountError("Please complete all required account fields.");
      return false;
    }

    if (firstName.trim().length < 2 || lastName.trim().length < 2) {
      setAccountError("First name and last name must be at least 2 characters.");
      return false;
    }

    const mobileDigitsOnly = mobileNumber.replace(/\D/g, "");
    if (mobileDigitsOnly.length < 7 || mobileDigitsOnly.length > 15) {
      setAccountError("Enter a valid mobile number.");
      return false;
    }

    const emailLooksValid = /^\S+@\S+\.\S+$/.test(workEmail);
    if (!emailLooksValid) {
      setAccountError("Enter a valid work email address.");
      return false;
    }

    const passwordStrongEnough =
      password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
    if (!passwordStrongEnough) {
      setAccountError("Password must be at least 12 characters and include upper/lowercase letters and a number.");
      return false;
    }

    const websiteLooksValid = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(companyWebsite.trim());
    if (!websiteLooksValid) {
      setAccountError("Enter a valid company website (for example, https://acme.com).");
      return false;
    }

    const emailDomain = getDomainFromEmail(workEmail);
    setWorkspaceDecision(EXISTING_WORKSPACE_DOMAINS.has(emailDomain) ? "join" : "create");
    setAccountError("");
    return true;
  };

  const validateConfigStep = () => {
    if ((activePlan.category === "hr" || activePlan.category === "bundle") && employees < 1) {
      setConfigError("Minimum 1 employee is required for HR and Bundle plans.");
      return false;
    }

    if (activePlan.category === "hire" && recruiters < 1) {
      setConfigError("Minimum 1 recruiter is required for LoqHire plans.");
      return false;
    }

    if (activePlan.category === "bundle" && desiredRecruitersForBundle < 0) {
      setConfigError("Extra recruiter seats cannot be negative.");
      return false;
    }

    setConfigError("");
    return true;
  };

  const validatePaymentStep = () => {
    if (!billingAddress.trim()) {
      setPaymentError("Billing address is required for tax calculation.");
      return false;
    }

    if (!bankAccount.trim()) {
      setPaymentError("Enter your bank account (IBAN or account number).");
      return false;
    }

    if (!bankName.trim()) {
      setPaymentError("Enter your bank name.");
      return false;
    }

    if (!bankCountry.trim()) {
      setPaymentError("Select your bank country.");
      return false;
    }

    if (!acceptedTerms) {
      setPaymentError("Please accept the Terms and Privacy Policy.");
      return false;
    }

    setPaymentError("");
    return true;
  };

  const stepTitle =
    step === 1
      ? "Create account"
      : step === 2
      ? "Configure your plan"
      : step === 3
      ? "Add-ons and confirmation"
      : step === 4
      ? "Payment"
      : "Outcome";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="pt-28 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm mb-6">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-blue-600 mb-2">Purchase flow</p>
            <h1 className="text-3xl sm:text-4xl font-bold">{activePlan.label}</h1>
            <p className="text-gray-600 mt-2">Step {step} of 5: {stepTitle}</p>

            <div className="grid grid-cols-5 gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`h-2 rounded-full ${stepNumber <= step ? "bg-blue-600" : "bg-gray-200"}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={`${step === 1 ? "lg:col-span-12" : "lg:col-span-8"} rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm`}>
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Account creation</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-semibold mb-1">First name</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                            placeholder="James"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1">Last name</label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                            placeholder="Miller"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Mobile number</label>
                        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3">
                          <select
                            value={mobileCountryCode}
                            onChange={(e) => setMobileCountryCode(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-3"
                          >
                            <option value="+1">USA (+1)</option>
                            <option value="+44">UK (+44)</option>
                            <option value="+91">India (+91)</option>
                            <option value="+971">UAE (+971)</option>
                            <option value="+61">Australia (+61)</option>
                          </select>
                          <input
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                            placeholder="Phone number"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Selected country code: {mobileCountryCode}</p>
                      </div>

                      <label className="block text-sm font-semibold mb-1">Work email</label>
                      <input
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="At least 12 characters"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Company name</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Company website</label>
                      <input
                        type="text"
                        value={companyWebsite}
                        onChange={(e) => setCompanyWebsite(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="https://acme.com"
                      />
                    </div>
                  </div>

                  {workspaceDecision !== "unknown" && (
                    <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
                      {workspaceDecision === "join"
                        ? "We found an existing workspace for this domain. You can request to join after purchase."
                        : "No existing workspace found for this domain. We will create a new workspace for your company."}
                    </div>
                  )}

                  {accountError && <p className="text-sm text-red-600 mt-4">{accountError}</p>}

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => {
                        if (validateAccountStep()) setStep(2);
                      }}
                      className="rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold hover:bg-blue-700"
                    >
                      Continue to configuration
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Configuration</h2>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold mb-1">Plan</label>
                    <select
                      value={planId}
                      onChange={(e) => handlePlanSwitch(e.target.value as PlanId)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    >
                      <option value="core-hr">LoqHRMS Core HR</option>
                      <option value="hr-payroll">LoqHRMS HR + Payroll</option>
                      <option value="ats">LoqHire ATS</option>
                      <option value="ats-ai-screener">LoqHire ATS + AI Screener</option>
                      <option value="bundle-full-suite">Bundle (Full Suite)</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <p className="text-sm font-semibold mb-2">Billing cadence</p>
                    <div className="inline-flex rounded-lg border border-gray-300 p-1">
                      <button
                        onClick={() => setBillingCadence("monthly")}
                        className={`px-4 py-2 rounded ${
                          billingCadence === "monthly" ? "bg-blue-600 text-white" : "text-gray-700"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingCadence("annual")}
                        className={`px-4 py-2 rounded ${
                          billingCadence === "annual" ? "bg-blue-600 text-white" : "text-gray-700"
                        }`}
                      >
                        Annual (save 17%)
                      </button>
                    </div>
                  </div>

                  {(activePlan.category === "hr" || activePlan.category === "bundle") && (
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-1">Employees (min 1)</label>
                      <input
                        type="number"
                        min={0}
                        value={employeesInput}
                        onChange={(e) => setEmployeesInput(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                      />
                    </div>
                  )}

                  {activePlan.category === "hire" && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Recruiters (min 1)</label>
                        <input
                          type="number"
                          min={0}
                          value={recruitersInput}
                          onChange={(e) => setRecruitersInput(e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Total company employees</label>
                        <input
                          type="number"
                          min={0}
                          value={companyEmployeesForHirePlanInput}
                          onChange={(e) => setCompanyEmployeesForHirePlanInput(e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Used only to determine if your company is Enterprise (250+ employees).
                        </p>
                      </div>
                    </>
                  )}

                  {activePlan.category === "bundle" && (
                    <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
                      <p className="text-sm text-blue-900 font-semibold">
                        You have {employees} employees = {includedRecruiterSeats} recruiter seats included.
                      </p>
                      <label className="block text-sm font-semibold mt-3 mb-1">Total recruiter seats you need</label>
                      <input
                        type="number"
                        min={0}
                        value={desiredRecruitersForBundleInput}
                        onChange={(e) => setDesiredRecruitersForBundleInput(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                      />
                      <p className="text-xs text-blue-900 mt-2">
                        Extra recruiter charge: {formatCurrency(BUNDLE_EXTRA_RECRUITER_BASE_FEE)} base + ({extraRecruiterSeats} x {formatCurrency(BUNDLE_EXTRA_RECRUITER_RATE)}) = {formatCurrency(monthlyBundleExtraRecruiterFee)} / mo
                      </p>
                    </div>
                  )}

                  {configError && <p className="text-sm text-red-600 mt-4">{configError}</p>}

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        if (!validateConfigStep()) return;
                        if (enterpriseByEmployees) {
                          setStep(5);
                          return;
                        }
                        setStep(3);
                      }}
                      className="rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold hover:bg-blue-700"
                    >
                      Continue to confirmation
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Add-ons and confirmation</h2>

                  <div className="space-y-3">
                    <label className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                      <span>
                        <p className="font-semibold">Implementation support</p>
                        <p className="text-sm text-gray-600">Guided setup and rollout support.</p>
                      </span>
                      <span className="flex items-center gap-3">
                        <p className="font-semibold">{formatCurrency(299)}</p>
                        <input
                          type="checkbox"
                          checked={implementationSupport}
                          onChange={(e) => setImplementationSupport(e.target.checked)}
                        />
                      </span>
                    </label>
                    <label className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                      <span>
                        <p className="font-semibold">Data migration service</p>
                        <p className="text-sm text-gray-600">Import HR/hiring data from existing tools.</p>
                      </span>
                      <span className="flex items-center gap-3">
                        <p className="font-semibold">{formatCurrency(399)}</p>
                        <input
                          type="checkbox"
                          checked={dataMigration}
                          onChange={(e) => setDataMigration(e.target.checked)}
                        />
                      </span>
                    </label>
                    <label className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                      <span>
                        <p className="font-semibold">Branded careers page</p>
                        <p className="text-sm text-gray-600">Dedicated hosted careers page (careers.yourcompany.com).</p>
                      </span>
                      <span className="flex items-center gap-3">
                        <p className="font-semibold">{formatCurrency(499)}</p>
                        <input
                          type="checkbox"
                          checked={brandedCareersPage}
                          onChange={(e) => setBrandedCareersPage(e.target.checked)}
                        />
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h3 className="font-bold mb-2">Included in your selected tier</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {activePlan.summary.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold hover:bg-blue-700"
                    >
                      Continue to payment
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Payment</h2>

                  <div className="mb-5 rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-3">
                      IBFT request
                      {bundleInvoiceEligible ? " - This bundle is eligible for IBFT request." : ""}
                    </p>
                    <div className="space-y-4 mb-5">
                      <p className="text-sm text-gray-600">IBFT payment request will be initiated from your provided bank account details.</p>
                      <input
                        type="text"
                        value={bankAccount}
                        onChange={(e) => setBankAccount(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Bank account (IBAN or account number)"
                      />
                      <input
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Bank name"
                      />
                      <input
                        type="text"
                        value={bankCountry}
                        onChange={(e) => setBankCountry(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Billing address (for taxes)</label>
                    <textarea
                      value={billingAddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 min-h-24"
                      placeholder="Street, city, state/province, postal code, country"
                    />
                  </div>

                  <label className="inline-flex items-start gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1"
                    />
                    I agree to the Terms and Privacy Policy and authorize recurring billing.
                  </label>

                  {paymentError && <p className="text-sm text-red-600 mt-4">{paymentError}</p>}

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setStep(3)}
                      className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        if (validatePaymentStep()) setStep(5);
                      }}
                      className="rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold hover:bg-blue-700"
                    >
                      Complete purchase
                    </button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  {enterpriseByEmployees ? (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Thank you. Our sales team will contact you.</h2>
                      <p className="text-gray-700 mb-4">
                        Enterprise purchase detected (250+ employees). Auto-provisioning is disabled until your implementation call is completed.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold hover:bg-blue-700"
                      >
                        Book implementation call
                      </a>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Purchase complete</h2>
                      <p className="text-gray-700 mb-4">
                        Your workspace is now active. Continue to onboarding wizard and invite your team members.
                      </p>
                      <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                        Next: company setup, module configuration, and teammate invites.
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      onClick={() => setStep(1)}
                      className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Start another purchase flow
                    </button>
                  </div>
                </div>
              )}
            </div>

            {step !== 1 && <aside className="lg:col-span-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold mb-3">Live pricing summary</h2>
              <p className="text-sm text-gray-600 mb-4">Simple pricing = base platform fee + active seats.</p>

              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-between">
                  <span>Base fee</span>
                  <strong>{formatCurrency(monthlyBase)} / mo</strong>
                </p>
                <p className="flex items-center justify-between">
                  <span>
                    User fee ({activePlan.perUserLabel}s)
                  </span>
                  <strong>
                    {formatCurrency(activePlan.perUserRate)} x {quantityForPricing} = {formatCurrency(monthlyUserFees)} / mo
                  </strong>
                </p>

                {activePlan.category === "bundle" && (
                  <p className="flex items-center justify-between">
                    <span>Extra recruiter seats</span>
                    <strong>
                      {formatCurrency(BUNDLE_EXTRA_RECRUITER_BASE_FEE)} + ({extraRecruiterSeats} x {formatCurrency(BUNDLE_EXTRA_RECRUITER_RATE)}) = {formatCurrency(monthlyBundleExtraRecruiterFee)} / mo
                    </strong>
                  </p>
                )}

                <div className="border-t border-gray-200 pt-2 mt-2">
                  <p className="flex items-center justify-between">
                    <span>Monthly subtotal</span>
                    <strong>{formatCurrency(monthlySubtotal)}</strong>
                  </p>
                  {billingCadence === "monthly" ? (
                    <p className="flex items-center justify-between">
                      <span>Due monthly</span>
                      <strong>{formatCurrency(monthlySubtotal + addonsMonthly)}</strong>
                    </p>
                  ) : (
                    <p className="flex items-center justify-between">
                      <span>Annual total amount (before discount)</span>
                      <strong>{formatCurrency(annualTotalBeforeDiscount + addonsMonthly)}</strong>
                    </p>
                  )}
                  <p className="flex items-center justify-between">
                    <span>Estimated tax</span>
                    <strong>{formatCurrency(estimatedTax)}</strong>
                  </p>
                  {billingCadence === "annual" && (
                    <p className="flex items-center justify-between text-green-700">
                      <span>Annual discount (17%)</span>
                      <strong>{formatCurrency(annualSavings)}</strong>
                    </p>
                  )}
                  <p className="flex items-center justify-between text-base font-bold pt-1">
                    <span>Total due now</span>
                    <span>{formatCurrency(totalDueNow)}</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
                <p className="font-semibold mb-1">Pricing transparency</p>
                <p>Base fee + per-user math is shown at every step to avoid surprises at checkout.</p>
              </div>
            </aside>}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
