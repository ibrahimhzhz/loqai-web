import { Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "LoqHRMS", href: "/" },
    { label: "LoqHire", href: "/" },
    { label: "Attendance Tracking", href: "/solutions/hrms/attendance-tracking" },
    { label: "Payroll Generation", href: "/solutions/hrms/payroll-generation" },
    { label: "AI Resume Screener", href: "/solutions/talent/ai-resume-screener" },
  ],
  Company: [
    { label: "About", href: "/" },
    { label: "Careers", href: "/resources/careers" },
    { label: "Blog", href: "/resources/blog" },
  ],
  Resources: [
    { label: "HR Checklist", href: "/resources/hr-checklist" },
    { label: "Contact Us", href: "/resources/contact-us" },
    { label: "Pricing", href: "/pricing" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/resources/privacy-policy" },
    { label: "Terms and Conditions", href: "/resources/terms-and-conditions" },
    { label: "Refund Policy", href: "/resources/refund-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-24 pb-16">
      <div className="max-w-[96rem] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-14 mb-20">
          <div className="md:col-span-1">
            <img src="/canva%20loqai%20logo%20old.png" alt="LoqAI" className="h-16 lg:h-20 w-auto mb-5" />
            <p className="text-gray-400 text-lg leading-relaxed">
              The AI-powered HR platform built for modern global
              businesses.
            </p>
            <div className="flex gap-5 mt-6">
              <a
                href="https://www.linkedin.com/company/loq-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:umar.asim@loqai.tech" className="text-gray-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-gray-200 text-lg font-semibold mb-5">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-gray-200 text-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-gray-600 text-lg">
            © 2026 LoqAI Technologies Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-lg">
            Built for growing teams everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
