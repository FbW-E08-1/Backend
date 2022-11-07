import React from "react";
import { GoogleLogin } from "react-google-login";

export const Login = ({ show, setShow }) => {
  const onSuccess = (res) => {
    console.log("Login Success: ", res);
    alert(`Welcome ${res.profileObj.name}`);
    localStorage.setItem("profile", JSON.stringify({ res }));
    setShow(true);
  };

  const onFailure = (res) => {
    console.log("Login failed: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENTID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
};
