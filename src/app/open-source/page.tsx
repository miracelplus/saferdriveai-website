import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TeraSim Open Source | Driving Industry Collaboration",
  description: "Explore TeraSim's open-source ecosystem and business model, designed to accelerate innovation in AV safety testing.",
};

const OpenSourcePage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Driving Industry Collaboration with Open-Source
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  TeraSim Open-Source Core
                </h3>
                <p className="mb-8 text-base text-body-color">
                  Accelerating industry innovation through community-driven simulation tools. Our core platform is open-source, allowing developers and researchers to contribute and improve AV safety testing.
                </p>
                <Link
                  href="https://github.com/saferdrive-ai/terasim"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/80"
                >
                  Explore on GitHub
                </Link>
              </div>

              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Enterprise Licensing
                </h3>
                <p className="mb-8 text-base text-body-color">
                  Commercial support for large-scale AV testing, including priority feature development, dedicated support, and custom integrations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/80"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".2s">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Exclusive Proprietary Datasets
                </h3>
                <p className="mb-8 text-base text-body-color">
                  High-fidelity driving behavior models for advanced AV training, based on real-world data and sophisticated simulation scenarios.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/80"
                >
                  Request Access
                </Link>
              </div>

              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".25s">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Consulting & Research Partnerships
                </h3>
                <p className="mb-8 text-base text-body-color">
                  Work with our experts to refine AV safety validation, develop custom solutions, and advance the state of autonomous vehicle testing.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/80"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenSourcePage; 