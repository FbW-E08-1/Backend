import { Routes, Route, NavLink as Link } from "react-router-dom";
import GET from "./components/GET.js";
import POST from "./components/POST.js";

function App() {
  return (
    <div className="App">
      {" "}
      <nav>
        <ul>
          <li>
            <Link to="/">GET</Link>
          </li>
          <li>
            <Link to="/create-user">POST</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<GET />}></Route>
          <Route path="/create-user" element={<POST />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
