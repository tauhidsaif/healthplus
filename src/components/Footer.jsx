import { useEffect } from "react";

function Footer() {
  // Scroll to top feature
  useEffect(() => {
    const btn = document.getElementById("scrollToTop");
    const toggleBtn = () => {
      if (window.scrollY > 300) {
        btn?.classList.remove("opacity-0");
        btn?.classList.add("opacity-100");
      } else {
        btn?.classList.remove("opacity-100");
        btn?.classList.add("opacity-0");
      }
    };
    window.addEventListener("scroll", toggleBtn);
    return () => window.removeEventListener("scroll", toggleBtn);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-green-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-16 border-t border-green-100 dark:border-green-800 transition-colors">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-green-600 text-white font-bold rounded-full flex items-center justify-center shadow text-lg">
              H+
            </div>
            <span className="text-xl font-bold text-green-800 dark:text-green-300">Health Plus</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            A complete healthcare destination for medicines, wellness products, and quick delivery with care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-300 transition">About</a></li>
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-300 transition">Services</a></li>
            <li><a href="#" className="hover:text-green-600 dark:hover:text-green-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Lankri Tiraha, RTO Road, Lankri Fazalpur, Moradabad,  UP - 244001</li>
            <li>📞 +91 95482 60273</li>
            <li>✉️ suhailbaksh954@gmail.com</li>
            <li>🕒 Mon–Sat: 9:00 AM – 9:00 PM</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">Stay Updated</h4>
          <form className="flex items-center border border-green-200 dark:border-green-700 rounded overflow-hidden mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm bg-transparent outline-none"
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-green-600 transition" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-green-600 transition" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-green-600 transition" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-green-600 transition" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center text-xs py-4 border-t border-green-100 dark:border-green-800">
        © {new Date().getFullYear()} Health Plus Medical Store. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <button
        id="scrollToTop"
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 opacity-0"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
