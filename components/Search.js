import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/find",
      query: {
        location: searchInput,
      },
    });
  };

  return (
    <div className=" ">
      <div
        className="py-2 
          motion-reduce:mx-auto"
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
            <button className="absolute inset-y-0 md:right-0 right-1 flex 
            items-center md:mt-0">
              <SearchIcon
                onClick={search}
                className=" md:inline-flex h-8 
                bg-[#00af9e] text-white rounded-full p-2 
              cursor-pointer md:mx-2 "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <label
    //     htmlFor="Localization"
    //     className="block text-sm font-medium text-gray-700"
    //   >
    //     Localização
    //   </label>
    //   <input
    //     type="text"
    //     name="Localization"
    //     id="Localization"
    //     autoComplete="given-name"
    //     className="mt-1 focus:ring-[#00af9e] focus:border-[#00af9e] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //   />
    // </div>
  );
}

export default Search;
