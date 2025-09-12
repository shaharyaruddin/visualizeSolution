import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pricingData from "./data/pricingData";
import PricingCard from "./PricingCard";
import SmallBanner from "./common/SmallBanner";

const ShowPricingCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const pricingCard = pricingData();

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:py-20 space-y-4">
        <div data-aos="fade-down">
          <SmallBanner text="Packages" className="bg-[#D9E9FC]" />
        </div>

        <h2 className="text-[2.5rem] font-bold text-center" data-aos="fade-up">
          Pricing Plans That Work For You
        </h2>

        <div
          className="flex justify-center items-center text-[.8rem] text-gray-800 font-medium"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="w-[70%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
            optio. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 p-8 min-h-screen">
        {pricingCard.map((card, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <PricingCard
              index={`0${index + 1}`}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              pageCount={card.pageCount}
              price={card.price}
              points={card.points}
              bgFrom={card.bgFrom}
              bgTo={card.bgTo}
              TopSectionBgColor={card.topSectionBgColor}
              topSectionBorderColor={card.topSectionBorderColor}
              iconsBgColor={card.iconsBgColor}
              textColor={card.textColor}
              iconBorderColor={card.iconBorderColor}
              topSectionSvgFillColor={card.topSectionSvgFillColor}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowPricingCard;
