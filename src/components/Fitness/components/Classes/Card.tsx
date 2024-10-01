import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  image: string;
  name: string;
  description?: string;
};

const Card: React.FC<Props> = ({ image, name, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden flex justify-center items-center rounded-lg min-w-[300px] cursor-pointer "
      key={image}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className=" absolute inset-0 bg-primary-500 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0  text-center px-3 py-6"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <p className="text-xl text-white mb-3">{name}</p>
              <p className="text-xs text-white">{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={image} alt="image" />
    </motion.div>
  );
};

export default Card;
