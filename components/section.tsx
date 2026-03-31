type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className ?? ""}`}>
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Muktaloy Residency
          </p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-4 text-base text-slate-600 sm:text-lg">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
