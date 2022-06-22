import "./App.css";
import { Login } from "./components/Login";
import Logout from "./components/Logout";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [details, setDetals] = useState([]);

  const getRequestHandler = async () => {
    const API = axios.create({ baseURL: "http://localhost:5000" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("profile")).res.tokenId
        }`;
      }
      return req;
    });

    const response = await API.get("/getusers");
    console.log(response);
    setDetals(response.data.details);
  };

  const removeUser = async (id) => {
    try {
      const API = axios.create({ baseURL: "http://localhost:5000" });

      API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
          req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).res.tokenId
          }`;
        }
        return req;
      });

      await API.delete(`/${id}`);
      console.log("USer deleted! ", id);
      getRequestHandler();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
      <Login />
      <br />
      <Logout />
      <h1>Click the button to get all users</h1>

      {localStorage.getItem("profile") ? (
        <button onClick={getRequestHandler}>GET</button>
      ) : (
        "Login first!"
      )}
      {details.map((value) => {
        return (
          <div key={value._id}>
            <img src={value.image} alt="myimage" width="100" />
            <h3>
              Name: {value.firstName} | E-mail: {value.email}
            </h3>
            <div style={{ display: "inline" }}>
              <small onClick={() => removeUser(value._id)}>Delete</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
