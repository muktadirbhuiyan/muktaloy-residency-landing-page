import { Bus, GraduationCap, MapPinned, Store } from "lucide-react";
import { Section } from "./section";

export function LocationSection() {
  return (
    <Section
      id="location"
      title="Convenient location"
      subtitle="Located in a convenient and accessible area with essential daily facilities nearby."
      className="bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100 p-4 sm:p-6">
          <div className="mx-auto w-full max-w-3xl text-center">
            <MapPinned className="mx-auto mb-3 text-brand-600" size={28} />
            <p className="mb-4 font-medium text-slate-800">Muktaloy location map</p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.077797841313!2d90.54174807608027!3d23.74460497867435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b50b9484dbfd%3A0xd34f1e1c6de1d54d!2sMUKTALOY!5e0!3m2!1sen!2sbd!4v1774943992497!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                className="aspect-[4/3] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Nearby facilities</h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <Store size={18} className="text-brand-600" /> Local shops and markets
            </li>
            <li className="flex items-center gap-3">
              <Bus size={18} className="text-brand-600" /> Public and private transport access
            </li>
            <li className="flex items-center gap-3">
              <GraduationCap size={18} className="text-brand-600" /> Schools and educational centers
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
