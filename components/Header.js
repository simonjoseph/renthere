import Image from "next/image";
import { SearchIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className="relative top-0 z-50 
      grid grid-cols-2 bg-transparent p-5 md:px-10">

      <div className="relative flex items-center h-10 
      cursor-pointer my-auto">
        <Image src="/img/logo.png" 
        width="70px"
        height="70px"
          // layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>


      <div className="flex items-center space-x-4
        justify-end text-white text-xl">
        <a href="#">Em destaque</a>
        <a href="#">Encontrar um Espaço</a>
        <a href="#">Arrendar um Espaço</a>
        <a href="#">Saiba mais</a>
      </div>

    </header>
  )
}

export default Header
