import Image from "next/image";
import { Section } from "./section";

export function AboutSection() {
  return (
    <Section
      id="about"
      title="A peaceful home built for modern families"
      subtitle="Muktaloy Residency offers a refined living experience with quality maintenance, practical amenities, and a calm community lifestyle."
      className="bg-white"
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-slate-600">
          <p>
            Designed with everyday comfort in mind, Muktaloy Residency combines modern architecture
            and a welcoming neighborhood environment. Residents enjoy thoughtfully maintained shared
            areas, secure surroundings, and access to essential facilities.
          </p>
          <p>
            The property focuses on peaceful living while staying connected to urban convenience,
            making it ideal for families, professionals, and long-term residents seeking a reliable
            and premium lifestyle.
          </p>
        </div>
        <div className="relative h-80 overflow-hidden rounded-3xl shadow-premium sm:h-96">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80"
            alt="Elegant apartment interior"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
