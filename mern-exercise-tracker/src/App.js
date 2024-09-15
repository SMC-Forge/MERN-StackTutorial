// don't need logo or custom CSS or default code inserted with react app

//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact element={<ExercisesList />} />
        <Route path="/edit/:id" exact element={<EditExercise />} />
        <Route path="/create" exact element={<CreateExercise />} />
        <Route path="/user" exact element={<CreateUser />} />
      </Routes>
    </Router>
    );
}

export default App;