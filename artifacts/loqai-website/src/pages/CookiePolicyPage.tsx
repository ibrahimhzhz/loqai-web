import ResourcePageLayout from "@/components/ResourcePageLayout";

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subSections?: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
};

type CookieRow = {
  name: string;
  provider: string;
  duration: string;
  purpose: string;
};

const strictlyNecessaryCookies: CookieRow[] = [
  {
    name: "session_id",
    provider: "loqai.tech",
    duration: "Session",
    purpose: "Maintains your authenticated session while using the product.",
  },
  {
    name: "csrf_token",
    provider: "loqai.tech",
    duration: "Session",
    purpose: "Security token that protects against cross-site request forgery attacks.",
  },
  {
    name: "cookie_consent",
    provider: "loqai.tech",
    duration: "1 year",
    purpose: "Stores your cookie consent preferences so we do not ask again on every visit.",
  },
  {
    name: "remember_me",
    provider: "loqai.tech",
    duration: "30 days",
    purpose: "Keeps you logged in between browser sessions if you select this option.",
  },
];

const analyticsCookies: CookieRow[] = [
  {
    name: "_ga",
    provider: "Google Analytics",
    duration: "2 years",
    purpose: "Distinguishes unique users by assigning a randomly generated number.",
  },
  {
    name: "_ga_[ID]",
    provider: "Google Analytics",
    duration: "2 years",
    purpose: "Stores and counts page views for session analytics.",
  },
  {
    name: "_loq_session_analytics",
    provider: "loqai.tech",
    duration: "30 days",
    purpose: "Tracks feature usage within the product to inform product improvements.",
  },
];

const functionalCookies: CookieRow[] = [
  {
    name: "locale_pref",
    provider: "loqai.tech",
    duration: "1 year",
    purpose: "Remembers your preferred language and regional settings.",
  },
  {
    name: "intercom-*",
    provider: "Intercom",
    duration: "9 months",
    purpose: "Powers the customer support chat widget and remembers your conversation history.",
  },
  {
    name: "tz_offset",
    provider: "loqai.tech",
    duration: "Session",
    purpose: "Stores your timezone offset to display attendance and payroll data in local time.",
  },
];

const sections: Section[] = [
  {
    heading: "Cookie Policy",
    paragraphs: [
      "Effective date: 1 January 2025",
    ],
  },
  {
    heading: "1. Introduction",
    paragraphs: [
      "This Cookie Policy explains how LoqAI (\"we,\" \"us,\" or \"our\") uses cookies and similar tracking technologies on our websites and within LoqHRMS and LoqHire (collectively, the \"Services\"). It explains what these technologies are, why we use them, and your rights to control their use.",
      "Please read this policy alongside our Privacy Policy, which provides further detail about how we handle personal data collected through cookies.",
    ],
  },
  {
    heading: "2. What Are Cookies?",
    paragraphs: [
      "Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website or use a web application. They are widely used to make websites and applications work efficiently, to remember your preferences, and to provide information to the website owner.",
      "In addition to cookies, we may use similar technologies including:",
    ],
    bullets: [
      "Web beacons: small transparent images embedded in web pages or emails that allow us to detect when a page has been viewed.",
      "Local storage: data stored locally in your browser using HTML5 web storage mechanisms, which persists after the browser is closed.",
      "Session storage: data stored temporarily in your browser that is cleared when the browser session ends.",
      "Pixel tags: small blocks of code that allow us to read and place cookies and to record whether an email has been opened.",
    ],
  },
  {
    heading: "3. Categories of Cookies We Use",
    subSections: [
      {
        heading: "3.1 Strictly necessary cookies",
        paragraphs: [
          "These cookies are essential for the Services to function and cannot be switched off in our systems. They are usually set in response to actions you take, such as logging in, setting your privacy preferences, or filling in forms. Without these cookies, the Services cannot be provided.",
          "We do not require consent to use strictly necessary cookies as they are essential to deliver a service you have requested.",
        ],
      },
      {
        heading: "3.2 Performance and analytics cookies",
        paragraphs: [
          "These cookies allow us to count visits and understand how visitors use the Services, so we can measure and improve performance. All data collected is aggregated and anonymised. We require your consent before setting these cookies.",
        ],
      },
      {
        heading: "3.3 Functional cookies",
        paragraphs: [
          "These cookies enable enhanced functionality and personalisation, such as remembering your language or region preference. They may be set by us or by third-party providers whose services we have added to our pages. We require your consent before setting these cookies.",
        ],
      },
      {
        heading: "3.4 Advertising cookies",
        paragraphs: [
          "We do not currently use advertising, retargeting, or third-party tracking cookies on our website or within the Services. We do not allow third-party advertisers to set cookies through our Services. If this changes in the future, we will update this policy and seek your consent before any advertising cookies are set.",
        ],
      },
    ],
  },
  {
    heading: "4. How We Obtain Consent",
    paragraphs: [
      "When you first visit our website or access the Services, we display a cookie consent banner that explains the categories of cookies we use. You may accept all cookies, accept only strictly necessary cookies, or customise your preferences by category.",
      "Your consent choices are stored in the cookie_consent cookie for 12 months. After this period, we will ask for your consent again. You may change or withdraw your consent at any time through the cookie settings link in the footer of our website or by contacting us at umar.asim@loqai.tech.",
      "Withdrawing consent does not affect the lawfulness of any processing carried out before withdrawal. Please note that withdrawing consent to strictly necessary cookies may affect the functionality of the Services.",
    ],
  },
  {
    heading: "5. Cookies in the Authenticated Product",
    paragraphs: [
      "When you are logged in to LoqHRMS or LoqHire, cookies are used to maintain your session and personalise your experience. These in-product cookies are strictly necessary for the Services to function and are set as part of your contractual relationship with us. They do not require separate cookie consent.",
      "We do not set any advertising or cross-site tracking cookies within the authenticated product environment.",
    ],
  },
  {
    heading: "6. Third-Party Cookies",
    paragraphs: [
      "Some cookies on our marketing website are set by third parties, including Google Analytics and Intercom. These third parties have their own privacy policies and cookie practices, and we encourage you to review them:",
    ],
    bullets: [
      "Google Analytics: https://policies.google.com/privacy",
      "Intercom: https://www.intercom.com/legal/privacy",
      "You can opt out of Google Analytics tracking at https://tools.google.com/dlpage/gaoptout.",
    ],
  },
  {
    heading: "7. Managing and Disabling Cookies",
    paragraphs: [
      "In addition to using our cookie consent banner, you can control cookies through your browser settings. Most browsers allow you to:",
    ],
    bullets: [
      "View what cookies are set and delete them individually or in bulk.",
      "Block third-party cookies.",
      "Block all cookies from specific websites.",
      "Block all cookies entirely.",
      "Please note that blocking all cookies will significantly affect the functionality of the Services, including your ability to log in and use core features.",
      "Guidance on managing cookies is available at www.allaboutcookies.org.",
      "Browser-specific instructions are available for Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera via the respective browser's help documentation.",
    ],
  },
  {
    heading: "8. Do Not Track",
    paragraphs: [
      "Some browsers include a \"Do Not Track\" (DNT) feature that signals to websites that you do not want to be tracked. We currently honour DNT signals by not setting performance or functional cookies when a DNT signal is detected, in addition to requiring explicit consent for those categories.",
    ],
  },
  {
    heading: "9. Cookies and Children",
    paragraphs: [
      "Our Services are not directed to children under the age of 18 and we do not knowingly set cookies on devices used by children. If you believe we have inadvertently set cookies on a device used by a child, please contact us at umar.asim@loqai.tech.",
    ],
  },
  {
    heading: "10. Updates to This Cookie Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. We will notify you of material changes by posting the updated policy on our website and, where appropriate, by sending you a notification. The date at the top of this policy indicates when it was last revised.",
      "Your continued use of the Services after the effective date of any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    heading: "11. Contact Us",
    paragraphs: [
      "If you have any questions about our use of cookies or this Cookie Policy, please contact us at:",
      "LoqAI",
      "Email: umar.asim@loqai.tech",
      "We aim to respond to all cookie-related enquiries within 5 business days.",
    ],
  },
];

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Cookie name</th>
            <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Provider</th>
            <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Duration</th>
            <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="odd:bg-white even:bg-gray-50/50">
              <td className="px-4 py-3 border-b border-gray-100">{row.name}</td>
              <td className="px-4 py-3 border-b border-gray-100">{row.provider}</td>
              <td className="px-4 py-3 border-b border-gray-100">{row.duration}</td>
              <td className="px-4 py-3 border-b border-gray-100">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiePolicyPage() {
  return (
    <ResourcePageLayout
      eyebrow=""
      title="Cookie Policy"
      description="Effective date: 1 January 2025"
    >
      <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm space-y-8">
        {sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">{section.heading}</h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-sm text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.subSections?.map((subSection) => (
              <div key={subSection.heading} className="pt-2 space-y-3">
                <h3 className="text-base font-semibold text-gray-900">{subSection.heading}</h3>

                {subSection.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {subSection.bullets && (
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">
                    {subSection.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {subSection.heading === "3.1 Strictly necessary cookies" && (
                  <CookieTable rows={strictlyNecessaryCookies} />
                )}
                {subSection.heading === "3.2 Performance and analytics cookies" && (
                  <CookieTable rows={analyticsCookies} />
                )}
                {subSection.heading === "3.3 Functional cookies" && (
                  <CookieTable rows={functionalCookies} />
                )}
              </div>
            ))}
          </section>
        ))}
      </article>
    </ResourcePageLayout>
  );
}
