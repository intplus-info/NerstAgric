import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

export const ContactHero = () => {
  return (
    <section className="relative w-full min-h-[40vh] flex flex-col text-white font-urbanist">
      <Navbar />
      <Image
        src="/images/hero2.jpg"
        alt="NerstAgric contact"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/31" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-8 py-12">
        <h1 className="text-[2.2rem] md:text-[2.665rem] leading-10 md:leading-[49.74px] font-semibold mb-3">
          Contact Us
        </h1>
        <p className="text-[0.8rem] md:text-[1rem] leading-4 md:leading-[21.32px] max-w-[35ch] md:max-w-[60ch]">
          We&apos;re here to assist you. Whether it&aposs;s inquiries,
          consultations, or support, don&apos;t hesitate to reach out.
        </p>
      </div>
    </section>
  );
};
