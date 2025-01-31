import Image from "next/image";

const Standards = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".1s">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Standards-Oriented Design
            </h2>
            <p className="text-base text-body-color md:text-lg">
              Built with international AV safety standards in mind
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-primary">
              <Image
                src="/images/standards/iso21448.svg"
                alt="ISO 21448"
                width={32}
                height={32}
              />
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              ISO 21448 (SOTIF) Aligned
            </h3>
            <p className="text-base text-body-color">
              Designed to align with Safety Of The Intended Functionality principles, helping identify and address potential safety risks in autonomous systems.
            </p>
          </div>

          <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-primary">
              <Image
                src="/images/standards/iso34502.svg"
                alt="ISO 34502"
                width={32}
                height={32}
              />
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              ISO 34502 Ready
            </h3>
            <p className="text-base text-body-color">
              Architecture designed with ISO 34502 verification and validation methodologies in mind, working towards comprehensive testing frameworks.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-body-color italic">
            Note: TeraSim's design principles align with these standards, and we are actively working towards formal validation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Standards; 