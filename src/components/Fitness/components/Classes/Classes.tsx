import TextTitle from "@/shared/TextTitles";
import { ClassesType, Pages } from "@/shared/types";
import { animate, motion, useMotionValue } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Card from "./Card";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

type Props = {
  setOpenPage: (openPage: Pages) => void;
};

const images: Array<ClassesType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

const Classes = ({ setOpenPage }: Props) => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [finish, setFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  const xTransition = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (finish) {
      controls = animate(xTransition, [xTransition.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTransition.get() / finalPosition),
        onComplete: () => {
          setFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTransition, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls.stop;
  }, [rerender, xTransition, duration, width]);
  return (
    <section id="ourclasses" className=" bg-primary-100 ">
      <motion.div
        className="mx-auto min-h-screen w-5/6 py-20 "
        onViewportEnter={() => setOpenPage(Pages.OurClasses)}
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
          <TextTitle>Our Classes</TextTitle>
          <p className="mb-10 text-sm">
            We have a variety of classes to fit every fitness level, from
            beginner to advanced. We promise you will have fun and get results
            in no time! Let us help you achieve your goals.
          </p>
        </motion.div>
        <motion.div
          className=" absolute left-0 flex gap-8"
          ref={ref}
          style={{ x: xTransition }}
          onHoverStart={() => {
            setFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images, ...images].map((image, index) => (
            <Card
              key={index}
              image={image.image}
              name={image.name}
              description={image.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Classes;
