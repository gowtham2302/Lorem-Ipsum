import Whatsapp from "../assets/whatsapp.svg";
import Mail from "../assets/mail.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import LogoWhite from "../assets/LogoWhite.svg";

function Footer() {
  return (
    <footer className="bg-black  text-white ">
      <div className="flex flex-wrap justify-between items-center gap-20 p-12 lg:p-20">
        <div>
          <a href="/" className="flex  w-11 gap-2 items-start mb-4 ">
            <img src={LogoWhite} className="" />
            <div>
              <span className="text-xl leading-none	font-semibold">
                LOREM IPSUM
              </span>
            </div>
          </a>
          <p className="text-xl">{"Turning 'Lorem Ipsum' into"}</p>
          <p className="text-xl">{" 'Lorem Awesum' since your birth. "}</p>
        </div>
        <div>
          <p className="font-semibold text-2xl mb-2">Drop us a line at</p>
          <p className="text-xl">loremipsum@gmail.com</p>
        </div>
        <div>
          <p className="font-semibold text-2xl mb-2">Give us a shout at</p>
          <p className="text-xl">+91 123-456-7890</p>
        </div>

          <div className="flex flex-wrap gap-5 mb-4">
            <img src={Whatsapp} />
            <img src={Mail} />
            <img src={Linkedin} />
            <img src={Instagram} />
          </div>
      </div>
      <p className="text-xl text-center lg:text-right lg:mr-12 p-4">© Lorem Ipsum 2022. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
