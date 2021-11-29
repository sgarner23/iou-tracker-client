async function getInvoices(req, res) {
  try {
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

async function findInvoice(req, res) {
  const { invoiceID } = req.body;

  try {
    console.log("hello invoice");
    const db = req.app.get("db");

    let invoice = await db.invoice.findOne({
      id: invoiceID,
    });

    res.status(200).send({ invoice });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
}

async function findLineItems(req, res) {
  const { invoiceID } = req.body;

  try {
    console.log("hello invoice");
    const db = req.app.get("db");

    let lineItems = await db.line_items.find({
      invoice_id: invoiceID,
    });
    res.status(200).send({ lineItems });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
}

module.exports = {
  getInvoices,
  findInvoice,
  findLineItems,
};
