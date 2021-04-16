import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CitaList from "./components/CitaList";
import UpdateCita from "./components/UpdateCita";
import CreateCita from "./components/CreateCita";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/citas" exact component={CitaList} />
        <Route path="/edit/:id" component={UpdateCita} />
        <Route path="/create" component={CreateCita} />
      </div>
    </Router>
  );
}

export default App;
