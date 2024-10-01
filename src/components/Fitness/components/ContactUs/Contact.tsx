import TextTitle from "@/shared/TextTitles";
import { Pages } from "@/shared/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
  setOpenPage: (openPage: Pages) => void;
};

const Contact = ({ setOpenPage }: Props) => {
  const inputStyles = `w-full mt-5 rounded-lg  bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus">
      <motion.div
        className="md:flex z-10 items-center justify-between gap-16 mx-auto min-h-screen w-5/6 py-20"
        onViewportEnter={() => setOpenPage(Pages.ContactUs)}
      >
        <div className="flex flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="mb-5"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <TextTitle>
              <span className="text-primary-500 ">Join Now </span>to get in
              shape
            </TextTitle>
          </motion.div>
          <motion.p
            className="text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Join now to get your personal training plan in shape. We have
            different plans to help you achieve your goals. Contact us today to
            get started.
          </motion.p>
          <form
            target="_blank"
            onSubmit={onSubmit}
            // action="https://formsubmit.co/your@email.ru"
            // method="POST"
            className="flex flex-col"
          >
            <motion.input
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 100 })}
              className={inputStyles}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            />
            {errors.name && (
              <p className=" text-primary-500">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max length is 100 char"}
              </p>
            )}
            <motion.input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className={inputStyles}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            />
            {errors.email && (
              <p className=" text-primary-500">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address"}
              </p>
            )}
            <motion.textarea
              placeholder="Message"
              rows={4}
              cols={50}
              {...register("message", { required: true, maxLength: 2000 })}
              className={`${inputStyles} resize-none`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            />
            {errors.message && (
              <p className=" text-primary-500">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char"}
              </p>
            )}
            <div>
              <button
                className="rounded-md mt-5 bg-secondary-400 px-10 py-2 transition duration-500 hover:bg-primary-500 hover:text-white mb-5"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        <div className="relative">
          <div className="flex basis-3/5 justify-center before:absolute before:-bottom-28 before:-left-80 before:z-[-1] md:before:content-evolvetext">
            <img src={ContactUsPageGraphic} alt="contact-us-page" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
