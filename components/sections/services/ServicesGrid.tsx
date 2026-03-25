import Image from "next/image";

const services = [
  {
    title: "Agribusiness Consulting",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum.",
    image: "/images/services/consulting.jpg",
  },
  {
    title: "Farm Project Development & Implementation",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum.",
    image: "/images/services/farm-development.jpg",
  },
  {
    title: "Farm inputs/Agro-commodity procurement",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum.",
    image: "/images/services/procurement.jpg",
  },
  {
    title: "Livestock Production Systems",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum.",
    image: "/images/services/livestock.jpg",
  },
  {
    title: "Agribusiness Training & Advisory",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum.",
    image: "/images/services/training.jpg",
  },
  {
    title: "Agritech development",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum.",
    image: "/images/services/agritech.jpg",
  },
];

export const ServicesGrid = () => {
  return (
    <section className="w-full px-12 sm:px-18 md:px-24 lg:px-27.5 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-22 gap-y-16">
        {services.map((service) => (
          <article key={service.title} className="flex flex-col gap-4">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h2 className="text-[1.4rem] md:text-[1.7775rem] leading-[35.56px] font-semibold line-clamp-2 min-h-16 mb-3.5">
              {service.title}
            </h2>
            <p className="text-[1rem] md:text-[1.333125rem] leading-6 md:leading-[35.56px] text-[#0DB04A] pl-7 border-l-2 border-[#0DB04A]">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
