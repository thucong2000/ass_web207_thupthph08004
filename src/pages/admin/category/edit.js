import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { getProductByCateId } from "../../../api/categoryProductAPI";

const EditFormCategory = (props) => {
  const [categories, setCategory] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // call API
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getProductByCateId(id);
        setCategory(data);
        reset(data);
      } catch (error) {}
    };
    getCategory();
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

    props.onEditCate(fakeValue);
    history.push("/admin/categories");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Cập nhật danh mục</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            defaultValue={categories.name}
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              Nhập tên dm !!!
            </span>
          )}
        </div>
        
        <button type="submit" className="btn btn-primary">
          Sửa danh mục
        </button>
      </form>
    </div>
  );
};
export default EditFormCategory;
