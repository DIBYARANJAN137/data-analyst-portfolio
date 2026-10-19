import { Mail, GitBranch, ArrowUpRight, MessageCircle } from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

import { profile } from "../data/profile";

const socialLinks = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GitBranch,
  },
];

export default function Contact() {
  const hasEmail = Boolean(profile.email.trim());

  return (
    <section id="contact" className="scroll-mt-24 bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-sql/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200">
                <MessageCircle size={16} className="text-[#8bd5a9]" />
                Let's connect
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's turn data into something meaningful.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                I'm interested in entry-level Data Analyst opportunities where I
                can apply my skills, learn from experienced teams, and
                contribute to real business problems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
              <h3 className="text-lg font-bold text-white">Get in touch</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Have an opportunity or want to discuss my work? I'd be glad to
                hear from you.
              </p>
              {hasEmail ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-[#185c37]"
                >
                  <Mail size={18} />
                  Email me
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <p className="mt-6 rounded-xl border border-white/15 px-4 py-3 text-sm leading-6 text-slate-300">
                  Add your email address in src/data/profile.js to activate the
                  email button.
                </p>
              )}
               
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks
                  .filter((link) => link.href.trim())
                  .map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${label} profile`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-500/60 bg-slate-700/70 px-4 py-2.5 text-sm font-semibold !text-white shadow-sm transition-all duration-200 hover:border-emerald-400 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      <Icon size={17} className="!text-white" />
                      <span className="!text-white">{label}</span>
                      <ArrowUpRight size={14} className="!text-white" />
                    </a>
                  ))}
              </div>
               
              {!profile.linkedin.trim() && !profile.github.trim() && (
                <p className="mt-4 text-xs text-slate-400">
                  Add your LinkedIn and GitHub URLs to display your social
                  profile links here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
