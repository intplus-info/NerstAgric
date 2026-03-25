import Image from "next/image";
import Link from "next/link";

export const AboutCTA = () => {
  return (
    <section className="relative w-full font-urbanist text-white overflow-hidden">
      <Image
        src="/images/about/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0DB04AAD]" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center gap-3 px-8 py-21.25 text-center">
        <h2 className="text-[1.4rem] md:text-[1.77625rem] leading-6 md:leading-[35.53px] font-semibold">
          Ready to Transform Your Agribusiness?
        </h2>
        <p className="text-[0.85rem] md:text-[1rem] leading-5 md:leading-[24.7px]">
          Get Your Free 30-Minute Consultation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7.5">
          <Link
            href="/contact"
            className="border border-white text-[0.8rem] md:text-[1rem] leading-4 md:leading-[21.32px] p-3.5 hover:bg-white/70 hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="bg-white text-primary text-[0.8rem] md:text-[1rem] leading-4 md:leading-[21.32px] p-3.5 hover:bg-white/70 transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
