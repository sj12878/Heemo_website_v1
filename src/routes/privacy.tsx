import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-widest text-primary/60 mb-6">Legal Information</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-primary max-w-4xl leading-[1.1]">
              Privacy Policy
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
            Heemo India respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, store, and protect information submitted through our website.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">1. Information We Collect</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We may collect information that you voluntarily provide when you:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <li>Submit a contact form</li>
              <li>Request a quotation</li>
              <li>Send an enquiry</li>
              <li>Communicate with us through our website</li>
            </ul>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">
              The information collected may include:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Organization / Company Name (if provided)</li>
              <li>Information contained within your enquiry or message</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              The information you provide may be used to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <li>Respond to enquiries and quotation requests</li>
              <li>Communicate regarding IT Products and Appliances</li>
              <li>Understand customer requirements</li>
              <li>Provide information regarding institutional supply solutions</li>
              <li>Improve customer support and service quality</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">3. Cookies & Website Analytics</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              This website may use basic cookies and analytics tools to improve functionality, performance, and user experience.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              These technologies help us understand website usage patterns and improve the overall user experience.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Users may manage cookie preferences through their browser settings.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">4. Data Retention & Protection</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We implement reasonable administrative and technical measures intended to safeguard personal information against unauthorized access, disclosure, or misuse.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Information is retained only for as long as reasonably necessary to respond to enquiries, provide services, maintain business records, or comply with applicable legal requirements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">5. Third-Party Sharing</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Heemo India does not sell, rent, or trade personal information.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Information may be shared with service providers, logistics partners, OEM partners, or legal authorities only where reasonably necessary to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <li>Respond to enquiries</li>
              <li>Provide requested services</li>
              <li>Support commercial transactions</li>
              <li>Comply with applicable law</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">6. Your Rights</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              You may request correction, updating, or deletion of personal information previously submitted through this website by contacting us using the details provided below.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">7. Updates to This Policy</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Heemo India may update this Privacy Policy from time to time.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Any revisions will be posted on this page together with the updated effective date.
            </p>
          </div>

          <div className="space-y-4 font-medium">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">8. Contact Information</h2>
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
