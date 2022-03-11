
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { formatPrice } from "../util/format"
import {MenuIcon} from '@heroicons/react/outline'
import { ChevronDownIcon, ArrowLeftIcon,
  ArrowRightIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({id, titlo, Provincia, Bairro, Rua, Casa ,
  Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
  defaul, Foto}) {
  return (
    <Popover className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Alugaqui</span>
              <img
                className="h-8 w-auto sm:h-[70px]"
                src="/img/logo.png"
                alt=""
              />
            </a>
          </div>
          
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            

            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            {formatPrice(Valor)}
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              {titlo}
            </a>

            
          </Popover.Group>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium 
            text-gray-500 px-4 py-2 hover:text-gray-900 border border-transparent rounded-md shadow-sm ">
              <ArrowLeftIcon className="flex-shrink-0 h-6 w-6 text-yellow-700" />
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center 
              justify-center px-4 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium text-white "
            >
              <ArrowRightIcon className="flex-shrink-0 h-6 w-6 text-yellow-700"/>
            </a>
          </div>
        </div>
      </div>
    </Popover>
  )
}
