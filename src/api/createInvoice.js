import axios from "axios";

async function createNewInvoice(invoiceState, lineItemState, invoiceStatus) {
  const accessToken = sessionStorage.getItem("accessToken");
  const apiUrl = "http://localhost:4082/api";

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      access_token: accessToken,
    },
  });
  try {
    const res = await authAxios.post("http://localhost:4082/api/invoice", {
      ...invoiceState,
      ...lineItemState,
      invoiceStatus,
    });
  } catch (error) {
    console.log(error);
    return;
  }
}

export default createNewInvoice;
