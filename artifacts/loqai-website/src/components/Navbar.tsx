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
      { label: "Employee Records", desc: "Centralised employee data", href: "/solutions/hrms/employee-records" },
    ],
  },
  {
    product: "LoqTalent",
    description: "AI-powered talent acquisition",
    isNew: false,
    items: [
      { label: "ATS", desc: "Applicant tracking system", href: "/solutions/talent/ats" },
      { label: "AI Resume Screener", desc: "Rank candidates in seconds", href: "/solutions/talent/ai-resume-screener" },
      { label: "Talent Acquisition", desc: "End-to-end hiring pipeline", href: "/solutions/talent/talent-acquisition" },
    ],
  },
  {
    product: "LoqBot",
    description: "AI chatbots for any industry",
    isNew: true,
    items: [
      { label: "Hotels", desc: "24/7 AI concierge for guests", href: "/solutions/loqbot/hotels" },
      { label: "Restaurants", desc: "Reservations & orders on autopilot", href: "/solutions/loqbot/restaurants" },
      { label: "E-Commerce", desc: "Convert browsers into buyers", href: "/solutions/loqbot/e-commerce" },
      { label: "Real Estate", desc: "Qualify leads while you sleep", href: "/solutions/loqbot/real-estate" },
      { label: "Custom Chatbot", desc: "Built for your exact needs", href: "/solutions/loqbot/custom-chatbot" },
    ],
  },
  {
    product: "Loq Custom Solutions",
    description: "Tailored software built for you",
    isNew: false,
    items: [
      { label: "Custom Web Apps", desc: "Bespoke platforms built from scratch", href: "/solutions/custom/custom-web-apps" },
      { label: "AI Integrations", desc: "Connect your tools with AI power", href: "/solutions/custom/api-integrations" },
      { label: "Business Intelligence", desc: "Dashboards & data that drive decisions", href: "/solutions/custom/business-intelligence" },
    ],
  },
];

const resourcesMenu = [
  { label: "Help Centre", desc: "Guides & documentation" },
  { label: "Careers", desc: "Join the LoqAI team" },
  { label: "Contact Us", desc: "Get in touch with support" },
  { label: "HR Checklist", desc: "Free HR compliance templates" },
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
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex-shrink-0">
            <img src="/loqai-logo.png" alt="LoqAI" className="h-13 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {/* Solutions dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("solutions")}
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "solutions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-x-6 gap-y-5">
                  {solutionsMenu.map((product) => (
                    <div key={product.product}>
                      <div className="mb-3">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                            {product.product}
                          </p>
                          {product.isNew && (
                            <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full leading-none">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-white/40 mt-0.5">{product.description}</p>
                      </div>
                      <div className="space-y-1">
                        {product.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                              {item.label}
                            </span>
                            <span className="text-xs text-white/40">{item.desc}</span>
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
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Pricing
            </a>

            {/* Resources dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("resources")}
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Resources
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "resources" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl p-3">
                  {resourcesMenu.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                      <span className="text-xs text-white/40">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Log in
            </a>
            <a
              href="#"
              className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/30"
            >
              Get Started
            </a>
          </div>

          <button
            className="lg:hidden text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-white/10 px-6 py-4 space-y-4">
          <div>
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
              LoqHRMS
            </p>
            {solutionsMenu[0].items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-white/70 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 mt-3">
              LoqTalent
            </p>
            {solutionsMenu[1].items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-white/70 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-3 mb-2">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                LoqBot
              </p>
              <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full leading-none">NEW</span>
            </div>
            {solutionsMenu[2].items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-white/70 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2 mt-3">
              Loq Custom Solutions
            </p>
            {solutionsMenu[3].items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-white/70 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <a href="/pricing" className="block py-2 text-sm text-white/70 hover:text-white">
              Pricing
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
              Resources
            </p>
            {resourcesMenu.map((item) => (
              <a key={item.label} href="#" className="block py-2 text-sm text-white/70 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <a href="#" className="text-sm text-white/70 hover:text-white">Log in</a>
            <a
              href="#"
              className="w-full text-center px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
