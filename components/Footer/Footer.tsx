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

<<<<<<< HEAD
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
=======
      <FloatingSVGGroup
        elements={[
          {
            icon: <Rocket className="text-blue-400/60" />,
            position: { bottom: "60%", left: "5%" },
            size: "md",
            opacity: 0.3,
            delay: 0.3,
          },
          {
            icon: <BrainCircuit className="text-purple-400/60" />,
            position: { top: "30%", right: "8%" },
            size: "md",
            opacity: 0.3,
            delay: 0.7,
          },
        ]}
        maxElements={2}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Visualize Solution Text */}
          <div className="text-center md:text-left">
            <motion.div
              className="flex items-center justify-center md:justify-start mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter inline-block relative"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(96, 165, 250, 0)",
                    "0 0 15px rgba(96, 165, 250, 0.5)",
                    "0 0 5px rgba(96, 165, 250, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Visualize<span className="font-light">Solutions</span>
                <motion.div
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </motion.div>
            <p className="mt-2 text-gray-400 max-w-xs textFont">
              Delivering innovative software solutions and services to
              businesses worldwide.
            </p>

            <motion.div
              className="flex justify-center md:justify-start space-x-6 mt-6"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.a
                href="https://www.facebook.com/Visualize Solution"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label=" Visualize Solution Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://x.com/Visualize Solution"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label=" Visualize Solution X page"
              >
                <X className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/Visualize Solution"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label=" Visualize Solution LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              className="text-gray-400 text-sm mt-6 textFont"
              whileHover={{ color: "#60A5FA" }}
            >
              © 2025  Visualize Solution. All rights reserved.
            </motion.div>
>>>>>>> b405236b3e159dff77677d2230013ca2ed4e2d91
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-800 font-heading">
              Quick Links
            </h4>
<<<<<<< HEAD
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
=======
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                { text: "Home", href: "#home" },
                { text: "Services", href: "#services" },
                { text: "Products", href: "#products" },
                { text: "Team", href: "#team" },
                { text: "Testimonials", href: "#testimonials" },
                { text: "FAQ", href: "#faq" },
                { text: "Contact Us", href: "#contact" },
                { text: "Email Us", href: "mailto:Visualize Solution@gmail.com" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors textFont"
                  whileHover={{ x: 5, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>>>>>>> b405236b3e159dff77677d2230013ca2ed4e2d91
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
<<<<<<< HEAD
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
=======
            <motion.div
              className="space-y-5 text-gray-400"
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0.9 }}
            >
              <motion.div
                className="flex items-center justify-center md:justify-end gap-3"
                whileHover={{ x: -5, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="textFont">
                  Birtamod, Koshi Province, Nepal
                </span>
              </motion.div>
              <motion.div
                className="flex items-center justify-center md:justify-end gap-3"
                whileHover={{ x: -5, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <span>
                  <a
                    href="tel:+9779817996672"
                    aria-label="Call +977 9817996672"
                    className="textFont"
                  >
                    +977 9817996672
                  </a>
                </span>
              </motion.div>
              <motion.div
                className="flex items-center justify-center md:justify-end gap-3"
                whileHover={{ x: -5, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span>
                  <a
                    href="mailto:admin@Visualize Solution.com"
                    aria-label="Email admin@Visualize Solution.com"
                    className="textFont"
                  >
                    admin@Visualize Solution.com
                  </a>
                </span>
              </motion.div>
            </motion.div>
>>>>>>> b405236b3e159dff77677d2230013ca2ed4e2d91
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
