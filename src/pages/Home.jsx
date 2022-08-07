import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ isLogin, setIslogin }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });
  return (
    <section className="home">
      <nav className="navbar">
        <div className="logo">MERN LOGIN</div>
        <ul>
          {isLogin ? (
            <li>
              <button onClick={() => setIslogin(false)}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to MERN PROJECT </h1>
      </div>
    </section>
  );
};

export default Home;
