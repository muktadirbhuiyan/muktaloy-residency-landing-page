"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Section } from "./section";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to submit inquiry.");
      }

      setResult({ type: "success", message: data.message ?? "Inquiry submitted successfully." });
      event.currentTarget.reset();
    } catch (error) {
      setResult({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact us"
      subtitle="Request apartment details, schedule a visit, or ask any question about Muktaloy Residency."
      className="bg-slate-50"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <label className="text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us what you are looking for..."
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-brand-500 transition focus:ring-2"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
            {result ? (
              <p
                className={`rounded-xl px-4 py-3 text-sm ${
                  result.type === "success"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-rose-50 text-rose-700"
                }`}
              >
                {result.message}
              </p>
            ) : null}
          </div>
        </form>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Contact information</h3>
          <ul className="space-y-4 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-brand-600" />
              <span>+880 1990-999982</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-brand-600" />
              <span>Borpa-Baganbari Road, Rupshi, Rupganj, Narayanganj</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-brand-600" />
              <span>info@muktaloy.top</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
