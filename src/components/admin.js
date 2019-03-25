import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route } from "react-router-dom";

//Components
import PageContainer from "./page-container.js";
import AdminRegistration from "./admin-registration.js";
import AdminLogin from "./admin-login.js";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route } from "react-router-dom";

//Components
import PageContainer from "./page-container.js";
import AdminRegistration from "./admin-registration.js";
import AdminLogin from "./admin-login.js";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter basename="/admin">
                <div className="admin-container">
                    <Route path="/blog" component={PageContainer} />
                    <Route path="/registration" component={AdminRegistration} />
                </div>
            </BrowserRouter>
        );
    }
}
    }
}
