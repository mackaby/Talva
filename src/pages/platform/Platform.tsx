import { Layers } from "lucide-react";
import { PlatformPage } from "./PlatformPage";

export default function Platform() {
  return (
    <PlatformPage
      icon={Layers}
      path="/platform"
      eyebrow="Platform"
      title="Talva — the backend layer for AI-native software"
      description="Talva is the backend layer that makes it easy to build, run, evolve and use AI-native software."
      h1="The backend layer for AI-native software"
      intro="Talva is the backend layer that makes it easy to build, run, evolve and use AI-native software — one foundation your teams can stand on instead of assembling from scratch every time."
      sections={[
        {
          heading: "Build",
          body: "Start from a backend designed for AI-native software from day one, so teams spend their time on what the product actually does — not on stitching together infrastructure to make an AI-native app possible.",
        },
        {
          heading: "Run",
          body: "Operate AI-native software on a consistent foundation. One place for the pieces AI-native apps depend on, so behaviour is predictable and operations are boring.",
        },
        {
          heading: "Evolve",
          body: "AI-native software changes fast — the models, the clients, the patterns. Talva is built to absorb that change so your product can move with it without a rewrite every quarter.",
        },
        {
          heading: "Use",
          body: "Any client — human or AI — meets your product through the same backend. Consistent behaviour, consistent controls, whoever (or whatever) is on the other end.",
        },
      ]}
    />
  );
}
