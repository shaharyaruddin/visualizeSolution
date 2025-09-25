import React from "react";
import FloatingSVGGroup from "../ui/FloatingSVGGroup";
import { BrainCircuit, Gem, Rocket, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto py-36 relative overflow-hidden"
    >
      <FloatingSVGGroup
        elements={[
          {
            icon: <Gem className="text-purple-400/90" />,
            position: { top: "20%", right: "15%" },
            size: "xl",
            opacity: 0.8,
            delay: 0.3,
          },
          {
            icon: <Rocket className="text-blue-400/90" />,
            position: { bottom: "15%", left: "15%" },
            size: "lg",
            opacity: 0.8,
            delay: 0.7,
          },
          {
            icon: <BrainCircuit className="text-pink-400/90" />,
            position: { top: "40%", left: "25%" },
            size: "md",
            opacity: 0.7,
            delay: 0.5,
          },
        ]}
      />

      <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
            <span className="text-black font-heading">About Us</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>

          <div className="space-y-6 text-lg text-black">
            <p className="font-manrope">
              Visualize Solution was born from the shared vision of three
              friends, each with over 9+ years of hands-on experience in
              software development. We witnessed firsthand the need for
              reliable, affordable, and high-quality software solutions,
              particularly in Nepal.
            </p>
            <p className="font-manrope">
              Frustrated by the disconnect between client needs and the
              solutions offered, we founded Visualize Solution to bridge that
              gap. Our mission is simple: to build trust with our clients and
              deliver software that not only meets their requirements but also
              exceeds their expectations.
            </p>
            <p className="font-manrope">
              We are committed to providing exceptional support and fostering
              long-term partnerships. We are passionate about leveraging
              technology to drive positive change, both within Nepal and beyond.
            </p>
            <p className="text-xl font-semibold text-black font-heading">Our Philosophy:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="font-manrope">
                Founded on the principles of trust, quality, and affordability
              </li>
              <li className="font-manrope">
                Transparency in every step of the development process
              </li>
              <li className="font-manrope">
                Small team of experts delivering big results
              </li>
              <li className="font-manrope">
                Leveraging AI tools where possible for enhanced efficiency
              </li>
              <li className="font-manrope">
                Deep commitment to understanding client needs
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <a href="#services">
              <Button
                className="bg-black 
  text-white text-lg font-semibold px-8 py-6 
  rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] 
  border border-gray-700 
  hover:bg-gray-900 hover:scale-105 
  hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)] 
  transition-all duration-300 ease-in-out font-heading"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById("services");
                  if (targetElement) {
                    const yOffset = -80;
                    const y =
                      targetElement.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "auto" });
                  }
                }}
              >
                Explore Our Services
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-black bg-gradient-to-br from-black via-gray-900 to-amber-900/20 group-hover:border-white/20 transition-all duration-500"></div>

            {/* Main card content */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-heading">
                  Why Choose Us?
                </h3>
              </div>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white font-heading">
                      Unwavering Commitment to Quality
                    </h4>
                    <p className="text-gray-300 mt-2 font-manrope">
                      We go above and beyond to deliver software that exceeds
                      your expectations.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <BrainCircuit className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white font-heading">
                      Affordable Excellence
                    </h4>
                    <p className="text-gray-300 mt-2 font-manrope">
                      High-quality software doesn't have to break the bank. We
                      offer competitive pricing without compromising quality.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <Gem className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white font-heading">
                      Local Expertise, Global Standards
                    </h4>
                    <p className="text-gray-300 mt-2 font-manrope">
                      We understand unique market challenges and apply global
                      best practices to deliver impactful solutions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white font-heading">
                      Dedicated Support
                    </h4>
                    <p className="text-gray-300 mt-2 font-manrope">
                      We're more than just developers; we're your partners. We
                      provide ongoing support to ensure your software meets
                      evolving needs.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
