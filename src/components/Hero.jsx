function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 dark:bg-green-900 rounded-full blur-3xl opacity-30 animate-pulse -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-green-200 dark:bg-green-800 rounded-full blur-[150px] opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center h-full space-y-12">
        <div className="space-y-6 animate-fade-in">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
            Your local medical store
          </p>
          <h1 id="home-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-800 dark:text-green-300 leading-tight">
            Health Plus Medical Store
            <span className="block text-green-600 dark:text-green-400">in Moradabad, Uttar Pradesh</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Find medicines, wellness essentials and personal care products at Lankri Tiraha, RTO Road, Lankri Fazalpur. Call the store to ask about availability before visiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="tel:+919548260273" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              Call +91 95482 60273
            </a>
            <a href="https://maps.app.goo.gl/uRPk6m1nqeG75KGy9?g_st=aw" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50 dark:text-green-300 dark:hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              Get directions
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-slow w-full">
          <div className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-green-100 dark:border-green-900 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/70 group-hover:bg-green-100 dark:group-hover:bg-green-900/80 transition mb-6 shadow-inner mx-auto">
              <span className="text-2xl text-green-600 dark:text-green-400" aria-hidden="true">💊</span>
            </div>
            <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
              Medicines
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Contact the store about the medicines you need and their current availability.
            </p>
          </div>

          <div className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-green-100 dark:border-green-900 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/70 group-hover:bg-green-100 dark:group-hover:bg-green-900/80 transition mb-6 shadow-inner mx-auto">
              <span className="text-2xl text-green-600 dark:text-green-400" aria-hidden="true">🌿</span>
            </div>
            <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
              Wellness essentials
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Ask about wellness and daily personal-care products available at the store.
            </p>
          </div>

          <div className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-green-100 dark:border-green-900 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/70 group-hover:bg-green-100 dark:group-hover:bg-green-900/80 transition mb-6 shadow-inner mx-auto">
              <span className="text-2xl text-green-600 dark:text-green-400" aria-hidden="true">🧾</span>
            </div>
            <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
              Prescription enquiries
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Call ahead with prescription-related enquiries and confirm availability before making a trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
