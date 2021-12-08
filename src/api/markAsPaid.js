import axios from "axios";

async function paid(invoiceID) {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const apiUrl = "http://localhost:4082/api";

    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        access_token: accessToken,
      },
    });
    const res = await authAxios.put(`${apiUrl}/mark-as-paid`, { invoiceID });
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default paid;
