
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";

const accentStyles = {
  green: {
    panel: "bg-[#e8f3ec]",
    icon: "text-brand",
    tag: "bg-[#e8f3ec] text-brand",
    bars: ["bg-brand/40", "bg-brand/60", "bg-brand/80", "bg-brand"],
  },
  yellow: {
    panel: "bg-[#fff7cc]",
    icon: "text-[#8a6d00]",
    tag: "bg-[#fff7cc] text-[#725a00]",
    bars: [
      "bg-[#f2c811]/40",
      "bg-[#f2c811]/60",
      "bg-[#f2c811]/80",
      "bg-[#d9b300]",
    ],
  },
  blue: {
    panel: "bg-[#e5f2ff]",
    icon: "text-sql",
    tag: "bg-[#e5f2ff] text-sql",
    bars: ["bg-sql/40", "bg-sql/60", "bg-sql/80", "bg-sql"],
  },
};


const statusStyles = {
  Completed:
    "bg-[#e8f3ec] text-brand dark:bg-[#173d2a] dark:text-[#86efac]",
  "Dashboard built":
    "bg-[#fff7cc] text-[#725a00] dark:bg-[#493d12] dark:text-[#fde68a]",
  "In progress":
    "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-200",
};


export default function ProjectCard({ project }) {
  const {
    title,
    category,
    status,
    description,
    question,
    tools,
    icon: Icon,
    accent,
    findings,
    links,
  } = project;

  const style = accentStyles[accent] ?? accentStyles.green;
  const hasLinks = Boolean(links.github || links.dashboard);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-slate-200/50">
      {/* Project preview placeholder */}
      {/* <div
        className={`relative flex min-h-52 items-center justify-center overflow-hidden p-6 ${style.panel}`}
      >
        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/40 blur-2xl" />

        <div className="relative w-full max-w-xs rounded-xl border border-white/80 bg-white/90 p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.panel} ${style.icon}`}
              >
                <Icon size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold text-ink">
                  {category}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Project preview
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={18}
              className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>

          <div className="mt-6 flex h-16 items-end gap-2">
            {[35, 60, 43, 80, 56, 100, 72].map((height, index) => (
              <div
                key={index}
                className="flex h-full flex-1 items-end"
              >
                <div
                  className={`w-full rounded-t-sm ${style.bars[index % style.bars.length]}`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between text-[10px] text-muted">
            <span>Explore</span>
            <span>Analyze</span>
            <span>Insights</span>
          </div>
        </div>
      </div> */}
      
      {/* Project screenshot or fallback illustration */}
      <div
        className={`relative flex min-h-52 items-center justify-center overflow-hidden ${style.panel}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${title} dashboard screenshot`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <div className="relative w-full max-w-xs rounded-xl border border-border bg-surface/95 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.panel} ${style.icon}`}
              >
                <Icon size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold text-ink">
                  {category}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Project preview
                </p>
              </div>
            </div>

            <div className="mt-6 flex h-16 items-end gap-2">
              {[35, 60, 43, 80, 56, 100, 72].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      className={`w-full rounded-t-sm ${
                        style.bars[index % style.bars.length]
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ),
              )}
            </div>

            <div className="mt-3 flex justify-between text-[10px] text-muted">
              <span>Explore</span>
              <span>Analyze</span>
              <span>Insights</span>
            </div>
          </div>
        )}
      </div>


      {/* Project details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.tag}`}>
            {category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status] ?? "bg-slate-100 text-slate-600"}`}
          >
            {status}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-ink">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted">
          {description}
        </p>

        <div className="mt-5 rounded-xl bg-page p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">
            Business question
          </p>
          <p className="mt-2 text-sm leading-6 text-ink">
            {question}
          </p>
        </div>

        {findings.length > 0 && (
          <div className="mt-5">
            <h4 className="text-sm font-bold text-ink">
              Key findings
            </h4>

            <ul className="mt-3 space-y-3">
              {findings.map((finding) => (
                <li
                  key={finding}
                  className="flex items-start gap-2 text-sm leading-6 text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
            Tools & techniques
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-ink"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          {hasLinks ? (
            <div className="flex flex-wrap gap-4 border-t border-border pt-4">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
                >
                  <GitBranch size={16} />
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
              )}

              {links.dashboard && (
                <a
                  href={links.dashboard}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
                >
                  <ExternalLink size={16} />
                  View dashboard
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          ) : (
            <p className="border-t border-border pt-4 text-xs text-muted">
              Project links will be added when available.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
