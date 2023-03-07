import Image from "next/image";
import {FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";
import ItemFooter from "./ItemFooter";
import SocialIcon from "./SocialIcon";
import {Icons} from "../data/FooterData"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white  ">
      {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 
        bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal 
          font-semibold md:w-2/5">
            <span className="text-teal-400">Free</span> until you're ready to launch
          </h1>
          <div>
            <input type="text" placeholder="Enter Your ph.no" className="text-gray-800
              sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none" />
          </div>
      </div> */}
      <div className="">
        <ItemFooter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 
        text-center pt-2 text-gray-400 text-sm pb-8">
          <span>&copy; 2022 alugaqui. Todos direitos reservados</span>
          <span>Termos & Politica de Privacidade</span>
          <SocialIcon Icons={Icons} />
        </div>
    </footer>
  );
}

export default Footer;
