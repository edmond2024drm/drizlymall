import Image from "next/image";

const MainSection = ({ item }) => {
  return (
    <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden">
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs z-10">
          {item?.attributes?.title}
        </div>
      </div>
      <Image
        src={
          process.env.NEXT_APP_API_URL +
          item?.attributes?.image?.data?.attributes?.url
        }
        fill
        alt="Image"
        className="object-cover z-1"
        priority
      />
    </div>
  );
};

export default MainSection;
