/* This example requires Tailwind CSS v2.0+ */
import { ArrowCircleDownIcon } from '@heroicons/react/outline'
import {  useState } from 'react'
import Filtro from '../components/Filtro'
import { XIcon } from '@heroicons/react/outline'



export default function Example() {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <>

    <button onClick={() => setToggleSidebar(true)} >clica</button>
    
    {
      toggleSidebar && (
        <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
          <div className="absolute w-full flex justify-end items-center p-2 text-sm">
            <button
              type="button"
              className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
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
    </>
  )
}
