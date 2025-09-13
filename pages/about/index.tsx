"use client";
import React, { useRef } from "react";

import PageWrapper from "@/components/PageWrappper";

const About = () => {
  const missionRef = useRef(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  return (
    <PageWrapper title="About | KoshiLabs">
      <section className="  text-black w-full py-16">
        <div className="relative text-center mb-20 mt-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-black to-gray-600 text-transparent bg-clip-text headingFont">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Visualize Solution
            </span>
          </h1>
          <p className="text-lg md:text-lg text-gray-700 max-w-3xl mx-auto textFont">
            At Visualize Solution, we transform ideas into reality with innovative
            digital solutions, blending creativity, technology, and strategy to
            empower businesses worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div
          ref={missionRef}
          className="relative z-10 max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black headingFont">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 textFont">
            We aim to redefine digital excellence by delivering cutting-edge
            solutions that drive growth, foster innovation, and create lasting
            impact for businesses of all sizes.
          </p>
          <img
            src="/assets/blogs/aboutbanner.webp"
            alt="Team working together"
            className="mt-10 rounded-lg shadow-lg mx-auto max-w-3xl"
          />
        </div>

        {/* Services Section */}
        <div className="relative z-10 mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black headingFont">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-24">
            {[
              {
                title: "Web Development",
                desc: "Crafting high-performance, responsive websites and applications that deliver seamless user experiences across all devices.",
                icon: "🌐",
              },
              {
                title: "UI/UX Design",
                desc: "Designing intuitive, elegant, and user-centric interfaces that elevate your brand and captivate your audience.",
                icon: "🎨",
              },
              {
                title: "Digital Marketing",
                desc: "Driving growth with data-driven campaigns that boost visibility, engage users, and maximize conversions.",
                icon: "📈",
              },
              {
                title: "SEO Optimization",
                desc: "Enhancing search performance with proven strategies to help your business rank higher and reach wider.",
                icon: "🔍",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  servicesRef.current[i] = el;
                }}
                className="bg-black bg-gradient-to-br from-black via-gray-900 to-amber-900/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl relative group "
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl text-white mb-3 headingFont">
                  {item.title}
                </h3>
                <p className="text-white text-md textFont">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div
          ref={valuesRef}
          className="relative z-10 max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black headingFont">
            Our Core Values
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="textFont">
              <span className="font-semibold text-black headingFont">
                Innovation:
              </span>{" "}
              We push boundaries to deliver groundbreaking solutions that set
              new standards in the digital world.
            </p>
            <p className="textFont">
              <span className="font-semibold text-black headingFont">
                Collaboration:
              </span>{" "}
              We believe in the power of teamwork, working closely with our
              clients to achieve shared goals.
            </p>
            <p className="textFont">
              <span className="font-semibold text-black headingFont">
                Excellence:
              </span>{" "}
              We strive for perfection in every project, ensuring top-tier
              quality and performance.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Team collaboration"
            className="mt-10 rounded-lg shadow-lg mx-auto max-w-3xl"
          />
        </div>

        {/* Call to Action Section */}
        <div
          ref={ctaRef}
          className="w-full p-12 text-center mb-10 overflow-hidden bg-white bg-opacity-70 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] backdrop-blur-lg transition-all hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.2)]"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 headingFont">
            Let’s Create Something Extraordinary
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 textFont">
            Ready to elevate your business with Visualize Solution? Let’s collaborate to
            turn your vision into reality.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white py-3 px-8 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
