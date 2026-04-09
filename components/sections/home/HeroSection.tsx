import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full">
      <Navbar />
      {/* Background image */}
      <Image
  src="/hero/hero.gif"
  alt="Agricultural field"
  fill
  unoptimized       // ← add this — Next.js doesn't optimize GIFs, this prevents warnings
  className="object-cover object-center"
  priority
/>
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-end justify-end h-full min-h-screen pb-50 px-8 sm:px-14 md:px-20 lg:px-26.25">
        <div className="max-w-172.5">
          {/* Top CTA pill */}
          <div className="mb-2.75">
           <Link
              href="https://calendly.com/nerstagric"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free 30 minutes consultation on Calendly"
              className="inline-flex items-center bg-white/21 text-white text-[0.8rem] sm:text-[1rem] md:text-[1.25rem] font-semibold tracking-[0.02em] px-6 md:px-8 lg:px-10 py-2.5 md:py-4.25 rounded-[11px] hover:bg-white/30 transition-colors"
              >
               Get Free 30 Minutes Consultation
           </Link>
          </div>

          {/* Headline */}
          <h1 className="text-white text-[2.4rem] md:text-[2.88rem] leading-12.25 tracking-[0.09em] font-urbanist">
            Transforming Agribusiness Concepts into High-Yield Realities
          </h1>

          {/* WhatsApp CTA */}
          <Link
            href="https://wa.me/2347067324474"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-36 md:bottom-40 right-10 sm:right-16 md:right-24 lg:right-31.75 inline-flex items-center gap-3 bg-background hover:underline text-foreground text-[14.21px] leading-[21.32px] pl-20 pr-[8.5px] pt-1 pb-1.5 rounded-[7px] transition-colors"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="Whatsapp icon"
              width={74}
              height={74}
              className="absolute -left-2 scale-105"
            />
            Chat With Us
          </Link>
        </div>
      </div>
    </section>
  );
};
