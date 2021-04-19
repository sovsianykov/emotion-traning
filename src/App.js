import React from "react";
import Homepage from "./pages/Homepage";
import Routing from "./Routing";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Detailpage from "./pages/Detailpage";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/beer/:id">
                    <Detailpage/>
                </Route>
            </Switch>

        </Router>
    </div>
  );
}

export default App;
