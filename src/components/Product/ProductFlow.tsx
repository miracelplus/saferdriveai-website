const ProductFlow = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
            TeraSim Pipeline
          </h2>
          <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
            From prompt to evaluation: A complete simulation workflow
          </p>
          
          {/* Flow Diagram */}
          <div className="mb-16 overflow-x-auto">
            <div className="flex min-w-[800px] items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                  <span className="text-2xl">💬</span>
                </div>
                <span className="text-sm font-semibold text-black dark:text-white">Prompt</span>
              </div>
              
              <div className="mx-4 h-0.5 flex-1 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                  <span className="text-2xl">🗺️</span>
                </div>
                <span className="text-sm font-semibold text-black dark:text-white">Map</span>
              </div>
              
              <div className="mx-4 h-0.5 flex-1 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <span className="text-2xl">🚗</span>
                </div>
                <span className="text-sm font-semibold text-black dark:text-white">Traffic Flow</span>
              </div>
              
              <div className="mx-4 h-0.5 flex-1 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-white">
                  <span className="text-2xl">💥</span>
                </div>
                <span className="text-sm font-semibold text-black dark:text-white">Collision Generation</span>
              </div>
              
              <div className="mx-4 h-0.5 flex-1 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 text-white">
                  <span className="text-2xl">📷</span>
                </div>
                <span className="text-sm font-semibold text-black dark:text-white">Sensor Simulation</span>
              </div>
              
              <div className="mx-4 h-0.5 flex-1 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <span className="text-2xl">📊</span>
                </div>
                <span className="text-sm font-semibold text-black dark:text-white">Evaluation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFlow; 