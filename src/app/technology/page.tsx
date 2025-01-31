import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TeraSim Technology | Cutting-Edge AV Testing Technology",
  description: "Explore the advanced technology behind TeraSim's AV testing platform, including AI-driven risk analysis and large-scale simulation capabilities.",
};

const TechnologyPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              The Science Behind TeraSim
            </h1>

            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
                Three Core Modules
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
                  <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    TeraSim AV Testing Engine
                  </h3>
                  <p className="text-base text-body-color">
                    Automates environment creation and edge case discovery for comprehensive AV testing.
                  </p>
                </div>

                <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
                  <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Deep Learning & RL
                  </h3>
                  <p className="text-base text-body-color">
                    AI-driven risk analysis for comprehensive AV safety validation.
                  </p>
                </div>

                <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".2s">
                  <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Large-Scale Citywide Simulation
                  </h3>
                  <p className="text-base text-body-color">
                    Move beyond isolated tests to full-scale urban AV safety assessments.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  ISO 34502 & SOTIF Compliance
                </h3>
                <p className="text-base text-body-color">
                  Our platform meets the highest safety evaluation standards in the industry, ensuring your AV testing follows all necessary regulations.
                </p>
              </div>

              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Seamless Compatibility
                </h3>
                <p className="text-base text-body-color">
                  Integrates smoothly with CARLA, Autoware, and commercial AV testing stacks, making it easy to incorporate into your existing workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage; 