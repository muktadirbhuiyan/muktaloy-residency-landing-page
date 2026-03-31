"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-950/70 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-heading text-lg font-semibold tracking-wide text-white">
          Muktaloy Residency
        </a>

        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                activeId === item.href.slice(1)
                  ? "bg-white/15 text-white"
                  : "text-slate-100 hover:text-brand-200"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://portal.muktaloy.top"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-accent-300"
          >
            Tenant Portal
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-white/30 p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="section-shell pb-4 md:hidden">
          <nav className="space-y-2 rounded-2xl border border-white/15 bg-slate-900/90 p-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2 text-sm transition ${
                  activeId === item.href.slice(1)
                    ? "bg-white/15 text-white"
                    : "text-slate-100 hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://portal.muktaloy.top"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-accent-400 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-accent-300"
            >
              Tenant Portal
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
