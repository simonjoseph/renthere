import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

import { selectData, getSelectData } from '../data/SelectData';


export default function Propuse() {
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
  return (
    <div>
      
      {selects.map((select) => (
        <select
          key={select.queryName}
          placeholder={select.placeholder}
          onChange={(e) => searchSelect({ [select.queryName]: e.target.value })}
          id="currenty"
          name="currenty"
          className="focus:ring-[#00af9e] focus:border-[#00af9e] block 
            w-full pr-12 sm:text-sm border-gray-300 rounded-md h-[45px] 
            text-[#292929] font-medium"
        >
          {select?.items?.map((item) => (
            <option className="text-[#292929] font-medium" key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
