import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Source & Trust | SaferDrive AI",
  description: "TeraSim is the first AV testing tool featured on the cover of Nature. Built with Mcity and used by leading OEMs.",
  keywords: "TeraSim, open source, Nature, Mcity, UMTRI, AV testing, research",
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
      <Breadcrumb
        pageName="Open Source & Trust"
        description="Trusted by Researchers. Open for Developers."
      />
      
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          {/* Header Quote */}
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 dark:from-blue-900/20 dark:to-purple-900/20">
              <blockquote className="text-lg font-medium text-black dark:text-white sm:text-xl">
                "TeraSim is the first AV testing tool featured on the <strong>cover of Nature</strong>. Built with Mcity and used by leading OEMs."
              </blockquote>
            </div>
          </div>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {trustCards.map((card) => (
              <div
                key={card.id}
                className="rounded-xl bg-white p-8 shadow-one transition-all duration-300 hover:shadow-two dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark"
              >
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-5xl">
                    {card.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {card.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <Link
                    href={card.link}
                    target={card.external ? "_blank" : "_self"}
                    rel={card.external ? "noopener noreferrer" : ""}
                    className="inline-block rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                  >
                    {card.linkText}
                    {card.external && (
                      <span className="ml-2">↗</span>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Research Partnerships
              </h3>
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                TeraSim is developed in collaboration with world-class research institutions and industry partners, ensuring scientific rigor and practical applicability.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">🏛️</div>
                  <span className="text-sm font-semibold text-black dark:text-white">Mcity</span>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">🎓</div>
                  <span className="text-sm font-semibold text-black dark:text-white">UMTRI</span>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-primary">🔬</div>
                  <span className="text-sm font-semibold text-black dark:text-white">Nature Featured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustPage;
