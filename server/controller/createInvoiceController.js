function calculatePaymentDate(numOfDays, orderDate) {
  const invoiceDate = new Date(orderDate);
  invoiceDate.setDate(invoiceDate.getDate() + +numOfDays);
  let dateMiliSecs = Date.parse(invoiceDate);
  let formattedDate = new Date(dateMiliSecs).toDateString();
  let dateArr = formattedDate.split(" ");
  const newDateArr = [dateArr[2], dateArr[1], dateArr[3]];
  return newDateArr.join(" ");
}

function calculateTotal(lineItems) {
  let total = 0;
  for (let i = 0; i < lineItems.length; i++) {
    total += +lineItems[i].subtotal;
  }

  return total.toFixed(2);
}

async function addNewInvoice(req, res) {
  console.log("creating invoice");
  try {
    const db = req.app.get("db");
    const {
      userStreetAddress,
      userCity,
      userState,
      userZipCode,
      userCountry,
      clientName,
      clientEmail,
      clientStreetAddress,
      clientCity,
      clientState,
      clientZipCode,
      clientCountry,
      invoiceDate,
      numOfDays,
      projectDescription,
      invoiceStatus,
      lineItems,
    } = req.body;
    const { userID } = req;

    const invoiceTotal = calculateTotal(lineItems);

    console.log(req.body);

    const newInvoice = await db.invoice.save({
      project_type: projectDescription,
      is_paid: invoiceStatus,
      order_date: invoiceDate,
      payment_date: calculatePaymentDate(numOfDays, invoiceDate),
      subtotal: invoiceTotal,
      user_id: userID,
      user_street_address: userStreetAddress,
      user_city: userCity,
      user_state: userState,
      user_zip: userZipCode,
      user_country: userCountry,
      client_name: clientName,
      client_email: clientEmail,
      client_country: clientCountry,
      client_street_address: clientStreetAddress,
      client_city: clientCity,
      client_state: clientState,
      client_zip: clientZipCode,
    });

    console.log("this is the new invoice: ", newInvoice);

    for (let i = 0; i < lineItems.length; i++) {
      console.log("this is line items ", lineItems[i]);
      const newLineItem = await db.line_items.save({
        invoice_id: newInvoice.id,
        quantity: lineItems[i].quantity,
        unit_price: lineItems[i].unitPrice,
        item_name: lineItems[i].itemName,
        subtotal: lineItems[i].subtotal,
      });
      console.log(newLineItem);
    }

    res.status(200).send({ newInvoice });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating invoice");
  }
}

async function markAsPaid(req, res) {
  try {
    const db = req.app.get("db");
    console.log(req.body);
    const { invoiceID } = req.body;
    console.log(invoiceID);
    console.log("MARK AS PAID ", invoiceID);

    const criteria = {
      id: invoiceID,
    };

    const changes = {
      is_paid: "Paid",
    };

    const options = {
      single: true,
    };

    const statusUpdate = await db.invoice.update(criteria, changes, options);

    res.status(200).send({ statusUpdate, message: "Invoice marked as paid" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating invoice");
  }
}

module.exports = {
  addNewInvoice,
  markAsPaid,
};
