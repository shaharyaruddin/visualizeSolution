import React from "react";
import { motion } from "framer-motion";
import FloatingSVGGroup from "../ui/FloatingSVGGroup";
import {
  BrainCircuit,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Facebook,
  X,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 bg-black bg-gradient-to-br from-black via-gray-900 to-amber-900/20 backdrop-blur-md min-h-[320px] flex items-center rounded-t-[4rem] border-t border-white/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="whitespace-nowrap h-full flex items-center"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[15vw] font-black text-white/[0.03] tracking-tight select-none leading-none h-full flex items-center"
            >
              KOSHILABS&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

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
          {/* KoshiLabs Text */}
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
                Koshi<span className="font-light">Labs</span>
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
                href="https://www.facebook.com/koshilabs"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label="KoshiLabs Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://x.com/koshilabs"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label="KoshiLabs X page"
              >
                <X className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/koshilabs"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label="KoshiLabs LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              className="text-gray-400 text-sm mt-6 textFont"
              whileHover={{ color: "#60A5FA" }}
            >
              © 2025 KoshiLabs. All rights reserved.
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-6 textFont">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                { text: "Home", href: "#home" },
                { text: "Services", href: "#services" },
                { text: "Products", href: "#products" },
                { text: "Team", href: "#team" },
                { text: "Testimonials", href: "#testimonials" },
                { text: "FAQ", href: "#faq" },
                { text: "Contact Us", href: "#contact" },
                { text: "Email Us", href: "mailto:koshilabs@gmail.com" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors textFont"
                  whileHover={{ x: 5, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold text-white mb-6 textFont">
              Contact Information
            </h4>
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
                    href="mailto:admin@koshilabs.com"
                    aria-label="Email admin@koshilabs.com"
                    className="textFont"
                  >
                    admin@koshilabs.com
                  </a>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
