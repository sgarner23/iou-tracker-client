import axios from "axios";

async function getLineItems(invoiceID) {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}`;

    const authAxios = axios.create({
      baseURL: apiUrl,
      headers: {
        access_token: accessToken,
      },
    });
    const res = await authAxios.get(`/line-items/${invoiceID}`);
    const lineItems = res.data;
    return lineItems;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default getLineItems;
