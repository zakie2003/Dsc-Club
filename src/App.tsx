import styles from "./style";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useState } from "react";
const App = () => {
  const [hidden, setHidden] = useState(false);
  setTimeout(() => {
    setHidden(false);
  }, 20000);
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/*
        <div className="fixed inset-x-0 lg:bottom-2 bottom-12 p-4 z-50">
      <div className="rounded-lg bg-primary px-4 py-5 text-white shadow-lg">
        <p className="text-center text-[16px] font-bold">
          Want to represent IIT Madras in Sports? Join Shaurya '23 | IIT
          Kharagpur's Premier Sports Festival {" "}
          <a
            className="inline-block underline"
            rel="noreferrer"
            target="_blank"
          >
            Fill the form!
          </a>
        </p>
      </div>
    </div>
    */}



      <Routes>
        <Route path="/" element={
          <div>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>
        <HomePage />
        </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
