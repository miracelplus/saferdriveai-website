const ProblemGapSolution = () => {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container">
        {/* The Problem */}
        <div className="mb-24">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <div className="mb-4 inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/20 px-4 py-2">
                  <span className="mr-2 text-lg">⚠️</span>
                  <span className="text-2xl font-semibold text-red-600 dark:text-red-400">01. THE PROBLEM</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                  Autonomous driving struggles with the
                  <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    long-tail problem
                  </span>
                </h2>
                <p className="mb-6 text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold">
                  AVs often fail in rare scenarios that are trivial for human drivers — like a pedestrian running a red light or a vehicle stalling on an on-ramp.
                </p>
                <p className="text-2xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  These edge cases are precisely what make autonomous driving so challenging, yet they&apos;re nearly impossible to predict and prepare for using traditional methods.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-2xl border border-red-200 dark:border-red-800/50 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 backdrop-blur-sm">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500 text-5xl shadow-lg">
                      ⚠️
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-slate-50">
                    Long-tail Events
                  </h3>
                  <p className="text-center text-2xl text-slate-600 dark:text-slate-300 font-medium">
                    Rare but critical scenarios that can cause AV failures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Gap */}
        <div className="mb-24">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 lg:order-2">
              <div className="mb-12 lg:mb-0">
                <div className="mb-4 inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2">
                  <span className="mr-2 text-lg">🏗️</span>
                  <span className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">02. THE GAP</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                  Traditional testing is
                  <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    costly, risky, and doesn&apos;t scale
                  </span>
                </h2>
                <p className="mb-6 text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold">
                  Real-world testing is expensive and dangerous. Simulations rely heavily on hand-crafted scenarios, making them hard to scale and insufficient for uncovering unknown risks.
                </p>
                <p className="text-2xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  Current approaches cannot systematically discover the scenarios that matter most for safety validation.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-2xl border border-yellow-200 dark:border-yellow-800/50 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 backdrop-blur-sm">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-500 text-5xl shadow-lg">
                      🏗️
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-slate-50">
                    Hand-crafted Scenarios
                  </h3>
                  <p className="text-center text-2xl text-slate-600 dark:text-slate-300 font-medium">
                    Limited, expensive, and can&apos;t cover the full range of edge cases
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
              <div className="mb-12 lg:mb-0">
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2">
                  <span className="mr-2 text-lg">🤖</span>
                  <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">03. THE SOLUTION</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                  TeraSim — a
                  <span className="block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                    generative AI simulation platform
                  </span>
                </h2>
                <p className="mb-6 text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold">
                  At SaferDrive AI, we built TeraSim — a generative AI simulation platform that is <strong className="text-slate-900 dark:text-slate-50">realistic</strong>, <strong className="text-slate-900 dark:text-slate-50">automated</strong>, and <strong className="text-slate-900 dark:text-slate-50">scalable</strong>.
                </p>
                <p className="mb-8 text-2xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  TeraSim systematically uncovers unknown unsafe events, simulates rare interactions, and generates sensor-level outputs — all from a natural language prompt.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex items-center space-x-3 rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-slate-700 dark:text-slate-300">
                      Realistic scenarios
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500 text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-slate-700 dark:text-slate-300">
                      Automated generation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-slate-700 dark:text-slate-300">
                      Scalable platform
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-2xl border border-blue-200 dark:border-blue-800/50 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 backdrop-blur-sm">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-5xl shadow-glow">
                      🤖
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-slate-50">
                    TeraSim Platform
                  </h3>
                  <p className="text-center text-2xl text-slate-600 dark:text-slate-300 font-medium">
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