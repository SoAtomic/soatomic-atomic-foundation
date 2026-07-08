import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </Label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Received. We'll reply within one business day.");
    }, 600);
  };
  return (
    <form onSubmit={onSubmit} className="atomic-card p-6 md:p-8 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field id="name" label="Name" required>
          <Input id="name" name="name" required maxLength={100} placeholder="Your name" />
        </Field>
        <Field id="email" label="Email" required>
          <Input id="email" name="email" type="email" required maxLength={200} placeholder="you@organization.org" />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field id="organization" label="Organization">
          <Input id="organization" name="organization" maxLength={120} placeholder="Organization name" />
        </Field>
        <Field id="website" label="Website URL">
          <Input id="website" name="website" maxLength={200} placeholder="https://…" />
        </Field>
      </div>
      <Field id="needs" label="What are you trying to do?" required>
        <Textarea
          id="needs"
          name="needs"
          required
          maxLength={1500}
          rows={5}
          placeholder="A few sentences about your organization and the work you're considering."
        />
      </Field>
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full rounded-full font-semibold glow-ring"
      >
        {submitting ? "Sending…" : "Schedule a Digital Foundation Audit"} <ArrowRight />
      </Button>
      <p className="text-muted-foreground text-center">
        One reply, within one business day. No mailing list.
      </p>
    </form>
  );
}