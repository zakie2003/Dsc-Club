import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

type props = {
  newstyles?: string;
  name?: string;
  primary?: boolean;
  link?: string;
};

const Button = ({ newstyles, name, primary, link }: props) => {
  if (primary) {
    return (
      <div
        className={`${styles.flexCenter} custom-hover w-[140px] rounded-lg bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <a
          href={link ? link : "#"}
          rel="noreferrer"
          target="_blank"
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-lg`}
        >
          <div className={`${styles.flexStart} flex-row px-2 py-4`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">{name ? name : "Join Us"}</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <button
        type="button"
        onClick={() => window.open(link)}
        className={`py-4 custom-hover px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${newstyles}`}
      >
        {name ? name : "Join Us"}
      </button>
    );
  }
};

export default Button;
