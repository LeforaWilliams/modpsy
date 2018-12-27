import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="nav-wrap">
      <h1>
        <Link to="/">Modern Psyche</Link>
      </h1>
      <section className="site-links">
        <Link to="/blogpost"> Journal </Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/session">Session</Link>
      </section>
    </section>
  );
};

export default Navigation;
