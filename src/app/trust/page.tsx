import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Source & Trust | SaferDrive AI",
  description: "TeraSim builds upon groundbreaking research from University of Michigan that was featured on Nature&apos;s cover. Developed with Mcity and adopted by leading OEMs.",
  keywords: "TeraSim, open source, Nature, Mcity, UMTRI, University of Michigan, AV testing, research",
};

const TrustPage = () => {
  const trustCards = [
    {
      id: 1,
      icon: "💻",
      title: "GitHub Repository",
      description: "Open source code and documentation for TeraSim simulation platform",
      link: "https://github.com/mcity/TeraSim",
      linkText: "View on GitHub",
      external: true
    },
    {
      id: 2,
      icon: "📄",
      title: "Research Paper",
      description: "Scientific publication detailing TeraSim methodology and validation",
      link: "https://arxiv.org/abs/2503.03629",
      linkText: "Read on arXiv",
      external: true
    },
    {
      id: 3,
      icon: "🚀",
      title: "Live Demo",
      description: "Interactive demonstration of TeraSim's scenario generation capabilities",
      link: "http://3.149.40.164:7860/",
      linkText: "Try Demo",
      external: true
    }
  ];

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-tech-grid bg-tech-grid opacity-20 dark:opacity-10"></div>
        
        <div className="container relative">
          <div className="mx-auto max-w-6xl text-center">
            {/* Main Hero Section */}
            <h1 className="mb-8 text-5xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl">
              TeraSim builds upon
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                groundbreaking research
              </span>
            </h1>
            
            <p className="mb-12 text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold max-w-5xl mx-auto sm:text-3xl md:text-3xl lg:text-4xl">
              Featured on Nature&apos;s cover. Developed with Mcity and adopted by leading OEMs for real-world AV testing.
            </p>

            {/* Research Highlights */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">University of Michigan</h3>
                <p className="text-2xl text-slate-600 dark:text-slate-300">World-class research institution</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Published Research</h3>
                <p className="text-2xl text-slate-600 dark:text-slate-300">Featured research publication</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Industry Adoption</h3>
                <p className="text-2xl text-slate-600 dark:text-slate-300">Real-world adoption</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern gradient overlay */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl dark:from-primary-900/20 dark:to-accent-900/20"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-accent-200/20 to-primary-200/20 rounded-full blur-3xl dark:from-accent-900/20 dark:to-primary-900/20"></div>
      </section>
      
      <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container">
          {/* Access Section */}
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
              Open for 
              <span className="block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Everyone
              </span>
            </h2>
            <p className="text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold max-w-3xl mx-auto">
              Access our research, code, and platform — built for transparency and collaboration
            </p>
          </div>

          {/* Trust Cards - Larger */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 max-w-6xl mx-auto">
            {trustCards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-white p-12 shadow-card transition-all duration-300 hover:shadow-card-hover hover:scale-105 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-7xl">
                    {card.icon}
                  </div>
                  <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-50">
                    {card.title}
                  </h3>
                  <p className="mb-8 text-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                    {card.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <Link
                    href={card.link}
                    target={card.external ? "_blank" : "_self"}
                    rel={card.external ? "noopener noreferrer" : ""}
                    className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-8 py-4 text-2xl font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    {card.linkText}
                    {card.external && (
                      <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustPage;
