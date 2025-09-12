
const TopLayer = ({bgColor}) => {
  return (
  <>
  <div style={{
        backgroundColor: bgColor
      }}className="absolute left-1/2 -translate-x-1/2   z-[1] h-[.2rem] w-1/5 rounded-full top-0"></div>
  <div className="absolute left-1/2 -translate-x-1/2  bg-white h-[.4rem] w-[28%] rounded-b-sm top-0"></div>
  </>
  )
}

export default TopLayer
