'use client'
import { BiSolidPhone } from "react-icons/bi";
import { RiMessage3Fill } from 'react-icons/ri';
import PricingBuyNow from "./PricingBuyNow";
import TopLayer from "./TopLayer";
import SideLayer from "./SideLayer";
import TopSection from "./TopSection";
import BulletPointSvg from "./BulletPointSvg";

const PricingCard = ({
    index,
    title,
    subtitle,
    description,
    pageCount,
    price,
    points,
    bgFrom,
    bgTo,
    TopSectionBgColor,
    topSectionBorderColor,
    iconsBgColor,
    textColor,
    iconBorderColor,
    topSectionSvgFillColor
  }) => {
    return (
      <div
        style={{
          background: `linear-gradient(to bottom, ${bgFrom}, ${bgTo})`,
          color: textColor,
        }}
        className="relative w-[23rem] min-h-[36.3rem] rounded-[1.5rem] px-5 py-4"
      >
        {/* buy now button */}
        <PricingBuyNow />
        {/* layers */}
        <TopLayer bgColor={bgFrom}/>
        <SideLayer className="left-0" />
        <SideLayer className="right-0 rotate-180 " />
        {/* content */}
        {/* top section */}
        <TopSection
          index={index}
          title={title}
          subtitle={subtitle}
          description={description}
          bgColor={TopSectionBgColor}
          borderBottom={topSectionBorderColor}
          topSectionSvgFillColor={topSectionSvgFillColor}
        />

        {/* main heading */}
        <div className="flex items-center justify-between mt-[1rem] ">
          <div className="flex items-center ml-[1rem]">
            <h2 className="font-bold text-[2.8rem] mr-1">{pageCount}</h2>
            <h6 className="text-[.7rem] font-semibold">
              Page <br /> Website
            </h6>
          </div>
          <div className="">
            <h3 className="font-semibold">{price} </h3>
          </div>
        </div>
        {/* points */}
        <div>
          <ul className="min-h-[10rem] flex flex-col justify-between p-[1rem] pl-[2rem] text-[.75rem] font-medium">
            {points.map((item, index) => (
              <li className="flex" key={index}>
                <BulletPointSvg   className={`w-[.8rem] ${topSectionSvgFillColor}` } />
                <p className="ml-3">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* bottom */}
        <div className="flex justify-between w-full min-h-[9rem]">
          {/* call */}
          <div
            style={{
              borderColor: iconBorderColor,
            }}
            className="w-1/2 flex justify-center items-center flex-col "
          >
            <div className="flex flex-col items-center space-y-2">
              <div
                style={{
                  backgroundColor: iconsBgColor,
                  border:`1px solid ${iconBorderColor}`
                }}
                className="p-[.8rem] rounded-full"
              >
                <BiSolidPhone  />
              </div>
              <div className="flex flex-col justify-center items-center text-[.8rem] font-medium">
                <h3>Call Now:</h3>
                <h6 className="text-[1rem]">(555) 316-2120</h6>
              </div>
            </div>
          </div>
          {/* center border */}
          <div className="w-[.1rem] bg-gray-400 my-[1.6rem] relative">
            <div className="absolute rounded-full bg-inherit w-[.5rem] h-[.5rem] left-1/2 bottom-0 -translate-x-1/2"></div>
          </div>
          {/* connect */}
          <div

            className="w-1/2 flex justify-center items-center flex-col "
          >
            <div className="flex flex-col items-center space-y-2">
              <div
                style={{
                  backgroundColor: iconsBgColor,
                    border:`1px solid ${iconBorderColor}`
                }}
                className="p-[.8rem] rounded-full"
              >
                <RiMessage3Fill  />
              </div>
              <div className="flex flex-col justify-center items-center text-[.8rem] font-medium">
                <h3>Connect Now</h3>
                <h6 className="text-[1rem]">Live Chat</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



export default PricingCard
