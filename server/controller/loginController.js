const bcrypt = require("bcrypt");

async function loginUser(req, res) {
  try {
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
    res.status(500).send(error);
  }
}

module.exports = {
  loginUser,
};
