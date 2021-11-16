import React, { useReducer, useEffect, useState } from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/LoginInput";
import getUserInfoOnLogin from "../api/getUser";

const LoginFormContainer = ({ loginIsActive }) => {
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
  }, [loginIsActive]);

  function handleFormChange(e) {
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

  let isLoginError = false;

  function submitHandler(e) {
    e.preventDefault();
    isLoginError = false;

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
    }
    if (lastName.length === 0) {
      setFormValues({ lastNameError: true });
    }
    if (confirmPassword !== password) {
      setFormValues({ confirmPasswordError: true });
    }

    if (!isLoginError && loginIsActive) {
      console.log("We about to log in");
      getUserInfoOnLogin(emailAddress, password);
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
          {loginIsActive ? "Login" : "Signup"}
        </LoginButton>
      </div>
    </form>
  );
};

export default LoginFormContainer;
