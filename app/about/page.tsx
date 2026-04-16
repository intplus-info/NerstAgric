import { AboutHero } from "@/components/sections/about/AboutHero";
import { TrackRecord } from "@/components/sections/about/TrackRecord";
// import { MissionSection } from "@/components/sections/about/Vission";
import { WhyChooseUs } from "@/components/sections/about/WhyChooseUs";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { VisionSection } from "@/components/sections/about/Vission";
import { MissionStatement } from "@/components/sections/about/MissionStatement";

export default function About() {
  return (
    <main>
      <AboutHero />
      <TrackRecord />
      <VisionSection/>
      <MissionStatement/>
      <WhyChooseUs />
      <AboutCTA />
    </main>
  );
}
