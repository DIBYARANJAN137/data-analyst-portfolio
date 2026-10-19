
import { GraduationCap, BookOpen, ArrowUpRight } from "lucide-react";

const education = [
  {
    type: "Degree",
    title: "B.Tech in Computer Science",
    institution: "GITA Autonomous College, Bhubaneswar",
    description:
      "Built a foundation in computer science, programming, and logical problem-solving.",
    icon: GraduationCap,
  },
  {
    type: "Professional Training",
    title: "Data Analytics",
    institution: "MyLearnex",
    description:
      "Developing practical skills in Excel, Google Sheets, SQL, Power BI, and Python.",
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-page py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Education & Learning
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Building a strong foundation.
          </h2>

          <p className="mt-4 text-base leading-8 text-muted">
            My academic background and ongoing technical training
            support my transition into data analytics.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map(({ type, title, institution, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/40 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {type}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-ink">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-muted">
                    {institution}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
