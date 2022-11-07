import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const Logout = ({ setShow, setDetals }) => {
  const navigate = useNavigate();

  const onSuccess = () => {
    console.log("Logout made successfully!");
    localStorage.clear();
    setShow(false);
    setDetals([]);
    navigate("/");
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
