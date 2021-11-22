//Fetches the user information out of session storage to keep user logged in on refresh with global state.
function persistUserLogin() {
  console.log("hello I'm the function");
  const userInfo = JSON.parse(sessionStorage.getItem("userData"));
  return userInfo;
}

export default persistUserLogin;
