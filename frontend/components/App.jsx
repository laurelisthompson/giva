import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Giva</h1>
        </header>
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/signin" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
        </Switch>
    </div>
);

export default App;