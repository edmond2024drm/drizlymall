import { Tab } from "@headlessui/react";
import NextImage from "next/image";

const TabPanelImage = ({ image }) => {
  return (
    <>
      {image.infoimg.map((item) => (
        <Tab.Panel key={item.id}>
          <div className="relative w-full h-full overflow-hidden aspect-square sm:rounded-lg">
            {image.stock === 1 && (
              <div className="absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-50 bg-opacity-60">
                <span className="z-50 px-4 py-2 text-base text-white bg-black rounded-md">
                  E SHITUR!
                </span>
              </div>
            )}

            <NextImage
              fill
              src={process.env.NEXT_PUBLIC_API_URL + item.url}
              alt="Image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain object-center"
            />
          </div>
        </Tab.Panel>
      ))}
    </>
  );
};

export default TabPanelImage;
