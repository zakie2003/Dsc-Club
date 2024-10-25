import styles from "../style";
import Button from "./Button";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Meet the people behind it</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          We are here to make a change for you!
        </p>
      </div>
    </div>

    <Button name={"Check our team"} newstyles={"custom-hover"} />
  </section>
);

export default Testimonials;
