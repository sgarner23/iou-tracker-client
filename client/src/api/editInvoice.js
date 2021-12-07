import axios from "axios";

async function editInvoice(selectedInvoice) {
  console.log(selectedInvoice);
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const apiUrl = "http://localhost:4082/api";

    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        access_token: accessToken,
      },
    });
    const res = await authAxios.put(`${apiUrl}/edit`, { selectedInvoice });
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default editInvoice;
