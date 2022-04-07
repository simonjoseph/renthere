import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {MenuIcon, XIcon,} from '@heroicons/react/outline'
import {InboxInIcon} from '@heroicons/react/solid'
import Image from 'next/dist/client/image'
import Link from 'next/link'


import {
  UserIcon,
  LogoutIcon,
  HeartIcon,
  InboxIcon,
  MailIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import Search from './Search'

const Links = [
  {
    name: 'Encontrar um Espaço',
    href: '/find'
  },
  {
    name: 'Publicitar seu espaço',
    href: '#'
  }
]

const solutions = [
  {
    name: 'Perfil',
    href: '/profile',
    icon: UserIcon,
  },
  {
    name: 'Favoritos',
    href: '/favourite',
    icon: HeartIcon,
  },
  {
    name: 'Alertas de pesquisa',
    href: '#',
    icon: InboxIcon,
  },
  { name: 'Mensagem', 
    href: '#', 
    icon: MailIcon },
  
  {
    name: 'Sair',
    href: '#',
    icon: LogoutIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Nav({test}) {

  console.log(test);

  let profileImg = '/img/logo.png';

  const [currentUser, setCurrentUser] = useState({
    //null
    email: 'test@test.com',
    name: 'Gypsie Bambu',
    photoURL: profileImg
  });
  return (
    <Popover className={classNames(
      test ? 'fixed bg-white z-[100] shadow' : 'relative bg-transparent z-50',
      'w-full top-0 left-0 '
    )} >
      <div className={classNames(
      test ? 'max-w-full' : 'max-w-7xl',
      'mx-auto px-4 sm:px-6' )}>
        <div className={classNames(
      test ? ' py-1' : 'py-3',
      'flex justify-between items-center  py-6 md:justify-start md:space-x-10' )} >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
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
            {test? (
              <Search />
            ) : (
              <div className=' space-x-10'>
                {Links.map((item) => (
                <Link key={item.name} href={item.href} >
                  <a
                    className=" font-medium text-xl text-white hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              </div>
            )}
            {/* {Links.map((item) => ( */}
               {/* <Link key={item.name} href={item.href} > */}
                 {/* <a */}
             {/* className=" font-medium text-xl text-white hover:text-gray-900" */}
              {/* > */}
                {/* {item.name} */}
                {/* </a> */}
              {/* </Link> */}
            {/* ))} */}
            
          </Popover.Group>

          {/*  */}
          
          {/*  */}
          {!currentUser ? (<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/signup">
              <a className="whitespace-nowrap text-xl font-medium text-white hover:text-gray-900">
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
          ) : ( 
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                  className={classNames(
                    test ? ' text-gray-500' : 'text-white ',
                    'group bg-transparent rounded-md inline-flex items-center text-base font-medium  hover:text-gray-500 ' )}
                  >
                    <span className=''>OI, {currentUser?.name?.toUpperCase()}</span>
                    {open ? <ChevronUpIcon
                      className=' ml-2 h-5 w-5 '
                      aria-hidden="true"
                    /> : <ChevronDownIcon
                    className='ml-2 h-5 w-5 group-hover:text-gray-500'
                    aria-hidden="true"
                  />}
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-[300px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-700" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          )}
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
                  {Links.map((item) => (
                    <Link key={item.name} href={item.href} >
                      <a
                        className="text-base font-medium text-gray-900 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              {/*  */}
              {!currentUser ? (
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
          ) : ( 
            <div className="mt-6">
            <nav className="grid gap-y-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-700" aria-hidden="true" />
                  <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
          )}
              {/*  */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Nav
