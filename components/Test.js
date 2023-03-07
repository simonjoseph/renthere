import { 
  HomeIcon } from '@heroicons/react/solid'
  import {FaBroom, FaInstagram, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";
  import { GiSofa, GiGasStove } from "react-icons/gi";
  // import { MdKitchen} from "react-icons/all";
  import {BiBath, BiArea } from "react-icons/bi";
  import { MdBed,MdKitchen } from "react-icons/md";

export default function Test({Quarto, Sala, Banheiro, Area}) {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-6 gap-6">

        <div className="col-span-6 sm:col-span-2">
          <div className="flex items-center md:flex-1 ">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center 
              justify-center px-4 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium text-white "
            >
              <MdBed className="flex-shrink-0 h-6 w-6 text-[#00af9e]"/>
            </a>
            <p className='ml-2'>Quarto: {Quarto}</p>
          </div> 
          
        </div>
        <div className="col-span-6 sm:col-span-2">
          <div className="flex items-center md:flex-1 ">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center 
              justify-center px-4 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium text-white "
            >
              <GiSofa className="flex-shrink-0 h-6 w-6 text-[#00af9e]"/>
            </a>
            <p className='ml-2'>Sala: {Sala}</p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-2">
          <div className="flex items-center md:flex-1 ">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center 
              justify-center px-4 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium text-white "
            >
              <MdKitchen className="flex-shrink-0 h-6 w-6 text-[#00af9e]"/>
            </a>
            <p className='ml-2'>Cozinha: {Banheiro}</p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-2">
          <div className="flex items-center md:flex-1 ">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center 
              justify-center px-4 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium text-white "
            >
              <BiBath className="flex-shrink-0 h-6 w-6 text-[#00af9e]"/>
            </a>
            <p className='ml-2'>Banheiro: {Banheiro}</p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-2">
          <div className="flex items-center md:flex-1 ">
          <a
              href="#"
              className="whitespace-nowrap inline-flex items-center 
              justify-center px-4 py-2 border border-transparent rounded-md 
              shadow-sm text-base font-medium text-white "
            >
              <BiArea className="flex-shrink-0 h-6 w-6 text-[#00af9e]"/>
            </a>
            <p className='ml-2'>Area: {Area}</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}
