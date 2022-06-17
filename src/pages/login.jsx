import React from "react";
import "../../src/style.css";
import logo from "../../src/logo.png";
const Login = () => {
  const date = `${new Date().getDate()}`;
  const today=date.toString();
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserName = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
    localStorage.setItem('pswrd', Password);
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify({
        UserName: UserName,
        Password: Password
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
        if (response.status == 200) window.open("/UserPage", "_self");
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem("username", UserName);
        document.getElementById("error-message").textContent = data.Message
      })
      .catch((error) => {});
  };
  return (
    <div className="background" onLoad="showdata()">
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
      <button type="button" className="today-button" date={today+"th June"}><a href="/DayView">Today</a></button>
      <div className="center">
        June 2022
      </div>
      <button type="button" className="classic-button">
        <a href="/Signup">Sign up</a>
      </button>
    </header>
    <div className="center">
      <form className="block" id="login">
        <div className="center">
          <h2>Entrance</h2>
        </div>
        <div className="field-wrap">
          <label htmlFor="username">Username</label>
          <input
            className="input-field"
            type="text"
            placeholder="Enter username"
            id="username"
            required
          />
        </div>
        <div className="field-wrap">
          <label htmlFor="password">Password</label>
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
            id="password"
            required
          />
        </div>
        <div className="center">        <button type="submit" className="classic-button" onClick={handleSubmit}>Log in</button>
        </div>
        <div className="center">
          <span id="error-message"></span>
        </div>
        <p>
          Don't have personal account yet?
          <a href="/Signup">Sign up</a>
        </p>
      </form>
    </div>
  </div>
  );
};

export default Login;
