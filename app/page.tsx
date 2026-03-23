import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { ExpertiseSection } from "@/components/sections/home/ExpertiseSection";
import { WhyUsSection } from "@/components/sections/home/WhyUsSection";
import { PartnersSection } from "@/components/sections/home/PartnersSection";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { ContactForm } from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ExpertiseSection />
      <WhyUsSection />
      <PartnersSection />
      <BlogPreview />
      <ContactForm />
    </main>
  );
}
