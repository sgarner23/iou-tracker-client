import axios from "axios";

async function getUserInfoOnLogin(email, password) {
  try {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      email,
      password,
    });

    //placing accessToken and userData in session storage for future api calls due to protected endpoints
    sessionStorage.setItem("accessToken", res.data.accessToken);
    sessionStorage.setItem("userData", JSON.stringify(res.data.user));

    return res.data.user;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default getUserInfoOnLogin;
