import axios from "axios";

async function createNewUser(firstName, lastName, email, password) {
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`, {
      firstName,
      lastName,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    return;
  }
}

export default createNewUser;
