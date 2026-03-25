import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

export const BlogHero = () => {
  return (
    <section className="relative w-full min-h-[40vh] flex flex-col">
      <Navbar />
      <Image
        src="/images/blog/hero.jpg"
        alt="Blog hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/39" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-8 py-12">
        <h1 className="text-white text-[2.4rem] md:text-[2.665rem] leading-10 md:leading-[49.74px] font-semibold">
          Blog (Agri-Insights)
        </h1>
      </div>
    </section>
  );
};