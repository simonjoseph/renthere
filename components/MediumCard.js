import Image from "next/image";

function MediumCard({ link, img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105 
      transform transition duration-300 ease-out"
    >
      <div className="relative h-[343px] w-[237px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className=" rounded-[8px] rounded-b-none brightness-50"
        />
      </div>
      <div className=" bg-white shadow pb-2">
        <h3 className=" text-2xl mt-3 text-center">{title}</h3>
      </div>
    </div>
  );
}

export default MediumCard;
