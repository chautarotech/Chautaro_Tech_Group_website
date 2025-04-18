
import { FiChevronsDown } from "react-icons/fi";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-sm:top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center  mt-32 sm:mt-20">
          <div className="w-10 h-10 rounded-full bg-[#915EFF]" />
          <div className="w-3 h-80 violet-gradient" />
        </div>

        <div className=" pt-32 sm:pt-20">
          <h1 className="text-[#915EFF]/70 text-6xl sm:text-8xl lg:text-9xl font-bold pb-5">
            {/* Use <span> tags for each word */}
            <span className="block sm:inline">Chautaro</span>{" "}
            <span className="block sm:inline">Tech</span>{" "}
            <span className="block sm:inline">Group</span>
          </h1>
          <p className="mt-5 text-2xl sm:text-4xl lg:text-4xl text-white-100">
            Ignite Inspiration, Streamline Innovation
          </p>
        </div>
      </div>
      

      <div className="absolute bottom-20 xs:bottom-10 md:bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="border-secondary flex flex-col justify-center items-center p-2 pb-1">
            <p className="pb-2">scroll down</p>
            <FiChevronsDown
              size={24}
              className="inline-block animate-bounce"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
