import type { ServiceBlock, ServiceEntry } from "@/data/services";

function Entry({ entry }: { entry: ServiceEntry }) {
  if (entry.kind === "note") {
    return (
      <p className="my-2 text-left text-sm italic">
        <em>{entry.text}</em>
      </p>
    );
  }
  return (
    <div className="my-5 text-left">
      <h3 className="text-lg font-normal text-black">{entry.title}</h3>
      {entry.description ? (
        <p className="mt-1 text-sm leading-relaxed text-neutral-800">{entry.description}</p>
      ) : null}
      {entry.price ? (
        <p className="mt-1 font-medium text-brand">{entry.price}</p>
      ) : null}
    </div>
  );
}

export function ServicePriceList({ blocks }: { blocks: ServiceBlock[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 px-3 pb-16 md:grid-cols-2 md:gap-2 md:px-4">
      <h1
        id="services"
        className="col-span-1 border-b border-black py-2 text-center text-3xl font-normal md:col-span-2 md:text-4xl"
      >
        10 West Salon Services
      </h1>
      {blocks.map((block) => (
        <section
          key={block.title}
          className="border border-neutral-400 px-8 py-4 text-center md:px-12 [&_h2]:text-2xl [&_h2]:underline"
        >
          <h2 className="section-title mb-4">{block.title}</h2>
          {block.intro ? (
            <p className="mb-6 whitespace-pre-line text-left text-sm leading-relaxed text-neutral-900">
              {block.intro}
            </p>
          ) : null}
          {block.entries.map((entry, i) => (
            <Entry key={`${block.title}-${i}`} entry={entry} />
          ))}
          {block.subblocks?.map((sub) => (
            <div key={sub.title} className="mt-8 border-t border-neutral-300 pt-6">
              <h2 className="section-title mb-4">{sub.title}</h2>
              {sub.entries.map((entry, i) => (
                <Entry key={`${sub.title}-${i}`} entry={entry} />
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
