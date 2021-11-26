async function getInvoices(req, res) {
  try {
    console.log("hello invoices");
    const db = req.app.get("db");
    const { userID } = req;
    const invoices = await db.invoice.find({
      user_id: userID,
    });

    console.log(invoices);
    res.status(200).send({ invoices });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
}

module.exports = {
  getInvoices,
};
