import React, {useContext} from 'react'

import { StepperContext } from '../../contexts/StepperContext'


export const Info = () => {
  const {userData, setUserData} = useContext(StepperContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }
  return (
    <>
    <div className="hidden mt-12 sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    <div className="mt-12 max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-6 ">
        <div className="md:grid md:grid-cols-2 md:gap-6  shadow bg-white sm:rounded-md sm:p-6">
          <div className="md:col-span-2">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl md:text-3xl font-semibold leading-6 text-gray-900">
                Criar o seu anúncio
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className=" overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 space-y-6 sm:p-6">
                  <div className="grid grid-cols-2 gap-6 ">
                    <div className="col-span-2">
                        <label htmlFor="acomodation" className="block text-sm font-medium text-gray-700">
                          Acomodação
                        </label>
                        <select
                          id="acomodation"
                          name="acomodation"
                          autoComplete="acomodation-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#00af9e] focus:border-[#00af9e] sm:text-sm"
                        >
                          <option>Selecionar tipo</option>
                          <option>Apartamento</option>
                          <option>Quarto</option>
                          <option>Terreno</option>
                          <option>Escritório</option>
                        </select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="Provincia" className="block text-sm font-medium text-gray-700">
                          Provincia
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userData["Provincia"] || ""}
                          name="Provincia"
                          id="Provincia"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="Municipio" className="block text-sm font-medium text-gray-700">
                          Municipio
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userData["Municipio"] || ""}
                          name="Municipio"
                          id="Municipio"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="Bairro" className="block text-sm font-medium text-gray-700">
                          Bairro
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userData["Bairro"] || ""}
                          name="Bairro"
                          id="Bairro"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="Rua" className="block text-sm font-medium text-gray-700">
                          Rua
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userData["Rua"] || ""}
                          name="Rua"
                          id="Rua"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="casaNr" className="block text-sm font-medium text-gray-700">
                          Casa Nrº
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={userData["casaNr"] || ""}
                          name="casaNr"
                          id="casaNr"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 ">
                    <div className="col-span-2">
                        <label htmlFor="period" className="block text-sm font-medium text-gray-700">
                          Período mínimo de aluguel 
                        </label>
                        <select
                          id="period"
                          name="period"
                          autoComplete="period-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#00af9e] focus:border-[#00af9e] sm:text-sm"
                        >
                          <option>Sem preferência</option>
                          <option>Apartamento</option>
                          <option>Quarto</option>
                          <option>Terreno</option>
                          <option>Escritório</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="acomodation" className="block text-sm font-medium text-gray-700">
                          
                          </label>
                          <select
                            id="acomodation"
                            name="acomodation"
                            autoComplete="acomodation-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#00af9e] focus:border-[#00af9e] sm:text-sm"
                          >
                            <option>Selecionar tipo</option>
                            <option>Apartamento</option>
                            <option>Quarto</option>
                            <option>Terreno</option>
                            <option>Escritório</option>
                          </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="md:col-span-1">
          <img src="/img/resume.svg" alt="" />
          </div>
      </div>
    {/* // <div className="flex flex-col">
    //   <div className="w-full mx-2 flex-1">
    //     <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
    //       Password
    //     </div>
    //     <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
    //       <input type="password" 
    //         onChange={handleChange}
    //         value={userData["password"] || ""}
    //         name="password"
    //         placeholder='password'
    //         className="p-1 px-2 appearance-none outline-none w-full 
    //         text-gray-800" />
    //     </div>
    //   </div>
    // </div> */}
    </>
  )
}
