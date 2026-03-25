import Image from "next/image";

const partners = [
  {
    name: "Partner 1",
    logo: "/images/partners/samstar.png",
    width: 96,
    height: 48,
  },
  {
    name: "Partner 2",
    logo: "/images/partners/g-and-s.png",
    width: 117,
    height: 97,
  },
  {
    name: "Partner 3",
    logo: "/images/partners/hh-farms.png",
    width: 70,
    height: 58,
  },
  {
    name: "Partner 4",
    logo: "/images/partners/oada.png",
    width: 97,
    height: 97,
  },
  {
    name: "Partner 5",
    logo: "/images/partners/iita.png",
    width: 111,
    height: 54,
  },
  {
    name: "Partner 6",
    logo: "/images/partners/astral.png",
    width: 126,
    height: 51,
  },
];

export const PartnersSection = () => {
  return (
    <section className="w-full px-6 sm:px-20 md:px-26 lg:px-28.75 py-16 md:py-22">
      <h2 className="section-head mb-10.75">
        Our Clients & Partners
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10.75">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="grid place-items-center w-34.75 h-30.5 border-feint shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
