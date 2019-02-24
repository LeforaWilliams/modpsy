import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <section className="nav-container">
            <h1>
                <Link to="/">Modern Psyche</Link>
            </h1>
            <section className="nav-links-container">
                <ul className="nav-links">
                    <li>
                        <Link to="/blogpost"> Journal </Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/podcast">Podcast</Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/session">Session</Link>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default Navigation;
