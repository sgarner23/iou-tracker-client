import axios from "axios";

async function invoiceDelete(invoiceID) {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const apiUrl = "http://localhost:4082/api";

    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        access_token: accessToken,
      },
    });
    const res = await authAxios.delete(`${apiUrl}/delete/${invoiceID}`);
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

export default invoiceDelete;
