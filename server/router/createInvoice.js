const express = require("express");
const router = express.Router();
const createInvoiceCtrl = require("../controller/createInvoiceController");
const { validateUser } = require("../middleware/validateUser");

router.post("/api/invoice", validateUser, createInvoiceCtrl.addNewInvoice);

module.exports = router;
