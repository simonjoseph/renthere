import React from "react";

import Image from "next/image";
import { FaBath, FaBed } from "react-icons/fa";
import { formatPrice } from "../util/format";
import Link from "next/link";

export default function NewCard({ dados }) {
  return (
    <Link href={`/Imoveis/${dados.id}`}>
      <div
        className="cursor-pointer hover:scale-105 
      transform transition duration-300 ease-out"
      >
        <div className="relative h-[243px] w-[auto] p-2">
          <Image
            src={"/img/" + dados.defaul}
            layout="fill"
            objectFit="cover"
            className=" rounded-[8px] rounded-b-none brightness-50"
          />
        </div>
        <div className=" h-auto bg-white shadow p-3">
          {/* <h3 className=" text-2xl ">{title}</h3> */}
          <h3>{dados.titlo}</h3>
          <div className="flex justify-between">
            <h3 className=" text-lg font-medium text-[#000]">
              {" "}
              {formatPrice(dados.Valor)}{" "}
            </h3>
            <span> {dados.Modalidade} </span>
          </div>
          <p>
            {dados.Bairro}, {dados.Provincia}
          </p>
          <div className="flex justify-between mt-2">
            <span className="flex px-1 rounded-lg">
              <div className="flex mr-2 items-center justify-center">
                <div
                  className="whitespace-nowrap inline-flex items-center 
              justify-center px-2 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium bg-gray-200 mr-[0.5rem]"
                >
                  <FaBed
                    size={16}
                    className="flex-shrink-0 h-5 w-5 text-[#00af9e]"
                  />
                </div>
                <span className=""> {dados.Quarto} Quarto </span>
              </div>
              <div className="flex mr-2 items-center justify-center">
                <div
                  className="whitespace-nowrap inline-flex items-center 
              justify-center px-2 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium bg-gray-200 mr-[0.5rem]"
                >
                  <FaBath
                    size={18}
                    className="flex-shrink-0 h-5 w-5 text-[#00af9e]"
                  />
                </div>
                <span className=""> {dados.Banheiro} Banheiro </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
