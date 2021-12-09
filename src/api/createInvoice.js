import axios from "axios";

async function createNewInvoice(invoiceState, lineItemState, invoiceStatus) {
  const accessToken = sessionStorage.getItem("accessToken");
  const apiUrl = `${process.env.REACT_APP_BACKEND_URL}`;

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      access_token: accessToken,
    },
  });
  try {
    const res = await authAxios.post("/invoice", {
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
