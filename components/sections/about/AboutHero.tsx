import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative min-h-screen w-full">
      <Navbar />
      <Image
        src="/images/about/hero.jpg"
        alt="Two women working in an agricultural field"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/42 px-8 sm:px-16 md:px-22 lg:px-26.5 py-6 md:py-8 lg:py-10.75">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,424px)_1fr] gap-6 md:gap-12 lg:gap-15.75 text-white font-urbanist">
          <h1 className="text-[2rem] leading-10 md:text-[2.1875rem] md:leading-12.25 tracking-[0.09em] font-semibold text-pretty">
            Turning Agricultural Potential into Industrial Performance
          </h1>
          <p className="text-[1rem] leading-5 md:text-[1.125rem] md:leading-[26.51px] tracking-[0.09em] font-medium border-l-2 border-[#0DB04A] pl-3.75">
            NerstAgric is a premier agricultural consulting and project
            implementation organization. We specialize in bridging the gap
            between high-level investment strategy and on-ground operational
            success. By combining technical scientific knowledge with decades of
            field experience, we help individuals, corporate organizations, and
            investors navigate the complexities of the agricultural sector to
            build profitable, sustainable ventures.
          </p>
        </div>
      </div>
    </section>
  );
};
