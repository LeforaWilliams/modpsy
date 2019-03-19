import React from "react";
import ReactDom from "react-dom";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Navigation from "./navigation.js";
import Blogpost from "./blogpost-template.js";
import Homepage from "./homepage.js";
import Podcast from "./podcast.js";
import EnterSite from "./enter.js";
import ErrorSite from "./error-site.js";
import AdminRegistration from "./admin-registration.js";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.updateHeaderImage = this.updateHeaderImage.bind(this);
    }
    updateHeaderImage() {
        //change header image only if logged in as admin
    }
    render() {
        return (
            <BrowserRouter>
                <div className="app-container">
                    <Navigation />
                    <Switch>
                        <Route path="/enter-site" component={EnterSite} />
                        <Route exact path="/" component={Homepage} />
                        <Route path="/blogpost" component={Blogpost} />
                        <Route path="/podcast" component={Podcast} />
                        <Route
                            path="/admin/login"
                            component={AdminRegistration}
                        />
                        <Route component={ErrorSite} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
