import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/user-create'
import Login from './pages/login'
import UserPage from './pages/user-page'
import UserEdit from './pages/user-edit'
import MonthView from './pages/month'
import DayView from './pages/day'
import EventEdit from './pages/event-edit'

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/Signup' element={<Signup />} />
      <Route exact path='/Login' element={<Login />} />
      <Route exact path='/UserPage' element={<UserPage />} />
      <Route exact path='/UserEdit' element={<UserEdit />} />      
      <Route exact path='/MonthView' element={<MonthView />} />
      <Route exact path='/DayView' element={<DayView />} />
      <Route exact path='/EventEdit' element={<EventEdit />} />
        </Routes>
    </Router>
  );
}

export default App;
