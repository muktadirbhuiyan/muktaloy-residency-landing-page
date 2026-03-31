import { navLinks } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl font-semibold text-slate-900">Muktaloy Residency</h3>
          <p className="mt-2 text-sm text-slate-600">
            Premium residential living designed for comfort, trust, and long-term family
            convenience.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-brand-600" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>+880 1990-999982</li>
            <li>Borpa-Baganbari Road, Rupshi, Rupganj, Narayanganj</li>
            <li>info@muktaloy.top</li>
            <li>
              <a
                href="https://portal.muktaloy.top"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-700 transition hover:text-brand-600"
              >
                Tenant Portal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Muktaloy Residency. All rights reserved.
      </div>
    </footer>
  );
}
