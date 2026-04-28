const ProblemGapSolution = () => {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container">
        {/* The Problem */}
        <div className="mb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
              Autonomous driving struggles with the
              <span className="block text-slate-700 dark:text-slate-300">
                long-tail problem
              </span>
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
              AVs often fail in rare situations humans handle easily — a pedestrian running a red light or a stalled car on the ramp.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              These edge cases make autonomy challenging and are nearly impossible to predict with traditional methods.
            </p>
          </div>
        </div>

        {/* The Gap */}
        <div className="mb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
              Traditional testing is
              <span className="block text-slate-700 dark:text-slate-300">
                costly, risky, and doesn&apos;t scale
              </span>
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
              Real-world testing is costly and risky. Hand-crafted simulations don&apos;t scale and miss unknown risks.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Current approaches can&apos;t systematically discover the scenarios that matter most.
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
              TeraSim — a
              <span className="block text-slate-700 dark:text-slate-300">
                generative AI simulation platform
              </span>
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
              We built TeraSim — a generative AI simulation platform that&apos;s <strong className="text-slate-900 dark:text-slate-50">realistic</strong>, <strong className="text-slate-900 dark:text-slate-50">automated</strong> and <strong className="text-slate-900 dark:text-slate-50">scalable</strong>.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              It uncovers unknown unsafe events, simulates rare interactions and outputs sensor data from a simple text prompt.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 rounded-lg bg-slate-50 dark:bg-slate-800 px-4 py-3">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-600 text-white">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base font-medium text-slate-700 dark:text-slate-300">
                  Realistic scenarios
                </span>
              </div>
              <div className="flex items-center space-x-2 rounded-lg bg-slate-50 dark:bg-slate-800 px-4 py-3">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-600 text-white">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base font-medium text-slate-700 dark:text-slate-300">
                  Automated generation
                </span>
              </div>
              <div className="flex items-center space-x-2 rounded-lg bg-slate-50 dark:bg-slate-800 px-4 py-3">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-600 text-white">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base font-medium text-slate-700 dark:text-slate-300">
                  Scalable platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemGapSolution; 