import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" bg-primary-100 drop-shadow pt-5">
      <div className="mx-auto w-5/6">
        <img src={Logo} alt="logo" className="mb-5" />
        <div className="md:flex justify-between items-center pb-10">
          <div>
            <ul className="flex flex-col gap-4 w-[250px] mb-5 basis-1/2">
              <li className="font-bold uppercase">links</li>
              <li>Link to somewhere</li>
              <li>Another link to somewhere</li>
              <li>Third link to somewhere</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4 mb-5 max-w-[200px] basis-1/4">
              <li className="font-bold uppercase">contact us</li>
              <li>If you have any questions, please contact us.</li>
              <li>8-800-555-35-35</li>
            </ul>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.79131399776614!2d37.637559697079126!3d55.705463332335235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b49001bcde3%3A0x3e4843757191bdee!2sLOMOV%20GYM!5e0!3m2!1sru!2sru!4v1727796580033!5m2!1sru!2sru"
              className="w-[350px] h-[210px] border-solid border-2 border-primary-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
