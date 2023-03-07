import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export const Place = () => {
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
        <div className="md:grid md:grid-cols-2 md:gap-6 ">
          <div className="md:col-span-2">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl md:text-3xl font-semibold leading-6 text-[#292929]">Bem-vindo ao Alugaqui!</h3>
              <p className="mt-1 text-sm md:text-base text-gray-600">Precisamos de algumas 
                informações básicas suas antes de começar a anunciar a propriedades.</p>
                {/* <img src="/img/Formuser.png" alt="" /> */}
            </div>
          </div>
          
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className=" overflow-hidden sm:rounded-md">
              {/* <div className="shadow overflow-hidden sm:rounded-md"> */}
                {/* <div className="px-4 py-5 bg-white space-y-6 sm:p-6"> */}
                <div className="px-4 py-5 space-y-6 sm:p-6">
                  
                  <fieldset>
                    <div>
                      <legend className="text-base font-medium text-gray-900">
                        Qual das opções descreve melhor você?
                      </legend>
                      {/* <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p> */}
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-[#00af9e] h-4 w-4 text-[#00af9e] border-gray-300"
                        />
                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                          Eu sou um proprietário/a 
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-[#00af9e] h-4 w-4 text-[#00af9e] border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                          Eu faço parte de uma empresa de aluguel
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-[#00af9e] h-4 w-4 text-[#00af9e] border-gray-300"
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                          Outro
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="number-user" className="block text-sm font-medium text-gray-700">
                        Número
                      </label>
                      <input
                        type="number"
                        onChange={handleChange}
                        value={userData["number-user"] || ""}
                        name="number-user"
                        id="number-user"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="md:col-span-1">
          <img src="/img/team.svg" alt="" />
          </div>
      </div>
    {/*  */}
    {/* <div className='flex flex-col'>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          username
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input type="text" 
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder='Username'
            className="p-1 px-2 appearance-none outline-none w-full 
            text-gray-800" />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Password
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input type="password" 
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder='password'
            className="p-1 px-2 appearance-none outline-none w-full 
            text-gray-800" />
        </div>
      </div>
    </div> */}
    </>
  )
}
