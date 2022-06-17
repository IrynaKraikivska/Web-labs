import React from "react";
import "../../src/style.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../src/logo.png";
const EventEdit = () => {
  const date = `${new Date().getDate()}`;
  const today = date.toString();
  let Username = localStorage.getItem("username");
  const location = useLocation();
  let event = ("event", location.state.event);
  let cat = ("cat", location.state.cat);
  const [cats, setCats] = useState([]);
  const days = [
    "",
    "",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];
  function showdata() {
    fetch("http://127.0.0.1:5000/api1/calendar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setCats(actualData);
        console.log(cats);
      })
      .finally(() => {});
  }

  const addCategory = (e) => {
    e.preventDefault();
    let Name = document.getElementById("category-title").value;
    let Description = document.getElementById("category-description").value;
    fetch("http://127.0.0.1:5000/api1/calendar", {
      method: "POST",
      body: JSON.stringify({
        Name: Name,
        Description: Description,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          window.open("/Dayview", "_self");
        }

        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        var description = document.getElementById("addCategoryerror-message");
        description.textContent = data.Message;
      })
      .catch((error) => {});
  };
  const addEvent = (e) => {
    e.preventDefault();
    let Name = document.getElementById("event-title").value;
    let Description = document.getElementById("event-description").value;
    let Calendar = document.getElementById("event-category").value;
    let Datetime = document.getElementById("datatime");
    fetch("http://127.0.0.1:5000/api1/event", {
      method: "POST",
      body: JSON.stringify({
        Name: Name,
        Calendar: Calendar,
        Datetime: Datetime,
        Description: Description,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (response.status == 201) {
          window.open("/Dayview", "_self");
        }

        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        var description = document.getElementById("addEvent-error-message");
        description.textContent = data.Message;
      })
      .catch((error) => {});
  };
  const editEvent = (e) => {
    e.preventDefault();
    let newName = "";
    if (document.getElementById("event-edit-title").value)
      newName = document.getElementById("event-edit-title").value;
    else newName = event.Name;

    let newDescription = "";
    if (document.getElementById("event-edit-description").value)
      newDescription = document.getElementById("event-edit-description").value;
    else newDescription = event.Description;

    let newCalendar = "";
    if (document.getElementById("event-edit-category").value)
      newCalendar = document.getElementById("event-edit-category").value;
    else newCalendar = event.idCalendar;

    let newDatetime = "";
    if (document.getElementById("event-edit-datatime"))
      newDatetime = document.getElementById("event-edit-datatime");
    else newDatetime = event.Datetime;
    let Datetime = document.getElementById("event-edit-datatime");

    fetch("http://127.0.0.1:5000/api1/event", {
      method: "PUT",
      body: JSON.stringify({
        idEvent: event.idEvent,
        Name: newName,
        idCalendar: newCalendar,
        Datetime: newDatetime,
        Description: newDescription,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (response.status == 20) {
          window.open("/Dayview", "_self");
        }

        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
        var description = document.getElementById("addEvent-error-message");
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
        <a className="username" href="/UserPage">
          {Username}
        </a>
      </header>
      <div className="timetable">
        <div className="side-box">
          <button type="button" className="classic-button">
            <a className="button" href="#create-event">
              + event
            </a>
          </button>
          <div className="small-calendar">
            <div className="center">
              <a href="#">June 2022</a>
            </div>
            <div className="weekdays">
              <p>Mo</p>
              <p>Tu</p>
              <p>We</p>
              <p>Th</p>
              <p>Fr</p>
              <p>Sa</p>
              <p>Su</p>
            </div>

            <div className="days">
              {days.map((day) => {
                if (day == today) {
                  return (
                    <p className="active" key={day.toString()}>
                      {day}
                    </p>
                  );
                } else {
                  return <p key={day.toString()}>{day}</p>;
                }
              })}
            </div>
          </div>
          <div className="categories">
            <h4 className="center">
              Categories
              <button type="button" className="left-right-button">
                <a href="#create-category">+</a>
              </button>
            </h4>
            {cats.map((object) => (
              <p key={object.idCalendar}>{object.Name}</p>
            ))}
          </div>
        </div>
        <div className="content">
          <div className="center">
            <div className=" block-edit">
              <div className="center">
                <h2>Edit an event</h2>
              </div>
              <form>
                <div className="field-wrap">
                  <label htmlFor="event-title">Event title</label>
                  <input
                    className="input-field"
                    type="text"
                    placeholder={event.Name}
                    id="event-edit-title"
                  />
                </div>

                <div className="field-wrap">
                  <label htmlFor="event-title">Category</label>
                  <input
                    className="input-field"
                    type="text"
                    placeholder={cat}
                    id="event-edit-category"
                    list="categories"
                  />
                  <datalist id="categories">
                    {cats.map((object) => (
                      <option key={object.idCalendar} value={object.Name} />
                    ))}
                  </datalist>
                </div>

                <div className="field-wrap">
                  <label htmlFor="event-description">Description</label>
                  <textarea
                    className="input-field"
                    type="text"
                    placeholder="Enter event description"
                    id="event-edit-description"
                  ></textarea>
                </div>
                <div className="field-wrap">
                  <label htmlFor="event-description">Date and time</label>
                  <p className="datetime">{event.Datetime.substring(0, 10)}</p>
                  <p className="datetime">{event.Datetime.substring(11, 16)}</p>
                  <input
                    className="input-field"
                    type="datetime-local"
                    id="event-edit-datetime"
                  />
                </div>

                <div className="center">
                  <button
                    type="submit"
                    className="classic-button"
                    onClick={editEvent}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="create-category" className="overlay light">
        <a className="cancel" href="#"></a>
        <div className="popup-block">
          <div className="center">
            <h2>Create category</h2>
          </div>
          <form>
            <div className="field-wrap">
              <label htmlFor="category-title">Category title</label>
              <input
                className="input-field"
                type="text"
                placeholder="Enter title"
                id="category-title"
                required
              />
            </div>

            <div className="field-wrap">
              <label htmlFor="category-description">Description</label>
              <textarea
                className="input-field"
                type="text"
                placeholder="Enter description"
                id="category-description"
                required
              ></textarea>
            </div>

            <div className="center">
              <button type="submit" className="classic-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div id="create-event" className="overlay light">
        <a className="cancel" href="#"></a>
        <div className="popup-block">
          <div className="center">
            <h2>Schedule an event</h2>
          </div>
          <form>
            <div className="center">
            <div className="field-wrap">
              <label htmlFor="event-title">Event title</label>
              <input
                className="input-field"
                type="text"
                placeholder="Enter event title"
                id="event-title"
                required
              />
            </div>

            <div className="field-wrap">
              <label htmlFor="event-title">Category</label>
              <input
                className="input-field"
                type="text"
                placeholder="Choose category"
                id="event-category"
                list="categories"
                required
              />
              <datalist id="categories">
                {cats.map((object) => (
                  <option key={object.idCalendar} value={object.Name} />
                ))}
              </datalist>
            </div>

            <div className="field-wrap">
              <label htmlFor="event-description">Description</label>
              <textarea
                className="input-field"
                type="text"
                placeholder="Enter description"
                id="event-description"
                required
              ></textarea>
            </div>
            <div className="field-wrap">
              <label htmlFor="event-description">Date and time</label>
              <input
                className="input-field"
                type="datetime"
                id="datetime"
                required
              />
            </div>

            <div className="center">
              <button type="submit" className="classic-button">
                Submit
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventEdit;
