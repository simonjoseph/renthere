import React from 'react'

export const StepperControl = ({handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-end mt-4 mb-8 max-w-full mx-auto px-4'>
      <button onClick={() => handleClick()} className={`bg-white text-slate-400 
        uppercase py-2 px-4 rounded-xl 
        font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700
        hover:text-white transition duration-200 ease-in-out 
        ${currentStep === 1 ? "opacity-50 cursor-not-allowed": ""}`}>
          Voltar
      </button>

      <button onClick={() => handleClick("next")} className='bg-[#00af9e] text-white 
        uppercase  px-2 rounded-xl ml-5
        font-semibold cursor-pointer  hover:bg-slate-700
        hover:text-white transition duration-200 ease-in-out'>
          {currentStep === steps.length -1 ? "Confirmar" : "Próximo"}
      </button>
    </div>
  )
}
