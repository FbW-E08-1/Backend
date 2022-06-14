import React, { useState } from "react";
import axios from "axios";

const POST = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);

  const postRequestHandler = async () => {
    const data = { firstName, email, password };
    const response = await axios.post(
      "http://localhost:5000/create-user",
      data,
    );
    setMessage(true);
    setFirstName("");
    setEmail("");
    setPassword("");
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
        type="text"
        placeholder="Insert password here"
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

export default POST;
