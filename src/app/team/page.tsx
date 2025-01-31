import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TeraSim Team | Pioneers in AV Safety & Simulation",
  description: "Meet the experts behind TeraSim - leaders in autonomous vehicle safety, simulation, and research.",
};

const TeamPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Pioneers in AV Safety & Simulation
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
                <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/team/howie.jpg"
                    alt="Dr. Howie Sun"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  Dr. Howie Sun
                </h3>
                <p className="mb-4 text-lg font-medium text-body-color">
                  CEO & Co-founder
                </p>
                <ul className="list-inside list-disc space-y-4 text-base text-body-color">
                  <li>Ph.D. in Scientific Computing, University of Michigan</li>
                  <li>Leading expert in AV simulation and AI-driven safety validation</li>
                  <li>Published in Nature & Nature Communications</li>
                  <li>10+ years experience in autonomous systems</li>
                </ul>
              </div>

              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
                <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/team/henry.jpg"
                    alt="Prof. Henry Liu"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  Prof. Henry Liu
                </h3>
                <p className="mb-4 text-lg font-medium text-body-color">
                  Co-founder & Scientific Advisor
                </p>
                <ul className="list-inside list-disc space-y-4 text-base text-body-color">
                  <li>Director of Mcity, University of Michigan</li>
                  <li>Pioneer in AV safety regulation & intelligent transportation research</li>
                  <li>20+ years experience in transportation systems</li>
                  <li>Leading expert in connected and automated vehicle technology</li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
                Research Achievements & Contributions
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Publications
                  </h3>
                  <p className="text-base text-body-color">
                    50+ peer-reviewed papers in top journals and conferences on AV safety and simulation.
                  </p>
                </div>
                <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Patents
                  </h3>
                  <p className="text-base text-body-color">
                    15+ patents in autonomous vehicle testing and safety validation methods.
                  </p>
                </div>
                <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".2s">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Industry Impact
                  </h3>
                  <p className="text-base text-body-color">
                    Partnerships with leading OEMs and research institutions worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage; 