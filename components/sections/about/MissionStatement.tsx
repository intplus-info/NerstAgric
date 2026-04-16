import Image from "next/image";

const missions = [
  "Strict compliance with safety and operational standards",
  "Effective farm planning and management",
  "Data-driven decision-making",
  "Sustainable production systems",
  "End-to-end agricultural value chain optimization",
  "Capacity building through training and technical support",
  "Reducing post-harvest losses through smart processing and logistics solutions",
];

export const MissionStatement = () => {
  return (
    <section className="w-full px-8 md:px-10.75 py-16 md:py-24 font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-[114.67px] items-center">
        
        {/* Left */}
        <div className="flex flex-col gap-8">
          

          {/* Image */}
          {/* Image */}
          <div className="relative w-full h-[350px] md:h-[520px] lg:h-[709px] overflow-hidden ">
          <Image
               src="/images/mission/missiontwo.png"
               alt="Modern agricultural infrastructure"
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
             priority
             />
            </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
           <div>
            <h2 className="text-[1.4rem] md:text-[1.7775rem] leading-[35.56px] font-semibold mb-3.5">
              Mission Statement
            </h2>

            <p className="text-[0.95rem] md:text-[1rem] text-gray-600 leading-relaxed">
              To deliver expert agribusiness consultation, project implementation,
              and sustainable farm management solutions that enable investors,
              farmers, institutions, and communities to build profitable,
              resilient, and scalable agricultural enterprises.
            </p>
          </div>

          <p className="font-semibold text-gray-800">
            We are committed to:
          </p>

          <div className="flex flex-col divide-y divide-gray-100">
            {missions.map((mission) => (
              <div
                key={mission}
                className="flex items-start gap-4 py-5 first:pt-0"
              >
                {/* Dot Bullet */}
                <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />

                <p className="text-[0.95rem] md:text-[1.05rem] leading-relaxed text-gray-600">
                  {mission}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};