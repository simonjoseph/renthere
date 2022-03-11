import Image from "next/image";
import {FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div
        className=" flex flex-col justify-between px-32 md:flex-row
        py-14 bg-gray-100 text-gray-600"
      >
        <div className=" space-y-4 text-gray-800 text-xl">
          <Image
            src="/img/logo.png"
            width="70px"
            height="70px"
            // layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
          {/* <h5 className=" font-bold">alugaqui</h5> */}
          <p className=" text-base">
            A melhor maneira de encontrar o que se precisa
          </p>
          <div className="flex justify-between w-[145px]">
            <a href="#">
              <FaTwitter/>
            </a>
            <a href="#">
              <FaFacebook/>
            </a>
            <a href="#">
              <FaInstagram/>
            </a>
          </div>

          <h5 className=" font-bold">Contactar</h5>
          <div className="flex justify-between">
            <span className="flex">
              <FaMapMarkerAlt/>

              <p>Luanda</p>
            </span>
            <span className="flex">
              <FaEnvelope/>

              <p>alugaqui@gmail.com</p>
            </span>
          </div>
        </div>

        {/* #4C4844 */}

        <div
          className="flex flex-col space-y-4 i text-gray-800 
        text-xl "
        >
          <h5 className=" font-bold">Menu</h5>
          <a href="#">Em destaque</a>
          <a href="#">Encontrar um espaço</a>
          <a href="#">Arrendar um espaço</a>
          <a href="#">Saiba mais</a>
        </div>

        <div className="">
          <h5 className="font-bold text-xl">From</h5>
          <Image
            src="/img/uniTuenda-sinza.png"
            width="80px"
            height="80px"
            // layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
          <p>&copy; 2022, alugaqui. Todos os direitos Reservados</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
