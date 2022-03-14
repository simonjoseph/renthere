// import {useState} from 'react'
// import Image from "next/image";
// import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/solid';
// import { useRouter } from 'next/router';
// import Search from './Search';

// function Bar() {
//   let Links = [

//     {name:"Anunciar", link:"/find"},
//     {name:"Entrar", link:"/signin"},
//     {name:"Inscrever-se", link:"/signup"},
//   ]

//   let [open, setOpen] = useState(false);
//   const router = useRouter()
//   return (
//     <div className="fixed w-full top-0 left-0 z-[100] shadow">
//       <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-0">
//       <div 
//         onClick={() => router.push("/") }
//         className="relative flex items-center h-8 
//       cursor-pointer my-auto md:px-0 px-7">
//         <Image src="/img/log.png" 
//         width="100px"
//         height="100px"
//           // layout="fill"
//           objectFit="contain"
//           objectPosition="left"
//         />
//       </div>
//         <div className=" w-10 absolute right-8 top-6 md:hidden cursor-pointer text-black"
//         onClick={() => setOpen(!open)}>
//           {
//             open ? <MenuIcon /> :<MenuAlt1Icon />
//           }
//         </div>

//         <Search/>
//       <ul className={`md:flex md:items-center md:bg-transparent bg-black 
//       md:pb-0 pb-12 mt-5 md:mt-0 absolute md:static md:z-auto z-[-1] 
//       right-0 w-full md:w-auto transition-all duration-500 ease-in
//       ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
//         {
//           Links.map((link, index)=> (
//             <li key={index} className=" md:ml-8 text-xl md:my-0 my-7 md:px-0 px-7">
//               <a href={link.link} className="text-gray-500 hover:text-gray-800 duration-500">{link.name}</a>
//             </li>
//           ))
//         }
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Bar

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {MenuIcon, XIcon,} from '@heroicons/react/outline'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import Search from './Search'

const Links = [
  {
    name: 'Encontrar um Espaço',
    href: '/find'
  },
  {
    name: 'Analytics',
    href: '#'
  }
]

function Bar(test) {

  console.log(test);

  
  return (
    <Popover className="fixed w-full top-0 left-0 z-[100] shadow bg-white">
      <div className=" max-w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Alugaaqui</span>
              <Image src="/img/log.png" 
                width="100px"
                height="80px"
                  objectFit="contain"
                  objectPosition="left"
                />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700">
              <span className="sr-only">Abrir menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            
            {/* {Links.map((item) => (
              <Link key={item.name} href={item.href} >
                <a
                  className=" font-medium text-xl text-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </Link>
            ))} */}

            <Search />
            
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/signup">
              <a className="whitespace-nowrap text-xl font-medium text-gray-500 hover:text-gray-800">
                Inscrever-se
              </a>
            </Link>

            <Link href="/signin">
              <a
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-700 hover:bg-yellow-800"
              >
                Entrar
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                <Image src="/img/logo.png" 
                  width="70px"
                  height="70px"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700">
                    <span className="sr-only">Fechar menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {/* {Links.map((item) => (
                    <Link key={item.name} href={item.href} >
                      <a
                        className="text-base font-medium text-gray-900 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))} */}
                  <Search />
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href='/signin' >
                <a
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-700 hover:bg-yellow-800"
                >
                  Inscrever-se
                </a>
                </Link>
                
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Já tem uma conta?{' '}
                  <Link href='/signup'>
                  <a  className="text-yellow-700 hover:text-yellow-600">
                    Entrar
                  </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Bar

