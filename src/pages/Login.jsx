import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIslogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const data = { name, email, mobile };

    const api = await fetch(`http://localhost:5000/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });

    const res = await api.json();
    if (res.message) {
      alert("Login successfull!");
      setIslogin(true);
      navigate("/");
    } else {
      alert("Something went wrong!");
      setIslogin(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <h2>Login here</h2>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-control">
          <label>Mobile</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
