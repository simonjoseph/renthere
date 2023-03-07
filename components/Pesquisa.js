import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";

import { selectData, getSelectData } from '../data/SelectData';

function Pesquisa() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const [ selects, setSelects ] = useState(selectData);
  const searchSelect = (selectValue) =>{
    const path = "/find";
    const { query } = router;

    const values = getSelectData(selectValue) ;

    values.forEach((item) => {
      query[item.name] = item.value
    })

    router.push({pathname: path, query});
  };

  const search = () => {
    //
    router.push({
      pathname: "/find",
      query:{
        location: searchInput,
      }
    });
  };

  return (
    <div className=" ">
      <div
        className="rounded-full py-2 
        md:shadow-sm w-11/12 md:w-[633px] motion-reduce: mx-auto"
      >
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center 
          pointer-events-none">
            <span className="text-gray-500 sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
          </div>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value) }
            type="text"
            name="search"
            id="search"
            className="focus:ring-[#00af9e] focus:border-[#00af9e] block 
            w-full pl-9 pr-12 sm:text-sm border-gray-300 rounded-md h-[45px] 
            text-[#292929] font-medium"
            placeholder="Para onde pretende ir"
          />
          <div className="">
            {/* <div className="absolute md:inset-y-0 md:right-[130px] flex 
            items-center bg-white md:bg-transparent mt-4 md:mt-0 rounded-md 
            p-1 md:p-0">
              <select
                id="currenty"
                name="currenty"
                className="focus:ring-[#00af9e] focus:border-[#00af9e] 
                h-full md:py-0 pl-2 pr-7 border-gray-300 md:border-transparent bg-transparent 
                text-gray-500 sm:text-sm rounded-md font-medium"
              >
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Hoteis</option>
                <option>Escritório</option>
                <option>Loja</option>
                <option>Terreno</option>
              </select>
            </div> */}
            {/* and here */}

            {/* <div className="absolute md:inset-y-0 md:right-[50px] right-[5rem] flex 
            items-center bg-white md:bg-transparent mt-4 md:mt-0 rounded-md 
            p-1 md:p-0"> */}
              {/* <select
                id="currenty"
                name="currenty"
                className="focus:ring-indigo-500 focus:border-indigo-500 
                h-full md:py-0 pl-2 pr-7 border-gray-300 md:border-transparent 
                bg-transparent 
                text-gray-500 sm:text-sm rounded-md font-medium"
              >
                <option>Venda</option>
                <option>Aluguer</option>
              </select> */}

{/* here */}
                {/* {selects.map((select) =>(
              <select
              key={select.queryName}
              placeholder={select.placeholder}
              onChange={(e) => searchSelect({[select.queryName]: e.target.value}) }
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
))}
              
            </div> */}

            <button className="absolute inset-y-0 md:right-0 right-1 mt-0">
              <SearchIcon
                onClick={search}
                className=" h-8 
                bg-[#00af9e] text-white rounded-full p-2 
              cursor-pointer mx-2 "
              />
            </button>
            {/* <button className="absolute md:inset-y-0 md:right-0 right-1 flex 
            items-center mt-7 md:mt-0">
              <SearchIcon
                onClick={search}
                className=" md:inline-flex h-8 
                bg-[#00af9e] text-white rounded-full p-2 
              cursor-pointer md:mx-2 "
              />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
