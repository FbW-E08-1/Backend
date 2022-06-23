import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const onSuccess = () => {
    console.log("Logout made successfully!");
    localStorage.clear();
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENTID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
