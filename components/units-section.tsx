import { units } from "./data";
import { Section } from "./section";

export function UnitsSection() {
  return (
    <Section
      id="units"
      title="Available units"
      subtitle="Explore current apartment availability and request the unit that matches your needs."
      className="bg-slate-50"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {units.map((unit) => (
          <article
            key={unit.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-premium"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900">Unit {unit.id}</h3>
                <p className="mt-1 text-sm text-slate-600">{unit.floor}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  unit.status === "Available"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {unit.status}
              </span>
            </div>

            <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <p>
                <span className="font-medium text-slate-900">Size:</span> {unit.size}
              </p>
              <p>
                <span className="font-medium text-slate-900">Rent:</span> {unit.rent}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Request This Unit
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
