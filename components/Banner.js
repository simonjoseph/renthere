import Image from "next/image"
import Pesquisa from "./Pesquisa"
import Search from "./Search"

function Banner() {
  return (
    <div className=" h-screen">
      <Image src="/img/living-room.jpg" 
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="banner"
        className="filter brightness-50"
      />

      <div className="absolute top-1/3 w-full text-center">
        <p className="text-white text-3xl md:text-5xl  font-bold">
          Encontrar um espaço <br /> Agora está muito mais fácil!
        </p>
        <div className="mt-4 bg-transparent h-0" >
          <Pesquisa />
        </div>
        {/* <div className="mt-4 bg-white md:bg-transparent h-[150px] md:h-0" >
        <Pesquisa />
        </div> */}
      </div>
    </div>
  )
}

export default Banner
