import { useEffect, useState } from "react";

function Footer() {
  const [newsletterMessage, setNewsletterMessage] = useState("");

  // Scroll to top feature
  useEffect(() => {
    const btn = document.getElementById("scrollToTop");

    const updateScrollButton = () => {
      if (!btn) return;

      const visible = window.scrollY > 300;
      btn.classList.toggle("opacity-100", visible);
      btn.classList.toggle("opacity-0", !visible);
      btn.classList.toggle("pointer-events-auto", visible);
      btn.classList.toggle("pointer-events-none", !visible);
      btn.tabIndex = visible ? 0 : -1;
      btn.setAttribute("aria-hidden", String(!visible));
    };

    window.addEventListener("scroll", updateScrollButton);
    updateScrollButton();

    return () => window.removeEventListener("scroll", updateScrollButton);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    setNewsletterMessage(
      "Newsletter sign-up is not connected yet. Please contact the store directly."
    );
  };

  return (
    <footer id="contact" className="relative bg-green-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-green-100 dark:border-green-800 transition-colors">
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
            <li><a href="#home" className="hover:text-green-600 dark:hover:text-green-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-green-600 dark:hover:text-green-300 transition">About</a></li>
            <li><a href="#license" className="hover:text-green-600 dark:hover:text-green-300 transition">License</a></li>
            <li><a href="#contact" className="hover:text-green-600 dark:hover:text-green-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Lankri Tiraha, RTO Road, Lankri Fazalpur, Moradabad, UP - 244001</li>
            <li>📞 <a href="tel:+919548260273" className="hover:text-green-600 dark:hover:text-green-300">+91 95482 60273</a></li>
            <li>✉️ <a href="mailto:suhailbaksh954@gmail.com" className="hover:text-green-600 dark:hover:text-green-300">suhailbaksh954@gmail.com</a></li>
            <li>🕒 Mon–Sat: 9:00 AM – 9:00 PM</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">Stay Updated</h4>
          <form onSubmit={handleNewsletterSubmit} className="flex items-center border border-green-200 dark:border-green-700 rounded overflow-hidden mb-2">
            <input
              type="email"
              name="email"
              required
              aria-label="Your email address"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm bg-transparent outline-none"
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">
              Subscribe
            </button>
          </form>
          {newsletterMessage && (
            <p className="text-xs mb-4 text-gray-600 dark:text-gray-400" role="status">
              {newsletterMessage}
            </p>
          )}

          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/share/19PGudzAuJ/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-300 transition" aria-label="Facebook">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/suhail_baksh07/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-300 transition" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://wa.me/919548260273"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 dark:hover:text-green-300 transition"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-green-100 dark:border-green-800">
        © {new Date().getFullYear()} Health Plus Medical Store. All rights reserved.
      </div>

      <button
        id="scrollToTop"
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 opacity-0 pointer-events-none"
        aria-label="Scroll to top"
        aria-hidden="true"
        tabIndex={-1}
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
