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

const sections: Section[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "LoqAI (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy and the privacy of the employees, applicants, and individuals whose data is processed through our Services. This Privacy Policy explains how we collect, use, disclose, and safeguard personal data in connection with LoqHRMS and LoqHire.",
      "This Policy applies to: (a) Customers and their Administrators who subscribe to the Services; (b) Users authorised by Customers to access the Services; and (c) data subjects (including employees and job applicants) whose personal data is processed through the Services by our Customers.",
      "If you are an employee or job applicant whose data is being processed through LoqHRMS or LoqHire, your primary relationship is with the organisation (our Customer) that has engaged us to process your data. Please contact that organisation for information about their privacy practices.",
    ],
  },
  {
    heading: "2. Data Controller and Processor",
    paragraphs: [
      "For data submitted by Customers about their employees, applicants, or other individuals, LoqAI acts as a data processor on behalf of the Customer, who is the data controller. Customers are responsible for ensuring they have a lawful basis for processing personal data through the Services and for fulfilling their obligations to data subjects.",
      "For data we collect about Customers and their Administrators and Users (such as account data, billing information, and usage data), LoqAI acts as the data controller.",
    ],
  },
  {
    heading: "3. Information We Collect",
    subSections: [
      {
        heading: "3.1 Account and Billing Information",
        paragraphs: [
          "When you register for the Services, we collect your name, company name, email address, phone number, billing address, and payment information. Payment card details are handled directly by our payment processor and are not stored on our servers.",
        ],
      },
      {
        heading: "3.2 Customer Data (HR and Recruitment Data)",
        paragraphs: [
          "Through the Services, Customers may upload and process personal data including: employee names, contact details, employment history, attendance records, payroll information, salary and compensation data, expense claims, asset assignments, and performance information (LoqHRMS); and job applicant names, contact details, CVs and resumes, cover letters, educational and work history, screening results, interview notes, and hiring decisions (LoqHire).",
        ],
      },
      {
        heading: "3.3 Usage and Technical Data",
        paragraphs: [
          "We automatically collect certain technical data when you use the Services, including IP addresses, browser type and version, operating system, pages viewed, features used, session duration, and error logs. This data is used to maintain and improve the Services.",
        ],
      },
      {
        heading: "3.4 Communications",
        paragraphs: [
          "We collect the content of any communications you send to us, including support requests, feedback, and correspondence.",
        ],
      },
    ],
  },
  {
    heading: "4. How We Use Your Information",
    paragraphs: [
      "We use the information we collect for the following purposes:",
    ],
    bullets: [
      "To provide, operate, and maintain the Services in accordance with our agreement with you.",
      "To process payments and manage your Subscription.",
      "To respond to your support requests and communications.",
      "To send service-related notifications, including billing reminders, security alerts, and product updates.",
      "To analyse usage patterns and improve the functionality and performance of the Services.",
      "To comply with legal obligations and enforce our Terms and Conditions.",
      "To detect, prevent, and investigate fraud, security incidents, and misuse of the Services.",
    ],
  },
  {
    heading: "5. AI Resume Screener - Data Use",
    paragraphs: [
      "LoqHire's AI resume screener processes applicant CVs and resumes to generate relevance scores, candidate rankings, and gap analyses. This processing is conducted solely on behalf of and as instructed by the Customer.",
      "Applicant data processed by the AI screener is not shared with other Customers, used to train general AI models, or retained beyond the period necessary to deliver the screening results. Screening outputs are decision-support tools only and do not constitute employment decisions.",
      "Customers using the AI screener are responsible for ensuring their use complies with applicable employment law, including anti-discrimination regulations, in their jurisdiction.",
    ],
  },
  {
    heading: "6. Legal Bases for Processing",
    paragraphs: [
      "For customers subject to the General Data Protection Regulation (GDPR) or UK GDPR, we process personal data on the following legal bases:",
    ],
    bullets: [
      "Contract performance: processing necessary to provide the Services under our agreement with you.",
      "Legitimate interests: processing for fraud prevention, security, product improvement, and analytics, where our legitimate interests are not overridden by your rights.",
      "Legal obligation: processing required to comply with applicable laws.",
      "Consent: where we rely on consent (for example, for marketing communications), you may withdraw consent at any time.",
    ],
  },
  {
    heading: "7. Data Sharing and Disclosure",
    paragraphs: [
      "We do not sell, rent, or trade your personal data or Customer Data to third parties. We may share data in the following limited circumstances:",
    ],
    bullets: [
      "Service providers: we share data with trusted third-party service providers who assist us in operating the Services, including cloud hosting providers, payment processors, and email delivery services. These providers are contractually bound to process data only as instructed by us and to maintain appropriate security measures.",
      "Legal requirements: we may disclose data if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      "Business transfers: in the event of a merger, acquisition, or sale of all or substantially all of our assets, Customer Data may be transferred to the successor entity, subject to the same privacy obligations as this Policy.",
      "With your consent: we may share data for any other purpose with your prior written consent.",
    ],
  },
  {
    heading: "8. International Data Transfers",
    paragraphs: [
      "We are headquartered in Pakistan and our Services may be accessed from locations around the world. If you are located in the European Economic Area (EEA), United Kingdom, or other jurisdictions with data transfer restrictions, your data may be transferred to and processed in countries that may not have the same data protection laws as your home country.",
      "Where we transfer personal data internationally, we implement appropriate safeguards, including Standard Contractual Clauses approved by the European Commission, to ensure your data receives adequate protection.",
    ],
  },
  {
    heading: "9. Data Retention",
    paragraphs: [
      "We retain Customer Data for the duration of your Subscription and for 30 days following termination, after which it is permanently deleted unless we are legally required to retain it for longer.",
      "Account and billing information is retained for a period of up to 7 years following termination of your Subscription to comply with tax and financial record-keeping obligations.",
      "Usage and technical data is retained for up to 24 months and then anonymised or deleted.",
      "You may request deletion of specific Customer Data at any time through the Services or by contacting us at umar.asim@loqai.tech.",
    ],
  },
  {
    heading: "10. Security",
    paragraphs: [
      "We implement industry-standard technical and organisational security measures to protect your data, including:",
    ],
    bullets: [
      "Encryption of data in transit using TLS 1.2 or higher.",
      "Encryption of data at rest using AES-256 or equivalent.",
      "Role-based access controls limiting data access to authorised personnel only.",
      "Regular security assessments and penetration testing.",
      "Multi-factor authentication for administrative access to production systems.",
    ],
  },
  {
    heading: "11. Your Rights",
    paragraphs: [
      "Depending on your location and applicable law, you may have the following rights regarding your personal data:",
    ],
    bullets: [
      "Access: the right to request a copy of the personal data we hold about you.",
      "Rectification: the right to request correction of inaccurate or incomplete data.",
      "Erasure: the right to request deletion of your personal data, subject to applicable legal requirements.",
      "Restriction: the right to request that we restrict processing of your data in certain circumstances.",
      "Portability: the right to receive your data in a structured, machine-readable format.",
      "Objection: the right to object to processing based on legitimate interests.",
      "Automated decision-making: the right not to be subject to solely automated decisions that produce legal or similarly significant effects.",
    ],
  },
  {
    heading: "12. Cookies and Tracking",
    paragraphs: [
      "We use cookies and similar tracking technologies to operate and improve the Services. Cookies are small text files stored on your device that help us recognise you, maintain your session, and understand how you use the Services.",
      "We use the following categories of cookies: strictly necessary cookies required for the Services to function; performance and analytics cookies to understand usage patterns; and preference cookies to remember your settings. We do not use advertising or third-party tracking cookies.",
      "You may control cookie settings through your browser. Disabling strictly necessary cookies may affect the functionality of the Services.",
    ],
  },
  {
    heading: "13. Children's Privacy",
    paragraphs: [
      "The Services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected data from a minor, please contact us at umar.asim@loqai.tech and we will delete such data promptly.",
    ],
  },
  {
    heading: "14. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. We will notify you of material changes by email or through an in-product notification at least 14 days before the changes take effect. We encourage you to review this Policy periodically.",
      "Your continued use of the Services after the effective date of the updated Policy constitutes your acceptance of the changes.",
    ],
  },
  {
    heading: "15. Contact Us",
    paragraphs: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
      "LoqAI",
      "Email: umar.asim@loqai.tech",
      "We aim to respond to all privacy-related enquiries within 5 business days.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <ResourcePageLayout
      eyebrow=""
      title="Privacy Policy"
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
              </div>
            ))}
          </section>
        ))}
      </article>
    </ResourcePageLayout>
  );
}
