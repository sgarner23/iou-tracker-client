import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
const apiUrl = "http://localhost:4082/api";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    access_token: accessToken,
  },
});

async function createNewInvoice(invoiceState, lineItemState) {
  try {
    const res = await authAxios.post("http://localhost:4082/api/invoice", {
      ...invoiceState,
      ...lineItemState,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
    return;
  }
}

export default createNewInvoice;
