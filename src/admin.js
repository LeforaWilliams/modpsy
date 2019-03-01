import React from "react";
import ReactDOM from "react-dom";
import PageContainer from "./page-container.js";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="admin-container">
                <PageContainer />
            </div>
        );
    }
}
