import React, { useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";

const Auth = ({ getRequestHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [image, setImage] = useState("");

  const postRequestHandler = async () => {
    const data = { firstName, email, password, image };
    const response = await axios.post(
      "http://localhost:5000/create-user",
      data,
    );

    setMessage(true);
    setFirstName("");
    setEmail("");
    setPassword("");
    setImage("");

    getRequestHandler();
  };

  return (
    <div>
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        type="text"
        placeholder="Insert name here"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Insert email here"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Insert password here"
      />
      <FileBase64
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />

      <button onClick={postRequestHandler}>Insert</button>
      <hr />
      {message ? (
        <h3 style={{ color: "green" }}>Data inserted successfully!</h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default Auth;
