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

type SubProcessor = {
  name: string;
  purpose: string;
  location: string;
  mechanism: string;
};

const sections: Section[] = [
  {
    heading: "Data Processing Agreement (DPA)",
    paragraphs: [
      "Effective date: 1 January 2025",
      "Between: LoqAI (\"Data Processor\") and the subscribing Customer (\"Data Controller\")",
    ],
  },
  {
    heading: "1. Background and Purpose",
    paragraphs: [
      "This Data Processing Agreement (\"DPA\") forms part of the agreement between LoqAI (\"Processor\") and the Customer entity that has agreed to the Terms and Conditions for access to LoqHRMS and LoqHire (\"Controller\"). This DPA sets out the terms under which the Processor processes Personal Data on behalf of the Controller and is intended to satisfy the requirements of Article 28 of the General Data Protection Regulation (EU) 2016/679 (\"GDPR\") and the UK GDPR.",
      "In the event of any conflict between this DPA and the Terms and Conditions, this DPA shall take precedence with respect to the subject matter of data protection.",
    ],
  },
  {
    heading: "2. Definitions",
    paragraphs: [
      "For the purposes of this DPA, the following definitions apply in addition to those in the Terms and Conditions:",
    ],
    bullets: [
      "\"Data Protection Laws\" means all applicable privacy and data protection legislation, including the GDPR, UK GDPR, the Data Protection Act 2018, and any national implementing legislation, as amended from time to time.",
      "\"Personal Data\" has the meaning given in applicable Data Protection Laws and includes any information relating to an identified or identifiable natural person processed by the Processor on behalf of the Controller through the Services.",
      "\"Processing\" has the meaning given in applicable Data Protection Laws and includes any operation performed on Personal Data, including collection, storage, retrieval, use, disclosure, and deletion.",
      "\"Data Subject\" means the individual to whom Personal Data relates, including employees, contractors, and job applicants of the Controller.",
      "\"Sub-processor\" means any third party engaged by the Processor to process Personal Data on behalf of the Controller.",
      "\"Security Incident\" means any accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, Personal Data.",
    ],
  },
  {
    heading: "3. Subject Matter, Nature, and Purpose of Processing",
    subSections: [
      {
        heading: "3.1 Subject matter",
        paragraphs: [
          "The Processor processes Personal Data submitted by the Controller through the Services, including HR data processed via LoqHRMS and recruitment and applicant data processed via LoqHire.",
        ],
      },
      {
        heading: "3.2 Nature and purpose",
        paragraphs: [
          "The Processor processes Personal Data solely to provide the Services as described in the Terms and Conditions and as further instructed by the Controller. The Processor does not process Personal Data for its own purposes.",
        ],
      },
      {
        heading: "3.3 Types of Personal Data",
        paragraphs: [
          "The categories of Personal Data processed may include:",
        ],
        bullets: [
          "LoqHRMS: employee names, contact details, job titles, employment history, attendance and leave records, payroll and compensation data, expense claims, bank account details for payroll purposes, and asset assignment records.",
          "LoqHire: applicant names, contact details, CVs and resumes, cover letters, educational and professional history, interview notes, assessment results, AI screening scores, and hiring decisions.",
        ],
      },
      {
        heading: "3.4 Categories of Data Subjects",
        paragraphs: [
          "Data Subjects include the Controller's current and former employees, contractors, interns, and job applicants.",
        ],
      },
      {
        heading: "3.5 Duration",
        paragraphs: [
          "The Processor processes Personal Data for the duration of the Controller's Subscription and for 30 days following termination, unless applicable law requires longer retention.",
        ],
      },
    ],
  },
  {
    heading: "4. Controller's Obligations",
    paragraphs: [
      "The Controller represents, warrants, and undertakes that:",
    ],
    bullets: [
      "It has a lawful basis under applicable Data Protection Laws for each Processing activity carried out through the Services, and has provided all required notices to Data Subjects.",
      "All instructions given to the Processor regarding the Processing of Personal Data comply with applicable Data Protection Laws.",
      "It will respond to Data Subject requests relating to Personal Data processed through the Services and will notify the Processor promptly of any such requests that require the Processor's assistance.",
      "It will inform the Processor of any changes to applicable Data Protection Laws that may affect the Processor's obligations under this DPA.",
    ],
  },
  {
    heading: "5. Processor's Obligations",
    subSections: [
      {
        heading: "5.1 Instructions",
        paragraphs: [
          "The Processor shall process Personal Data only on documented instructions from the Controller, including as set out in this DPA and the Terms and Conditions, unless required to do so by applicable law. If the Processor is required by law to process Personal Data beyond the Controller's instructions, it shall inform the Controller prior to such processing unless legally prohibited from doing so.",
        ],
      },
      {
        heading: "5.2 Confidentiality",
        paragraphs: [
          "The Processor shall ensure that all personnel authorised to process Personal Data are bound by appropriate confidentiality obligations and have received adequate data protection training.",
        ],
      },
      {
        heading: "5.3 Security",
        paragraphs: [
          "The Processor shall implement and maintain the technical and organisational security measures set out in Annex 1 to this DPA, designed to ensure a level of security appropriate to the risk posed by the Processing, taking into account the state of the art, costs, and the nature, scope, context, and purposes of Processing.",
        ],
      },
      {
        heading: "5.4 Data Subject Rights",
        paragraphs: [
          "Taking into account the nature of the Processing, the Processor shall assist the Controller, by appropriate technical and organisational measures, in fulfilling the Controller's obligation to respond to requests by Data Subjects to exercise their rights under Data Protection Laws. The Processor shall notify the Controller within 5 business days of receiving any request from a Data Subject that relates to Personal Data processed on behalf of the Controller.",
        ],
      },
      {
        heading: "5.5 Data Protection Impact Assessments",
        paragraphs: [
          "The Processor shall provide reasonable assistance to the Controller in carrying out data protection impact assessments and, where required, prior consultation with supervisory authorities, in relation to Processing carried out by the Processor on the Controller's behalf.",
        ],
      },
      {
        heading: "5.6 No Sale or Use for Own Purposes",
        paragraphs: [
          "The Processor shall not sell, rent, disclose, or otherwise make available any Personal Data to any third party for the third party's own purposes. The Processor shall not use Personal Data to build or train AI or machine learning models other than those expressly used to provide the Services to the Controller.",
        ],
      },
    ],
  },
  {
    heading: "6. Security Incident Notification",
    paragraphs: [
      "In the event of a Security Incident affecting Personal Data processed on behalf of the Controller, the Processor shall:",
    ],
    bullets: [
      "Notify the Controller without undue delay, and no later than 48 hours after becoming aware of the Security Incident.",
      "Provide the Controller with sufficient information to allow it to meet any obligations to notify supervisory authorities or Data Subjects, including: a description of the nature of the incident; the categories and approximate number of Data Subjects and records affected; the likely consequences of the incident; and the measures taken or proposed to address the incident.",
      "Cooperate with the Controller and take such steps as are reasonably requested to investigate, mitigate, and remediate the Security Incident.",
      "Security Incident notifications shall be sent to the Controller's registered email address.",
    ],
  },
  {
    heading: "7. Sub-processors",
    subSections: [
      {
        heading: "7.1 General authorisation",
        paragraphs: [
          "The Controller grants the Processor general authorisation to engage Sub-processors to assist in providing the Services. The Processor's current list of Sub-processors is set out in Annex 2 to this DPA and is updated from time to time.",
        ],
      },
      {
        heading: "7.2 Notification of changes",
        paragraphs: [
          "The Processor shall notify the Controller at least 14 days in advance of any addition or replacement of Sub-processors. If the Controller objects to a new Sub-processor on reasonable data protection grounds, the Controller shall notify the Processor in writing within 10 days of receiving such notice. The parties shall work in good faith to resolve the objection. If the objection cannot be resolved, the Controller may terminate the relevant Services on written notice.",
        ],
      },
      {
        heading: "7.3 Sub-processor obligations",
        paragraphs: [
          "The Processor shall impose data protection obligations on all Sub-processors equivalent to those set out in this DPA and shall remain liable to the Controller for the acts and omissions of its Sub-processors to the same extent as if the Processor had carried out the processing itself.",
        ],
      },
    ],
  },
  {
    heading: "8. International Data Transfers",
    paragraphs: [
      "Where the Processing involves the transfer of Personal Data to a country outside the UK or EEA that does not benefit from an adequacy decision, such transfer shall be made pursuant to appropriate safeguards in accordance with applicable Data Protection Laws, including Standard Contractual Clauses (SCCs) as adopted by the European Commission or UK International Data Transfer Agreements (IDTAs), as applicable.",
      "The Processor shall promptly inform the Controller of any circumstances that would prevent it from complying with the applicable transfer mechanism and shall cooperate with the Controller to identify an alternative lawful transfer mechanism.",
    ],
  },
  {
    heading: "9. Deletion and Return of Data",
    paragraphs: [
      "Upon termination or expiry of the Controller's Subscription, the Processor shall, at the Controller's election:",
    ],
    bullets: [
      "Return all Personal Data to the Controller in a structured, commonly used, machine-readable format (CSV, JSON, or PDF) within 14 days of the termination date; or",
      "Securely delete all Personal Data within 30 days of the termination date.",
      "The Processor shall certify in writing to the Controller that all Personal Data has been deleted or returned upon request. The Processor may retain Personal Data beyond this period only to the extent required by applicable law, in which case it shall notify the Controller of such obligation.",
    ],
  },
  {
    heading: "10. Audits and Compliance Demonstration",
    paragraphs: [
      "The Processor shall make available to the Controller all information reasonably necessary to demonstrate compliance with this DPA and shall allow for and contribute to audits, including inspections, conducted by the Controller or an auditor appointed by the Controller.",
      "The Controller shall provide reasonable notice of any audit (not less than 30 days) and shall conduct audits during normal business hours in a manner that minimises disruption to the Processor's operations. Audits shall be conducted no more than once per calendar year unless the Controller has reasonable grounds to believe a Security Incident has occurred.",
      "The Processor may satisfy audit requests by providing relevant third-party audit reports, certifications (such as SOC 2 or ISO 27001), or other documented evidence of compliance.",
    ],
  },
  {
    heading: "11. Limitation of Liability",
    paragraphs: [
      "Each party's liability to the other under or in connection with this DPA shall be subject to the limitations set out in the Terms and Conditions. Nothing in this DPA limits either party's liability for breaches of Data Protection Laws where such limitation is not permitted by applicable law.",
    ],
  },
  {
    heading: "12. Governing Law",
    paragraphs: [
      "This DPA shall be governed by the laws applicable to the Terms and Conditions. To the extent required by applicable Data Protection Laws (in particular, GDPR Article 28), the law of the relevant EU or UK jurisdiction shall govern the relevant provisions of this DPA.",
    ],
  },
  {
    heading: "13. Term and Termination",
    paragraphs: [
      "This DPA shall remain in force for the duration of the Controller's Subscription and shall automatically terminate upon expiry or termination of the Subscription. Provisions that by their nature should survive termination (including those relating to data deletion, audit rights, and security) shall survive termination.",
    ],
  },
  {
    heading: "Annex 1 - Technical and Organisational Security Measures",
    paragraphs: [
      "The Processor implements the following security measures:",
      "Encryption",
    ],
    bullets: [
      "All data transmitted between users and the Services is encrypted using TLS 1.2 or higher.",
      "All data stored at rest is encrypted using AES-256 or equivalent.",
      "Database backups are encrypted and stored separately from primary data.",
    ],
    subSections: [
      {
        heading: "Access controls",
        bullets: [
          "Role-based access control (RBAC) limits access to Personal Data to authorised personnel only.",
          "Multi-factor authentication (MFA) is enforced for all administrative access to production systems.",
          "Access to production systems is logged and reviewed periodically.",
          "Employee access is revoked promptly upon termination of employment.",
        ],
      },
      {
        heading: "Infrastructure and availability",
        bullets: [
          "The Services are hosted on reputable cloud infrastructure providers with ISO 27001 and SOC 2 Type II certifications.",
          "Daily automated backups are retained for a minimum of 30 days.",
          "The Processor maintains a business continuity and disaster recovery plan with defined recovery time objectives.",
        ],
      },
      {
        heading: "Vulnerability and incident management",
        bullets: [
          "Regular penetration testing and vulnerability assessments are conducted at least annually.",
          "A documented security incident response procedure is maintained and tested regularly.",
          "Security patches are applied to production systems within 30 days of release for critical patches and 90 days for non-critical patches.",
        ],
      },
    ],
  },
  {
    heading: "Annex 2 - List of Sub-processors",
    paragraphs: [
      "The following Sub-processors are currently engaged by the Processor to assist in providing the Services. This list is updated from time to time with 14 days' notice to the Controller.",
    ],
  },
  {
    heading: "Annex 3 - Contact Details",
    paragraphs: [
      "Data Controller: As set out in the Customer's account registration details.",
      "Data Processor contact for DPA matters: umar.asim@loqai.tech",
      "By subscribing to the Services and accepting the Terms and Conditions, the Controller and Processor agree to be bound by the terms of this Data Processing Agreement.",
    ],
  },
];

const subProcessors: SubProcessor[] = [
  {
    name: "Google Cloud Platform",
    purpose: "Cloud infrastructure and hosting (current)",
    location: "USA / Global",
    mechanism: "SCCs / UK IDTA",
  },
  {
    name: "DigitalOcean",
    purpose: "Cloud infrastructure and hosting (planned migration)",
    location: "USA / Global",
    mechanism: "SCCs / UK IDTA",
  },
  {
    name: "Paddle",
    purpose: "Subscription payment gateway and merchant of record",
    location: "UK / USA",
    mechanism: "SCCs / UK IDTA",
  },
  {
    name: "Payoneer",
    purpose: "Direct payment disbursements and transfers",
    location: "USA",
    mechanism: "SCCs / UK IDTA",
  },
];

export default function GdprPage() {
  return (
    <ResourcePageLayout
      eyebrow=""
      title="GDPR"
      description="Data Processing Agreement (DPA)"
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

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Sub-processors</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Sub-processor</th>
                  <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Purpose</th>
                  <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Location</th>
                  <th className="text-left font-semibold px-4 py-3 border-b border-gray-200">Transfer mechanism</th>
                </tr>
              </thead>
              <tbody>
                {subProcessors.map((item) => (
                  <tr key={item.name} className="odd:bg-white even:bg-gray-50/50">
                    <td className="px-4 py-3 border-b border-gray-100">{item.name}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{item.purpose}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{item.location}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{item.mechanism}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </ResourcePageLayout>
  );
}
