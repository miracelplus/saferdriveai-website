const ProductModules = () => {
  const modules = [
    {
      id: 1,
      title: "HD Map & 3D Scene Generation",
      description: "Generate simulation-ready HD maps from OSM or proprietary sources. Support OpenDrive, Lanelet2, and 3D scene rendering for CARLA and Omniverse.",
      features: [
        "OSM to simulation conversion",
        "OpenDrive & Lanelet2 support",
        "CARLA & Omniverse integration",
        "3D scene rendering"
      ],
      icon: "map"
    },
    {
      id: 2,
      title: "Traffic Flow & Incident Simulation",
      description: "Simulate real-world traffic flows including historical, predictive, and randomized behavior. Support pedestrians, cyclists, congestion, road closures, and weather.",
      features: [
        "Historical traffic patterns",
        "Pedestrian & cyclist simulation",
        "Weather & congestion modeling",
      ],
      icon: "traffic"
    },
    {
      id: 3,
      title: "Real-World Challenges Generation",
      description: "Automatically generate corner-case scenarios like unprotected turns, merges, or red-light violations. Control collision types, severity, and actor responsibility",
      features: [
        "Static (Construction Zones)",
        "Dynamic (Emergency Vehicles)",
        "Behavioral (Unprotected Turns)",
      ],
      icon: "warning"
    },
    {
      id: 4,
      title: "Photorealistic Sensor Simulation",
      description: "Generate camera and LiDAR outputs with realistic lighting, occlusion, and custom FOV. Flexible configuration for AV stacks and sensor types.",
      features: [
        "Camera & LiDAR simulation",
        "Realistic lighting & occlusion",
        "Multi-sensor support"
      ],
      icon: "sensor"
    },
    {
      id: 5,
      title: "Unified API for Seamless Integration",
      description: "Inject rare events into naturalistic flows using APIs. Integrate with AV simulators like CARLA, NVIDIA DRIVE Sim.",
      features: [
        "API-driven integration",
        "CARLA & DRIVE Sim support",
        "Closed-loop testing",
      ],
      icon: "integration"
    }
  ];

  const renderIcon = (iconType) => {
    const iconClass = "w-8 h-8 text-slate-400 dark:text-slate-500";
    
    switch (iconType) {
      case "map":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case "traffic":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "warning":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case "sensor":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "integration":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        );
    }
  };

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="mb-4 inline-flex items-center border border-slate-200 dark:border-slate-700 px-4 py-2">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">MODULAR ARCHITECTURE</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
            Powerful
            <span className="block text-slate-600 dark:text-slate-400">
              Building Blocks
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Each module is designed to work independently or as part of the complete pipeline. Mix and match components to suit your specific testing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.id}
              className="group relative overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            >
              {/* Module Header */}
              <div className="relative p-8 pb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center">
                    {renderIcon(module.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
                      {module.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
                      <div className="flex h-4 w-4 items-center justify-center">
                        <div className="h-1 w-1 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-8">
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-50">
              Ready to explore TeraSim?
            </h3>
            <p className="mb-6 text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Experience the power of generative AI simulation with our live demo or dive deeper into the technical specifications.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="https://app.saferdrive.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-600 bg-slate-900 dark:bg-slate-100 px-6 py-3 text-sm font-medium text-white dark:text-slate-900"
              >
                Try Live Demo
              </a>
              <a
                href="/trust"
                className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-600 bg-transparent px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
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