const ProductModules = () => {
  const modules = [
    {
      id: 1,
      icon: "🗺️",
      title: "HD Map & 3D Scene Generation",
      description: "Generate simulation-ready HD maps from OSM or proprietary sources. Support OpenDrive, Lanelet2, and 3D scene rendering for CARLA and Omniverse.",
      features: [
        "OSM to simulation conversion",
        "OpenDrive & Lanelet2 support",
        "CARLA & Omniverse integration",
        "3D scene rendering"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      icon: "🚦",
      title: "Traffic Flow & Incident Simulation",
      description: "Simulate real-world traffic flows including historical, predictive, and randomized behavior. Support pedestrians, cyclists, congestion, road closures, and weather.",
      features: [
        "Historical traffic patterns",
        "Pedestrian & cyclist simulation",
        "Weather & congestion modeling",
      ],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      icon: "💥",
      title: "Real-World Challenges Generation",
      description: "Automatically generate corner-case scenarios like unprotected turns, merges, or red-light violations. Control collision types, severity, and actor responsibility",
      features: [
        "Static (Construction Zones)",
        "Dynamic (Emergency Vehicles)",
        "Behavioral (Unprotected Turns)",
      ],
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      icon: "📷",
      title: "Photorealistic Sensor Simulation",
      description: "Generate camera and LiDAR outputs with realistic lighting, occlusion, and custom FOV. Flexible configuration for AV stacks and sensor types.",
      features: [
        "Camera & LiDAR simulation",
        "Realistic lighting & occlusion",
        "Multi-sensor support"
      ],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      id: 5,
      icon: "🔄",
      title: "Unified API for Seamless Integration",
      description: "Inject rare events into naturalistic flows using APIs. Integrate with AV simulators like CARLA, NVIDIA DRIVE Sim.",
      features: [
        "API-driven integration",
        "CARLA & DRIVE Sim support",
        "Closed-loop testing",
      ],
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-accent-50 dark:bg-accent-900/20 px-4 py-2">
            <span className="mr-2 text-lg">🧩</span>
            <span className="text-2xl font-semibold text-accent-600 dark:text-accent-400">MODULAR ARCHITECTURE</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
            Powerful
            <span className="block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Building Blocks
            </span>
          </h2>
          <p className="text-2xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium max-w-3xl mx-auto">
            Each module is designed to work independently or as part of the complete pipeline. Mix and match components to suit your specific testing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Module Header */}
              <div className="relative p-8 pb-6">
                <div className="flex items-start space-x-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${module.gradient} text-4xl text-white shadow-lg`}>
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 sm:text-2xl mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Features List */}
              <div className="px-8 pb-8">
                <div className="space-y-3">
                  {module.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                        <svg className="h-3 w-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-2xl font-medium text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-50">
              Ready to explore TeraSim?
            </h3>
            <p className="mb-6 text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Experience the power of generative AI simulation with our live demo or dive deeper into the technical specifications.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="http://3.149.40.164:7860/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-2xl font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-glow"
              >
                <span className="mr-2">🚀</span>
                Try Live Demo
              </a>
              <a
                href="/trust"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-transparent px-6 py-3 text-2xl font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="mr-2">📄</span>
                Read the Research
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductModules; 