const express = require("express");
require("dotenv").config();
const massive = require("massive");
const bcrypt = require("bcrypt");

const { CONNECTION_STRING, PORT } = process.env;
const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("okay baby");
});

app.post("/api/user", async (req, res) => {
  try {
    const db = req.app.get("db");
    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    await db.users.save({
      first_name: firstName,
      last_name: lastName,
      email,
      password_hash: passwordHash,
    });
    res.status(200).send("User created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("error creating user");
  }
});

app.post("/api/login", async (req, res) => {
  try {
    console.log("we are here");
    const db = req.app.get("db");
    const { email, password } = req.body;

    const user = await db.users.findOne({
      email,
    });

    if (!user) {
      return res.status(404).send("No user found");
    }

    const passwordCorrect = await bcrypt.compare(password, user.password_hash);

    if (!passwordCorrect) {
      console.log("are you working");
      return res.status(403).send("Access denied");
    }

    res.status(200).send({
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("and we suck");
    console.log(error);
    res.status(500).send(error);
  }
});

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
