import {useState} from 'react'
import Image from "next/image";
import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Search from './Search';

function Bar() {
  let Links = [
    // {name:"Em destaque", link:"/"},
    // {name:"Encontrar um Espaço", link:"/find"},
    // {name:"Arrendar um Espaço", link:"/"},
    // {name:"Saiba mais", link:"/"}
    {name:"Anunciar", link:"/find"},
    {name:"Entrar", link:"/signin"},
    {name:"Inscrever-se", link:"/signup"},
  ]

  let [open, setOpen] = useState(false);
  const router = useRouter()
  return (
    <div className="fixed w-full top-0 left-0 z-[100] shadow">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-0">
      <div 
        onClick={() => router.push("/") }
        className="relative flex items-center h-8 
      cursor-pointer my-auto md:px-0 px-7">
        <Image src="/img/log.png" 
        width="100px"
        height="100px"
          // layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
        <div className=" w-10 absolute right-8 top-6 md:hidden cursor-pointer text-black"
        onClick={() => setOpen(!open)}>
          {
            open ? <MenuIcon /> :<MenuAlt1Icon />
          }
        </div>

        <Search/>
      <ul className={`md:flex md:items-center md:bg-transparent bg-black 
      md:pb-0 pb-12 mt-5 md:mt-0 absolute md:static md:z-auto z-[-1] 
      right-0 w-full md:w-auto transition-all duration-500 ease-in
      ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
        {
          Links.map((link, index)=> (
            <li key={index} className=" md:ml-8 text-xl md:my-0 my-7 md:px-0 px-7">
              <a href={link.link} className="text-gray-500 hover:text-gray-800 duration-500">{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Bar
