import axios from "axios";

async function editInvoice(selectedInvoice) {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}`;

    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        access_token: accessToken,
      },
    });
    const res = await authAxios.put(`/edit`, { selectedInvoice });
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default editInvoice;
