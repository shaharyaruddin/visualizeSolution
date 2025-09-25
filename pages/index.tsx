import React, { useState, useEffect } from "react";
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
import About from "@/components/About/about";

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
          content="KoshiLabs,  Visualize Solution, software development, Birtamode, Jhapa, Nepal, web development, mobile app development, database, performance optimization, AI solutions, custom software, digital transformation, IT services, consulting, Nepali tech company, software company Nepal"
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
        <meta property="og:url" content="https://koshilabs.com" />
        <meta
          property="og:image"
          content="https://koshilabs.com/og-image.jpg"
        />
        <meta property="og:site_name" content="KoshiLabs" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KoshiLabs - Crafting Digital Excellence"
        />
        <meta
          name="twitter:description"
          content="Leading software development company in Birtamode, Jhapa, Nepal offering innovative solutions in web development, mobile apps, and AI services."
        />
        <meta
          name="twitter:image"
          content="https://koshilabs.com/og-image.jpg"
        />

        <meta name="geo.region" content="NP-P1" />
        <meta name="geo.placename" content="Birtamode, Jhapa" />
        <meta name="geo.position" content="26.6418;87.9927" />
        <meta name="ICBM" content="26.6418, 87.9927" />

        <link rel="canonical" href="https://koshilabs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <ShowPricingCard/> */}

      <header className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://zenkoders.com/wp-content/uploads/2025/08/web-videos_1.webm"
            type="video/webm"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero content */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-20">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading">
              Transforming Ideas Into
              <span className="text-[#288dc8]"> Digital Reality</span>
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-200 font-manrope">
              We craft powerful software solutions, designed to scale with your
              business and deliver seamless user experiences.
            </p>
            {/* <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg transition duration-300">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl shadow-lg transition duration-300">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </header>
      {/* About Us Section */}

      <About />
      <Services />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />
    </div>
  );
};

export default HomePage;
