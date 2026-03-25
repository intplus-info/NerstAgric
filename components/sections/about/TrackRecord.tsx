const achievements = [
  "Establishment of integrated crop production systems.",
  "Setting up modern greenhouse facilities and agro-processing plants.",
  "Management of large-scale oil palm and cashew plantations.",
  "Strategic advisory for agricultural content and capacity building.",
];

export const TrackRecord = () => {
  return (
    <section className="w-full px-12 sm:px-18 md:px-24 lg:px-27.5 py-11.75 font-urbanist">
      <h2 className="text-[1.4rem] md:text-[1.7775rem] leading-[35.56px] font-semibold text-center mb-6 md:mb-12.5">
        Our Track Record
      </h2>
      <p className="text-[1.025rem] md:text-[1.25rem] leading-5 md:leading-[28.44px] text-center max-w-227.75 mx-auto mb-6">
        With operations spanning across Oyo, Osun, Ondo, Edo, and Cross River
        States, our footprint reflects our deep understanding of the diverse
        Nigerian agricultural landscape. Our portfolio includes:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-3 max-w-[890px] mx-auto list-disc list-outside pl-4 marker:text-[8px]">
        {achievements.map((item) => (
          <li
            key={item}
            className="text-[1.025rem] md:text-[1.25rem] leading-5 md:leading-[28.44px] pl-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
