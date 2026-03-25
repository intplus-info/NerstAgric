import { ArrowUpRight } from "@/components/ui/Icons";
import Link from "next/link";
import Image from "next/image";

const expertise = [
  {
    title: "Strategic Advisory & Pre-Investment",
    image: "/images/strategic-advisory.jpg",
    href: "/",
  },
  {
    title: "Farm Development & Production Management",
    image: "/images/farm-development.jpg",
    href: "/",
  },
  {
    title: "Operations, Logistics & Value Chain",
    image: "/images/operations-logistics.jpg",
    href: "/",
  },
  {
    title: "Business Support & Digital Transformation",
    image: "/images/business-support.jpg",
    href: "/",
  },
  { 
    title: "Human Capital & Compliance", 
    image: "/images/human-capital.jpg",
    href: "/",
  },
];

export const ExpertiseSection = () => {
  return (
    <section className="w-full primary-gradient px-12 sm:px-24 md:px-30 lg:px-36.75 py-12 sm:py-24 md:py-30 lg:py-36.75">
      <h2 className="text-white section-title mb-12 md:mb-18.25">
        Our Areas of Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16 lg:gap-x-[56.67px] lg:gap-y-17.25">
        {expertise.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="relative flex items-center justify-center max-w-112.75 aspect-451/276 border-b-[1.18px] border-[#BEBEBE] hover:border-b-transparent transition-all duration-300 ease-out group cursor-pointer"
          >
            <div className="absolute top-0 w-full flex justify-between items-center self-start z-10 group-hover:top-[70%] group-hover:w-384/444 transition-all duration-300 ease-out">
              <span className="text-white text-[1rem] md:text-[1.25rem] lg:text-[1.414rem] group-hover:text-[0.875rem] group-hover:md:text-[1.125rem] leading-5 md:leading-[28.75px] group-hover:leading-4 group-hover:md:leading-[24.86px] transition-all duration-300 ease-out font-medium font-urbanist max-w-[20ch]">
                {item.title}
              </span>
              <span className="p-1 lg:w-[43.49px] aspect-square rounded-full bg-white group-hover:bg-primary-light group-hover:text-white group-hover:scale-95 transition-all duration-300 ease-out flex justify-center items-center">
                <ArrowUpRight />
              </span>
            </div>

            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              className="object-cover rounded-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
