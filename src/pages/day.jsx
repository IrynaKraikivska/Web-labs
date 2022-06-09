import React from "react";
import "../../src/style.css";
import logo from "../../src/logo.png";
const DayView = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="background" onload="showdata()">
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
      <button type="button" className="today-button" date="12th May">
      <a href="/DayView">Today</a>
    </button>
    <div className="center">
      <a href="/MonthView">May 2022</a>
    </div>
    <a className="username" href="/UserPage">Username</a>
  </header>
  <div className="timetable">
    <div className="side-box">

      <button type="button" className="classic-button"><a className="button" href="#create-event">+ event</a></button>
      <div className="small-calendar">
        <div className="center">
          <button type="button" className="left-right-button">&lt</button>
          <a href="/MonthView">May 2022</a>
          <button type="button" className="left-right-button">&gt</button>
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
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p className="active">19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
          <p>28</p>
          <p>29</p>
          <p>30</p>
          <p>31</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="categories">
        <h4 className="center">Categories<button type="button" className="left-right-button"><a
              href="#create-category">+</a></button></h4>
        <div><input className="checkbox" type="checkbox" id="work" name="work" checked/><label for="work">Work</label></div>
        <div><input className="checkbox" type="checkbox" id="family" name="family" checked/><label
            for="family">Family</label></div>
        <div><input className="checkbox" type="checkbox" id="leisure" name="leisure" checked/><label
            for="leisure">Leisure</label></div>
        <div><input className="checkbox" type="checkbox" id="invited" name="invited" checked/><label
            for="invited">Invited</label></div>
      </div>
    </div>
    <div className="content">
      <div className="events center">
        <div className="event">
          <div className="flex">
            <div className="left">
              <p className="title">Zoom-meeting</p>
              <p className="datetime">10:00</p>
              <p className="description">Discusion of "GreenWill" documentation</p>
              <ul className="users">
                <li>Max</li>
                <li>Kate</li>
                <li>Will</li>
              </ul>
            </div>
            <div className="right">
              <p className="category">Work</p>
              <div className="center">
                <button className="classic-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash"
                    viewBox="0 0 16 16">
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg></button>
                <button className="classic-button"><a href="/EventEdit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      className="bi bi-pencil" viewBox="0 0 16 16">
                      <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg></a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="flex">
            <div className="left">
              <p className="title">Picasso exibition opening</p>

              <p className="datetime">12:00</p>
              <p className="description">New Picasso exibition dedicated to his earliest works</p>
            </div>
            <div className="right">
              <p className="category">Invited</p>
              <div className="center">
                <button className="classic-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash"
                    viewBox="0 0 16 16">
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg></button>
                <button className="classic-button"><a href="/EventEdit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      className="bi bi-pencil" viewBox="0 0 16 16">
                      <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg></a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="flex">
            <div className="left">
              <p className="title">Ellie B-Day</p>
              <p className="datetime">17:00</p>
              <p className="description">Home-party</p>

              <ul className="users">
                <li>Kate</li>
                <li>Samuel</li>
              </ul>
            </div>
            <div className="right">
              <p className="category">Family</p>
              <div className="center">
                <button className="classic-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash"
                    viewBox="0 0 16 16">
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg></button>
                <button className="classic-button"><a href="/EventEdit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      className="bi bi-pencil" viewBox="0 0 16 16">
                      <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg></a></button>
              </div>
            </div>
          </div>
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
            <label for="category-title">Category title</label>
            <input className="input-field" type="text" placeholder="Enter title" id="category-title" required />
          </div>

          <div className="field-wrap">
            <label for="category-description">Description</label>
            <textarea className="input-field" type="text" placeholder="Enter description" id="category-description"
              required></textarea>
          </div>


          <div className="center">
            <button type="submit" className="classic-button">Submit</button>
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
            <label for="event-title">Event title</label>
            <input className="input-field" type="text" placeholder="Enter event title" id="event-title" required />
          </div>

          <div className="field-wrap">
            <label for="event-title">Category</label>
            <input className="input-field" type="text" placeholder="Choose category" id="event-category" list="categories"
              required />
            <datalist id="categories">
              <option value="Work"/>
              <option value="Family"/>
              <option value="Leisure"/>
            </datalist>

          </div>

          <div className="field-wrap">
            <label for="event-description">Description</label>
            <textarea className="input-field" type="text" placeholder="Enter description" id="event-description"
              required></textarea>
          </div>
          <div className="field-wrap">
            <label for="event-description">Date and time</label>
            <input className="input-field" type="datetime-local" id="datetime" required/>
          </div>

          <div className="center">
            <button type="submit" className="classic-button">Submit</button>
          </div>


        </form>
      </div>
      </div>
      </div>
  );
};

export default DayView;
