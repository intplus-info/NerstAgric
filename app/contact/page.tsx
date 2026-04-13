import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { FAQSection } from "@/components/sections/home/FAQSection";


export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
       <FAQSection/>
    </main>
  );
}
