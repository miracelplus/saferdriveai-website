const ProductFlow = () => {
  const steps = [
    { icon: "💬", label: "Prompt", color: "bg-blue-500", description: "Natural language input" },
    { icon: "🗺️", label: "Map", color: "bg-green-500", description: "HD scene generation" },
    { icon: "🚗", label: "Traffic Flow", color: "bg-yellow-500", description: "Realistic behavior" },
    { icon: "💥", label: "Collision", color: "bg-red-500", description: "Adversarial events" },
    { icon: "📷", label: "Sensor Sim", color: "bg-purple-500", description: "Photorealistic output" },
    { icon: "📊", label: "Evaluation", color: "bg-indigo-500", description: "Safety metrics" },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-2">
            <span className="mr-2 text-lg">⚡</span>
            <span className="text-2xl font-semibold text-primary-600 dark:text-primary-400">SIMULATION PIPELINE</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
            TeraSim
            <span className="block bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              End-to-End Pipeline
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 font-semibold max-w-3xl mx-auto sm:text-xl md:text-2xl">
            From natural language prompt to comprehensive safety evaluation: A complete simulation workflow powered by generative AI
          </p>
        </div>
        
        {/* Pipeline Visualization */}
        <div className="mb-16 overflow-x-auto">
          <div className="flex min-w-[900px] items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 shadow-card">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} text-white text-2xl shadow-lg hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                  {step.label}
                </h3>
                <p className="text-2xl text-slate-600 dark:text-slate-400 text-center max-w-20">
                  {step.description}
                </p>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 ml-8 h-0.5 w-8 bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Pipeline Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-50">User-Friendly</h3>
            <p className="text-2xl text-slate-600 dark:text-slate-300">Natural language prompts make complex scenario generation accessible</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-50">Automated</h3>
            <p className="text-2xl text-slate-600 dark:text-slate-300">End-to-end automation from scenario generation to safety evaluation</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-50">Validated</h3>
            <p className="text-2xl text-slate-600 dark:text-slate-300">Research-backed methodology with proven real-world applicability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFlow; 