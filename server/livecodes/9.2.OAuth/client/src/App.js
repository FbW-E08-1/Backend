import "./App.css";
import { Login } from "./components/Login";
import Logout from "./components/Logout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Auth from "./components/Auth";
import { Routes, Route, NavLink as Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      setShow(true);
    }
  }, []);

  const [details, setDetals] = useState([]);

  const getRequestHandler = async () => {
    console.log("tetetetete");
    const API = axios.create({ baseURL: "http://localhost:5000" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${
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
      <Login show={show} setShow={setShow} />
      <br />
      <Logout show={show} setShow={setShow} setDetals={setDetals} />
      <nav>
        <div style={{ padding: "20px" }}>
          <Link to="/create-user">Creat User</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/create-user"
          element={<Auth getRequestHandler={getRequestHandler} />}
        ></Route>
      </Routes>

      {show ? (
        <>
          <h1>Click the button to get all users</h1>
          <button onClick={getRequestHandler}>GET</button>
        </>
      ) : (
        <h3>To see all users, please log in!</h3>
      )}
      <div
        style={{
          display: "flex",
          alignContent: "space-between",
          justifyContent: "space-around",
          flexWrap: "wrap",
          paddingTop: "30px",
        }}
      >
        {details.map((value) => {
          return (
            <div
              style={{
                border: "1px solid blue",
                boxShadow: "5px 10px #888888",
                borderRadius: "10%",
                padding: "10px",
              }}
              key={value._id}
            >
              <img src={value.image} alt="myimage" width="100" />
              <h3>
                Name: {value.firstName} | E-mail: {value.email}
              </h3>
              <div style={{ display: "inline" }}>
                <small
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => removeUser(value._id)}
                >
                  Delete
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
