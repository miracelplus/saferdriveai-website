import Link from "next/link";

const WhyTeraSim = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Why TeraSim?
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Open-Source & Industry-Backed
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color">
              Built on an open ecosystem to drive innovation in AV safety testing.
            </p>
          </div>
          <div className="wow fadeInUp" data-wow-delay=".3s">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              1000x More Efficient
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color">
              AI-powered automation uncovers corner cases without costly real-world testing.
            </p>
          </div>
          <div className="wow fadeInUp" data-wow-delay=".4s">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Seamless Integration
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color">
              Works with CARLA, Autoware, and existing simulation stacks.
            </p>
          </div>
          <div className="wow fadeInUp" data-wow-delay=".5s">
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Proven Industry Adoption
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color">
              Trusted by Mcity, top OEMs, and leading researchers.
            </p>
          </div>
        </div>

        <div className="wow fadeInUp mt-12 flex justify-center" data-wow-delay=".2s">
          <Link
            href="https://github.com/saferdrive-ai/terasim"
            className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Explore TeraSim on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyTeraSim; 