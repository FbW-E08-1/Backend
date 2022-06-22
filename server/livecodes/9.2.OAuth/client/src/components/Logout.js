import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const onSuccess = () => {
    console.log("Logout made successfully!");
    localStorage.clear();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
