import {
  FileSpreadsheet,
  Database,
  BarChart3,
  Code2,
  Table2,
  Workflow,
  Check,
} from "lucide-react";

const skillGroups = [
  {
    title: "Spreadsheets",
    description: "Cleaning, organizing, and exploring data",
    icon: FileSpreadsheet,
    color: "bg-[#e8f3ec] text-brand",
    skills: [
      "Microsoft Excel",
      "Google Sheets",
      "Data Cleaning",
      "Lookup & Conditional Functions",
      "Pivot Tables",
    ],
  },
  {
    title: "Querying",
    description: "Retrieving and analyzing structured data",
    icon: Database,
    color: "bg-[#e5f2ff] text-sql",
    skills: [
      "SQL",
      "Filtering & Aggregation",
      "JOINs",
      "CTEs",
      "Window Functions",
    ],
  },
  {
    title: "Visualization",
    description: "Communicating findings through dashboards",
    icon: BarChart3,
    color: "bg-[#fff7cc] text-[#8a6d00]",
    skills: [
      "Power BI",
      "Interactive Dashboards",
      "KPI Cards",
      "Data Visualization",
      "DAX Fundamentals",
    ],
  },
  {
    title: "Programming",
    description: "Building a foundation for analytical workflows",
    icon: Code2,
    color: "bg-[#f1eafe] text-[#7545a5]",
    skills: [
      "Python",
      "Core Syntax & Data Types",
      "Loops & Functions",
      "Basic OOP",
      "File Handling",
    ],
  },
];

const workflow = ["Understand", "Clean", "Analyze", "Visualize"];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Technical Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Tools I use to explore data.
            </h2>

            <p className="mt-4 text-base leading-8 text-muted">
              My current toolkit combines spreadsheets, SQL, business
              intelligence, and Python fundamentals. I'm strengthening these
              skills through practical exercises and analytics projects.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-brand/20 bg-surface px-4 py-2 md:self-auto">
            <Workflow size={17} className="text-brand" />
            <span className="text-sm font-medium text-ink">
              Practical learning
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map(
            ({ title, description, icon: Icon, color, skills }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/40 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}
                  >
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-page px-3 py-2 text-xs font-medium text-ink transition-colors duration-200 hover:border-brand/30 hover:bg-brand/5"
                    >
                      <Check size={13} className="text-brand" />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-brand/10 p-3 text-brand">
              <Table2 size={22} />
            </div>
            <div>
              <h3 className="font-bold text-ink">My analytical workflow</h3>
              <p className="mt-1 text-sm text-muted">
                A repeatable approach to solving data problems.
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {workflow.map((step, index) => (
              <div key={step} className="relative">
                <div className="rounded-xl bg-page p-4 text-center">
                  <span className="text-xs font-semibold text-brand">
                    STEP 0{index + 1}
                  </span>
                  <p className="mt-2 font-semibold text-ink">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
