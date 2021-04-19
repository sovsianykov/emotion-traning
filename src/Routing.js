import React from 'react';
import { Route, Switch} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";

class Routing extends React.Component{
    render() {

        return (
            <div>
                <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/beer/:id">
                    <Detailpage/>
                </Route>
            </Switch>

            </div>
        )
    }
}
export default withRouter(Routing);