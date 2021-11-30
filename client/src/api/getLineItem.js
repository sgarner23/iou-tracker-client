import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
const apiUrl = "http://localhost:4082/api";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    access_token: accessToken,
  },
});

async function getLineItems(invoiceID) {
  console.log(invoiceID);
  try {
    const res = await authAxios.get(`${apiUrl}/line-items/${invoiceID}`);
    console.log(res.data);
    const lineItems = res.data;
    return lineItems;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default getLineItems;
