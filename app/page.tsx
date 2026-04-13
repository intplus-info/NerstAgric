import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { ExpertiseSection } from "@/components/sections/home/ExpertiseSection";
import { WhyUsSection } from "@/components/sections/home/WhyUsSection";
import { PartnersSection } from "@/components/sections/home/PartnersSection";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { ContactForm } from "@/components/ui/ContactForm";
import { getPosts } from "@/lib/blog";
import { FAQSection } from "@/components/sections/home/FAQSection";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ExpertiseSection />
      <WhyUsSection />
      <PartnersSection />
      <BlogPreview posts={posts} />
      <FAQSection/>
      <ContactForm />
    </main>
  );
}
