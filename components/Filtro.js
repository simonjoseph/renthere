import React from 'react'

function Filtro(closeToggle) {
  const handleCloseToggle = () => {
    if(closeToggle) closeToggle(false);
  }
  return (
    <>
      <div className='h-full scrollbar-hide'>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900 mt-8">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-yellow-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
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