import Image from "next/image";

const integrationTools = [
  {
    name: "CARLA",
    logo: "/images/integration/carla.svg",
    description: "Seamless integration with CARLA simulator, enhancing its capabilities with advanced environment generation"
  },
  {
    name: "Autoware AWSim",
    logo: "/images/integration/autoware.svg",
    description: "Native support for Autoware AWSim, providing additional safety validation features"
  },
  {
    name: "Your Simulation",
    logo: "/images/integration/custom.svg",
    description: "Easily integrate TeraSim with your existing simulation stack through our flexible plugin architecture"
  },
  {
    name: "Safety-First Design",
    logo: "/images/integration/standards.svg",
    description: "Enhance any integrated simulator with advanced safety validation capabilities"
  }
];

const Integration = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".1s">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Flexible Integration
            </h2>
            <p className="text-base text-body-color md:text-lg">
              Enhance your existing simulation infrastructure with TeraSim's advanced capabilities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {integrationTools.map((tool, index) => (
            <div
              key={tool.name}
              className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]"
              data-wow-delay={`.${index + 1}s`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-primary/[.08]">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {tool.name}
              </h3>
              <p className="text-base text-body-color">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="wow fadeInUp mb-8" data-wow-delay=".1s">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Plugin Architecture
            </h3>
            <p className="text-base text-body-color">
              Our flexible plugin system enhances any simulation platform with:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="wow fadeInUp rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
              <p className="text-base text-body-color">
                ✓ Advanced Environment Generation
              </p>
            </div>
            <div className="wow fadeInUp rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]" data-wow-delay=".2s">
              <p className="text-base text-body-color">
                ✓ Risk Discovery
              </p>
            </div>
            <div className="wow fadeInUp rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]" data-wow-delay=".25s">
              <p className="text-base text-body-color">
                ✓ Safety Validation Tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration; 
