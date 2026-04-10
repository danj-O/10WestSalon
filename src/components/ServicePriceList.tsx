import type { ServiceBlock, ServiceEntry } from "@/data/services";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function Entry({ entry }: { entry: ServiceEntry }) {
  if (entry.kind === "note") {
    return (
      <p className="py-1.5 text-left text-xs italic text-neutral-600">
        <em>{entry.text}</em>
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-0.5 py-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div className="min-w-0 flex-1 text-left">
        <p className="text-sm font-medium leading-snug text-neutral-900">{entry.title}</p>
        {entry.description ? (
          <p className="mt-1 text-xs leading-snug text-neutral-600">{entry.description}</p>
        ) : null}
      </div>
      {entry.price ? (
        <p className="shrink-0 text-left text-sm font-semibold tabular-nums text-brand sm:min-w-[5rem] sm:text-right">
          {entry.price}
        </p>
      ) : null}
    </div>
  );
}

export function ServicePriceList({ blocks }: { blocks: ServiceBlock[] }) {
  return (
    <div className="mx-auto max-w-5xl px-3 pb-12 md:px-4">
      <header className="mb-4 text-center md:mb-5">
        <h1
          id="services"
          className="border-b border-black/20 pb-2 font-display text-2xl font-black tracking-tight text-black md:text-3xl"
        >
          10 West Salon Services
        </h1>
        <nav
          className="mt-4 flex flex-wrap justify-center gap-2"
          aria-label="Jump to section"
        >
          {blocks.map((block) => {
            const id = slugify(block.title);
            return (
              <a
                key={block.title}
                href={`#${id}`}
                className="rounded-full border border-neutral-400/80 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm transition hover:border-brand hover:text-brand"
              >
                {block.title}
              </a>
            );
          })}
        </nav>
      </header>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {blocks.map((block) => {
          const id = slugify(block.title);
          return (
            <section
              key={block.title}
              id={id}
              className="scroll-mt-[5rem] rounded-lg border border-neutral-300/90 bg-white/55 px-4 py-3 shadow-sm md:px-5 md:py-4"
            >
              <h2 className="mb-2 border-b border-neutral-300 pb-1.5 text-left font-display text-lg font-bold text-black">
                {block.title}
              </h2>
              {block.intro ? (
                <p className="mb-2 whitespace-pre-line text-left text-xs leading-relaxed text-neutral-700">
                  {block.intro}
                </p>
              ) : null}
              <div className="divide-y divide-neutral-200/90">
                {block.entries.map((entry, i) => (
                  <Entry key={`${block.title}-${i}`} entry={entry} />
                ))}
              </div>
              {block.subblocks?.map((sub) => (
                <div key={sub.title} className="mt-3 border-t border-neutral-200 pt-3">
                  <h3 className="mb-2 text-left font-display text-base font-bold text-neutral-900">
                    {sub.title}
                  </h3>
                  <div className="divide-y divide-neutral-200/90">
                    {sub.entries.map((entry, i) => (
                      <Entry key={`${sub.title}-${i}`} entry={entry} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}
