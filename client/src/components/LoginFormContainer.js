import React, { useReducer, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../store/userStore";

import LoginButton from "./UI/LoginButton";
import LoginInput from "../components/LoginInput";

import getUserInfoOnLogin from "../api/getUser";
import createNewUser from "../api/createUser";

const LoginFormContainer = ({ loginIsActive, setLoginIsActive }) => {
  const { state, dispatch } = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false);
  const [loginNotSuccessful, setLoginNotSuccessful] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    firstNameError: false,
    lastName: "",
    lastNameError: false,
    emailAddress: "",
    emailAddressError: false,
    password: "",
    passwordError: false,
    confirmPassword: "",
    confirmPasswordError: false,
  };

  const [formValues, setFormValues] = useReducer(
    (curVals, newVals) => ({ ...curVals, ...newVals }),
    initialValues
  );

  const {
    firstName,
    firstNameError,
    lastName,
    lastNameError,
    emailAddress,
    emailAddressError,
    password,
    passwordError,
    confirmPassword,
    confirmPasswordError,
  } = formValues;

  function resetForm() {
    setFormValues({
      firstName: "",
      firstNameError: false,
      lastName: "",
      lastNameError: false,
      emailAddress: "",
      emailAddressError: false,
      password: "",
      passwordError: false,
      confirmPassword: "",
      confirmPasswordError: false,
    });
  }

  useEffect(() => {
    resetForm();
    setLoginNotSuccessful(null);
  }, [loginIsActive]);

  function handleFormChange(e) {
    setLoginNotSuccessful(null);
    const { name, value } = e.target;
    setFormValues({ [name]: value });

    if (name === "emailAddress") {
      setFormValues({ emailAddressError: false });
    }
    if (name === "password") {
      setFormValues({ passwordError: false });
    }
    if (name === "confirmPassword" && !confirmPassword !== password) {
      setFormValues({ confirmPasswordError: false });
    }
    if (name === "firstName") {
      setFormValues({ firstNameError: false });
    }
    if (name === "lastName") {
      setFormValues({ lastNameError: false });
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    let isLoginError = false;
    let signUpError = false;

    if (!emailAddress.includes("@")) {
      setFormValues({ emailAddressError: true });
      isLoginError = true;
    }
    if (password.length < 6) {
      setFormValues({ passwordError: true });
      isLoginError = true;
    }
    if (firstName.length === 0) {
      setFormValues({ firstNameError: true });
      signUpError = true;
    }
    if (lastName.length === 0) {
      setFormValues({ lastNameError: true });
      signUpError = true;
    }
    if (confirmPassword !== password) {
      setFormValues({ confirmPasswordError: true });
      signUpError = true;
    }

    if (!isLoginError && loginIsActive) {
      setIsLoading(true);
      const userInfo = await getUserInfoOnLogin(emailAddress, password);

      if (userInfo) {
        dispatch({
          type: "USER_LOGGED_IN",
          value: userInfo,
        });
        navigate("/profile");
      } else {
        setLoginNotSuccessful(true);
        setIsLoading(false);
      }
    } else if (!signUpError && !loginIsActive) {
      setIsLoading(true);
      await createNewUser(firstName, lastName, emailAddress, password);
      dispatch({
        type: "USER_CREATED",
      });
      setIsLoading(false);
      setLoginIsActive(true);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      {!loginIsActive && (
        <LoginInput
          type={"text"}
          name={"firstName"}
          placeholder={"First Name"}
          value={firstName}
          onChange={handleFormChange}
          classes={firstNameError ? "input error" : "input"}
        />
      )}
      {firstNameError && !loginIsActive && (
        <p className="error-message">Name field required</p>
      )}
      {!loginIsActive && (
        <LoginInput
          type={"text"}
          placeholder={"Last Name"}
          name={"lastName"}
          value={lastName}
          onChange={handleFormChange}
          classes={firstNameError ? "input error" : "input"}
        />
      )}
      {lastNameError && !loginIsActive && (
        <p className="error-message">Name field required</p>
      )}

      <LoginInput
        type={"text"}
        placeholder={"Email Address"}
        name={"emailAddress"}
        value={emailAddress}
        onChange={handleFormChange}
        classes={emailAddressError ? "input error" : "input"}
      />
      {emailAddressError && (
        <p className="error-message">Valid email required</p>
      )}
      <LoginInput
        type={"password"}
        placeholder={"Password"}
        name={"password"}
        value={password}
        onChange={handleFormChange}
        classes={passwordError ? "input error" : "input"}
      />
      {passwordError && (
        <p className="error-message">
          Password length must be at least 6 characters
        </p>
      )}
      {!loginIsActive && (
        <LoginInput
          type={"password"}
          placeholder={"Confirm Password"}
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={handleFormChange}
          classes={confirmPasswordError ? "input error" : "input"}
        />
      )}
      {confirmPasswordError && !loginIsActive && (
        <p className="error-message">Passwords must match</p>
      )}

      <div className="big-btn">
        <LoginButton classes={"active"}>
          {loginIsActive ? "Login" : "Signup"}{" "}
          {isLoading && <div class="loader"></div>}
        </LoginButton>
        {loginNotSuccessful && loginIsActive && (
          <p className="error-message">Error: email or password incorrect</p>
        )}
      </div>
    </form>
  );
};

export default LoginFormContainer;
