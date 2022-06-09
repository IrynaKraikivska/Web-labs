import React from "react";
import "../../src/style.css";
import logo from "../../src/logo.png";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone-number").value;

    fetch("http://127.0.0.1:5000/api1/user", {
      method: "POST",
      body: JSON.stringify({
        UserName: username,
        Email: email,
        Password: password,
        PhoneNumber: phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 201) window.open("login.html", "_self");

        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        var description = document.getElementById("error-message");
        description.textContent = data.Message;
      })
      .catch((error) => {});
  };
  return (
    <div className="background">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="today-button" date="12th May">
          <a className="link" href="/DayView">
            Today
          </a>
        </button>
        <div className="center">
          <a className="link" href="/MonthView">
            May 2022
          </a>
        </div>
        <button type="button" className="classic-button">
          <a className="link" href="/Login">
            Log in
          </a>
        </button>
      </header>
      <div className="center">
        <form className="block" id="signup-form">
          <div className="center">
            <h2>Create your account</h2>
          </div>
          <div className="field-wrap">
            <label for="username">Username</label>
            <input
              className="input-field"
              type="text"
              placeholder="Enter username"
              id="username"
              required
            />
          </div>
          <div className="field-wrap">
            <label for="email">Email</label>
            <input
              className="input-field"
              type="text"
              placeholder="Enter email"
              id="email"
              required
            />
          </div>
          <div className="field-wrap">
            <label for="phone-number">Phone number</label>
            <input
              className="input-field"
              type="text"
              placeholder="Enter phone number"
              id="phone-number"
              required
            />
          </div>
          <div className="field-wrap">
            <label for="password">Password</label>
            <input
              className="input-field"
              type="password"
              placeholder="Enter password"
              id="password"
              required
            />
          </div>
          <div className="field-wrap">
            <label for="confirm-password">Confirm password</label>
            <input
              className="input-field"
              type="password"
              placeholder="Confirm password"
              id="confirm-password"
              required
            />
          </div>

          <p>
            <input type="checkbox" />I agree to the license terms.
          </p>
          <div className="center">
            <button type="submit" className="classic-button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div className="center">
            <span className="center" id="error-message"></span>
          </div>
          <p>
            Already have an account?
            <a href='/Login'> Log in</a>
          </p>
        </form>
      </div>
      <script src="./js/user-create.js"></script>
    </div>
  );
};

export default Signup;
