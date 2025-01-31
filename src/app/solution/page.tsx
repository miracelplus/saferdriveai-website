import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Solution | Open-Source Simulation for Safer Autonomous Driving",
  description: "Discover how we revolutionize AV testing with AI-powered environment generation and corner case discovery.",
};

const SolutionPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
            <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              How We Revolutionize AV Testing
            </h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  AI-Powered Environment Generation
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color">
                  Automatically creates naturalistic & adversarial environments (NADE), enabling comprehensive testing of autonomous vehicles in diverse scenarios.
                </p>

                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Corner Case Discovery
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color">
                  Uncover critical real-world rare incidents and improve system robustness through advanced simulation techniques.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  1000-100,000x Faster Testing
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color">
                  Reduce reliance on costly physical tests while improving accuracy through our advanced simulation platform.
                </p>

                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Seamless Integration
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color">
                  Works with CARLA, Autoware, and existing simulation stacks, making it easy to incorporate into your current testing workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="py-16">
            <h2 className="mb-8 text-2xl font-bold text-black dark:text-white">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".1s">
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  Roundabout Safety Testing
                </h3>
                <p className="text-base text-body-color">
                  Comprehensive testing of AV behavior in complex roundabout scenarios.
                </p>
              </div>
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".15s">
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  Mcity Complex Urban Environments
                </h3>
                <p className="text-base text-body-color">
                  Simulation of intricate urban scenarios in partnership with Mcity.
                </p>
              </div>
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".2s">
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  Waymo OpenMotion Dataset Reconstruction
                </h3>
                <p className="text-base text-body-color">
                  Accurate reconstruction and analysis of real-world driving data.
                </p>
              </div>
              <div className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144]" data-wow-delay=".25s">
                <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
                  Neural Simulation Scenarios
                </h3>
                <p className="text-base text-body-color">
                  Advanced 3DGS-powered environment generation for realistic testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionPage; 