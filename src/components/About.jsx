function About() {
  return (
    <section id="about" className="relative pt-24 pb-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Decorative glowing shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full blur-[120px] opacity-20 -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-green-100 dark:bg-green-700 rounded-full blur-[120px] opacity-25 -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-12">
        {/* Illustration */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/846/846449.png"
              alt="Healthcare illustration"
              className="w-full max-w-[240px] mx-auto drop-shadow-2xl dark:brightness-90"
            />
          </div>
          <div className="absolute top-0 right-0 bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow-lg rotate-6">
            Trusted Pharmacy
          </div>
        </div>

        {/* Text + Features */}
        <div className="lg:col-span-7 space-y-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 dark:text-green-300 leading-tight">
            About <span className="text-green-600">Health Plus</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
            We’re your modern-day health partner. <strong>Health Plus</strong> brings together authenticity,
            fast delivery, expert support, and affordable pricing — all wrapped in care.
          </p>

          {/* Responsive Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {[
              { icon: "💊", title: "Genuine Products", desc: "Only trusted, verified medicines from licensed providers." },
              { icon: "🩺", title: "Trusted Care",  desc: "Providing reliable and prompt support for all your medical needs."},
              { icon: "✅", title: "Trusted Pharmacy", desc: "Authentic medicines and health essentials from your local store." },
              { icon: "❤️", title: "Care with Heart", desc: "We don’t just sell medicine, we support your wellness." }
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
