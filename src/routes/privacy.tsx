import { createFileRoute } from "@tanstack/react-router";
import { PageHead } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — SoAtomic" },
      { name: "description", content: "SoAtomic's privacy policy — how we collect, use, and protect your information." },
      { property: "og:title", content: "Privacy — SoAtomic" },
      { property: "og:description", content: "How SoAtomic handles personal information, analytics, cookies, and third-party services." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHead
        eyebrow="Privacy"
        title="Privacy Policy"
        sub="Your privacy matters. SoAtomic collects only the information necessary to communicate with prospective and existing clients, provide requested services, and improve the operation of this website. We do not sell personal information."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-14 text-lg text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>Depending on how you interact with the website, we may collect information such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Organization name</li>
              <li>Phone number (if provided)</li>
              <li>Information submitted through contact forms</li>
              <li>Basic website analytics</li>
              <li>Technical information such as browser type and device information</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>Information you provide may be used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries</li>
              <li>Schedule meetings</li>
              <li>Prepare project proposals</li>
              <li>Deliver services</li>
              <li>Improve the website</li>
              <li>Maintain client relationships</li>
              <li>Meet legal or contractual obligations</li>
            </ul>
            <p>We only collect information that helps us provide better service.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Analytics</h2>
            <p>This website may use privacy-conscious analytics to better understand how visitors use the site.</p>
            <p>Analytics information is used only to improve the website and is never sold.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
            <p>SoAtomic may use trusted service providers, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Workspace</li>
              <li>Google Cloud</li>
              <li>HubSpot</li>
              <li>Cloudflare</li>
              <li>Stripe (when applicable)</li>
            </ul>
            <p>These providers maintain their own privacy policies governing the information they process.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Cookies</h2>
            <p>This website may use cookies necessary for website functionality and anonymous analytics.</p>
            <p>You can manage or disable cookies through your browser settings.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
            <p>Reasonable administrative, technical, and organizational safeguards are used to protect the information entrusted to SoAtomic.</p>
            <p>No website or internet transmission can be guaranteed to be completely secure, but protecting client information is taken seriously.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Your Choices</h2>
            <p>You may request to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the information we hold about you.</li>
              <li>Correct inaccurate information.</li>
              <li>Request deletion of your information where applicable.</li>
              <li>Ask questions about how your information is used.</li>
            </ul>
            <p>Requests can be made by contacting us directly.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p>Questions about this Privacy Policy may be directed to:</p>
            <p>
              <a href="mailto:hello@soatomic.com" className="text-foreground hover:text-primary underline underline-offset-4">
                hello@soatomic.com
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Updates</h2>
            <p>This Privacy Policy may be updated from time to time as services evolve or legal requirements change.</p>
            <p>The most current version will always be available on this website.</p>
          </div>
        </div>
      </section>
    </>
  );
}
