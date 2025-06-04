const ProblemGapSolution = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* The Problem */}
        <div className="mb-16">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-8 lg:mb-0">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  01. The Problem
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Autonomous driving struggles with the long-tail problem
                </h2>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  AVs often fail in rare scenarios that are trivial for human drivers — like a pedestrian running a red light or a vehicle stalling on an on-ramp.
                </p>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  These edge cases are precisely what make autonomous driving so challenging, yet they're nearly impossible to predict and prepare for using traditional methods.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] text-center">
                <div className="rounded-xl bg-gradient-to-br from-red-50 to-orange-50 p-8 dark:from-red-900/20 dark:to-orange-900/20">
                  <div className="mb-4 text-6xl">⚠️</div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Long-tail Events
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Rare but critical scenarios that can cause AV failures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Gap */}
        <div className="mb-16">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 lg:order-2">
              <div className="mb-8 lg:mb-0">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  02. The Gap
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Traditional testing is costly, risky, and doesn't scale
                </h2>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Real-world testing is expensive and dangerous. Simulations rely heavily on hand-crafted scenarios, making them hard to scale and insufficient for uncovering unknown risks.
                </p>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Current approaches cannot systematically discover the scenarios that matter most for safety validation.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 lg:order-1">
              <div className="relative mx-auto max-w-[500px] text-center">
                <div className="rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 p-8 dark:from-yellow-900/20 dark:to-orange-900/20">
                  <div className="mb-4 text-6xl">🏗️</div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    Hand-crafted Scenarios
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Limited, expensive, and can't cover the full range of edge cases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-8 lg:mb-0">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  03. The Solution
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  TeraSim — a generative AI simulation platform
                </h2>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  At SaferDrive AI, we built TeraSim — a generative AI simulation platform that is <strong>realistic</strong>, <strong>automated</strong>, and <strong>scalable</strong>.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  TeraSim systematically uncovers unknown unsafe events, simulates rare interactions, and generates sensor-level outputs — all from a natural language prompt.
                </p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <span className="text-sm font-bold text-primary">✓</span>
                    </div>
                    <span className="text-base font-medium text-black dark:text-white">
                      Realistic scenarios
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <span className="text-sm font-bold text-primary">✓</span>
                    </div>
                    <span className="text-base font-medium text-black dark:text-white">
                      Automated generation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <span className="text-sm font-bold text-primary">✓</span>
                    </div>
                    <span className="text-base font-medium text-black dark:text-white">
                      Scalable platform
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] text-center">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-green-50 p-8 dark:from-blue-900/20 dark:to-green-900/20">
                  <div className="mb-4 text-6xl">🤖</div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    TeraSim Platform
                  </h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Generative AI simulation for comprehensive AV safety testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemGapSolution; 