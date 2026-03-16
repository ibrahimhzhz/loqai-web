import { Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Solutions: [
    "LoqHRMS",
    "LoqTalent",
    "Attendance Tracking",
    "Payroll Generation",
    "AI Resume Screener",
  ],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Help Centre", "HR Checklist", "API Docs", "Status Page"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          <div className="md:col-span-1">
            <img src="/loqai-logo.png" alt="LoqAI" className="h-9 w-auto mb-4" />
            <p className="text-white/40 text-sm leading-relaxed">
              The AI-powered HR platform built for modern African and global
              businesses.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white/70 text-sm font-semibold mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 hover:text-white/70 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs">
            © 2026 LoqAI Technologies Ltd. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Made with care in Accra, Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
