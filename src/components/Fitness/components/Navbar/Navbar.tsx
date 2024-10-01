import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { Pages } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "@/shared/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  isTopOfPage: boolean;
  openPage: Pages;
  setOpenPage: (openPage: Pages) => void;
};

function Navbar({ isTopOfPage, openPage, setOpenPage }: Props) {
  const flexBetween = "flex items-center justify-between";
  const [toggleMenuOpen, setToggleMenuOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`${isTopOfPage ? "" : "bg-primary-100 drop-shadow"}  ${flexBetween} fixed top-0 z-40 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
          <img src={Logo} alt="logo" />
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-10`}>
                <Link
                  page="Home"
                  openPage={openPage}
                  setOpenPage={setOpenPage}
                />
                <Link
                  page="Benefits"
                  openPage={openPage}
                  setOpenPage={setOpenPage}
                />
                <Link
                  page="Our Classes"
                  openPage={openPage}
                  setOpenPage={setOpenPage}
                />
                <Link
                  page="Contact Us"
                  openPage={openPage}
                  setOpenPage={setOpenPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <AnchorLink
                  className="pl-8 underline hover:opacity-80"
                  href={`#${Pages.ContactUs}`}
                  onClick={() => setOpenPage(Pages.ContactUs)}
                >
                  Sign up
                </AnchorLink>
                <Button setOpenPage={setOpenPage}>Become a member</Button>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setToggleMenuOpen(!toggleMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6 cursor-pointer text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {!isAboveMediumScreens && toggleMenuOpen && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setToggleMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[30%] flex flex-col gap-10 text-2xl">
            <Link page="Home" openPage={openPage} setOpenPage={setOpenPage} />
            <Link
              page="Benefits"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
            <Link
              page="Our Classes"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
            <Link
              page="Contact Us"
              openPage={openPage}
              setOpenPage={setOpenPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
