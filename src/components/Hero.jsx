function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-30 animate-pulse -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-green-200 rounded-full blur-[150px] opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center h-full space-y-16">
        {/* Hero Text */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-700 dark:text-green-400 leading-tight">
            Your Health, <span className="text-green-600">Our Priority</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">

            Welcome to <strong>Health Plus Medical Store </strong>, your trusted destination for medicines,
            wellness products, personal care, and genuine healthcare support.
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a
            href="https://maps.app.goo.gl/uRPk6m1nqeG75KGy9?g_st=aw" // ← Replace with your real location
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg shadow-lg transition"
          >
            Locate Store
          </a>


            <a
              href="#"
              className="bg-white dark:bg-gray-800 border border-green-600 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-gray-700 px-6 py-3 rounded-md text-lg shadow transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-slow w-full">
          {/* Card 1 */}
          <div className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-green-100 dark:border-green-900 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-50 group-hover:bg-green-100 transition mb-6 shadow-inner mx-auto">
              <span className="text-2xl text-green-600">💊</span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
              Genuine Medicines
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Verified, top-quality medications sourced from licensed and trusted pharmaceutical companies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-green-100 dark:border-green-900 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-50 group-hover:bg-green-100 transition mb-6 shadow-inner mx-auto">
              <span className="text-2xl text-green-600">🌿</span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
              Wellness Essentials
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              From immunity boosters to daily vitamins, keep your family safe and strong with premium wellness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-green-100 dark:border-green-900 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-50 group-hover:bg-green-100 transition mb-6 shadow-inner mx-auto">
            <span className="text-2xl text-green-600">🧾</span>
          </div>
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
            Prescription Services
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Bring your prescription and get trusted, pharmacist-verified medicines with proper guidance.
          </p>
        </div>


        </div>
      </div>
    </section>
  );
}

export default Hero;
