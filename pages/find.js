import { useRouter } from "next/router";
// import InfoCard from "../components/InfoCard";
import Image from "next/image";
// import { useState } from "react";
// import Filtro from "../components/Filtro";
// import { XIcon } from "@heroicons/react/outline";
import Nav from "../components/Nav";

// news
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {  FilterIcon, MinusSmIcon, PlusSmIcon, } from '@heroicons/react/solid'
import InfoCard from "../components/InfoCard"
import NewCard from "../components/NewCard";

import { RadioGroup } from '@headlessui/react'
import Search from "../components/Search";
import {filterData, getFilterValues} from '../util/filterData'
import Pesquisa from "../components/Pesquisa";
import Propuse from "../components/propuse";
import Propriety from "../components/Propriety";
import PriceFilter from "../components/PriceFilter";
import Footer from "../components/Footer";

const subCategories = [
  { name: 'Apartamento' },
  { name: 'Quarto' },
  { name: 'Terreno' },
  { name: 'Escritorio' },
  { name: 'Hotel' },
  { name: 'Loja' }
]
const filters = [
  {
    id: 'Quarto',
    name: 'Quarto',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'Facilidade',
    name: 'Facilidade',
    options: [
      { value: 'Banheiro-privado', label: 'Banheiro privado', checked: false },
      { value: 'Cozinha', label: 'Cozinha', checked: false },
      { value: 'Jardim', label: 'Jardim', checked: true },
      { value: 'Estacionamento', label: 'Estacionamento', checked: false },
      { value: 'Air-Condicionado', label: 'Air Condicionado', checked: false },
    ],
  },
  {
    id: 'tipo',
    name: 'tipo',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function find({ searchResults }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const router = useRouter();
  const { location } = router.query;

  console.log(location, router.route);

  // let test = location;

  const [selectedSize, setSelectedSize] = useState(subCategories[2])
  // news
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [filter, setFIlter] = useState(filterData);

  const searchProperties = (filterValues) => {

  }
  
  return (
    <div>
      <div>
        <Nav test={"test"} />
      </div>

      <div className=" bg-white mt-12">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed mt-10 inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-[4rem] pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <div role="list" className="font-medium text-gray-900 px-2 py-3">
                    {/* {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))} */}
                      <Search/>
                      <div className="mb-2">
                        <Propuse />
                      </div>
                      <Propriety />
                  </div>

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className=" max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mt-28 md:hidden">
              <Search />
            </div>
          <div className="relative z-10 flex items-baseline justify-between md:pt-24 pb-6 ">
          <h1 className=" text-2xl md:text-3xl font-semibold mt-2 mb-6 ">
            {location} apartamentos para
          </h1>
          {/* <div className="">
                      {filter.map((filte) => {
                        <div key={filte.queryName}>
                          <select 
                          placeholder={filte.placeholder}
                          className="p-2 w-fit"
                          onChange={(e) => searchProperties({[filte.queryName]: e.target.value})}>
                            {
                              filte?.items?.map((item) => (
                                <option value={item.value} key={item.value} >{item.name}</option>
                              ))
                            }
                          </select>
                        </div>
                      })}
                    </div> */}
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 ">
              {/* Filters */}
              {/* <p></p> */}
              <div className="hidden lg:block  max-h-full p-2 scrollbar-hide overflow-y-scroll rounded-[4px] border-[#0000001f] border-[#00af9e] border-[1px] shadow bg-white ">
                <h3 className="">Filtros</h3>
                
                {/*  */}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 mt-4">
                    
                    <div className="col-span-2">
                      <Search/>
                    </div>
                    <div className="col-span-2">
                      <Propuse />
                    </div>
                    <div className="col-span-2">
                      <Propriety />
                    </div>

                    
                    {/* {subCategories.map((select) => (
                      <select
                      key={select.queryName}
                      placeholder={select.placeholder}
                      id="currenty"
                      name="currenty"
                      className="focus:ring-[#00af9e] focus:border-[#00af9e] 
                      h-full md:py-0 pl-2 pr-7 border-gray-300 md:border-transparent 
                      bg-transparent 
                      text-gray-500 sm:text-sm rounded-md font-medium"
                    >
                          {select?.items?.map((item) => (
                          <option key={item.value} value={item.value}>{item.name}</option>
                        ))}
                        </select>
                    ))} */}
                    {/*  */}

                    <div className="col-span-2">
                      <div className="p-2" >
                        <PriceFilter />
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
                        preço minimo
                      </label>
                      <input
                        type="number"
                        name="minPrice"
                        id="minPrice"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
                        preço maximo
                      </label>
                      <input
                        type="number"
                        name="maxPrice"
                        id="maxPrice"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/*  */}
                  </div>
                
                {/* <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
                    
                    <div className="col-span-2">
                      <Search/>
                    </div>
                    {subCategories.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active }) =>
                          classNames(
                            active ? 'ring-2 ring-[#00af9e]' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                            <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-[#00af9e]' : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
                        preço minimo
                      </label>
                      <input
                        type="number"
                        name="minPrice"
                        id="minPrice"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
                        preço maximo
                      </label>
                      <input
                        type="number"
                        name="maxPrice"
                        id="maxPrice"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </RadioGroup> */}
                {/*  */}

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
            <div className="grid grid-cols-6 gap-6">
                
                {/* <NewCard /> */}
                {searchResults?.map((item, index) => (
                  <div key={index} className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <NewCard 
                    dados={item}
                    />
                  </div>
                ))}

                {searchResults.length === 0 && (
                  <div className="col-span-6 relative">
                    <div className=" absolute bottom-[50%] left-[50%] translate-x-[-50%]">
                      <p className=" text-xl border-b-[2px] border-[#00af9e]" >Sem Resultado Encontrados para {location} </p>
                    </div>
                    <img className=' bg-cover w-auto h-auto' src="/img/page_not_found.svg" alt="not found" />
                  </div>
                )}
                {/* /End replace */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>

    <Footer />

{/* Map */}
      {/* <div className="relative">
        {toggleSidebar && (
          <div className="fixed w-[710px] bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in pt-12">
            <div className="absolute w-full flex justify-end items-center p-2 text-sm">
              <button
                type="button"
                className="-m-2 p-2 pt-4 text-gray-400 hover:text-gray-500 cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              >
                <span className="sr-only">Fechar</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Filtro closeToggle={setToggleSidebar} />
          </div>
        )}
        <section className="relative w-[710px] flex-grow pt-14 px-6 mt-8">
          <h1 className=" text-3xl font-semibold mt-2 mb-6 ">
            {location} apartamentos para arrendar
          </h1>
          <div
            className=" hidden lg:inline-flex mb-5 space-x-3
            text-gray-800 whitespace-nowrap"
          >
            <p
              className="px-4 py-2 border rounded-full 
              cursor-pointer hover:shadow-lg active:scale-95
              active:bg-gray-100 transition transform duration-100
            ease-out"
            >
              Preço
            </p>
            <p
              className="px-4 py-2 border rounded-full 
              cursor-pointer hover:shadow-lg active:scale-95
              active:bg-gray-100 transition transform duration-100
            ease-out"
            >
              Quarto e sala
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out"
              onClick={() => setToggleSidebar(true)}
            >
              Mais filtros
            </p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({
                id,
                titlo,
                Provincia,
                Bairro,
                Rua,
                Casa,
                Telefone,
                Modalidade,
                Valor,
                Quarto,
                Sala,
                Banheiro,
                Area,
                defaul,
                Foto,
              }) => (
                <InfoCard
                  key={id}
                  id={id}
                  titlo={titlo}
                  Provincia={Provincia}
                  Bairro={Bairro}
                  Rua={Rua}
                  Casa={Casa}
                  Telefone={Telefone}
                  Modalidade={Modalidade}
                  Valor={Valor}
                  Quarto={Quarto}
                  Sala={Sala}
                  Banheiro={Banheiro}
                  Area={Area}
                  defaul={defaul}
                  Foto={Foto}
                />
              )
            )}
          </div>
        </section>
        <section
          className="fixed top-[5.1rem] right-0 bottom-0 left-auto 
          w-[calc(100%-710px)] bg-[rgba(252,252,253,.9)] border border-solid border-[#e4e7e9] "
        ></section>
      </div> */}
    </div>
  );
}

export default find;

export async function getServerSideProps({ query }) {
  const prov = query.location || "Luanda";
  const mod = query.Modalidade || "Aluguer";
  const Prop = query.Imoveis || "Casa";
  const Price = query.price || 0;
  const bairro = "Luanda";
  const searchResults = await fetch(
    `http://localhost:3331/Imoveis?Provincia=${prov}&Modalidade=${mod}&tipo=${Prop}`
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
