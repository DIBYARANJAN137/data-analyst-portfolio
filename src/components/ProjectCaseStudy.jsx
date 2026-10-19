
import { X, ExternalLink, GitBranch } from "lucide-react";

export default function ProjectCaseStudy({ project, onClose }) {
  if (!project) return null;

  const { title, category, description, question, tools, findings, links } =
    project;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              {category} · Case Study
            </p>
            <h2
              id="case-study-title"
              className="mt-2 text-2xl font-bold text-ink sm:text-3xl"
            >
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-lg border border-border p-2 text-muted transition-colors hover:bg-page hover:text-ink"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-7 p-6 sm:p-8">
          {project.image && (
            <img
              src={project.image}
              alt={`${title} project preview`}
              className="max-h-80 w-full rounded-xl border border-border object-cover object-top"
            />
          )}

          <section>
            <h3 className="text-lg font-bold text-ink">Project overview</h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              {description}
            </p>
          </section>

          <section className="rounded-xl border border-brand/15 bg-brand/5 p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
              Business problem
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink">
              {question}
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-ink">
              Tools and techniques
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border px-3 py-2 text-sm text-ink"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-ink">Key findings</h3>
            {findings.length > 0 ? (
              <ul className="mt-3 space-y-3">
                {findings.map((finding) => (
                  <li
                    key={finding}
                    className="flex items-start gap-3 text-sm leading-7 text-muted"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                    {finding}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm leading-7 text-muted">
                Findings are still being documented for this project.
              </p>
            )}
          </section>

          <section className="rounded-xl border border-border bg-page p-5">
            <h3 className="font-bold text-ink">Methodology and recommendations</h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              Add the data-cleaning steps, calculations, validation checks,
              and business recommendations you actually completed for this
              project. Documenting these details will help recruiters
              understand your analytical process.
            </p>
          </section>

          {(links?.github || links?.dashboard) && (
            <div className="flex flex-wrap gap-4 border-t border-border pt-5">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand"
                >
                  <GitBranch size={17} />
                  View GitHub repository
                  <ExternalLink size={14} />
                </a>
              )}

              {links.dashboard && (
                <a
                  href={links.dashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand"
                >
                  <ExternalLink size={17} />
                  View live dashboard
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
