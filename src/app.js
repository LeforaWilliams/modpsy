import React from "react";
import ReactDom from "react-dom";
import { Link, BrowserRouter, Route } from "react-router-dom";

//Components
import Blogpost from "./blogpost-template.js";
import Navigation from "./navigation.js";
import Homepage from "./homepage.js";
import Podcast from "./podcast.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path exact="/" component={Homepage} />

          <Navigation />
          <Route path="/blogpost" component={Blogpost} />
          <Route path="/podcast" component={Podcast} />
        </div>
      </BrowserRouter>
    );
  }
}
