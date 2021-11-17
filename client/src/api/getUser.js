import axios from "axios";

async function getUserInfoOnLogin(email, password) {
  try {
    const res = await axios.post("http://localhost:4082/api/login", {
      email,
      password,
    });
    sessionStorage.setItem("accessToken", res.data.accessToken);

    return res.data.user;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default getUserInfoOnLogin;
