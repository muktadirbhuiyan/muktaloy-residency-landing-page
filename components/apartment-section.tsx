import { apartmentDetails } from "./data";
import { Section } from "./section";

export function ApartmentSection() {
  return (
    <Section
      id="apartments"
      title="Apartment details"
      subtitle="Spacious layouts and practical design choices support a healthy, convenient, and modern lifestyle."
      className="bg-white"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apartmentDetails.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <item.icon className="mb-3 text-brand-600" size={22} />
            <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
