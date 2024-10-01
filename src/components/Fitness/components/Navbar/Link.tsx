import { Pages } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  openPage: Pages;
  setOpenPage: (openPage: Pages) => void;
};

function Link({ page, openPage, setOpenPage }: Props) {
  const idPage = page.toLowerCase().replace(/ /g, "") as Pages;

  return (
    <AnchorLink
      className={`${openPage === idPage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${idPage}`}
      onClick={() => setOpenPage(idPage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
