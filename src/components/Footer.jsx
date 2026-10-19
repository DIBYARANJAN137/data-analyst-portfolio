
import { ArrowUp, ArrowUpRight, ChartNoAxesCombined, GitBranch} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border bg-page">
      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="flex w-fit items-center gap-2"
            aria-label="Back to homepage"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
              <ChartNoAxesCombined size={20} />
            </span>

            <span className="font-bold tracking-tight text-ink">
              Data<span className="text-brand">folio.</span>
            </span>
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted"
          >
            <a href="#about" className="transition-colors hover:text-brand">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-brand">
              Skills
            </a>
            <a href="#projects" className="transition-colors hover:text-brand">
              Projects
            </a>
            <a href="#education" className="transition-colors hover:text-brand">
              Education
            </a>
            <a href="#contact" className="transition-colors hover:text-brand">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {profile.github.trim() && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg border border-border bg-surface p-2.5 text-muted transition-colors hover:border-brand/30 hover:text-brand"
              >
                <GitBranch size={18} />
              </a>
            )}

            {profile.linkedin.trim() && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg border border-border bg-surface p-2.5 text-muted transition-colors hover:border-brand/30 hover:text-brand"
              >
                <FaLinkedin size={18} />
              </a>
            )}

            <a
              href="#home"
              aria-label="Back to top"
              className="rounded-lg bg-brand p-2.5 text-white transition-colors hover:bg-[#185c37]"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, Tailwind CSS & curiosity.</p>
        </div>
      </div>
    </footer>
  );
}
