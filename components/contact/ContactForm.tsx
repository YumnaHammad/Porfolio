"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Check, Loader2 } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Website",
  "WordPress",
  "SaaS",
  "Dashboard",
  "eCommerce",
  "AI Product",
  "Custom Application",
  "Other",
] as const;

const budgets = [
  "Under $1k",
  "$1k to $3k",
  "$3k to $7k",
  "$7k+",
  "Not sure yet",
] as const;

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

type Status = "idle" | "sending" | "sent" | "error";

const empty: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

/**
 * Submission strategy, deliberately honest about what happens.
 *
 * If NEXT_PUBLIC_CONTACT_ENDPOINT is set (Formspree, a Next route handler, or
 * any POST-JSON service) the inquiry is sent there. If it is not, the form
 * composes a structured email and hands it to the visitor's mail client. It
 * never claims to have sent something it did not send.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) {
      next.email = "Please add an email so I can reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = "That email address doesn't look right.";
    }
    if (!form.projectType) next.projectType = "Pick the closest match.";
    if (form.message.trim().length < 12) {
      next.message = "A sentence or two about the project, please.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        setNote("Thank you, your message reached me. I usually reply within a couple of days.");
        setForm(empty);
      } catch {
        setStatus("error");
        setNote(
          `Something went wrong sending that. Email me directly at ${site.email} and it'll reach me.`,
        );
      }
      return;
    }

    // No endpoint configured: compose the message in the visitor's mail client.
    const subject = `Project inquiry: ${form.projectType} (${form.name})`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      `Budget / scope: ${form.budget || "Not specified"}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
    setNote(
      `Your email app should be open now with everything filled in. Press send and it comes straight to me. If nothing opened, write to ${site.email} instead.`,
    );
  }

  const fieldBase =
    "w-full rounded-xl border bg-surface/50 px-4 py-3.5 text-[15px] text-bone placeholder:text-faint transition-colors duration-300 focus:outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            className={cn(fieldBase, errors.name ? "border-red-400/60" : "border-line")}
          />
        </Field>

        <Field label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            className={cn(fieldBase, errors.email ? "border-red-400/60" : "border-line")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" error={errors.projectType} htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            aria-invalid={!!errors.projectType}
            className={cn(
              fieldBase,
              "appearance-none",
              errors.projectType ? "border-red-400/60" : "border-line",
              !form.projectType && "text-faint",
            )}
          >
            <option value="">Select one</option>
            {projectTypes.map((t) => (
              <option key={t} value={t} className="bg-ink text-bone">
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget / scope" htmlFor="budget" optional>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={cn(
              fieldBase,
              "appearance-none border-line",
              !form.budget && "text-faint",
            )}
          >
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-ink text-bone">
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="What are you building, what's broken, or what you'd like to improve."
          aria-invalid={!!errors.message}
          className={cn(
            fieldBase,
            "resize-none",
            errors.message ? "border-red-400/60" : "border-line",
          )}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          data-cursor="button"
          className="group inline-flex items-center gap-2.5 rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-bright hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send Project Inquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>

        <p className="font-mono text-[11px] text-faint">
          Or email {site.email}
        </p>
      </div>

      {/* Result states */}
      <AnimatePresence>
        {(status === "sent" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            aria-live="polite"
            className={cn(
              "flex items-start gap-3 rounded-xl border px-4 py-3.5 text-sm",
              status === "sent"
                ? "border-emerald-400/30 bg-emerald-400/8 text-emerald-200"
                : "border-red-400/30 bg-red-400/8 text-red-200",
            )}
          >
            {status === "sent" ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0" />
            ) : (
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            )}
            <p className="leading-relaxed">{note}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-baseline justify-between text-xs tracking-wide text-mute"
      >
        {label}
        {optional && <span className="font-mono text-[10px] text-faint">Optional</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-xs text-red-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
