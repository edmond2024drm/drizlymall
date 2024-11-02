"use client";

import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import TabPanelImage from "./tabpanel-image";

const Gallery = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex">
      <div className="hidden w-[75px] h-[75px] mx-auto mt-4 sm:block lg:max-w-none z-10 mr-4">
        <Tab.List className="grid grid-rows-6 gap-6">
          {images.data.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="w-full aspect-square">
        {images.data.map((image) => (
          <TabPanelImage key={image.id} image={image} />
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
