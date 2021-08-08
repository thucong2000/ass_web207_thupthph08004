import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductByCateId } from "../../api/categoryProductAPI";

const CategoryDetailPage = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getProductByCateId(id);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategory();
  }, []);
  return (
    <div>
      {products.map((products) => {
        return <Link to={`/admin/products/${products.id}`}> {products.name}</Link>;
      })}
    </div>
  );
};
export default CategoryDetailPage;
