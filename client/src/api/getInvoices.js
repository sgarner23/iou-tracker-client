import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
const apiUrl = "http://localhost:4082/api";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    access_token: accessToken,
  },
});

async function getUserInvoices() {
  try {
    const res = await authAxios.get(`${apiUrl}/all`);
    const allInvoices = await res.data;

    return allInvoices;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default getUserInvoices;
