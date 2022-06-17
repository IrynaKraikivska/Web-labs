import React from "react";
import "../../src/style.css";
import logo from "../../src/logo.png";
const UserEdit = () => {
  const date = `${new Date().getDate()}`;
  const today = date.toString();
  let Username = "";
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
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        document.getElementById("username").placeholder = data.UserName;
        Username = data.UserName;
        document.getElementById("email").placeholder = data.Email;
        document.getElementById("phone").placeholder = data.PhoneNumber;
      })
      .catch((error) => {});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    let newUsername = "";
    if (document.getElementById("username").value)
      newUsername = document.getElementById("username").value;
    else newUsername = document.getElementById("username").placeholder;
    console.log("newUsername", newUsername);
    let newEmail = "";
    if (document.getElementById("email").value)
      newEmail = document.getElementById("email").value;
    else newEmail = document.getElementById("email").placeholder;
    console.log("newUsername", newEmail);
    let newPassword = "";
    if (document.getElementById("password").value)
      newPassword = document.getElementById("password").value;
    else newPassword = localStorage.getItem("pswrd");
    console.log("newUsername", newPassword);
    let newPhone = "";
    if (document.getElementById("phone").value)
      newPhone = document.getElementById("phone").value;
    else newPhone = document.getElementById("phone").placeholder;
    console.log("newUsername", newPhone);

    fetch("http://127.0.0.1:5000/api1/user", {
      method: "PUT",
      body: JSON.stringify({
        UserName: newUsername,
        PhoneNumber: newPhone,
        Email: newEmail,
        Password: newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (response.status == 200) window.open("/Login", "_self");

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
    <div className="background" onLoad={showdata}>
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="today-button" date={today + "th June"}>
          <a href="/DayView">Today</a>
        </button>
        <div className="center">June 2022</div>
        <a className="username" id="username-link" href="/UserPage">
          {Username}
        </a>
      </header>
      <div className="center">
        <form className="block" id="user-edit">
          <div className="center">
            <h2>Change your data</h2>
          </div>
          <div className="field-wrap">
            <label htmlFor="username">Username</label>
            <input className="input-field" type="text" id="username" />
          </div>
          <div className="field-wrap">
            <label htmlFor="email">Email</label>
            <input className="input-field" type="text" id="email" />
          </div>
          <div className="field-wrap">
            <label htmlFor="phone">Phone number</label>
            <input className="input-field" type="text" id="phone" />
          </div>
          <div className="field-wrap">
            <label htmlFor="password">Password</label>
            <input className="input-field" type="password" id="password" />
          </div>
          <div className="field-wrap">
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              className="input-field"
              type="password"
              id="confirm-password"
            />
          </div>
          <div className="center">
            <button
              type="submit"
              className="classic-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="center">
            <span className="center" id="error-message"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
