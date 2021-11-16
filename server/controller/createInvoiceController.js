async function addNewInvoice(req, res) {
  try {
    const db = req.app.get("db");
    const {
      isPaid,
      projectType,
      orderDate,
      paymentDate,
      subtotal,
      clientFirstName,
      clientLastName,
      clientCompanyName,
      clientStreetAddress,
      clientCity,
      clientState,
      clientZip,
    } = req.body;
    const { userID } = req;

    await db.invoice.save({
      is_paid: isPaid,
      project_type: projectType,
      order_date: orderDate,
      payment_date: paymentDate,
      subtotal,
      user_id: userID,
      client_first_name: clientFirstName,
      client_last_name: clientLastName,
      client_company_name: clientCompanyName,
      client_street_address: clientStreetAddress,
      client_city: clientCity,
      client_state: clientState,
      client_zip: clientZip,
    });

    res.status(200).send("Invoice created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating invoice");
  }
}

module.exports = {
  addNewInvoice,
};
