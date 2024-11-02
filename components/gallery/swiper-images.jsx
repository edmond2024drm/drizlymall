import Image from "next/image";

const SwiperImages = ({ image }) => {
  return (
    <div className="aspect-square cursor-pointer rounded-md">
      <Image
        fill
        src={process.env.NEXT_PUBLIC_API_URL + image?.url}
        alt=""
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain object-center"
      />
    </div>
  );
};

export default SwiperImages;
