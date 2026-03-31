import { features } from "./data";
import { Section } from "./section";

export function FeaturesSection() {
  return (
    <Section
      id="amenities"
      title="Premium amenities for comfortable everyday living"
      subtitle="Every facility is designed to improve quality of life while maintaining a clean, safe, and trusted residential environment."
      className="bg-slate-50"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
          >
            <feature.icon className="mb-4 text-brand-600" size={24} />
            <h3 className="mb-2 text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
