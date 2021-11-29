import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
const apiUrl = "http://localhost:4082/api";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    access_token: accessToken,
  },
});

// async function getSingleInvoice(userInvoice) {
//   try {
//     const res = await authAxios.get(`${apiUrl}/user-invoice`), {
//       userInvoice
//     };

//     const invoice = await res.data;

//     return invoice;
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }

// export default getSingleInvoice;
