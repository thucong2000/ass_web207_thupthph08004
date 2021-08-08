import axiosClient from "./axiosClient";

export const getAllCate = () => {
  const url = `/categories`;
  return axiosClient.get(url);
};

export const getProductByCateId = (id) => {
  const url = `/categories/${id}/products`;
  return axiosClient.get(url);
};

export const addcate = (categories) => {
  const url = `/categories`;
  return axiosClient.post(url, categories);
};
export const editcate = (categories) => {
  const url = `/categories`;
  return axiosClient.post(url, categories);
};
