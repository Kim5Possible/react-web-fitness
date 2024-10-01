import useMediaQuery from "@/hooks/useMediaQuery";
import { Pages } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import Button from "@/shared/Button";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setOpenPage: (open: Pages) => void;
};

const Home = ({ setOpenPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-14 md:h-full md:pb-0">
      <motion.div
        className="mx-auto pb-28 w-5/6 md:flex items-center justify-center md:h-5/6"
        onViewportEnter={() => setOpenPage(Pages.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-14 before:-left-20 before:z-[-1] before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p
              className={`my-10 text-lg ${isAboveMediumScreens ? "max-w-lg" : "max-w-full"}`}
            >
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Button setOpenPage={setOpenPage}>Join Now</Button>
            <AnchorLink
              className="pl-8 underline hover:opacity-80"
              href={`#${Pages.ContactUs}`}
              onClick={() => setOpenPage(Pages.ContactUs)}
            >
              Learn more
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-16 md:ml-44">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-4">
          <div className="mx-auto w-5/6 flex items-center justify-between md:h-5/6">
            <img src={SponsorRedbull} alt="redbull" />
            <img src={SponsorFortune} alt="fortune" />
            <img src={SponsorForbes} alt="forbes" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
