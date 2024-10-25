import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="about" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Who are we? <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dhyan Chand Sports Council promotes sports and physical fitness among
          the B.S. community. <br />- Named after the legendary Indian hockey
          wizard Major Dhyan Chand. <br />
          - Offers a wide array of sporting activities, including team sports
          like hockey, football, and basketball, as well as individual pursuits
          like badminton, table tennis, and athletics. <br />
        </p>
      </div>
    </section>
  );
};
export default Billing;
