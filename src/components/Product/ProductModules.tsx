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
      ]
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
        "Road closure scenarios"
      ]
    },
    {
      id: 3,
      icon: "💥",
      title: "Accident & Adversity Generation",
      description: "Automatically generate corner-case scenarios like unprotected turns, merges, or red-light violations. Control collision types, severity, and actor responsibility with natural language prompts.",
      features: [
        "Corner-case generation",
        "Natural language prompts",
        "Collision type control",
        "Responsibility modeling"
      ]
    },
    {
      id: 4,
      icon: "📷",
      title: "Photorealistic Sensor Simulation",
      description: "Generate camera and LiDAR outputs with realistic lighting, occlusion, and custom FOV. Flexible configuration for AV stacks and sensor types.",
      features: [
        "Camera & LiDAR simulation",
        "Realistic lighting & occlusion",
        "Custom FOV configuration",
        "Multi-sensor support"
      ]
    },
    {
      id: 5,
      icon: "🔄",
      title: "Behavioral Adversity & Co-simulation API",
      description: "Inject rare events into naturalistic flows using APIs. Integrate with AV simulators like CARLA, NVIDIA DRIVE Sim.",
      features: [
        "API-driven integration",
        "CARLA & DRIVE Sim support",
        "Closed-loop testing",
        "Real-time feedback"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
            Modular Architecture
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
            Each module is designed to work independently or as part of the complete pipeline
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.id}
              className="rounded-xl bg-white p-8 shadow-one dark:bg-dark dark:shadow-three"
            >
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-4xl">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl">
                  {module.title}
                </h3>
              </div>
              
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {module.description}
              </p>
              
              <ul className="space-y-2">
                {module.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <span className="text-xs font-bold text-primary">✓</span>
                    </div>
                    <span className="text-sm text-body-color dark:text-body-color-dark">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModules; 