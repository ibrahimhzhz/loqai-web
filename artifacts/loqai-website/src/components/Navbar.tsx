import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const solutionsMenu = [
  {
    product: "LoqHRMS",
    description: "Complete HR management suite",
    isNew: false,
    items: [
      { label: "Attendance Tracking", desc: "Real-time clock-in/out & reports", href: "/solutions/hrms/attendance-tracking" },
      { label: "Asset Management", desc: "Track company assets & assignments", href: "/solutions/hrms/asset-management" },
      { label: "Payroll Generation", desc: "Automated, compliant payroll", href: "/solutions/hrms/payroll-generation" },
      { label: "Expense Management", desc: "Claims, reimbursements, payroll sync", href: "/solutions/hrms/expense-management" },
      { label: "Employee Records", desc: "Centralised employee data", href: "/solutions/hrms/employee-records" },
    ],
  },
  {
    product: "LoqHire",
    description: "AI-powered talent acquisition",
    isNew: false,
    items: [
      { label: "ATS", desc: "Applicant tracking system", href: "/solutions/talent/ats" },
      { label: "AI Resume Screener", desc: "Rank candidates in seconds", href: "/solutions/talent/ai-resume-screener" },
    ],
  },
];

const resourcesMenu = [
  { label: "Careers", desc: "Join the LoqAI team", href: "/resources/careers" },
  { label: "Contact Us", desc: "Get in touch with support", href: "/resources/contact-us" },
  { label: "HR Checklist", desc: "Free HR compliance templates", href: "/resources/hr-checklist" },
  { label: "Blog", desc: "Articles and company updates", href: "/resources/blog" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (menu: string) =>
    setActiveMenu((prev) => (prev === menu ? null : menu));

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[96rem] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem] lg:h-[5.5rem]">
          <a href="/" className="flex-shrink-0">
            <img src="/canva%20loqai%20logo%20old.png" alt="LoqAI" className="h-16 lg:h-20 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {/* Solutions dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("solutions")}
                className="flex items-center gap-1.5 px-4 py-2 text-base text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "solutions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-100/80 p-4 grid grid-cols-2 gap-x-6 gap-y-5">
                  {solutionsMenu.map((product) => (
                    <div key={product.product}>
                      <div className="mb-3">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                            {product.product}
                          </p>
                          {product.isNew && (
                            <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full leading-none">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-0.5">{product.description}</p>
                      </div>
                      <div className="space-y-1">
                        {product.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="flex flex-col px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors group"
                          >
                            <span className="text-base text-gray-700 group-hover:text-purple-700 transition-colors">
                              {item.label}
                            </span>
                            <span className="text-sm text-gray-400">{item.desc}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/pricing"
              className="px-4 py-2 text-base text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              Pricing
            </a>

            {/* Resources dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("resources")}
                className="flex items-center gap-1.5 px-4 py-2 text-base text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
              >
                Resources
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "resources" && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-100/80 p-2">
                  {resourcesMenu.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-purple-50 transition-colors group"
                    >
                      <span className="text-base text-gray-700 group-hover:text-purple-700 transition-colors">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-400">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://hr.loqai.tech"
              className="px-5 py-2 text-base font-medium bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-blue-200"
            >
              LoqHRMS
            </a>
            <a
              href="https://ats.loqai.tech"
              className="px-5 py-2 text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-purple-200"
            >
              LoqHire
            </a>
          </div>

          <button
            className="lg:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <div>
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">
              LoqHRMS
            </p>
            {solutionsMenu[0].items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 mt-3">
              LoqHire
            </p>
            {solutionsMenu[1].items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <a href="/pricing" className="block py-2 text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">
              Resources
            </p>
            {resourcesMenu.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-sm text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="https://hr.loqai.tech"
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg text-center"
            >
              LoqHRMS
            </a>
            <a
              href="https://ats.loqai.tech"
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-center"
            >
              LoqHire
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
