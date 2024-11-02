import { getCategories } from "@/actions/get-categories";
import CategoryLinks from "./categorylinks";

const CategoryNav = async () => {
  const categories = await getCategories();

  return (
    <div>
      <CategoryLinks categories={categories} />
    </div>
  );
};

export default CategoryNav;
