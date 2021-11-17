import axios from "axios";

async function createNewUser(firstName, lastName, email, password) {
  try {
    const res = await axios.post("http://localhost:4082/api/user", {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
    return;
  }
}

export default createNewUser;
