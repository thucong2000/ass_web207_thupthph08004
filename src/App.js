import { useEffect, useState } from "react";
import { getAll, remove, add, edit } from "./api/productAPI";
import { getAllCate, addcate, editcate } from "./api/categoryProductAPI";
import "./styles.css";
import Routes from "./routes";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // call api
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);
  // Xóa sản phẩm
  const onRemove = async (id) => {
    try {
      await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  
  // Thêm sản phẩm
  const onAddHandler = async (item) => {
    try {
      const { data } = await add(item); // tra ve 1 object { data: ..., status: ...}
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  }; // item la 1 {}
  const onEditHandler = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((products) =>
        products.id == item.id ? data : products
      );
      setProducts(newProducts);
    } catch (error) {}
  };

  //-------------------------category-----------------------------------------
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // call api
    const getCategories = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCategories();
  }, []);
  // Thêm dm
  const addCate = async (item) => {
    try {
      const { data } = await addcate(item);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
  }; // item la 1 {}
  const editCate = async (item) => {
    try {
      const { data } = await editcate(item);
      const newCategories = categories.map((categories) =>
        categories.id == item.id ? data : categories
      );
      setCategories(newCategories);
    } catch (error) {}
  };
  return (
    <Routes
      products={products}
      onRemove={onRemove}
      onAdd={onAddHandler}
      onEdit={onEditHandler}
    
      categories={categories}
      onAddCate={addCate}
      onEditCate={editCate}
    />
  );
}
