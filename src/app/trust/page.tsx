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
      title: "GitHub Repository",
      description: "Open source code and documentation for TeraSim simulation platform",
      link: "https://github.com/mcity/TeraSim",
      linkText: "View on GitHub",
      external: true
    },
    {
      id: 2,
      title: "Research Paper",
      description: "Scientific publication detailing TeraSim methodology and validation",
      link: "https://arxiv.org/abs/2503.03629",
      linkText: "Read on arXiv",
      external: true
    },
    {
      id: 3,
      title: "Live Demo",
      description: "Interactive demonstration of TeraSim&apos;s scenario generation capabilities",
      link: "http://3.149.40.164:7860/",
      linkText: "Try Demo",
      external: true
    }
  ];

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white dark:bg-slate-950 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
        
        <div className="container relative">
          <div className="mx-auto max-w-6xl text-center">
            {/* Main Hero Section */}
            <h1 className="mb-8 text-5xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-6xl md:text-7xl lg:text-8xl">
              TeraSim builds upon
              <span className="block text-slate-600 dark:text-slate-400">
                groundbreaking research
              </span>
            </h1>
            
            <p className="mb-12 text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
              Featured on Nature&apos;s cover. Developed with Mcity and adopted by leading OEMs for real-world AV testing.
            </p>

            {/* Research Highlights */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">Published Research</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Featured research publication</p>
              </div>
              <div className="text-center p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">Industry Adoption</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Real-world adoption</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container">
          {/* Access Section */}
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
              Open for 
              <span className="block text-slate-600 dark:text-slate-400">
                Everyone
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Access our research, code, and platform — built for transparency and collaboration
            </p>
          </div>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 max-w-6xl mx-auto">
            {trustCards.map((card) => (
              <div
                key={card.id}
                className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8"
              >
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                    {card.id === 1 && (
                      <svg className="w-10 h-10 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {card.id === 2 && (
                      <svg className="w-10 h-10 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {card.id === 3 && (
                      <svg className="w-10 h-10 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    )}
                  </div>
                  <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-50">
                    {card.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {card.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <Link
                    href={card.link}
                    target={card.external ? "_blank" : "_self"}
                    rel={card.external ? "noopener noreferrer" : ""}
                    className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-600 bg-slate-900 dark:bg-slate-100 px-6 py-3 text-sm font-medium text-white dark:text-slate-900"
                  >
                    {card.linkText}
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
