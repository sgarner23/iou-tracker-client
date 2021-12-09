import axios from "axios";

async function getUserInvoices() {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}`;

    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        access_token: accessToken,
      },
    });
    const res = await authAxios.get(`/all`);
    const allInvoices = await res.data;

    return allInvoices;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default getUserInvoices;
