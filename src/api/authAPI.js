import axiosClient from "./axiosClient";

export const signup = (user) => {
  console.log(user);
  const url = `/signup`;
  console.log(url);
  return axiosClient.post(url, user);
};
export const signin = (user) => {
  const url = `/signin`;
  return axiosClient.post(url, user);
};

// export const logout = () => {
//     const url = `/product`;
//     return axiosClient.get(url);
// };
