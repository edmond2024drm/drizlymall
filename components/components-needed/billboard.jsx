import { getMain2 } from "@/actions/get-main2";
import MainSection from "./main-section";

const Billboard = async () => {
  const mainSections = await getMain2();

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 rounded-xl overflow-hidden">
      {mainSections?.data?.map((item) => (
        <MainSection key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Billboard;
