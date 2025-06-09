import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-20 dark:opacity-10"></div>
        
        <div className="container relative max-w-none px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-7xl text-center">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-8xl lg:leading-tight">
                  Autonomy is Coming.
                  <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    But Are We Testing It Right?
                  </span>
                </h1>
                {/* <p className="mb-10 text-xl leading-relaxed text-slate-700 dark:text-slate-200 sm:text-2xl md:text-2xl lg:text-2xl font-semibold max-w-4xl mx-auto">
                  Stress Testing Physical AI with GenAI
                </p> */}
                
                {/* Modern scenario visualization */}
                <div className="mx-auto mb-12 max-w-8xl rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-8 shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div className="flex flex-col items-center">
                      <video 
                        className="w-full h-64 md:h-80 lg:h-96 rounded-xl shadow-lg"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      >
                        <source src="/aa_pedestrian.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="flex flex-col items-center">
                      <video 
                        className="w-full h-64 md:h-80 lg:h-96 rounded-xl shadow-lg"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      >
                        <source src="/roundabout.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className="space-y-3">
                                      <div className="space-y-3">
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 italic">
                      "This scenario never existed in your training data."
                    </p>
                  </div>
                    <p className="text-2xl font-semibold text-primary-600 dark:text-primary-400">
                      That's why we built TeraSim — infinite real-world edge cases, fully automated.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Link
                    href="http://3.149.40.164:7860/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-xl bg-primary-600 px-8 py-4 text-2xl font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    <span className="mr-2">🚀</span>
                    Try Live Demo
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link
                    href="/product"
                    className="group inline-flex items-center justify-center rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-transparent px-8 py-4 text-2xl font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    <span className="mr-2">🔍</span>
                    Explore the Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern gradient overlay */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl dark:from-primary-900/20 dark:to-accent-900/20"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-accent-200/20 to-primary-200/20 rounded-full blur-3xl dark:from-accent-900/20 dark:to-primary-900/20"></div>
      </section>
    </>
  );
};

export default Hero;
