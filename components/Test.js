import { 
  HomeIcon } from '@heroicons/react/solid'

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
              <HomeIcon className="flex-shrink-0 h-6 w-6 text-yellow-700"/>
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
              <HomeIcon className="flex-shrink-0 h-6 w-6 text-yellow-700"/>
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
              <HomeIcon className="flex-shrink-0 h-6 w-6 text-yellow-700"/>
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
              <HomeIcon className="flex-shrink-0 h-6 w-6 text-yellow-700"/>
            </a>
            <p className='ml-2'>Area: {Area}</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}
