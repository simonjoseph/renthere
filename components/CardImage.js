import { HeartIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { useState } from "react";
import { FaBath, FaBed, FaChair, FaHeart, FaRulerCombined } from "react-icons/fa"
import { formatPrice } from "../util/format"
import Bar from "./Bar";


function CardImage({id, titlo, Provincia, Bairro, Rua, Casa ,
  Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
  defaul, Foto}) {
    console.log(Foto);
    const [pic, setPic] = useState(2);
    const slice = Foto.slice(0, pic);

    console.log(slice[0], slice[1])
  return (
    <div>
      <div>
        <Bar/>
      </div>
      {/* <div className=" flex items-center flex-wrap "> */}
      <div className=" max-w-screen-xl my-16 mx-auto flex flex-wrap">
        {/* <div className=" flex-1 pt-10 px-8 mt-2"> */}
        <div className=" w-[896px] flex-[1] md:mr-32">

          <div className=" sm:flex">
            <div className="pr-1">
              <Image src={"/img/" + defaul} 
                width="700px"
                height="407px"
                className="h-auto "
                objectFit="cover"/>
            </div>

            <div className="flex  sm:flex-col gap-8 sm:gap-0 sm:flex-wrap overflow-hidden">
            {
              slice.map((num, index) => (
                <div key={index}>
                  <Image src={"/img/" + num.pic} 
                    width="200px" height="200px" 
                    objectFit="cover"
                  />
                </div>))
            }
            </div>
          </div>

          <div>
            <p className="text-lg font-medium">{formatPrice(Valor)}</p>
            <h1 className=" font-bold text-xl">{titlo}</h1>
            <h4>{Provincia}, {Bairro} , {Rua}, {Casa}</h4>
            
            <div className="flex justify-between">
              <div className="flex items-center">
                <FaBed/> <p className=" ml-2 ">Quartos: {Quarto} </p>
              </div>
              <div className="flex items-center">
                /<p className=" ml-2">Sala:{Sala} </p>
              </div>
              <div className="flex items-center">
                <FaBath className="ml-2" /> <p className=" ml-2 mr-2">Banheiro: {Banheiro}</p>
              </div>

              <div className="flex items-center">
                <FaRulerCombined className=" text-xl" /> <p className="ml-2"> Area: {Area} </p>
              </div>
            </div> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente 
              repellendus aliquid dolore distinctio inventore? Quibusdam nesciunt 
              nostrum omnis dolores consequatur, in, officiis exercitationem ipsum 
              quaerat consequuntur, ipsa laboriosam eos blanditiis?</p>
              <a href="">ver mais</a>
            </div>
        </div>

        {/* <div className=" flex-[1] pt-10 px-1 mt-2 w-8" > */}
        <div className=" w-96 " >
          <div className="bg-[#3e3b47] flex items-center py-4 px-6 h-96 w-96 
            rounded-lg  sticky top-0 left-0 "></div>
        </div>

      </div>

      <div>
      
      </div>
      {/*  */}

      

      {/*  */}

    </div>
  )
}

export default CardImage
