import React from "react";
import "../../src/style.css";
import logo from "../../src/logo.png";
import { Link } from "react-router-dom";
const UserPage = () => {
  const date = `${new Date().getDate()}`;
  const today = date.toString();
  function logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    window.open("/login", "_self");
  }
  function showdata() {
    fetch("http://127.0.0.1:5000/api1/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        console.log(data);
        document.getElementById("username").innerHTML = data.UserName;
        document.getElementById("email").innerHTML = data.Email;
        document.getElementById("phone").innerHTML = data.PhoneNumber;
      })
      .catch((error) => {});
  }
  return (
    <div className="background" onLoad={showdata}>
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="today-button" date={today + "th June"}>
          <Link to="/DayView" state={{ thatday: today }}>
            Today
          </Link>
        </button>
        <div className="center">June 2022</div>
      </header>
      <div className="center">
        <div className="block">
          <div className="center">
            <h2>Your profile</h2>
          </div>

          <div className="field-wrap">
            <p>Username:</p>
            <h4 id="username">Username</h4>
          </div>
          <div className="field-wrap">
            <p>Email:</p>
            <h4 id="email">myemail@gmail.com</h4>
          </div>
          <div className="field-wrap">
            <p>Phone number:</p>
            <h4 id="phone">0999999999</h4>
          </div>
          <div className="btn-block">
          <button type="button" className="classic-button">
            <a href="/UserEdit">Edit profile</a>
          </button>
          <button type="button" className="classic-button">
            Delete profile
          </button>          
          <button type="button" className="classic-button" onClick={logout}>
            Log out
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
