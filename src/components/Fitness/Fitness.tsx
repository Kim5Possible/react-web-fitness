import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Pages } from "../../shared/types";
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
import Classes from "./components/Classes/Classes";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";

const Fitness: React.FC = () => {
  const [openPage, setOpenPage] = useState<Pages>(Pages.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setOpenPage(Pages.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <Navbar
        openPage={openPage}
        setOpenPage={setOpenPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setOpenPage={setOpenPage} />
      <Benefits setOpenPage={setOpenPage} />
      <Classes setOpenPage={setOpenPage} />
      <Contact setOpenPage={setOpenPage} />
      <Footer />
    </div>
  );
};

export default Fitness;
