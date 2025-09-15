import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  Code2,
  BrainCircuit,
  Users,
  Rocket,
  Zap,
  Wand2,
  Cpu,
  Gem,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Import our new components
import Navbar from "@/components/layout/Navbar";

import FloatingSVGGroup from "@/components/ui/FloatingSVGGroup";
import ShowPricingCard from "@/components/ShowPricingCard";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/Faq";
import Testimonials from "@/components/Testimonials/Testimonials";
import Services from "@/components/Services/Services";
import Contact from "@/components/contact/contact";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const HomePage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Add instant scrolling
  useEffect(() => {
    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const yOffset = -80; // Offset for fixed header
            const y =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "auto" });
          }
        }
      });
    });

    // Clean up
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExMYHSggGBolGxMTITEhJSkrOjouFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAf/xAAfEAEBAQEAAgMBAQEAAAAAAAAAARECAzEhQXFR0ZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+zokGVjSwBiOHAGLCgGNBoDGpAO+sAeTvPie3A2gEkgSSwEYoQSOHAEZtPVZBJIEkZACKgBGgEkgSSBJIHVNYgCJgM4cLn11voFacEakBSNxmG3AXfWRwt09fKALCQZwnEDJSBGGQgIOquqwCSMAJrEASIKQWmsgkkCSQJHCAxqc1vjj7roAxYcOAzitxddSf443rQXXW/ikDUgGNCRoFuOdunr5WAysbkWAzIcNjFoLoIyAjImgEZ66PfWfEcwSMhAYZDitBBEAr8NemLQCSBIyEBIsJnIDHXjj+nnnGgTj15rvwvJ3vxPTmD14x5PJn6PJ5M+J7caBtt9qKGAo1FGoCVKwGcaWHAGC2Q9dSONugbdSwgoYcOAGe+sPfWMAzI1E1IAwyGQddAuqypGpAEhOMdXQHV1LCAwogDikakASa6czFIQMcvL39Q+Tr6jiCSQIwNQE1BGoBjUh55aAYsJAYx33g8nk+o54CUhw4ChihBDrrD1cc8oLDIcOAMPo24526CtUhMgKQyGQd3AZ6rKOAlhw4AkOGEBI1gjUBM+TvPXtd9442gEkCSQExGA1G+OVxz9ugJIWgbXHvvfQ6638EgCNKQgMakRBC034ZBnGsOGQBFes/V11nw5gvfsyGQ4CkMhkVAW45k4Aw4pGsAYULQWlQgl11ityOPV0BbvyDiwAcMQA41zzrrOJ/AcY6ccDx867AkmeusA9dY4ddWq7TIAkMOGQA1iwgsXpAAZDIQEjPXf1B31vwzICkaxSHAWGQ4cAMW611RIAwyFYCkVXVxjQXs4iCwpz6638AdXWWsWAE1iwBI1OTI3AXMxoRXqT7AyFOfXf1APfeORUgLCiCMhkUBFIBhkMgtwDuOXXW/i6tqkAY1IsMgDGpE0CjPVNrOAsOLCAkZ66xdd/UYwEVIQMIXVBnqgyHAZhkMiBIWkDGozG4Atya8/V266ebr6/65A79d76ZhkQIxQgsOIgilgIpjroD31jn8owFIcUMAY1IcWAlSyAwlX4AOfff1PQ77316YAtQSNYCKkIC1YUAOFnrrP8BW459XRbpgGNQRqAYbcijHkv0DnaGsWA6FEBDDDgJIgknProD31/GFjUgKQogjIiCSQApnvvAXXUntw66tV60AjFGgMMUMgKFSEAS5+TyZ8T2C77k/XG/PtKATA1AajUjMagHccm+hIAxNYsBoyJAYUgQtSBz6638UiQNSFICUgSSBJIHPyeTP1wtt9hA0UgMaiQNSNSJAcSQOPk8v1HJIEYkDUaiQNxRIFYpEgOLEgf/9k=')] bg-no-repeat bg-cover bg-center">
      <Head>
        <title> Visualize Solution - Crafting Digital Excellence</title>
        <meta
          name="description"
          content=" Visualize Solution Pvt. Ltd. is a leading software development company in Birtamode, Jhapa, Nepal specializing in custom software development, AI solutions, web applications, mobile apps, and digital transformation services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Visualize Solution,  Visualize Solution, software development, Birtamode, Jhapa, Nepal, web development, mobile app development, database, performance optimization, AI solutions, custom software, digital transformation, IT services, consulting, Nepali tech company, software company Nepal"
        />
        <meta
          property="og:title"
          content=" Visualize Solution Pvt. Ltd. - Premier Software Development Company in Nepal"
        />
        <meta
          property="og:description"
          content="Leading software development company in Birtamode, Jhapa, Nepal offering innovative solutions in web development, mobile apps, and AI services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Visualize Solution.com" />
        <meta
          property="og:image"
          content="https://Visualize Solution.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Visualize Solution" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Visualize Solution - Crafting Digital Excellence"
        />
        <meta
          name="twitter:description"
          content="Leading software development company in Birtamode, Jhapa, Nepal offering innovative solutions in web development, mobile apps, and AI services."
        />
        <meta
          name="twitter:image"
          content="https://Visualize Solution.com/og-image.jpg"
        />

        <meta name="geo.region" content="NP-P1" />
        <meta name="geo.placename" content="Birtamode, Jhapa" />
        <meta name="geo.position" content="26.6418;87.9927" />
        <meta name="ICBM" content="26.6418, 87.9927" />

        <link rel="canonical" href="https://Visualize Solution.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <ShowPricingCard/> */}
      <header
        id="home"
        className="container mx-auto px-6 lg:px-8 pt-32 pb-32 flex items-center justify-between relative overflow-hidden min-h-[90vh]"
      >
        <FloatingSVGGroup
          elements={[
            {
              icon: <Rocket className="text-blue-400/90" />,
              position: { top: "5%", left: "20%" },
              size: "lg",
              opacity: 0.8,
              delay: 0,
            },
            {
              icon: <Zap className="text-yellow-400/90" />,
              position: { top: "30%", right: "15%" },
              size: "md",
              opacity: 0.7,
              delay: 2,
            },
            {
              icon: <Wand2 className="text-purple-400/90" />,
              position: { bottom: "15%", left: "40%" },
              size: "lg",
              opacity: 0.8,
              delay: 1,
            },
          ]}
        />

        <div className="max-w-xl relative z-10 text-left mx-4 md:mx-8 mt-8">
          <motion.h1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="headingFont text-5xl sm:text-7xl font-bold text-black bg-clip-text mb-8
                                   drop-shadow-lg font-heading"
          >
            Crafting Digital Excellence
          </motion.h1>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-xl text-black mb-12 leading-relaxed textFont"
          >
            Your trusted partner for innovative software solutions. We
            specialize in development, consulting, and AI-powered services.
          </motion.p>
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-black 
  text-white text-lg font-semibold px-10 py-4 
  rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] 
  border border-gray-700 
  hover:bg-gray-900 hover:scale-105 
  hover:shadow-[0_6px_15px_rgba(0,0,0,0.4)] 
  transition-all duration-300 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById("contact");
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
                <span className="flex items-center gap-2">
                  Contact Us
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </motion.a>
          </motion.div>
        </div>

        {/* Hero section globe - Only render on desktop screens, not on mobile */}
        <div className="hidden md:block w-1/2 relative mx-4">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative w-[450px] h-[450px]"
              animate={{ y: [0, -15, 0, 15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glowing halo */}
              <div className="absolute inset-0 rounded-full  opacity-20 blur-3xl"></div>

              {/* Circles */}
              <div className="absolute inset-0 border-2 border-gray-900/40 rounded-full" />
              <div className="absolute inset-[20%] border border-gray-800/30 rounded-full" />

              {/* 🔴 Colorful animated tech dots */}
              <motion.div
                className="absolute top-[10%] left-[20%] w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-[15%] right-[30%] w-5 h-5 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />

              {/* Connection lines */}
              <motion.div
                className="absolute top-[45%] left-[45%] w-[100%] h-[1.5px] bg-gray-800/40 origin-left"
                style={{ rotate: -30 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-[45%] left-[45%] w-[90%] h-[1.5px] bg-gray-900/40 origin-left"
                style={{ rotate: 45 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              {/* ✅ Colorful floating icons for white theme */}
              <motion.div
                className="absolute top-0 left-[45%] p-3 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full border border-blue-300 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code2 className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute bottom-5 right-[25%] p-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full border border-pink-300 shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Cpu className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Hero Section */}
        <div className="block md:hidden w-full mt-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full p-5 w-32 h-32 flex items-center justify-center"
            >
              <Rocket className="w-16 h-16 text-blue-400/90" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section
        id="about"
        className="container mx-auto  py-36 relative overflow-hidden"
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
              <span className="text-black headingFont">About Us</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>

            <div className="space-y-6 text-lg text-black">
              <p className="textFont">
                 Visualize Solution was born from the shared vision of three friends,
                each with over 9+ years of hands-on experience in software
                development. We witnessed firsthand the need for reliable,
                affordable, and high-quality software solutions, particularly in
                Nepal.
              </p>
              <p className="textFont">
                Frustrated by the disconnect between client needs and the
                solutions offered, we founded  Visualize Solution to bridge that gap. Our
                mission is simple: to build trust with our clients and deliver
                software that not only meets their requirements but also exceeds
                their expectations.
              </p>
              <p className="textFont">
                We are committed to providing exceptional support and fostering
                long-term partnerships. We are passionate about leveraging
                technology to drive positive change, both within Nepal and
                beyond.
              </p>
              <p className="text-xl font-semibold text-black">
                Our Philosophy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="textFont">
                  Founded on the principles of trust, quality, and affordability
                </li>
                <li className="textFont">
                  Transparency in every step of the development process
                </li>
                <li className="textFont">
                  Small team of experts delivering big results
                </li>
                <li className="textFont">
                  Leveraging AI tools where possible for enhanced efficiency
                </li>
                <li className="textFont">
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
  transition-all duration-300 ease-in-out"
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
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
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
                      <h4 className="text-xl font-semibold text-white">
                        Unwavering Commitment to Quality
                      </h4>
                      <p className="text-gray-300 mt-2">
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
                      <h4 className="text-xl font-semibold text-white">
                        Affordable Excellence
                      </h4>
                      <p className="text-gray-300 mt-2">
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
                      <h4 className="text-xl font-semibold text-white">
                        Local Expertise, Global Standards
                      </h4>
                      <p className="text-gray-300 mt-2">
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
                      <h4 className="text-xl font-semibold text-white">
                        Dedicated Support
                      </h4>
                      <p className="text-gray-300 mt-2">
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

      <Services />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </div>
  );
};

export default HomePage;
