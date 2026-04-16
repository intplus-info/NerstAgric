import Image from "next/image";
import { Plus } from "@/components/ui/Icons";

const reasons = [
  {
    title: "Integrity",
    body: " We uphold honesty, transparency, and accountability in all our engagements, ensuring trust with clients, partners, and communities.",
  },
  {
    title: "Sustainability",
    body: "Sustainability We design agricultural systems that are environmentally responsible, economically viable, and socially impactful for long-term growth.",
  },
  {
    title: "Resilience",
    body: " We embrace innovation, adaptability, and perseverance in building agricultural solutions that thrive in dynamic market and environmental conditions.",
  },
  {
    title: "Data-Driven",
    body: " Excellence We rely on technology, evidence, analytics, field insights, and measurable outcomes to guide strategic decisions and project execution.",
  },
  {
    title: "Fidelity",
    body: " We remain committed to our clients’ goals, our partnerships, and the long-term vision of transforming agriculture at scale.",
  },
  {
    title: "Brand Promise",
    body: " From consultation to implementation, we turn agribusiness ideas into scalable realities.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="w-full px-8 md:px-10.75 py-16 md:py-24 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-22 lg:gap-[114.67px] items-start">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-[1.4rem] md:text-[1.7775rem] leading-[35.56px] font-semibold mb-3.5">
             Core Values
            </h2>
            
          </div>
          <div className="relative w-full aspect-[489.78/327.11] overflow-hidden">
            <Image
              src="/images/about/why-us.jpg"
              alt="Modern agricultural infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col divide-y divide-gray-100">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-center gap-4 py-6 first:pt-0"
            >
              <span>
                <Plus size={30} />
              </span>
              <div className="flex flex-col gap-1.5">
                <p className="text-[0.95rem] md:text-[1.11125rem] leading-5 md:leading-[24.89px]">
                  <span className="text-primary font-bold">
                    {reason.title}{" "}
                  </span>
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
