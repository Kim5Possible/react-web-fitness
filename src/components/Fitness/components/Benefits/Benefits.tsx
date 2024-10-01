import useMediaQuery from "@/hooks/useMediaQuery";
import { BenefitsType, Pages } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import TextTitle from "@/shared/TextTitles";
import Button from "@/shared/Button";

type Props = {
  setOpenPage: (openPage: Pages) => void;
};

const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon />,
    title: "State of the Art Facilities",
    description:
      "With state of the art facilities, we provide true care into each and every member.",
  },
  {
    icon: <UserGroupIcon />,
    title: "100's of Diverse Classes",
    description:
      "We have a variety of classes to fit every fitness level, from beginner to advanced.",
  },
  {
    icon: <AcademicCapIcon />,
    title: "Expert and Pro Trainers",
    description:
      "We provide experts and pro trainers with years of experience in their respective fields.",
  },
];

const Benefits = ({ setOpenPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-screen w-5/6 py-20">
      <motion.div
        className="md:mb-20"
        onViewportEnter={() => setOpenPage(Pages.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5 flex flex-col justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <TextTitle>More than just gym</TextTitle>
          <p className="mb-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div
          className="md:flex md:justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {benefits.map((benefits: BenefitsType) => (
            <motion.div
              key={benefits.title}
              className="mb-5 flex flex-col items-center gap-5 px-10 py-16 border-solid border-4 rounded-md"
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.75 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="rounded-full bg-primary-100 p-4 h-14 w-14 align-middle border-solid border-2 border-primary-300">
                {benefits.icon}
              </div>
              <div className="text-center">
                <h3 className="mb-5 font-bold">{benefits.title}</h3>
                <p className="text-sm mb-5">{benefits.description}</p>
                <AnchorLink
                  className="text-primary-500 text-sm underline hover:opacity-80"
                  href={`#${Pages.ContactUs}`}
                  onClick={() => setOpenPage(Pages.ContactUs)}
                >
                  Learn More
                </AnchorLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="mt-16 items-center justify-between gap-20 md:flex">
        <div className="flex basis-3/5 justify-center md:z-10">
          <img src={BenefitsPageGraphic} alt="benefits-page-graphic" />
        </div>
        <div className="flex flex-col justify-center gap-7">
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] md:before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <TextTitle>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500 ">FIT</span>
                </TextTitle>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mb-5">
              In a group setting, we can help you achieve your fitness goals. We
              provide true care into each and every member. You can achieve your
              fitness goals with us and we can help you achieve it. Only with us
              everything is possible.
            </p>
            <p>
              Join our group today and get started on your fitness journey. You
              will be amazed by how much you can accomplish with us and how many
              benefits you can get.
            </p>
          </motion.div>
          <div className="relative">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] md:before:content-sparkles">
              <Button setOpenPage={setOpenPage}>Join Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
