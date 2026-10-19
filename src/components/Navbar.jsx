import { ArrowUpRight, ChartNoAxesCombined, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { profile } from "../data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("datafolio-theme");

    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("datafolio-theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 font-bold tracking-tight"
          aria-label="Go to homepage"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            <ChartNoAxesCombined size={21} />
          </span>

          <span className="text-lg">
            <span className="text-brand">DN.</span>
            <span className="ml-2 hidden text-ink sm:inline">
              {profile.name}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-muted transition-colors duration-200 hover:text-brand"
            >
              {link.label}

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-ink transition-colors duration-200 hover:border-brand/40 hover:text-brand"
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="hidden rounded-lg border border-border px-3 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand/40 hover:text-brand sm:inline-flex"
          >
            Resume ↓
          </a>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-dark sm:px-4"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
