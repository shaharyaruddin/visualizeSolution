import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Centered Contact Section */}
        <div className="text-center mb-16">
          <h4 className="text-3xl font-medium text-gray-800 mb-6 font-heading">
            Have a Project To Discuss?
          </h4>
          <a
            href="#"
            className="inline-block bg-[#288dc8] text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300 font-heading"
          >
            Contact Us
          </a>
        </div>

        {/* Footer Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-800 font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="/services/development"
                  className="font-manrope hover:text-[#288dc8]"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services/designing"
                  className="font-manrope hover:text-[#288dc8]"
                >
                  UI/UX Design and Development
                </a>
              </li>
              <li>
                <a
                  href="/services/cms-wordpress-shopify"
                  className="font-manrope hover:text-[#288dc8]"
                >
                  CMS (WordPress & Shopify)
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-marketing"
                  className="font-manrope hover:text-[#288dc8]"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services/seo"
                  className="font-manrope hover:text-[#288dc8]"
                >
                  SEO (Search Engine Optimization)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-800 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about-us" className="hover:text-[#288dc8] transition">
                  About Us
                </a>
              </li>
              <li className="font-manrope">
                <a
                  href="#portfolio"
                  className="hover:text-[#288dc8] transition"
                >
                  Portfolio
                </a>
              </li>
              <li className="font-manrope">
                <a href="#blogs" className="hover:text-[#288dc8] transition">
                  Blogs
                </a>
              </li>
              <li className="font-manrope">
                <a href="#careers" className="hover:text-[#288dc8] transition">
                  Careers
                </a>
              </li>
              <li className="font-manrope">
                <a href="#contact" className="hover:text-[#288dc8] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-800 font-heading">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="font-manrope">
                <a
                  href="mailto:contact@zenkoders.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@visualizesolutions.com
                </a>
              </li>
              <li className="font-manrope">
                <p>United States: +1 302 261 2627</p>
                <p>Pakistan: +92 326 9393454</p>
              </li>
              <li className="font-manrope">
                <p>2803 Philadelphia Pike Suite B #429</p>
                <p>Claymont, DE 19703</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm font-manrope">
          <p>© 2025 Visualize Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
