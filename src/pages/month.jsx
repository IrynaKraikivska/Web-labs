import React from "react";
import { useState} from "react";
import { Link } from 'react-router-dom';
import "../../src/style.css";
import logo from "../../src/logo.png";
const MonthView = () => {
  const date = `${new Date().getDate()}`;
  const today=date.toString();
  let Username=localStorage.getItem("username");
  console.log(Username);
  const [cats, setCats] = useState([]);
  console.log(cats);
  const [events, setEvents] = useState([]);
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
  function showdata(){
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
    fetch("http://127.0.0.1:5000/api1/event", {
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
        console.log(actualData);
        setEvents(actualData);
        console.log(events);
      })
      .catch((err) => {
        setEvents(null);
      })
      .finally(() => {});
  };

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
        console.log(data);
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
        console.log(data);
        var description = document.getElementById("addEvent-error-message");
        description.textContent = data.Message;
      })
      .catch((error) => {});
  };
  const deleteEvent = (a) => {
    fetch("http://127.0.0.1:5000/api1/event", {
      method: "DELETE",
      body: JSON.stringify({
        idEvent: a,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (response.status == 200) {
          window.open("/DayView", "_self");
        }

        return response.json();
      })
      .then((data) => {
        if (data.code) {
          throw new Error(data.description);
        }
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
        <button type="button" className="today-button" date={today+"th June"}><a href="/DayView">Today</a></button>
      <div className="center">
        June 2022
      </div>
      <a className="username" id="username-link" href="/UserPage">{Username}</a>
        <a className="username" href="/UserPage"></a>
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
              <a href="/MonthView">June 2022</a>
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
            {days.map((day) => 
          {
          if (day == today) {
            return (<p className="active" key={day.toString()} >{day}</p>)
          }
          else{return (<p key={day.toString()} >{day}</p>)}
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
          <div className="events center">
            {events.map((object) => (
              <div className="event" key={object.idEvent}>
                  <div className="left">
                    <p className="title">{object.Name}</p>
                    <p className="datetime">
                      {object.Datetime.substring(0, 10)}
                    </p>
                    <p className="datetime">
                      {object.Datetime.substring(11, 16)}
                    </p>
                    <p className="description">{object.Description}</p>
                  </div>
                  <div className="right">
                    <p className="category">
                      {cats[object.idCalendar - 1].Name}
                    </p>
                    <div className="center">
                      <button
                        className="classic-button"
                        onClick={() => deleteEvent(object.idEvent)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                        
                      </button>       
                      <button className="classic-button">
                      <Link
                          to="/EventEdit"
                          state={{ event: object, cat: cats[object.idCalendar - 1].Name }}
                          className="submit_button_text"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-pencil"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                          </svg>
                        </Link>
                        </button>               
                    </div>
                  </div>
                </div>
))}
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
              <button
                type="submit"
                className="classic-button"
                onClick={addCategory}
              >
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
              <label htmlFor="event-datatime">Date and time</label>
              <input
                className="input-field"
                type="datetime-local"
                id="datetime"
                required
              />
            </div>

            <div className="center">
              <button
                type="submit"
                className="classic-button"
                onClick={addEvent}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MonthView;
