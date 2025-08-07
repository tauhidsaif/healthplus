export default function License() {
  return (
    <section
      id="license"
      className="relative py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* Glowing background shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/30 dark:bg-green-400/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-300/20 dark:bg-green-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-2000"></div>

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          Store License & Certification
        </h2>
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
          Fully certified and government-registered, Health Plus Medical Store ensures complete compliance with national drug regulations for your safety and trust.
        </p>

        {/* Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,128,0,0.2)] p-8 grid md:grid-cols-2 gap-10 items-center transform transition-all hover:scale-[1.015] duration-300 border border-green-100 dark:border-green-700">
          {/* License Info */}
          <div className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">
              License Details
            </h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200 text-base leading-relaxed">
              <li><span className="font-medium">📄 License No:</span> UP21210002152</li>
            <li><span className="font-medium">📅 Date of License Issue:</span> 31st August 2024</li>
            <li><span className="font-medium">🆔 Registration No:</span> 147392</li>
              <li><span className="font-medium">🏛️ Licensing Authority:</span> Manu Shankar</li>
              <li><span className="font-medium">🧑 Proprietor:</span> Mohd Suhail</li>
              <li><span className="font-medium">🏪 Store Name:</span> Health Plus Medical Store</li>
            </ul>
          </div>

          {/* Owner Image */}
          <div className="flex justify-center">
            <div className="relative group transition-transform duration-300 transform hover:scale-105">
              <img
                src="src/owner.png"
                alt="Store Owner"
                className="w-48 h-48 object-cover rounded-full border-[6px] border-green-500 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-green-500/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
