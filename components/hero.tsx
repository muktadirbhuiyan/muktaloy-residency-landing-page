import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80"
        alt="Muktaloy Residency luxury building"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-900/35" />

      <div className="relative section-shell flex min-h-[92vh] items-center pt-16">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            Premium Residential Property
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Muktaloy Residency
          </h1>
          <p className="text-xl text-slate-100 sm:text-2xl">Modern Living. Comfortable Lifestyle.</p>
          <p className="max-w-xl text-base text-slate-200 sm:text-lg">
            A premium residential experience designed for convenience, safety, and comfort.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#apartments"
              className="rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-premium transition hover:bg-brand-600"
            >
              View Apartments
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact Us
            </a>
            <a
              href="https://portal.muktaloy.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-accent-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-accent-300"
            >
              Tenant Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
