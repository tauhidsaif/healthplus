function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative pt-24 pb-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full blur-[120px] opacity-20 -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-green-100 dark:bg-green-700 rounded-full blur-[120px] opacity-25 -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-12">
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute top-0 right-4 sm:right-12 bg-green-600 text-white text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-xl animate-bounce rotate-3 z-20">
            Local medical store
          </div>

          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-green-400/20 dark:bg-green-300/10 rounded-full blur-3xl animate-pulse z-0" />

          <div className="relative z-10 transition-transform duration-500 hover:scale-105">
            <img
              src="https://cdn-icons-png.flaticon.com/512/846/846449.png"
              alt="Healthcare illustration"
              loading="lazy"
              decoding="async"
              className="w-full max-w-[240px] mx-auto drop-shadow-2xl dark:brightness-90 animate-fade-in"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 relative z-10">
          <h2 id="about-title" className="text-4xl sm:text-5xl font-extrabold text-green-800 dark:text-green-300 leading-tight">
            About <span className="text-green-600 dark:text-green-400">Health Plus</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
            Health Plus Medical Store is located at Lankri Tiraha on RTO Road in Lankri Fazalpur, Moradabad, Uttar Pradesh. The store offers medicines, wellness essentials and personal-care products. For a specific item, call ahead to confirm availability and save an unnecessary visit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {[
              { icon: "💊", title: "Medicine enquiries", desc: "Contact the store to ask about the medicine you are looking for." },
              { icon: "🩺", title: "Prescription enquiries", desc: "Call ahead with prescription-related questions and confirm availability." },
              { icon: "🌿", title: "Wellness essentials", desc: "Ask about wellness and everyday personal-care products." },
              { icon: "📍", title: "Convenient location", desc: "Find the store at Lankri Tiraha, RTO Road, Lankri Fazalpur, Moradabad." }
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/60 dark:bg-white/10 backdrop-blur-md border border-green-100 dark:border-green-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">
                    {icon}
                  </span>
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">{title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
