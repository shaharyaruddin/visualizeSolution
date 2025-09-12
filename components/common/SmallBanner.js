

const SmallBanner = ({ text,className }) => {
  return (
    <span className={`inline-block text-nowrap px-4 py-1 text-[.9rem] rounded-full max-w-[9rem]  ${className}`}>
           {text}
          </span>
  )
}

export default SmallBanner
