import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";

const EditFormProduct = (props) => {
  const [products, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // call API
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const fakeValue = {
      id: id,
      ...data
    };

    props.onEdit(fakeValue);
    history.push("/admin/products");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Cập nhật sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            defaultValue={products.name}
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              Nhập tên sp !!!
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            defaultValue={products.price}
            type="number"
            className="form-control"
            // name="price"
            // onChange={onHandleChange}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="d-block text-danger mt-3">
              Vui lòng nhập giá :)
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            // name="status"
            // onChange={onHandleChange}
            {...register("status")}
            defaultValue={products.status}
          >
            <option value="false">Hết hàng</option>
            <option value="true">Còn hàng</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Danh muc</label>
          <select className="form-control" {...register("cate_id")}>
            {props.categories.map((categories) => {
              if (categories.id == products.cate_id) {
                return (
                  <option selected value={categories.id}>{categories.name}</option>
                )
              }
              return <option value={categories.id}>{categories.name}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Sửa sản phẩm
        </button>
      </form>
    </div>
  );
};
export default EditFormProduct;
