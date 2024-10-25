import styles from "../style";
import Billing from "./Billing";
import Features from "./Business";
import EventContainer from "./EventContainer";
import Footer from "./Footer";
import Hero from "./Hero";
import Stats from "./Stats";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Past_EventContainer from "./Past_EventContainer";

const HomePage = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Features />
          <Billing />
          {/* <EventContainer /> */}
          <Past_EventContainer/>
          <Team />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
