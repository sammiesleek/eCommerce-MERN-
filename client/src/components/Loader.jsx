const Loader = ({ size }) => {
  return (
    <div className=" flex w-full justify-center items-center mt-20 mx-auto">
      <div
        className={`animate-spin rounded-full w-[${size}px] h-[${size}px] border-t border-b-2 border-[#2ebca5]`}
      >
        {/* <div className="animate-spin rounded-full w-20 h-20 border-l-2 border-[#2ebca5]"></div> */}
      </div>
    </div>
  );
};

export default Loader;
