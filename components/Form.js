
export default function Form({Telefone}) {

  return (
    <>
      <div>
        <div className="md:grid  md:gap-6">
          
          <div className=" md:mt-0 ">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700"></label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <a
                        // type="button"
                        href={`tel:+244${Telefone}`}
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00af9e]"
                      >
                        {Telefone}
                      </a>
                    </div>
                    <label className="block text-sm font-medium text-gray-700">José Kuiala</label>
                  </div>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                        Número
                      </label>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        autoComplete="number"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 ">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sms" className="block text-sm font-medium text-gray-700">
                      Mensagem
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="sms"
                        name="sms"
                        rows={3}
                        className="shadow-sm focus:ring-[#00af9e] focus:border-[#00af9e] mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Digite a sua mensagem"
                        defaultValue={''}
                      />
                    </div>
                    
                  </div>

                  
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                type="submit"
                className="mt-10 w-full bg-[#00af9e] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#00af9e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00af9e]"
              >
                Enviar
              </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}
