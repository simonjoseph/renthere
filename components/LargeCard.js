import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-[500px] min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className=" rounded-2xl brightness-50"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className=" text-4xl mb-3 w-[400px] text-white">{title}</h3>
        <p className="text-white"> {description} </p>

        <button className=" text-purple-500 text-sm bg-white
          py-4 px-10 shadow-md rounded-full font-bold my-3 hover:shadow-xl
          active:scale-90 transition duration-150"> 
          {buttonText} 
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
