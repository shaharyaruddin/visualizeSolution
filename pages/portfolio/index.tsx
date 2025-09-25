import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PageWrapper from "@/components/PageWrappper";
import axios from "axios";

// Register GSAP plugin
// gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  title: string;
  description: string;
  image: string[];
  category: string;
  link: string;
}

const Portfolio = ({ listOfPortfolio }: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reset",
  //     },
  //   });

  //   const sectionTitle = sectionRef.current?.querySelector("h2");
  //   if (sectionTitle) {
  //     tl.fromTo(
  //       sectionTitle,
  //       { opacity: 0, y: 50 },
  //       { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
  //     );
  //   }

  //   tl.fromTo(
  //     cardsRef.current,
  //     { opacity: 0, y: 100, scale: 0.95 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 0.6,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //     },
  //     "-=0.5"
  //   );

  //   cardsRef.current.forEach((card) => {
  //     if (card) {
  //       gsap.set(card, { transformPerspective: 1000 });
  //       card.addEventListener("mouseenter", () => {
  //         gsap.to(card, {
  //           scale: 1.05,
  //           rotateX: 5,
  //           rotateY: 5,
  //           boxShadow: "0 20px 40px rgba(251, 191, 36, 0.2)",
  //           duration: 0.3,
  //           ease: "power2.out",
  //         });
  //       });
  //       card.addEventListener("mouseleave", () => {
  //         gsap.to(card, {
  //           scale: 1,
  //           rotateX: 0,
  //           rotateY: 0,
  //           boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  //           duration: 0.3,
  //           ease: "power2.out",
  //         });
  //       });
  //     }
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <PageWrapper title="Portfolio | Visualize Solution">
      <section
        id="portfolio"
        ref={sectionRef}
        className="container mx-auto px-6 lg:px-8 py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 " />
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-black headingFont mb-10">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listOfPortfolio?.map((item: any, index: any) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={() => setSelectedItem(item)}
              className="bg-black cursor-pointer bg-gradient-to-br from-black via-gray-900 to-amber-900/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl relative group "
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image[0]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 headingFont">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 textFont">
                  {item.description}
                </p>
                <div className="flex flex-col items-start gap-2">
                  <span className="headingFont inline-block px-3 py-1 text-xs font-medium text-black bg-white rounded-full">
                    {item.category}
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="headingFont inline-block px-4 py-2 text-sm font-medium text-black bg-white hover:bg-gray-400 rounded-full transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl overflow-hidden w-[90%] max-w-4xl relative">
              <button
                className="absolute top-4 right-4 text-black text-xl font-bold z-10"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-96"
              >
                {selectedItem.image.map((img: string, idx: number) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Slide ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </section>
    </PageWrapper>
  );
};

export default Portfolio;

export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_FRONT_URL}portfolio/portfolioLists`
  );
  return { props: { listOfPortfolio: response.data.PorfolioList } };
}
