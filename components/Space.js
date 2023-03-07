import { useState } from "react";
import Ligthbox from "./Ligthbox"
import { formatPrice } from "../util/format"
import Form from './Form'
import Test from "./Test"
import Button from "./Button";


export default function Space({id, titlo, Provincia, Bairro, Rua, Casa ,
  Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
  defaul, Foto}) {
    
    console.log(Foto);
    const [pic, setPic] = useState(3);
    const slice = Foto.slice(0, pic);

    console.log(slice[0], slice[1], slice[2].pic, defaul)

    // Beg
  
    // const handleClick = () => {
//       return <Ligthbox
//       defaul={defaul}
//       Foto={Foto}
// />
// return console.log('ok');
//     }

    // End

  return (
    <div className="bg-white">
      <div className="pt-2">
        
        <div className="mt-2 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={"/img/" + defaul} 
              alt={defaul}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={"/img/" + slice[0].pic}
                alt={slice[0].pic}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={"/img/" + slice[1].pic}
                alt={slice[1].pic}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={"/img/" + slice[2].pic}
              alt={slice[2].pic}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className= "bg-white shadow-sm text-gray-900 cursor-pointer group relative border rounded-md py-3 px-4 flex items-center justify-center sm:flex-1 sm:py-2 w-20 ring-2 ring-[#00af9e]">
              {/* <div as="p">Fotos</div> */}
              {/* <Button /> */}
                <div>
                <Ligthbox
                  defaul={defaul}
                  Foto={Foto}
            />
            {/* <div className="bg-white w-[60px] h-[100%] absolute top-[0] ">
              <p className=" text-lg text-center pt-[30px]">Foto</p>
            </div> */}
                </div>
              {/*  */}
              <div className= "border border-indigo-500 absolute -inset-px -md pointer-events-none" 
              aria-hidden="true" />
                  <div aria-hidden="true" className="absolute -inset-px rounded-md 
                  border-2 border-gray-200 pointer-events-none">
                  </div>
            </div>
          
          <p className="text-2xl text-gray-900">{formatPrice(Valor)}</p>
            <h1 className="text-2xl sm:text-2xl md:text-2xl font-semibold pb-5 
            text-[#292929]">{titlo}</h1>
            {/* <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">{titlo}</h1> */}
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <div className="mt-10">
              <Form Telefone={Telefone} />
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            
            <div>

              <div className="space-y-6">
                <Test Quarto={Quarto} Sala={Sala} Banheiro={Banheiro} Area={Area} />
                <p className="text-base text-gray-600">
                  Apartamento espaçoso com curadoria em Berlin Mitte com destaques 
                  vintage. Espaçoso e central são palavras-chave para descrever a 
                  minha casa. E mais, está repleto de objetos pessoais e obras de 
                  arte que contam histórias de viagens e amizades. É um equilíbrio 
                  maravilhoso de conveniência urbana e charme caseiro. O apartamento 
                  tem uma localização central em Berlin Mitte - a 3 minutos a pé da 
                  Alexanderplatz, Hackescher Markt e Torstrasse. É facilmente acessível 
                  por transportes públicos
                </p>
              </div>
              
              {/* <button onClick={handleClick} >
                Fotos
              </button> */}
            </div>

            {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
