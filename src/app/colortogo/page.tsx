import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { SiteFooter } from "@/components/SiteFooter";
import { colorToGoVideo } from "@/data/colortogo";
import { defaultDescription, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Color To Go",
  description: defaultDescription,
  alternates: { canonical: `${site.canonicalBase}/colortogo` },
};

export default function ColorToGoPage() {
  return (
    <>
      <InnerPage>
        <div className="mx-auto max-w-3xl px-4 pb-16 text-center">
          <h1 className="mb-8 font-display text-2xl font-black md:text-3xl">{colorToGoVideo.title}</h1>
          <div className="relative aspect-video w-full overflow-hidden rounded shadow-lg">
            <iframe
              title={colorToGoVideo.title}
              src={colorToGoVideo.youtubeEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </InnerPage>
      <SiteFooter />
    </>
  );
}
