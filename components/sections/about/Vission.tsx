import Image from "next/image";

export const VisionSection = () => {
  return (
    <section className="w-full md:max-h-[426.67px] border-t-2 border-[#289238] font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="px-12 sm:px-14 md:px-18 lg:px-21.25 py-14 md:py-19.5 flex flex-col gap-6 md:gap-10.5">
          <h2 className="text-[1.4rem] md:text-[1.7775rem] leading-[35.56px] font-semibold">
           Vision Statement
          </h2>
          <blockquote className="border-l-3 border-[#289238] pl-7">
            <p className="text-[1rem] md:text-[1.333125rem] leading-6 md:leading-[35.56px] font-semibold">
              To transform Africa’s agricultural landscape by successfully establishing 1 million acres of productive farmland and scaling 1,000 integrated processing facilities by 2040, driving food security, economic growth, and sustainable livelihoods across communities.
            </p>
          </blockquote>
        </div>

        {/* Right — image flush to edges */}
        <div className="relative w-full min-h-87.5 md:min-h-full">
          <Image
            src="/images/about/mission.jpg"
            alt="NerstAgric team in a consulting meeting"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
