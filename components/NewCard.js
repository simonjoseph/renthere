
import React from 'react'

import Image from "next/image";
import { FaBath, FaBed } from "react-icons/fa";
import { formatPrice } from "../util/format";
import Link from "next/link"

export default function NewCard({ dados }) {
  return (
    <Link href={`/Imoveis/${dados.id}`}>
    <div
      className="cursor-pointer hover:scale-105 
      transform transition duration-300 ease-out rounded-t-[8px]"
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
        <h3>{ dados.titlo }</h3>
        <div className="flex justify-between">
          <h3 className=" text-lg font-medium text-[#000]"> { formatPrice(dados.Valor) } </h3>
          <span> {dados.Modalidade} </span>
        </div>
        <p>{dados.Bairro}, {dados.Provincia}</p>
        <div className="flex justify-between">
          <div className="bg-[#00af9e] text-white rounded-[6px] px-14 py-1">Ver detalhes</div>
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
    </Link>
  )
}

