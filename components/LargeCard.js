import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16  ml-2 mr-2 md:ml-0 md:mr-0">
      <div className="relative h-[500px] min-w-[auto] md:min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className=" rounded-2xl brightness-50"
        />
      </div>

      <div className="absolute top-[30%] left-[10px] md:top-32 md:left-12">
        <h3 className=" text-[28px] md:text-4xl mb-3 w-auto mb:w-[400px] text-white">{title}</h3>
        <p className="text-white text-base w-auto  mr-2"> {description} </p>

        <button className=" text-white text-sm bg-[#00af9e]
          py-4 px-10 shadow-md rounded-full font-bold my-3 hover:shadow-xl
          active:scale-90 transition duration-150"> 
          {buttonText} 
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
