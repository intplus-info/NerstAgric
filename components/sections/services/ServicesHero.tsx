import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

export const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col text-white font-urbanist">
      <Navbar />
      <Image
        src="/images/services/hero.jpg"
        alt="Farmers working in a field"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/42 grid place-items-center text-center px-8 md:pt-10.75 md:pb-28">
        <h1 className="text-[2rem] md:text-[2.1875rem] leading-10 md:leading-12.25 tracking-[0.09em] font-semibold mb-3">
          Our Services
        </h1>
        <p className="text-[1rem] md:text-[1.125rem] leading-5 md:leading-[26.51px] tracking-[0.09em] max-w-[55ch]">
          We provide a comprehensive menu of services designed to cover every
          stage of the agribusiness lifecycle.
        </p>
      </div>
    </section>
  );
};