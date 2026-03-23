import Link from "next/link";

export const IntroSection = () => {
  const stats = [
    { value: "19", label: "Years of Experience" },
    { value: "23", label: "Clients Served" },
    { value: "169", label: "Projects" },
  ];

  return (
    <section className="w-full px-8 sm:px-14 md:px-20 lg:px-26.25 py-8 sm:py-14 md:py-20 lg:py-26.25">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_6fr] gap-8 md:gap-23.75 mb-23.75 lg:mb-47 font-urbanist">
        <p className="text-[1rem] md:text-[1.125rem] leading-7.25 order-2">
          <span className="font-black text-primary">NerstAgric</span> was
          founded on a simple principle: Agriculture should be as professional
          and efficient as any other industrial sector. We are a team of
          agricultural experts and project managers dedicated to delivering
          practical, scalable solutions across the entire agricultural value
          chain.
        </p>

        <div className="md:justify-start md:self-end">
          <Link
            href="/about"
            className="flex items-center gap-2 text-[0.8rem] md:text-[0.9375rem] font-medium hover:text-accent transition-colors"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12_4338)">
                <mask
                  id="mask0_12_4338"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="10"
                  height="9"
                >
                  <path d="M5 0V8" stroke="currentColor" />
                  <path d="M1 3.83398L5 8L9 3.83398" stroke="currentColor" />
                </mask>
                <g mask="url(#mask0_12_4338)">
                  <path
                    d="M9.5 3.5H0.5V12.5H9.5V3.5Z"
                    fill="#14293E"
                    stroke="#14293E"
                  />
                </g>
                <mask
                  id="mask1_12_4338"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="10"
                  width="10"
                  height="9"
                >
                  <path d="M5 10V18" stroke="currentColor" />
                  <path d="M1 13.834L5 18L9 13.834" stroke="currentColor" />
                </mask>
                <g mask="url(#mask1_12_4338)">
                  <path
                    d="M9.5 3.5H0.5V12.5H9.5V3.5Z"
                    fill="#14293E"
                    stroke="#14293E"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_12_4338">
                  <rect width="10" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            More about us
          </Link>
        </div>
      </div>

      <div>
        <div className="section-title mb-13.25">
          True experience
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 border-t border-gray-200">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col md:flex-row items-center gap-1 md:gap-5 lg:gap-[27.12px] text-[#BEBEBE]"
            >
              <span className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.2rem] leading-none md:leading-28.25 tracking-[-5.65px] font-light">
                {stat.value}
              </span>
              <span className="text-[0.5rem] md:text-[1.03rem] md:max-w-[10ch] font-medium leading-normal md:leading-[20.97px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};