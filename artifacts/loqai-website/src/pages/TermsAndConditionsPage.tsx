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
      "These Terms and Conditions (\"Terms\") govern your access to and use of the software-as-a-service products operated by LoqAI (\"we,\" \"us,\" or \"our\"), including LoqHRMS and LoqHire (collectively, the \"Services\"). By creating an account, accessing, or using the Services, you agree to be bound by these Terms.",
      "If you are accepting these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity.",
      "Please read these Terms carefully. If you do not agree with any part of these Terms, you must not use the Services.",
    ],
  },
  {
    heading: "2. Definitions",
    bullets: [
      "\"Account\" means a registered account created to access the Services.",
      "\"Administrator\" means the individual(s) designated by the Customer to manage the Services on behalf of their organisation.",
      "\"Customer\" means the company or legal entity that has subscribed to the Services.",
      "\"Customer Data\" means all data uploaded, submitted, or processed through the Services by the Customer or its users, including employee records, payroll data, and applicant information.",
      "\"Subscription\" means a paid plan granting access to the Services for a defined billing period.",
      "\"Users\" means individuals authorised by the Customer to access the Services under the Customer's Account.",
    ],
  },
  {
    heading: "3. Account Registration and Eligibility",
    paragraphs: [
      "To use the Services, you must register for an Account and provide accurate, complete, and current information. You must be at least 18 years of age and have the legal capacity to enter into a binding agreement.",
      "You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account. You agree to notify us immediately of any unauthorised use of your Account. We are not liable for any loss or damage arising from unauthorised access resulting from your failure to safeguard your credentials.",
      "Each Subscription covers one organisation. You may not share Account credentials with parties outside your organisation or use the Services to provide services to third parties without our prior written consent.",
    ],
  },
  {
    heading: "4. Subscriptions and Billing",
    subSections: [
      {
        heading: "4.1 Subscription Plans",
        paragraphs: [
          "The Services are offered on a subscription basis. Your selected plan, billing cycle (monthly or annual), and pricing are set out at the time of purchase. All prices are stated in United States Dollars (USD) unless otherwise agreed in writing.",
        ],
      },
      {
        heading: "4.2 Per-Employee Pricing",
        paragraphs: [
          "Subscription fees are calculated on a per-employee-per-month (\"PEPM\") basis plus a base fee. You will be charged for the number of active employees on your account at the start of each billing cycle. Employee counts are updated at each billing cycle based on your current roster.",
        ],
      },
      {
        heading: "4.3 Annual Subscriptions",
        paragraphs: [
          "If you select an annual billing cycle, you will be charged for twelve months upfront at the discounted annual rate. Annual subscriptions are non-refundable except as set out in our Refund Policy.",
        ],
      },
      {
        heading: "4.4 Payment",
        paragraphs: [
          "Payment is due at the start of each billing period. We use third-party payment processors to handle transactions. By providing payment details, you authorise us to charge the applicable fees. You are responsible for all applicable taxes unless we are required to collect taxes on your behalf.",
        ],
      },
      {
        heading: "4.5 Late Payment and Suspension",
        paragraphs: [
          "If any payment is overdue by more than 10 days, we reserve the right to suspend access to the Services until the outstanding balance is cleared. We will provide reasonable notice before suspension.",
        ],
      },
      {
        heading: "4.6 Price Changes",
        paragraphs: [
          "We may change subscription pricing by providing at least 30 days' written notice before the start of your next billing cycle. Continued use of the Services after the effective date of any price change constitutes your acceptance of the new pricing.",
        ],
      },
    ],
  },
  {
    heading: "5. Free Trial",
    paragraphs: [
      "We may offer a free trial period of up to 21 days for new customers. During the free trial, you will have access to the full features of your selected plan at no charge. No credit card is required to start a free trial.",
      "At the end of the free trial, your access will automatically cease unless you subscribe to a paid plan. We reserve the right to modify or discontinue the free trial offer at any time without notice.",
    ],
  },
  {
    heading: "6. Acceptable Use",
    paragraphs: [
      "You agree to use the Services only for lawful purposes and in accordance with these Terms. You must not:",
    ],
    bullets: [
      "Use the Services to process data in violation of any applicable law, regulation, or third-party rights.",
      "Attempt to gain unauthorised access to any part of the Services, our servers, or any system or network connected to the Services.",
      "Upload, transmit, or distribute any malicious code, viruses, or harmful data.",
      "Use the Services to send unsolicited commercial communications or spam.",
      "Reverse engineer, decompile, or attempt to extract the source code of the Services.",
      "Resell, sublicense, or otherwise transfer access to the Services to any third party without our prior written consent.",
      "Use the Services in a manner that could damage, disable, overburden, or impair our infrastructure.",
    ],
  },
  {
    heading: "7. Customer Data and Ownership",
    paragraphs: [
      "You retain all ownership rights to your Customer Data. By using the Services, you grant us a limited, non-exclusive, royalty-free licence to host, store, process, and transmit your Customer Data solely for the purpose of providing the Services to you.",
      "You are solely responsible for the accuracy, legality, and completeness of all Customer Data you upload to the Services. You represent and warrant that you have obtained all necessary consents and authorisations to process any personal data submitted through the Services, including employee and applicant data.",
      "We will not access, use, or disclose your Customer Data except as necessary to provide the Services, comply with applicable law, or as otherwise set out in our Privacy Policy.",
    ],
  },
  {
    heading: "8. Data Security",
    paragraphs: [
      "We implement and maintain commercially reasonable technical and organisational security measures designed to protect your Customer Data against unauthorised access, loss, destruction, or alteration. These measures include encryption in transit and at rest, access controls, and regular security assessments.",
      "However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data. In the event of a data breach that affects your Customer Data, we will notify you in accordance with applicable law and our Privacy Policy.",
    ],
  },
  {
    heading: "9. Intellectual Property",
    paragraphs: [
      "All intellectual property rights in the Services, including but not limited to the software, user interface, algorithms, documentation, and branding, are owned by or licensed to LoqAI. Nothing in these Terms transfers any intellectual property rights to you.",
      "The AI resume screening and ranking technology incorporated in LoqHire is proprietary to LoqAI. You may not copy, reproduce, or create derivative works based on the Services or any component thereof.",
      "Any feedback, suggestions, or ideas you provide regarding the Services may be used by us freely without any obligation, compensation, or attribution to you.",
    ],
  },
  {
    heading: "10. Third-Party Integrations",
    paragraphs: [
      "The Services may integrate with or link to third-party applications, platforms, or services. These integrations are provided for your convenience and do not constitute our endorsement of any third party. Your use of third-party services is subject to the terms and privacy policies of those third parties, and we are not responsible for their practices, content, or availability.",
    ],
  },
  {
    heading: "11. Confidentiality",
    paragraphs: [
      "Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the Services that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure.",
      "This obligation does not apply to information that is or becomes publicly available through no fault of the receiving party, is independently developed by the receiving party, or is required to be disclosed by law or court order (provided reasonable prior notice is given to the disclosing party).",
    ],
  },
  {
    heading: "12. Warranties and Disclaimers",
    paragraphs: [
      "We warrant that the Services will perform materially in accordance with our documentation during your subscription period. If the Services fail to meet this warranty, your sole remedy is to request a correction or, if we are unable to correct the issue within a reasonable period, to terminate your subscription and receive a pro-rated refund.",
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE.\" WE DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.",
      "The AI resume screener provided in LoqHire is a decision-support tool only. It does not make final hiring decisions and should be used alongside human judgement. We are not liable for any hiring decisions made based on output from the AI screener.",
    ],
  },
  {
    heading: "13. Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LOQAI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "Our total cumulative liability to you for all claims arising out of or relating to these Terms or the Services shall not exceed the total fees paid by you in the twelve months immediately preceding the event giving rise to the claim.",
      "Some jurisdictions do not allow the exclusion or limitation of certain warranties or liability. In such jurisdictions, our liability is limited to the greatest extent permitted by applicable law.",
    ],
  },
  {
    heading: "14. Indemnification",
    paragraphs: [
      "You agree to indemnify, defend, and hold harmless LoqAI and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with: (a) your use of the Services in violation of these Terms; (b) your Customer Data; (c) your violation of any applicable law or regulation; or (d) your violation of any third-party rights.",
    ],
  },
  {
    heading: "15. Term and Termination",
    subSections: [
      {
        heading: "15.1 Term",
        paragraphs: [
          "These Terms commence on the date you first access the Services and continue until your Subscription is terminated.",
        ],
      },
      {
        heading: "15.2 Termination by You",
        paragraphs: [
          "You may cancel your Subscription at any time through your Account settings or by contacting us at umar.asim@loqai.tech. Cancellation takes effect at the end of the current billing cycle. No refunds are issued for partial billing periods unless provided for in our Refund Policy.",
        ],
      },
      {
        heading: "15.3 Termination by Us",
        paragraphs: [
          "We may suspend or terminate your Account and access to the Services immediately if you materially breach these Terms and fail to cure such breach within 14 days of written notice, if you become insolvent or subject to insolvency proceedings, or if we are required to do so by law.",
        ],
      },
      {
        heading: "15.4 Effect of Termination",
        paragraphs: [
          "Upon termination, your right to access the Services ceases immediately. We will retain your Customer Data for 30 days following termination, during which time you may request a full data export at no charge. After this period, we may permanently delete your Customer Data unless legally required to retain it.",
        ],
      },
    ],
  },
  {
    heading: "16. Data Export Guarantee",
    paragraphs: [
      "We are committed to ensuring you are never locked in. At any time during your Subscription, and for 30 days following termination, you may export all of your Customer Data in standard machine-readable formats (CSV, JSON, or PDF) at no additional charge. This guarantee applies regardless of the reason for termination.",
    ],
  },
  {
    heading: "17. Governing Law and Dispute Resolution",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. For customers located in the European Union, UK, or other jurisdictions with mandatory consumer protection laws, any such mandatory protections shall remain in effect notwithstanding this clause.",
      "Any dispute arising out of or relating to these Terms shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved within 30 days, it shall be submitted to binding arbitration in accordance with applicable arbitration rules. Nothing in this clause prevents either party from seeking emergency injunctive relief from a court of competent jurisdiction.",
    ],
  },
  {
    heading: "18. Changes to These Terms",
    paragraphs: [
      "We reserve the right to modify these Terms at any time. We will provide at least 14 days' written notice of any material changes via email to your registered address or through an in-product notification. Your continued use of the Services after the effective date of the changes constitutes your acceptance of the updated Terms.",
      "If you do not agree with the changes, you may terminate your Subscription before the effective date and receive a pro-rated refund for any prepaid but unused subscription period.",
    ],
  },
  {
    heading: "19. General",
    paragraphs: [
      "These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and LoqAI regarding the Services and supersede all prior agreements and understandings.",
      "If any provision of these Terms is found to be unenforceable, it will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force.",
      "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.",
      "For any questions about these Terms, please contact us at umar.asim@loqai.tech.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <ResourcePageLayout
      eyebrow=""
      title="Terms and Conditions"
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
