const express = require("express");
const router = express.Router();
const getInvoicesCtrl = require("../controller/getInvoicesController");
const { validateUser } = require("../middleware/validateUser");

router.get("/api/all", validateUser, getInvoicesCtrl.getInvoices);

module.exports = router;
