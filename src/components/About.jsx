import {
  GraduationCap,
  Lightbulb,
  Target,
  ChartNoAxesCombined,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science Graduate",
    description:
      "A B.Tech foundation in programming, logical thinking, and problem-solving.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics Focus",
    description:
      "Developing practical skills to explore datasets, build dashboards, and interpret business trends.",
  },
  {
    icon: Lightbulb,
    title: "Learning by Building",
    description:
      "Applying concepts through hands-on projects rather than relying only on theory.",
  },
];

function HighlightCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {highlights.map(({ icon: Icon, title, description }) => (
        <article
          key={title}
          className="group rounded-2xl border border-border bg-page p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/40"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
            <Icon size={23} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>

          <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
        </article>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Curious about data.
            <span className="text-brand"> Focused on insights.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            I'm Dibyaranjan Nayak, a Computer Science graduate building my
            career in Data Analytics. I'm learning to turn raw data into
            structured information, clear visualizations, and meaningful
            business insights.
          </p>

          <p className="mt-4 text-base leading-8 text-muted">
            My approach is practical: understand the problem, inspect the data,
            clean inconsistencies, analyze patterns, and communicate the
            findings clearly. I use hands-on projects to strengthen my technical
            skills and develop a business-oriented way of thinking.
          </p>
        </div>

        {/* Moving cards on desktop; normal grid on mobile */}
        <div className="about-cards-viewport mt-12">
          <div className="about-cards-track">
            <div className="about-cards-group">
              <HighlightCards />
            </div>

            <div className="about-cards-group" aria-hidden="true">
              <HighlightCards />
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand/15 bg-brand/5 p-5 sm:p-6">
          <div className="shrink-0 rounded-xl bg-surface p-3 text-brand shadow-sm">
            <Target size={22} />
          </div>

          <div>
            <h3 className="font-bold text-ink">My career objective</h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              To start my career in Data Analytics, contribute to real business
              problems, and grow through continuous learning and practical
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
