import React from "react";
import Homepage from "./pages/Homepage";
import Routing from "./Routing";
import {BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Routing/>
        </Router>
    </div>
  );
}

export default App;
