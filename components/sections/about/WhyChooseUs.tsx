import Image from "next/image";
import { Plus } from "@/components/ui/Icons";

const reasons = [
  {
    title: "Deep Sector Expertise",
    body: "Leverage over two decades of agricultural and project management expertise to navigate complex agribusiness challenges with confidence.",
  },
  {
    title: "Implementation-First Approach",
    body: "We prioritize your unique needs, moving beyond advisory to offer hands-on, on-ground implementation strategies that drive measurable results.",
  },
  {
    title: "Proven Operational Success",
    body: "Our successful collaborations in crop and livestock systems have helped investors and organizations grow, streamline, and achieve industrial-scale success.",
  },
  {
    title: "Tailored Agribusiness Strategies",
    body: "We design frameworks specifically aligned with your investment goals, local soil conditions, and the ever-evolving agricultural market demands.",
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
              Why Choose Us
            </h2>
            <p className="text-[0.875rem] md:text-[1rem] leading-4 md:leading-[21.93px] font-medium">
              Partner with an agricultural consulting firm that delivers
              innovative, implementation-focused strategies to drive growth and
              operational transformation.
            </p>
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
