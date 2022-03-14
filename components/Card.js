import Image from "next/image";
import { FaBath, FaBed } from "react-icons/fa";
import { formatPrice } from "../util/format";

function Card({ dados }) {
  return (
    <div
      className="cursor-pointer hover:scale-105 
      transform transition duration-300 ease-out"
    >
      <div className="relative h-[243px] w-[300px] p-2">
        <Image
          src={"/img/" + dados.defaul}
          
          layout="fill"
          objectFit="cover"
          className=" rounded-[8px] rounded-b-none brightness-50"
        />
      </div>
      <div className=" h-auto bg-white shadow p-3">
        {/* <h3 className=" text-2xl ">{title}</h3> */}
        <h3>{ dados.titlo }</h3>
        <div className="flex justify-between">
          <h3 className=" text-lg font-medium text-[#000]"> { formatPrice(dados.Valor) } </h3>
          <span> {dados.Modalidade} </span>
        </div>
        <p>{dados.Bairro}, {dados.Provincia}</p>
        <div className="flex justify-between">
          <div className="bg-gray-100 rounded-[6px] px-14">Ver detalhes</div>
          <span className="flex px-1 bg-gray-100 rounded-lg">
            <div className="flex mr-2 items-center">
              <span> {dados.Quarto} </span>
              <FaBed />
            </div>
            <div className="flex items-center">
              <span> {dados.Banheiro} </span>
              <FaBath />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
