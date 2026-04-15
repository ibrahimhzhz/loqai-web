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
    heading: "Refund Policy",
    paragraphs: [
      "Effective date: 1 January 2025",
    ],
  },
  {
    heading: "1. Overview",
    paragraphs: [
      "This Refund Policy sets out the circumstances under which LoqAI will issue refunds for subscriptions to LoqHRMS and LoqHire. We want you to be completely satisfied with the Services. If you are not, please contact us at umar.asim@loqai.tech and we will work with you to resolve your concerns.",
    ],
  },
  {
    heading: "2. 30-Day Money-Back Guarantee (Annual Plans)",
    paragraphs: [
      "If you subscribe to an annual plan and are not satisfied with the Services for any reason, you may request a full refund within 30 calendar days of your initial payment date. This guarantee applies to first-time annual subscriptions only.",
      "To claim this guarantee, contact us at umar.asim@loqai.tech with your account details and reason for cancellation. Refunds under this guarantee will be processed within 10 business days to the original payment method - subject to which payment method was used to process the payment.",
      "The 30-day money-back guarantee does not apply to: renewals of annual subscriptions, upgrades or downgrades within an active subscription period, or accounts that have been suspended for violation of our Terms and Conditions.",
    ],
  },
  {
    heading: "3. Free Trial",
    paragraphs: [
      "We offer a 21-day free trial with no credit card required. No charges are made during the free trial period. If you choose not to subscribe at the end of the trial, your account will simply expire with no charges and no refund required.",
    ],
  },
  {
    heading: "4. Monthly Subscriptions",
    paragraphs: [
      "Monthly subscriptions are billed at the start of each billing cycle. Monthly fees are non-refundable once charged. If you cancel a monthly subscription, your access to the Services will continue until the end of the current billing cycle, after which your account will not be renewed.",
      "We do not issue pro-rated refunds for partial months under a monthly subscription.",
    ],
  },
  {
    heading: "5. Annual Subscriptions - After the 30-Day Guarantee Period",
    paragraphs: [
      "After the 30-day money-back guarantee period has passed, annual subscription fees are non-refundable except in the following circumstances:",
    ],
    bullets: [
      "Service unavailability: if the Services experience sustained downtime exceeding 99.0% uptime over any calendar month, you may request a pro-rated credit or refund for the affected period.",
      "Material change to Terms: if we make a material change to these Terms or the features of the Services that significantly degrades the value of your subscription, and you notify us of your objection within 14 days of receiving notice of the change, you may cancel and receive a pro-rated refund for the unused portion of your subscription.",
      "Duplicate charges: if you have been charged more than once for the same subscription period due to a billing error, we will refund the duplicate charge in full.",
      "Termination by us without cause: if we terminate your subscription without cause, we will refund a pro-rated amount for the unused portion of your annual subscription.",
    ],
  },
  {
    heading: "6. Founding Customer Discount",
    paragraphs: [
      "Customers who have received a founding customer discount are bound by the same refund terms set out in this Policy. The founding customer rate is a lifetime rate contingent on maintaining an active annual subscription. If a founding customer cancels and later resubscribes, the founding customer rate will not be reinstated.",
    ],
  },
  {
    heading: "7. Disputed Charges",
    paragraphs: [
      "If you believe you have been incorrectly charged, please contact us at umar.asim@loqai.tech before initiating a chargeback with your bank or payment provider. We will investigate and, if an error is confirmed, correct the charge within 10 business days.",
      "Initiating a chargeback without first contacting us may result in suspension of your account pending resolution of the dispute. We reserve the right to dispute chargebacks that we believe are invalid.",
    ],
  },
  {
    heading: "8. How to Request a Refund",
    paragraphs: [
      "To request a refund, please contact us at umar.asim@loqai.tech with the following information:",
    ],
    bullets: [
      "Your account email address.",
      "The date of the charge you are requesting a refund for.",
      "The reason for your refund request.",
      "Any supporting documentation if applicable.",
    ],
  },
  {
    heading: "9. Changes to This Policy",
    paragraphs: [
      "We reserve the right to modify this Refund Policy at any time. Changes will be communicated with at least 14 days' notice via email or in-product notification. Modifications will apply to subscriptions renewed after the effective date of the change. Your refund rights for your current subscription period will not be reduced by any change to this Policy.",
    ],
  },
  {
    heading: "10. Contact",
    paragraphs: [
      "For any questions about this Refund Policy, please contact us at umar.asim@loqai.tech. We are committed to resolving all billing concerns fairly and promptly.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <ResourcePageLayout
      eyebrow=""
      title="Refund Policy"
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
