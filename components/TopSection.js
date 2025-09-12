import BulletPointSvg from "./BulletPointSvg";

const TopSection = ({
  index,
  title,
  subtitle,
  description,
  bgColor,
  borderBottom,
  textColor,
  topSectionSvgFillColor
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderBottom: `0.05rem solid ${borderBottom}`,
        color: textColor,
      }}
      className="relative w-full min-h-[9rem] rounded-2xl flex flex-col justify-center items-center"
    >
      <h6 className="text-[.7rem] font-semibold">{index}</h6>
      <div className="flex-col flex justify-center items-center">
        <div className="text-[1.1rem] font-semibold flex flex-col items-center ">
          <h2>{title}</h2>
          <h2>{subtitle}</h2>
        </div>

        <p className="text-[.65rem] w-[70%] text-center font-medium ">
          {description}
        </p>
      </div>
      {/* arrow */}
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className="absolute bottom-[-.1rem] h-[.1rem] w-[38%] flex justify-center items-center"
      >
        <BulletPointSvg className={`mt-[.4rem] w-[1.3rem] rotate-90 ${topSectionSvgFillColor}` }  />
      </div>
    </div>
  );
};

export default TopSection;
