import React from 'react'
import PriceSlider from './PriceSlider';

function Filtro(closeToggle) {
  const handleCloseToggle = () => {
    if(closeToggle) closeToggle(false);
  }

  const filters = [
    {
      id: 'color',
      name: 'Color',
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
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
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
  return (
    <>
      <div className='h-full scrollbar-hide'>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900 mt-8">
            {/* <p>total</p>
            <p>$262.00</p> */}
            <PriceSlider 
            />
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Faça a sua pesquisa</p>


{/*  */}
          {filters.map((section) => (
            <div  key={section.id} className="border-b border-gray-200 py-6">
              <>
                <h3 className="-my-3 flow-root">
                  <button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">{section.name}</span>
                  </button>
                </h3>
                <panel className="pt-6">
                  <div className="flex items-center m-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center m-4">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 border-gray-300 rounded 
                          text-yellow-700 focus:ring-yellow-500"
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
                  </panel>
                </>
              </div>
          ))}
{/*  */}

          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border 
                border-transparent bg-yellow-700 px-6 py-3 text-base 
                font-medium text-white shadow-sm hover:bg-yellow-600"
              onClick={() => handleCloseToggle}
            >
              Pesquisar
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filtro