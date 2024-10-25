import styles from "../style";
import { dhyanChand } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 justify-start mt-5 flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Dhyan Chand</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Sports Council
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Its not my Country's Duty to push me ahead. Its my duty to push my
          country ahead
        </p>
        <div className="ss:flex hidden mt-8">
          <Button primary link={"https://forms.gle/8M2nef7oWB8fUNSLA"} />
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-5 relative`}>
        <img
          src={dhyanChand}
          alt="billing"
          className="w-[80%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Button primary={true} link={"https://forms.gle/8M2nef7oWB8fUNSLA"} />
      </div>
    </section>
  );
};

export default Hero;
