import axios from "axios";

async function getUserInfoOnLogin(email, password) {
  try {
    const res = await axios.post("http://localhost:4082/api/login", {
      email,
      password,
    });
    console.log(res.data.accessToken);
    sessionStorage.setItem("accessToken", res.data.accessToken);
    //set the user as logged in
  } catch (error) {
    console.log(error);
  }
}

export default getUserInfoOnLogin;
