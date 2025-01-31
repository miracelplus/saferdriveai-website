import Image from "next/image";

const partners = [
  {
    name: "Mcity University of Michigan",
    logo: "/images/partners/mcity.svg",
    category: "Research"
  },
  {
    name: "Leading OEMs",
    logo: "/images/partners/oems.svg",
    category: "Industry"
  }
];

const TrustedBy = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".1s">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Trusted By
            </h2>
            <p className="text-base text-body-color md:text-lg">
              Validated by leading research institutions and automotive industry
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="wow fadeInUp flex flex-col items-center justify-center"
              data-wow-delay=".1s"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className="grayscale transition hover:grayscale-0"
              />
              <p className="mt-4 text-lg font-medium text-black dark:text-white">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy; 