import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TeraSim Industry Applications | AV Testing Solutions",
  description: "Discover how TeraSim benefits OEMs, Tier 1 suppliers, insurance companies, and regulators in the autonomous vehicle industry.",
};

const IndustryPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              How TeraSim Benefits Key Stakeholders
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  For OEMs & Tier 1 Suppliers
                </h3>
                <ul className="list-inside list-disc space-y-4 text-base text-body-color">
                  <li>Reduce testing costs and accelerate AV deployment</li>
                  <li>Validate L3-L5 automated systems efficiently</li>
                  <li>Comprehensive safety validation</li>
                  <li>Faster time-to-market</li>
                </ul>
              </div>

              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  For Insurance Companies
                </h3>
                <ul className="list-inside list-disc space-y-4 text-base text-body-color">
                  <li>Accurately assess AV risk profiles with unbiased safety data</li>
                  <li>Enhance actuarial models for AV insurance coverage</li>
                  <li>Data-driven risk assessment</li>
                  <li>Improved policy pricing</li>
                </ul>
              </div>

              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".2s">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  For Government & Regulators
                </h3>
                <ul className="list-inside list-disc space-y-4 text-base text-body-color">
                  <li>Ensure compliance with evolving AV safety standards</li>
                  <li>Improve urban planning and public safety regulations</li>
                  <li>Standardized testing frameworks</li>
                  <li>Evidence-based policy making</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-16">
            <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
              Data Insights: Real vs. Simulated Testing
            </h2>
            <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-primary">1000x</h3>
                  <p className="text-base text-body-color">Faster Testing Speed</p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-primary">95%</h3>
                  <p className="text-base text-body-color">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-primary">100%</h3>
                  <p className="text-base text-body-color">Safety Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPage; 