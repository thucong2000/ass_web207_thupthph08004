import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCate } from "../../api/categoryProductAPI";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategory();
  }, []);
  return (
    <div>
      {categories.map((categories) => {
        return <Link to={`/admin/categories/${categories.id}`}> {categories.name}</Link>;
      })}
    </div>
  );
};
export default CategoryPage;
