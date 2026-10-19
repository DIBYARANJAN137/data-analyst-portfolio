import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Database,
  FileSpreadsheet,
  Table2,
} from "lucide-react";

const tools = [
  {
    name: "Excel",
    detail: "Cleaning & analysis",
    color: "bg-[#e8f3ec] text-brand",
    Icon: FileSpreadsheet,
  },
  {
    name: "Power BI",
    detail: "Dashboards & insights",
    color: "bg-[#fff7cc] text-[#8a6d00]",
    Icon: BarChart3,
  },
  {
    name: "SQL",
    detail: "Queries & reporting",
    color: "bg-[#e5f2ff] text-sql",
    Icon: Database,
  },
];

const chartBars = [38, 55, 45, 72, 60, 88, 69, 100];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        {/* Left: Introduction */}
        <div className="relative hero-intro">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-3 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            <span className="text-xs font-semibold tracking-wide text-brand">
              OPEN TO DATA ANALYST OPPORTUNITIES
            </span>
          </div>

          <p className="mb-3 text-sm font-medium text-muted">Hello, I'm</p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Dibya Ranjan Nayak
          </h1>

          <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
            Turning raw data into{" "}
            <span className="text-brand">meaningful insights.</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I'm a Computer Science graduate building my skills in data
            analytics. I enjoy exploring datasets, uncovering patterns, and
            translating numbers into useful business insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Explore my projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 font-semibold text-ink transition-colors duration-200 hover:border-brand/40 hover:text-brand"
            >
              More about me
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <span className="font-medium text-ink">Working with</span>
            <span>Excel</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>Python</span>
          </div>
        </div>

        {/* Right: Analytics-inspired visual */}
        <div className="relative mx-auto w-full max-w-lg hero-dashboard">
          <div className="absolute -inset-4 rounded-3xl bg-brand/5 blur-xl" />

          <div className="relative rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-slate-200/50 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  My approach
                </p>
                <h2 className="mt-2 text-xl font-bold tracking-tight">
                  From data to decisions
                </h2>
                <p className="mt-1 text-sm text-muted">
                  A practical analytics workflow
                </p>
              </div>

              <div className="rounded-xl bg-brand/10 p-3 text-brand">
                <BarChart3 size={24} />
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-page p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-ink">
                  Analytical workflow
                </span>
                <span className="rounded-full bg-surface px-2.5 py-1 text-xs text-muted">
                  4 stages
                </span>
              </div>

              <div className="mt-6 flex h-36 items-end gap-2 sm:gap-3">
                {chartBars.map((height, index) => (
                  <div key={index} className="flex h-full flex-1 items-end">
                    <div
                      className={`hero-chart-bar w-full rounded-t-md transition-all duration-300 hover:opacity-75 ${
                        index === 5
                          ? "bg-powerbi"
                          : index === 7
                            ? "bg-sql"
                            : "bg-brand"
                      }`}
                      style={{ height: `${height}%` }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-between text-xs text-muted">
                <span>Explore</span>
                <span>Analyze</span>
                <span>Explain</span>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {tools.map(({ name, detail, color, Icon }, index) => (
                <div
                  key={name}
                  className="hero-tool-card rounded-xl border border-border/80 p-3 transition-transform duration-200 hover:-translate-y-1"
                  style={{
                    animationDelay: `${
                      450 +
                      tools.indexOf(tools.find((tool) => tool.name === name)) *
                        100
                    }ms`,
                  }}
                >
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${color}`}
                  >
                    <Icon size={19} />
                  </div>

                  <p className="text-sm font-bold">{name}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff7cc] text-[#8a6d00]">
                <Table2 size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Curiosity meets data</p>
                <p className="mt-1 text-xs text-muted">
                  Ask better questions. Find useful answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
