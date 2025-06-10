const ProductFlow = () => {
  const steps = [
    { label: "Prompt", icon: "textInput" },
    { label: "Map", icon: "mapLocation" },
    { label: "Traffic Flow", icon: "vehicles" },
    { label: "Challenge", icon: "collision" },
    { label: "Sensor Sim", icon: "sensors" },
    { label: "Evaluation", icon: "analytics" },
  ];

  const renderIcon = (iconType) => {
    const iconClass = "w-8 h-8 text-slate-400 dark:text-slate-500";
    
    switch (iconType) {
      case "textInput":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case "mapLocation":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "vehicles":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 16l3-3 3 3" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7h16l-1 5H5L4 7z" />
          </svg>
        );
      case "collision":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 12l5 5 5-5" />
          </svg>
        );
      case "sensors":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            <circle cx="9" cy="12" r="1" strokeWidth={1} />
          </svg>
        );
      case "analytics":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
    <section className="py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="mb-4 inline-flex items-center border border-slate-200 dark:border-slate-700 px-4 py-2">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">SIMULATION PIPELINE</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
            TeraSim
            <span className="block text-slate-600 dark:text-slate-400">
              End-to-End Pipeline
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From natural language prompt to comprehensive safety evaluation: A complete simulation workflow powered by generative AI
          </p>
        </div>
        
        {/* Pipeline Visualization */}
        <div className="mb-16 overflow-x-auto">
          <div className="flex min-w-[1200px] items-start justify-between border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-32">
                <div className="mb-4 flex h-20 w-20 items-center justify-center">
                  {renderIcon(step.icon)}
                </div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-50 text-center">
                  {step.label}
                </h3>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full w-8 h-px bg-slate-300 dark:bg-slate-600 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Pipeline Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center">
                <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">User-Friendly</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Natural language prompts make complex scenario generation accessible</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center">
                <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">Automated</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">End-to-end automation from scenario generation to safety evaluation</p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center">
                <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">Validated</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Research-backed methodology with proven real-world applicability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFlow; 