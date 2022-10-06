//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './UserManagement/Register';
import Login from './UserManagement/Login';
import ChangePass from './UserManagement/ChangePass';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path = "/" element = {<Register/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/changepass" element = {<ChangePass/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
