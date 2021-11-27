async function getInvoices(req, res) {
  try {
    console.log("hello invoices");
    const db = req.app.get("db");
    const { userID } = req;
    console.log("User ID: ", userID);

    let invoices = await db.invoice.find(
      {
        user_id: userID,
      },
      {
        order: [
          {
            field: "id",
            direction: "desc",
          },
        ],
      }
    );

    res.status(200).send({ userInvoices: invoices });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
}

module.exports = {
  getInvoices,
};
