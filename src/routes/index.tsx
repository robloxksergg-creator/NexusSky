import { createFileRoute } from "@tanstack/react-router";

import { I18nProvider } from "@/i18n/i18n";
import { Nav } from "@/components/nexussky/Nav";
import { Hero } from "@/components/nexussky/sections/Hero";
import { Mountains } from "@/components/nexussky/sections/Mountains";
import { Industrial } from "@/components/nexussky/sections/Industrial";
import { Underground } from "@/components/nexussky/sections/Underground";
import { Radioactive } from "@/components/nexussky/sections/Radioactive";
import { DeepSlate } from "@/components/nexussky/sections/DeepSlate";
import { Horizon } from "@/components/nexussky/sections/Horizon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexusSky — Industrial Adventure Minecraft Server" },
      {
        name: "description",
        content:
          "Descend through one continuous Minecraft world. NexusSky is an Industrial Adventure server powered by Create & Aeronautics — build factories, launch airships, and brave the radioactive deep.",
      },
      { property: "og:title", content: "NexusSky — Industrial Adventure Minecraft Server" },
      {
        property: "og:description",
        content:
          "Travel through one continuous Minecraft world. Create-powered factories, airships, and a radioactive frontier await.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div id="top">
        <Nav />
        <main>
          <Hero />
          <Mountains />
          <Industrial />
          <Underground />
          <Radioactive />
          <DeepSlate />
          <Horizon />
        </main>
      </div>
    </I18nProvider>
  );
}
