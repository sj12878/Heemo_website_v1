import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-widest text-primary/60 mb-6">Legal Information</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-primary max-w-4xl leading-[1.1]">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-base sm:text-lg max-w-3xl leading-relaxed text-muted-foreground">
              Last Updated: June 2026
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12 text-foreground/90">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Welcome to Heemo India. By accessing or using this website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with any part of these terms, please refrain from using this website.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">1. Acceptance of Terms</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              By accessing, browsing, or submitting enquiries through this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">2. Purpose of the Website</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              This website is intended to provide information regarding Heemo India's products, services, OEM partnerships, and institutional supply capabilities.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Information displayed on this website is provided for general informational purposes only and does not constitute a binding offer, quotation, or contractual commitment.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">3. Use of the Website</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Users submitting enquiries, quotation requests, or contact forms must provide accurate and truthful information.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Any misuse of this website, including attempts to gain unauthorized access, distribute malicious software, or interfere with website operations, is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">4. Intellectual Property & Trademarks</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Unless otherwise stated, the website content, original text, design elements, branding materials, and other proprietary content displayed on this website are owned by or licensed to Heemo India.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              All third-party trademarks, logos, product names, brand names, and registered marks displayed on this website, including but not limited to HP, HPE, Canon, Epson, Samsung, LG, Western Digital, Numeric, and other OEM partners, remain the property of their respective owners.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Such trademarks and logos are displayed solely for informational, identification, and partnership representation purposes.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Unauthorized reproduction, modification, distribution, or commercial use of proprietary website content without prior written permission is prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">5. Product Information & Availability</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              While reasonable efforts are made to keep information accurate and up to date, product specifications, availability, pricing, warranty terms, delivery schedules, and other details may change without notice.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              All purchases, quotations, deliveries, and commercial engagements remain subject to formal written communication, quotation approval, purchase orders, and applicable commercial agreements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">6. Limitation of Liability</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Heemo India shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <li>Use of this website</li>
              <li>Inability to access this website</li>
              <li>Temporary service interruptions</li>
              <li>Technical errors</li>
              <li>Inaccuracies or omissions in website content</li>
            </ul>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">
              Users rely on information available on this website at their own discretion.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">7. Third-Party Links</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              This website may contain links to third-party websites for informational purposes.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Heemo India does not control and is not responsible for the content, privacy practices, or policies of external websites.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">8. Privacy</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Any personal information submitted through enquiry forms, quotation requests, or contact forms is governed by our Privacy Policy.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Users are encouraged to review the Privacy Policy to understand how information is collected and used.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">9. Governing Law & Jurisdiction</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the courts located in Meerut, Uttar Pradesh, India.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">10. Changes to These Terms</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Heemo India reserves the right to modify, update, or revise these Terms & Conditions at any time without prior notice.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Updated versions will be posted on this page with the revised effective date.
            </p>
          </div>

          <div className="space-y-4 font-medium">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">11. Contact Information</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Heemo India<br />
              Email: <a href="mailto:info@heemoindia.in" className="text-primary hover:underline">info@heemoindia.in</a><br />
              Phone: +91 9719107400<br />
              Meerut, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
