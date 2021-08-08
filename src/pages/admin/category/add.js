import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";


const AddFormCategory = (props) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const categories = {
      id: Math.random().toString(5).substring(2),
      ...data,
    };
    props.onAddCate(categories);
    history.push("/admin/categories");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Thêm danh mục</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            type="text"
            className="form-control"
            // name="name"
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
          Thêm danh mục
        </button>
      </form>
    </div>
  );
};
export default AddFormCategory;
