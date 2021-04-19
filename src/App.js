import React from "react";
import Homepage from "./pages/Homepage"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">

        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path='/beer/:id' component = {Detailpage}  />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
