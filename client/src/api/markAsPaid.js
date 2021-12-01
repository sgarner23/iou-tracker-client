import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
const apiUrl = "http://localhost:4082/api";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    access_token: accessToken,
  },
});

async function paid(invoiceID) {
  try {
    const res = await authAxios.put(`${apiUrl}/mark-as-paid`, { invoiceID });
    console.log(res.data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default paid;
