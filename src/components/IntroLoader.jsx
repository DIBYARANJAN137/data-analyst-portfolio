
import { useEffect, useState } from "react";
import { ChartNoAxesCombined } from "lucide-react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("datafolio-intro-seen")
  );

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      localStorage.setItem("datafolio-intro-seen", "true");
      setVisible(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="intro-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-page"
      role="status"
      aria-label="Loading Datafolio portfolio"
    >
      <div className="loader-logo flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
        <ChartNoAxesCombined size={34} />
      </div>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink">
        Data<span className="text-brand">folio.</span>
      </h1>

      <p className="mt-2 text-sm text-muted">
        Turning data into insights.
      </p>

      <div className="mt-7 flex h-12 items-end gap-2">
        {[18, 30, 23, 40, 28, 46].map((height, index) => (
          <div
            key={index}
            className="loader-bar w-3 rounded-t-sm bg-brand"
            style={{
              height: `${height}px`,
              animationDelay: `${index * 100}ms`,
            }}
          />
        ))}
      </div>

      <p className="mt-4 text-xs font-medium tracking-widest text-muted">
        ANALYZING POSSIBILITIES
      </p>
    </div>
  );
}
