import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const List = ({ products, categories, onRemove }) => {
  // Xóa sản phẩm
  const onHandleClick = (id) => {
    Swal.fire({
      // title: "Are you sure?",
      text: "Bạn có chắc muốn xóa !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        onRemove(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/admin/products/add"
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Giá sản phẩm</th>
              {/* <th scope="col">Ảnh</th> */}
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((products, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{products.name}</td>
                <td>
                  {categories.map((categories) => {
                    if (categories.id == products.cate_id)
                      return categories.name;
                  })}
                </td>
                <td>{products.price}đ</td>
                {/* <td>
                  <img src={products.images} width="150px" />
                </td> */}
                <td>
                  {products.status ? (
                    <span className="text-primary">Còn hàng</span>
                  ) : (
                    <span className="text-danger">Hết hàng</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-circle mr-2"
                    onClick={() => {
                      onHandleClick(products.id);
                    }}
                  >
                    {" "}
                    <i className="fas fa-trash">Delete</i>
                  </button>
                  <Link
                    className="btn btn-primary ms-1"
                    to={`/admin/products/${products.id}/edit`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default List;
