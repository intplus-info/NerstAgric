import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ContactForm />
    </main>
  );
}
