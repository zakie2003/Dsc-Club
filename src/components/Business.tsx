import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

type Props = {
  icon: string;
  title: string;
  content: string;
  index: number;
};

const FeatureCard = ({ icon, title, content, index }: Props) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        No distractions, just pure
        <br className="sm:block hidden" /> sportsmanship, as we will shoulder
        the rest!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Step up, stand out, and and leave a remarkable legacy by joining the
        esteemed Dhyan Chand Sports Society.
      </p>

      <Button
        link={"https://forms.gle/8M2nef7oWB8fUNSLA"}
        newstyles={`mt-10`}
      />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Features;
