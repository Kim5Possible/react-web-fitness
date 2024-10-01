import AnchorLink from "react-anchor-link-smooth-scroll";
import { Pages } from "./types";

type Props = {
  children: React.ReactNode;
  setOpenPage: (openPage: Pages) => void;
};

const Button = ({ children, setOpenPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setOpenPage(Pages.ContactUs)}
      href={`#${Pages.ContactUs}`}
      className="rounded-md bg-secondary-400 px-10 py-2 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
