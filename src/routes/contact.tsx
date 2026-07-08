import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHead } from "@/components/site/SectionHeader";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SoAtomic" },
      { name: "description", content: "Schedule a Digital Foundation Audit or ask a question. One reply per inquiry, within one business day. No mailing list." },
      { property: "og:title", content: "Contact — SoAtomic" },
      { property: "og:description", content: "Reach the workshop. Every conversation starts with a short review of what you're trying to do." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Schedule a Digital Foundation Audit."
        sub="A short message is enough to start. If the workshop is not a good fit for the work you're describing, we will say so directly and, when possible, suggest someone who is."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="atomic-card p-6 flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:hello@soatomic.com" className="hover:text-foreground">
                hello@soatomic.com
              </a>
            </div>
            <div className="atomic-card p-6 flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Santa Cruz County, California</span>
            </div>
            <div className="atomic-card p-6 flex items-center gap-3 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Replies within one business day.</span>
            </div>
            <div className="crt-card p-6">
              <div className="font-mono-soa text-primary uppercase tracking-widest">
                What happens next
              </div>
              <ol className="mt-4 space-y-3 list-decimal pl-6 text-foreground/90">
                <li>A short reply confirming the workshop can be helpful.</li>
                <li>A brief scoping conversation, in writing or by call.</li>
                <li>A written Digital Foundation Audit proposal.</li>
              </ol>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}