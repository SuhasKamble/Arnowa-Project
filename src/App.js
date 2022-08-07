import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const [isLogin, setIslogin] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home isLogin={isLogin} setIslogin={setIslogin} />}
        ></Route>
        <Route
          path="/login"
          element={<Login setIslogin={setIslogin} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
