import Footer from "../components/Footer"
import Nav from "../components/Nav"
// import Footer from "../components/Footer"
// import LargeCard from "../components/LargeCard"



// const features = [
//   { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//   { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//   { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//   { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//   { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//   { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ]

// export default function Example() {
//   return (
//     <>
//     <Nav test={"test"} />
//     <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 mt-24">
//   <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-20 lg:grid-cols-2">
//     <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
//       <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Publicite o teu espaço no aluga aqui</h1>
//       <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
//         Alugaqui
//       </p>
//     </div>
//     <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
//       <img src="/img/gothome.jpg" alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"/>
//       <img src="/img/living-room.jpg" alt="" class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
//       <img src="/img/lundanorte.jpg" alt="" class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
//     </div>
//     <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
//       <a href="/cadastrar" class="bg-[#00af9e] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
//         Anunciar agora
//         </a>
//     </div>
//     <div class="mt-4 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
//     <p class="text-sm leading-6 dark:text-slate-400">
//     Milhares de inquilinos verificados e de alta qualidade, procurando alojamento todos os dias.
//     </p>
//     <p class=" text-sm leading-6 dark:text-slate-400">
//     Não há necessidade de visitas pessoais ou telefonemas. Fale diretamente com potenciais inquilinos. Gerencie seus aluguéis totalmente online.
//     </p>
//     </div>

//   </div>
//     <LargeCard
//             img="/img/gothome.jpg"
//             title="Comece a anunciar seu imóvel agora"
//             description="Sim, quero ganhar dinheiro e economizar mais tempo"
//             buttonText="Anunciar"
//           />
// </main>

// <Footer />
// </>
//   )
// }

export default function Example() {
  return (
    <>
    <div className="relative bg-white overflow-hidden">
      <Nav test={"test"} />
      <div className="max-w-7xl mx-auto mt-[250px]">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>


          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Publicite o seu espaço</span>{' '}
                <span className="block text-[#00af9e] xl:inline">no alugaqui</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Milhares de inquilinos verificados e de alta qualidade, procurando alojamento todos os dias.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Não há necessidade de visitas pessoais ou telefonemas. Fale diretamente com potenciais inquilinos. Gerencie seus aluguéis totalmente online.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/cadastrar"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00af9e] hover:bg-[#00af9e] md:py-4 md:text-lg md:px-10"
                  >
                    Anunciar
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  {/* <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#00af9e] bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/img/living.jpg"
          alt=""
        />
      </div>
      
    </div>
    <Footer />
    </>
  )
}
