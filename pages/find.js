import { useRouter } from "next/router"
import InfoCard from "../components/InfoCard";
import Image from "next/image";
import Bar from "../components/Bar";
import {  useState } from 'react'
import Filtro from '../components/Filtro'
import { XIcon } from '@heroicons/react/outline'


function find({searchResults}) {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const router = useRouter();
  const { location } = router.query;
  
  console.log(location, router.route );

  let test = location;

  return (
    <div>
      
      <div>
        <Bar test={test} />
      </div>

        <div className="relative">
          {
            toggleSidebar && (
              <div className='fixed w-[710px] bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in pt-12'>
                <div className="absolute w-full flex justify-end items-center p-2 text-sm">
                  <button
                    type="button"
                    className="-m-2 p-2 pt-4 text-gray-400 hover:text-gray-500 cursor-pointer"
                    onClick={() => setToggleSidebar(false)}
                  >
                    <span className="sr-only">Fechar</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <Filtro closeToggle={setToggleSidebar} />
              </div>
            )
          }
        <section className="relative w-[710px] flex-grow pt-14 px-6 mt-8">
          
          <h1 className=" text-3xl font-semibold mt-2 mb-6 ">
            {location} apartamentos para arrendar
          </h1>
          <div className=" hidden lg:inline-flex mb-5 space-x-3
            text-gray-800 whitespace-nowrap">
            <p className="px-4 py-2 border rounded-full 
              cursor-pointer hover:shadow-lg active:scale-95
              active:bg-gray-100 transition transform duration-100
            ease-out">Preço</p>
            <p className="px-4 py-2 border rounded-full 
              cursor-pointer hover:shadow-lg active:scale-95
              active:bg-gray-100 transition transform duration-100
            ease-out">Quarto e sala</p>
            <p className="px-4 py-2 border rounded-full 
              cursor-pointer hover:shadow-lg active:scale-95
              active:bg-gray-100 transition transform duration-100
            ease-out" onClick={() => setToggleSidebar(true)}>Mais filtros</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(({id, titlo, Provincia, Bairro, Rua, Casa,
              Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
              defaul, Foto}) => (
              <InfoCard
                key={id}
                id = {id}
                titlo={titlo}
                Provincia={ Provincia }
                Bairro={ Bairro }
                Rua={Rua}
                Casa={Casa}
                Telefone={ Telefone }
                Modalidade={ Modalidade }
                Valor={ Valor }
                Quarto={ Quarto }
                Sala={ Sala }
                Banheiro={Banheiro }
                Area={ Area }
                defaul={defaul}
                Foto={Foto}
            />
          ))}
          </div>
          

        </section>
        <section className="fixed top-[5.1rem] right-0 bottom-0 left-auto 
          w-[calc(100%-710px)] bg-[rgba(252,252,253,.9)] border border-solid border-[#e4e7e9] ">

        </section>
        </div>

        

    </div>
  )
}

export default find;

export async function getServerSideProps({query}){
  const prov = query.location || 'Luanda';
  const mod = query.Modalidade || 'Comprar';
  const bairro = "Luanda"
  const searchResults = await (fetch(`http://localhost:3331/Imoveis?Provincia=${prov}&Modalidade=${mod}`))
  .then(
    (res) => res.json()
    );

    return {
      props: {
        searchResults
      }
    }
}
