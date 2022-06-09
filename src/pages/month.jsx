import React from "react";
import "../../src/style.css";
import logo from "../../src/logo.png";
const MonthView = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <body className="background">
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
      <button type="button" className="today-button" date="12th May">
        <a href="/DayView">Today</a>
      </button>
      <div className="center">
        <button type="button" className="left-right-button">&lt</button>
        <a href="/MonthView">May 2022</a>
        <button type="button" className="left-right-button">&gt</button>
      </div>
      <a className="username" href="/UserPage">Username</a>
    </header>
    <div className="timetable">
    <div className="side-box">
        
        <button type="button" className="classic-button"><a className="button" href="#create-event">+ event</a></button>
        <div className="small-calendar">
        <div className="center">
            <button type="button" className="left-right-button">&lt</button>
        <a className="link" href="/MonthView">May 2022</a>
        <button type="button" className="left-right-button">&gt</button>
        </div>
        <div className="weekdays">
            <p>Mo</p><p>Tu</p><p>We</p><p>Th</p><p>Fr</p><p>Sa</p><p>Su</p>
        </div>
          
          <div className="days"> 
            <p></p><p></p><p></p><p></p><p></p><p></p><p>1</p>
            <p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p>
            <p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p>
            <p>16</p><p>17</p><p>18</p><p className="active">19</p><p>20</p><p>21</p><p>22</p>
            <p>23</p><p>24</p><p>25</p><p>26</p><p>27</p><p>28</p><p>29</p>
            <p>30</p><p>31</p><p></p><p></p><p></p><p></p><p></p>
          </div>
          </div>
          <div className="categories">
              <h4 className="center">Categories<button type="button" className="left-right-button"><a href="#create-category">+</a></button></h4>
            <div><input className="checkbox" type="checkbox" id="work" name="work" checked/><label for="work">Work</label></div>
            <div><input className="checkbox" type="checkbox" id="family" name="family" checked/><label for="family">Family</label></div>
            <div><input className="checkbox" type="checkbox" id="leisure" name="leisure" checked/><label for="leisure">Leisure</label></div>
            <div><input className="checkbox" type="checkbox" id="invited" name="invited" checked/><label for="invited">Invited</label></div>
          </div>
        </div>
        <div className="content">
            <div className="weekdays">
                <p>Mo</p><p>Tu</p><p>We</p><p>Th</p><p>Fr</p><p>Sa</p><p>Su</p>
            </div>
            <table className="calendar">
                <tr className="calendar-row">
                    <td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div>1</div></td>
                </tr>
                <tr  className="calendar-row">
                    <td><div>2</div></td><td><div>3
                      <div className="calendar-event">
                        <p className="title">Zoom-meeting</p>
                        <p className="time">10:00</p>
                      </div>
                    </div></td><td><div>4</div></td><td><div>5</div></td><td><div>6</div></td><td><div>7</div></td><td><div>8</div></td>
                </tr>
                <tr className="calendar-row">
                    <td><div>9</div></td><td><div>10</div></td><td><div>11</div></td><td><div>12</div></td><td><div>13</div></td><td><div>14</div></td><td><div>15</div></td>
                </tr>
                <tr className="calendar-row">
                    <td><div>16</div></td><td><div>17</div></td><td><div>18</div></td>
                    <td><div><p className="active">19</p>
                      <div className="calendar-event">
                        <p className="title">Zoom-meeting</p>
                        <p className="time">10:00</p>
                      </div>
                      <div className="calendar-event">
                        <p className="title">Picasso exibition opening</p>
                        <p className="time">12:00</p>
                      </div>
                      <div className="calendar-event">
                        <p className="title">Ellie B-Day</p>
                        <p className="time">17:00</p>
                      </div>
                    </div></td><td><div>20</div></td><td><div>21</div></td><td><div>22</div></td>
                </tr>
                <tr className="calendar-row">
                    <td><div>23</div></td><td><div>24</div></td><td><div>25</div></td><td><div>26</div></td><td><div>27</div></td><td><div>28</div></td><td><div>29</div></td>
                </tr>
                <tr className="calendar-row">
                    <td><div>30</div></td><td><div>31
                      <div className="calendar-event">
                        <p className="title">Romeo and Juliet</p>
                        <p className="time">17:00</p>
                      </div>
                    </div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td>
                </tr>
                </table>
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
              <input
              className="input-field"
                type="text"
                placeholder="Enter title"
                id="category-title"
                required
              />
            </div>

            <div className="field-wrap">
              <label for="category-description">Description</label>
              <textarea
              className="input-field"
                type="text"
                placeholder="Enter description"
                id="category-description"
                required
              ></textarea>
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
              <input
              className="input-field"
                type="text"
                placeholder="Enter event title"
                id="event-title"
                required
              />
            </div>

            <div className="field-wrap">
              <label for="event-title">Category</label>
              <input
              className="input-field"
                type="text"
                placeholder="Choose category"
                id="event-category"
                list="categories"
                required
              />                    
              <datalist id="categories">
                  <option value="Work"/>
                  <option value="Family"/>
                  <option value="Leisure"/>
              </datalist>

            </div>

            <div className="field-wrap">
              <label for="event-description">Description</label>
              <textarea
              className="input-field"
                type="text"
                placeholder="Enter description"
                id="event-description"
                required></textarea></div>
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
</body>
  );
};

export default MonthView;
