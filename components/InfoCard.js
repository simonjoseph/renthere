import { HeartIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import { FaBath, FaBed, FaChair, FaHeart, FaRulerCombined } from "react-icons/fa"
import { formatPrice } from "../util/format"


function InfoCard({id, titlo, Provincia, Bairro, Rua, Casa ,
  Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
  defaul, Foto}) {
  return (
    <Link href={`/Imoveis/${id}`}>
      <div className="flex  pr-4 cursor-pointer bg-white shadow rounded-[8px]
        hover:shadow-lg transition duration-200 ease-out hover:opacity-80 mb-6">
        <div className=" relative h-auto w-40  md:w-80
          flex-shrink ">
          <Image src={"/img/" + defaul} 
            layout="fill" 
            className="h-auto rounded-l-[8px]"
            objectFit="cover"/>
        </div>
        
        <div className="flex flex-col flex-grow pl-5 py-7 px-2">
          <div className="flex justify-between">
            <p className="text-lg font-medium">{formatPrice(Valor)}</p>
            <div className="flex">
              <p> {Modalidade} </p>
              <HeartIcon className="h-7 cursor-pointer" />
            </div>
          </div>

          <h4 className=" text-2xl">{titlo}</h4>

          <div className="border-b w-10 pt-2"></div>

          <h4>{Provincia}, {Bairro} , {Rua}, {Casa}</h4>

          <div className="flex">

            <div className="flex items-center">
              <FaBed/> <p className=" ml-2 ">{Quarto} Quartos</p>
            </div>
            <div className="flex items-center">
              /<p className=" ml-2">{Sala} Sala </p>
            </div>
            <div className="flex items-center">
              <FaBath className="ml-2" /> <p className=" ml-2">{Banheiro} Banheiro</p>
            </div>
          </div> 

          <div className="flex items-center">
            <FaRulerCombined /> {Area}
          </div>

          <button className=" 
                bg-[#00af9e] background-maincolor text-white rounded-[8px] p-2 
                cursor-pointer">Saber mais</button>

        </div>
      </div>
    </Link>
  )
}

export default InfoCard
