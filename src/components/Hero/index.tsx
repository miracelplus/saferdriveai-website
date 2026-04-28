import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-slate-900 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Subtle grid background with a light gradient for a tech feel */}
        <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-30 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent"></div>
        
        <div className="container relative max-w-none px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-7xl text-center">
                <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl">
                  Autonomy is Coming
                  <span className="block text-primary-600 dark:text-primary-300">
                    Are We Testing It Right?
                  </span>
                </h1>
                
                {/* Modern scenario visualization */}
                <div className="mx-auto mb-12 max-w-8xl rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div className="flex flex-col items-center">
                      <video 
                        className="w-full h-64 md:h-80 lg:h-96 rounded-lg"
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
                        className="w-full h-64 md:h-80 lg:h-96 rounded-lg"
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
                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 italic">
                      &ldquo;Never seen in your training data.&rdquo;
                    </p>
                    <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300">
                      TeraSim uncovers endless real-world edge cases automatically.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Link
                    href="https://www.youtube.com/watch?v=Fm3d5hAdgQ4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100 px-8 py-4 text-lg font-medium text-white dark:text-slate-900 transition-all duration-200 hover:bg-slate-800 dark:hover:bg-slate-200"
                  >
                    Watch TeraSim Demo
                  </Link>
                  <Link
                    href="/product"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-8 py-4 text-lg font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Explore the Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
