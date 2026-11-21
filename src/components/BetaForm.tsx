import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function BetaForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast({ title: "You're on the list", description: "We'll reach out when your beta slot is ready." });
    setName("");
    setEmail("");
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-primary/25 bg-primary/5 p-8 text-center">
        <p className="text-lg font-medium text-foreground">Thanks for signing up.</p>
        <p className="mt-2 text-sm text-muted-foreground">We'll reach out when your beta slot is ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3">
      <label className="sr-only" htmlFor="beta-name">Your name</label>
      <Input id="beta-name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="border-border/60 bg-card" />
      <label className="sr-only" htmlFor="beta-email">Work email</label>
      <Input id="beta-email" type="email" placeholder="you@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} className="border-border/60 bg-card" />
      <Button type="submit" size="lg" className="mt-2 w-full gap-2">
        Request beta access <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
